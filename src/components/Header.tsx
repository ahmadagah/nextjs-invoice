import React from 'react';
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';

import Container from './Container';
import Link from 'next/link';

import { OrganizationSwitcher } from '@clerk/nextjs';

const Header = () => {
  return (
    <header className='mt-8 mb-12'>
      <Container>
        <div className='flex justify-between items-center p-4'>
          <div className='flex items-center gap-4'>
            <p className='font-bold'>
              <Link href='/dashboard'>
                Invoicepedia
              </Link>
            </p>
            <span className='text-neutral-500'>
              /
            </span>
            <SignedIn>
              <span className='-ml-4'>
                <OrganizationSwitcher afterCreateOrganizationUrl='/dashboard' />
              </span>
            </SignedIn>
          </div>
          <div>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
