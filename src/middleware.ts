import {
  clerkMiddleware,
  createRouteMatcher,
} from '@clerk/nextjs/server';

// const isProtected = createRouteMatcher([
//   '/dashboard',
//   '/invoices/:invoiceId',
//   'Invoices/new',
// ]);

const isPublic = createRouteMatcher([
  '/',
  '/sign-in(.*)',
  '/sign-up(.*)',
]);

export default clerkMiddleware(
  async (auth, request) => {
    // Check if the request is protected
    if (!isPublic(request)) {
      await auth.protect();
    }
  }
);

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
