// middleware.js
import { NextResponse } from "next/server";

const privateRoutes = ["/my-profile", "/all-animals/"];

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Check if current path is private
  const isPrivate = privateRoutes.some((route) => pathname.startsWith(route));

  if (!isPrivate) return NextResponse.next();

  // Check for Better Auth session cookie
  const session =
    request.cookies.get("better-auth.session_token") ||
    request.cookies.get("__Secure-better-auth.session_token");

  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/my-profile/:path*", "/all-animals/:path*"],
};
