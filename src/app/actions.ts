'use server';

import { redirect } from 'next/navigation';

import { Invoices } from '@/db/schema';
import { db } from '@/db';

export default async function createInvoice(
  formData: FormData
) {
  const value = Math.floor(
    parseFloat(String(formData.get('value'))) *
      100
  );
  const description = formData.get(
    'description'
  ) as string;

  const result = await db
    .insert(Invoices)
    .values({
      value,
      description,
      status: 'draft',
    })
    .returning({
      id: Invoices.id,
    });
  console.log(
    'Invoice created on server:',
    result[0]
  );

  redirect(`/invoices/${result[0].id}`);
}
