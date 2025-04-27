import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { createClient } from "@/lib/supabase/middleware"

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Create supabase middleware client
  const { supabase, response } = createClient(request)

  // Refresh session if expired
  const {
    data: { session },
  } = await supabase.auth.getSession()

  // Auth routes that don't require authentication
  const authRoutes = ["/auth/signin", "/auth/signup", "/auth/forgot-password", "/auth/reset-password"]
  const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route))

  // Dashboard routes that require authentication
  const isDashboardRoute = pathname.startsWith("/dashboard")

  // If accessing dashboard routes without a session, redirect to sign in
  if (isDashboardRoute && !session) {
    const redirectUrl = new URL("/auth/signin", request.url)
    redirectUrl.searchParams.set("callbackUrl", pathname)
    return NextResponse.redirect(redirectUrl)
  }

  // If accessing auth routes with a session, redirect to appropriate dashboard
  if (isAuthRoute && session) {
    // Get user role from session
    const role = session.user?.user_metadata?.role || "patient"

    // Redirect to appropriate dashboard based on role
    return NextResponse.redirect(new URL(`/dashboard/${role}`, request.url))
  }

  // If accessing root with a session, redirect to appropriate dashboard
  if (pathname === "/" && session) {
    // Get user role from session
    const role = session.user?.user_metadata?.role || "patient"

    // Redirect to appropriate dashboard based on role
    return NextResponse.redirect(new URL(`/dashboard/${role}`, request.url))
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public (public files)
     */
    "/((?!_next/static|_next/image|favicon.ico|public).*)",
  ],
}
