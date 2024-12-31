'use client';

import NextError from 'next/error';

export const Error = ({
  error,
}: {
  error: Error;
}) => {
  return (
    <NextError
      statusCode={500}
      title={error.message}
    />
  );
};

export default Error;
