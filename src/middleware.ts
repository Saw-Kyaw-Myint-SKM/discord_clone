import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL('/', request.url))
// }
export default authMiddleware({});
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};