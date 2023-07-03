import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware({
  locales: ['en', 'fr'],
  defaultLocale: 'fr'
});

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const response = intlMiddleware(req); 

  if (pathname === "/") {
      return NextResponse.redirect(new URL("/auth/signin", req.nextUrl));
  }

  return response instanceof NextResponse ? response : NextResponse.next();
}
 
export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};