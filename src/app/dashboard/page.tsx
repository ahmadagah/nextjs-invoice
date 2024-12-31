import React from 'react';
import Link from 'next/link';
import { db } from '@/db';
import { Invoices } from '@/db/schema';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CirclePlus } from 'lucide-react';

import Container from '@/components/Container';

import { cn } from '@/lib/utils';

export default async function Dashboard() {
  const results = await db
    .select()
    .from(Invoices);
  console.log(results);
  return (
    <main className='h-full'>
      <Container>
        <div className='flex justify-between'>
          <h1 className='text-3xl font-bold'>
            Invoics
          </h1>
          <Link href='/invoices/new'>
            <Button className='inline-flex items-center gap-0.5 text-sm px-2 py-0'>
              <CirclePlus className='w-4 h-4' />
              Create Invoice
            </Button>
          </Link>
        </div>
        <Table className='border border-gray-300 bg-white'>
          <TableCaption className='text-gray-500'>
            List of recent invoices.
          </TableCaption>
          <TableHeader>
            <TableRow className='bg-gray-50'>
              <TableHead className='text-left font-semibold border-b border-gray-300 '>
                Date
              </TableHead>
              <TableHead className='text-left font-semibold border-b border-gray-300 '>
                Customer
              </TableHead>
              <TableHead className='text-left font-semibold border-b border-gray-300 '>
                Email
              </TableHead>
              <TableHead className='text-left font-semibold border-b border-gray-300 '>
                Status
              </TableHead>
              <TableHead className='text-right font-semibold border-b border-gray-300 '>
                Amount
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {results.map((result) => (
              <TableRow
                key={result.id}
                className='hover:bg-gray-300'
              >
                <TableCell className='border-b border-gray-300 p-0'>
                  <Link
                    href={`/invoices/${result.id}`}
                    className='font-semibold block'
                  >
                    {result.createdAt.toLocaleDateString(
                      'en-US',
                      {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      }
                    )}
                  </Link>
                </TableCell>
                <TableCell className='border-b border-gray-300 p-0'>
                  <Link
                    href={`/invoices/${result.id}`}
                    className='font-semibold block'
                  >
                    empty
                  </Link>
                </TableCell>
                <TableCell className='border-b border-gray-300 p-0 '>
                  <Link
                    href={`/invoices/${result.id}`}
                    className='block'
                  >
                    email
                  </Link>
                </TableCell>
                <TableCell className='border-b border-gray-300 p-0 '>
                  <Link
                    href={`/invoices/${result.id}`}
                    className='block'
                  >
                    <Badge
                      // className='rounded-full w-[70px] flex justify-center items-center border !border-gray-500'
                      className={cn(
                        'rounded-full capitalize',
                        result.status ===
                          'refunded' &&
                          'bg-blue-500',
                        result.status ===
                          'paid' &&
                          'bg-green-600',
                        result.status ===
                          'void' && 'bg-zinc-700',
                        result.status ===
                          'uncollectible' &&
                          'bg-red-600'
                      )}
                      variant='secondary'
                    >
                      {result.status}
                    </Badge>
                  </Link>
                </TableCell>
                <TableCell className='text-right border-b border-gray-300 p-0 '>
                  <Link
                    href={`/invoices/${result.id}`}
                    className='font-semibold block'
                  >
                    $
                    {(result.value / 100).toFixed(
                      2
                    )}
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow className='font-semibold'>
              <TableCell colSpan={4}>
                Total
              </TableCell>
              <TableCell className='text-right '>
                $2,500.00
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </Container>
    </main>
  );
}
