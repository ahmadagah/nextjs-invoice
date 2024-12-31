import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps
  extends React.ComponentProps<'div'> {}

const Container = ({
  children,
  className,
  ...props
}: ContainerProps) => {
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
