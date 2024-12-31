'use client';
import React from 'react';

import { useFormStatus } from 'react-dom';
import { Button } from './ui/button';

import { LoaderCircle } from 'lucide-react';

const SubmitButton = () => {
  const { pending } = useFormStatus();
  console.log('pending:', pending);
  return (
    <Button
      className='w-full font-semibold'
      disabled={pending}
    >
      {pending ? (
        <LoaderCircle className='w-6 h-6 animate-spin' />
      ) : (
        'Submit'
      )}
    </Button>
  );
};

export default SubmitButton;
