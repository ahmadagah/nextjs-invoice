import React from 'react';
import Container from '@/components/Container';

const Footer = () => {
  return (
    <footer className='mt-12'>
      <Container className='flex justify-between gap-4'>
        <p className='text-sm'>
          Invoicipedia &copy;{' '}
          {new Date().getFullYear()}
        </p>
        <p>
          Created by {'Ahmad'} with{' '}
          {'Next.js, Xata and Clerk'}
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
