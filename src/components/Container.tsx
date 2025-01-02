import React from 'react';
import { cn } from '@/lib/utils';

const Container = ({
  children,
  className,
  ...props
}: React.ComponentProps<'div'>) => {
  return (
    <div
      {...props}
      className={cn(
        'max-w-4xl mx-auto px-5',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
