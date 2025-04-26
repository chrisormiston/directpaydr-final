import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// This middleware is now simplified since we're handling auth client-side
export function middleware(request: NextRequest) {
  // Simply allow all requests to pass through
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
}
