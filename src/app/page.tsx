import Link from 'next/link';
import { Button } from '@/components/ui/button';



export default function Home() {
  return (
    <main className='flex flex-col h-full justify-center items-center max-w-5xl mx-auto gap-6'>
      <h1 className='text-5xl font-bold'>
        NextJS Invoice App
      </h1>
      <p>
      
        <Button asChild>
          <Link href='/dashboard'>Sign In</Link>
        </Button>
      </p>
    </main>
  );
}
