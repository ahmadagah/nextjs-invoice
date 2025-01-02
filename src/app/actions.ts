'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

import {
  Customers,
  Invoices,
  Status,
} from '@/db/schema';
import { db } from '@/db';

import { auth } from '@clerk/nextjs/server';
import { eq, and, isNull } from 'drizzle-orm';

import Stripe from 'stripe';

const stripe = new Stripe(
  String(process.env.STRIPE_API_SECRET)
);

export default async function createInvoice(
  formData: FormData
) {
  const { userId, orgId } = await auth();
  if (!userId) {
    return;
  }

  const value = Math.floor(
    parseFloat(String(formData.get('value'))) *
      100
  );
  const description = formData.get(
    'description'
  ) as string;

  const name = formData.get('name') as string;
  const email = formData.get('email') as string;

  const [customer] = await db
    .insert(Customers)
    .values({
      userId,
      name,
      email,
      OrganizationId: orgId || null,
    })
    .returning({
      id: Customers.id,
    });

  const result = await db
    .insert(Invoices)
    .values({
      userId,
      customerId: customer.id,
      value,
      description,
      status: 'draft',
      OrganizationId: orgId || null,
    })
    .returning({
      id: Invoices.id,
    });

  redirect(`/invoices/${result[0].id}`);
}

export async function updateStatusAction(
  formData: FormData
) {
  const { userId, orgId } = await auth();
  if (!userId) {
    return;
  }

  const id = formData.get('id') as string;
  const status = formData.get('status') as Status;

  if (orgId) {
    await db
      .update(Invoices)
      .set({ status })
      .where(
        and(
          eq(Invoices.id, parseInt(id)),
          eq(Invoices.OrganizationId, orgId)
        )
      );
  } else {
    await db
      .update(Invoices)
      .set({ status })
      .where(
        and(
          eq(Invoices.id, parseInt(id)),
          eq(Invoices.userId, userId),
          isNull(Invoices.OrganizationId)
        )
      );
  }
  revalidatePath(`/invoices/${id}`, 'page');
}

export async function deleteInvoiceAction(
  formData: FormData
) {
  const { userId, orgId } = await auth();
  if (!userId) {
    return;
  }

  const id = formData.get('id') as string;

  if (orgId) {
    await db
      .delete(Invoices)
      .where(
        and(
          eq(Invoices.id, parseInt(id)),
          eq(Invoices.OrganizationId, orgId)
        )
      );
  } else {
    await db
      .delete(Invoices)
      .where(
        and(
          eq(Invoices.id, parseInt(id)),
          eq(Invoices.userId, userId),
          isNull(Invoices.OrganizationId)
        )
      );
  }
  redirect('/dashboard');
}
