'use client';
import React, {
  SyntheticEvent,
  useState,
} from 'react';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

import createInvoice from '@/app/actions';

import SubmitButton from '@/components/SubmitButton';

import Form from 'next/form';

export default function Home() {
  const [state, setState] = useState('ready');
  async function handleOnSubmit(
    event: SyntheticEvent
  ) {
    if (state === 'pending') {
      event.preventDefault();
      return;
    }
    setState('pending');
  }

  return (
    <main className='flex flex-col h-full max-w-5xl mx-auto my-12 gap-4'>
      <div className='flex justify-between'>
        <h1 className='text-3xl font-bold'>
          Create Invoice
        </h1>
      </div>

      <Form
        action={createInvoice}
        onSubmit={handleOnSubmit}
        className='grid gap-4 max-w-xs'
      >
        <div>
          <Label
            htmlFor='name'
            className='block font-semibold text-xs mb-1'
          >
            Billing Name
          </Label>
          <Input
            name='name'
            id='name'
            type='text'
          />
        </div>
        <div>
          <Label
            htmlFor='email'
            className='block font-semibold text-xm mb-1'
          >
            Email
          </Label>
          <Input
            name='email'
            id='email'
            type='email'
          />
        </div>
        <div>
          <Label
            htmlFor='value'
            className='block font-semibold text-xm mb-1'
          >
            Value
          </Label>
          <Input
            name='value'
            id='value'
            type='number'
            step='0.01'
          />
        </div>
        <div>
          <Label
            htmlFor='description'
            className='block font-semibold text-xm mb-1'
          >
            Description
          </Label>
          <Textarea
            name='description'
            id='description'
          ></Textarea>
        </div>
        <div>
          <SubmitButton />
        </div>
      </Form>
    </main>
  );
}
