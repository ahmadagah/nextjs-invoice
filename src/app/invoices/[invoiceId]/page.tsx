import React from 'react';
import { db } from '@/db';
import { Invoices } from '@/db/schema';

import { eq } from 'drizzle-orm';

export default async function InvoicePage({
  params: paramsPromise,
}: {
  params: Promise<{ invoiceId: string }>;
}) {
  const { invoiceId } = await paramsPromise;

  const invoiceIdNumber = parseInt(invoiceId);

  const [result] = await db
    .select()
    .from(Invoices)
    .where(eq(Invoices.id, invoiceId))
    .limit(1);

  return (
    <main className='flex flex-col h-full max-w-5xl mx-auto my-12 gap-4'>
      <div className='flex justify-between'>
        <h1 className='text-3xl font-bold'>
          Invoice #{invoiceIdNumber}
        </h1>
      </div>
    </main>
  );
}
