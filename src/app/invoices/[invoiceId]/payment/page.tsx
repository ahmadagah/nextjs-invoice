import { db } from '@/db';

import { eq } from 'drizzle-orm';
import { notFound } from 'next/navigation';

import Container from '@/components/Container';
import { Badge } from '@/components/ui/badge';
import { Customers, Invoices } from '@/db/schema';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { CreditCard, Check } from 'lucide-react';

export default async function Invoice({
  params,
}: {
  params: { invoiceId: string };
}) {
  const invoiceId = Number.parseInt(
    params.invoiceId
  );

  if (Number.isNaN(invoiceId)) {
    throw new Error('Invalid Invoice ID');
  }

  const [result] = await db
    .select({
      id: Invoices.id,
      status: Invoices.status,
      createdAt: Invoices.createdAt,
      description: Invoices.description,
      value: Invoices.value,
      name: Customers.name,
    })
    .from(Invoices)
    .innerJoin(
      Customers,
      eq(Invoices.customerId, Customers.id)
    )
    .where(eq(Invoices.id, invoiceId))
    .limit(1);

  if (!result) {
    notFound();
  }

  const invoice = {
    ...result,
    customer: {
      name: result.name,
    },
  };

  return (
    <main className='w-full h-full'>
      <Container>
        <div className='grid grid-cols-2'>
          <div>
            <div className='flex justify-between mb-8'>
              <h1 className='flex items-center gap-4 text-3xl font-semibold'>
                Invoice {invoice.id}
                <Badge
                  className={cn(
                    'rounded-full capitalize',
                    invoice.status === 'open' &&
                      'bg-blue-500',
                    invoice.status === 'paid' &&
                      'bg-green-600',
                    invoice.status === 'void' &&
                      'bg-zinc-700',
                    invoice.status ===
                      'uncollectible' &&
                      'bg-red-600'
                  )}
                >
                  {invoice.status}
                </Badge>
              </h1>
            </div>

            <p className='text-3xl mb-3'>
              ${(invoice.value / 100).toFixed(2)}
            </p>

            <p className='text-lg mb-8'>
              {invoice.description}
            </p>
          </div>
          <div>
            <h2 className='text-xl font-semibold mb-4'>
              Manage Invoice
            </h2>
            {invoice.status === 'open' && (
              <form action=''>
                <Button className='flex gap-2 bg-green-700 font-bold'>
                  <CreditCard className='w-4 h-auto' />
                  Pay Invoice
                </Button>
              </form>
            )}
            {invoice.status === 'paid' && (
              <p className='flex gap-2 text-xl font-semibold'>
                Invoice paid
                <Check className='w-6 h-auto bg-green-500 rounded-full text-white p-1' />
              </p>
            )}
          </div>
        </div>

        <h2 className='font-bold text-lg mb-4'>
          Billing Details
        </h2>

        <ul className='grid gap-2'>
          <li className='flex gap-4'>
            <strong className='block w-28 flex-shrink-0 font-medium text-sm'>
              Invoice ID
            </strong>
            <span>{invoice.id}</span>
          </li>
          <li className='flex gap-4'>
            <strong className='block w-28 flex-shrink-0 font-medium text-sm'>
              Invoice Date
            </strong>
            <span>
              {new Date(
                invoice.createdAt
              ).toLocaleDateString()}
            </span>
          </li>
          <li className='flex gap-4'>
            <strong className='block w-28 flex-shrink-0 font-medium text-sm'>
              Billing Name
            </strong>
            <span>{invoice.customer.name}</span>
          </li>
        </ul>
      </Container>
    </main>
  );
}