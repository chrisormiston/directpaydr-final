import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getToken } from "next-auth/jwt"

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Get the token
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  })

  const isAuthenticated = !!token

  // Define auth pages that should redirect to dashboard if already authenticated
  const authPages = ["/auth/signin", "/auth/signup", "/auth/forgot-password", "/auth/reset-password"]

  const isAuthPage = authPages.some((page) => pathname.startsWith(page))

  // If user is authenticated and trying to access an auth page, redirect to dashboard
  if (isAuthenticated && isAuthPage) {
    const role = token.role as string
    const dashboardPath = `/dashboard/${role}`
    return NextResponse.redirect(new URL(dashboardPath, request.url))
  }

  // If user is trying to access dashboard without authentication, redirect to login
  if (pathname.startsWith("/dashboard") && !isAuthenticated) {
    return NextResponse.redirect(new URL("/auth/signin", request.url))
  }

  // Role-based access control for dashboard
  if (pathname.startsWith("/dashboard") && isAuthenticated) {
    const role = token.role as string

    // Check if user is trying to access a dashboard they don't have permission for
    if (pathname.startsWith("/dashboard/patient") && role !== "patient" && role !== "admin") {
      return NextResponse.redirect(new URL(`/dashboard/${role}`, request.url))
    }

    if (pathname.startsWith("/dashboard/provider") && role !== "provider" && role !== "admin") {
      return NextResponse.redirect(new URL(`/dashboard/${role}`, request.url))
    }

    if (pathname.startsWith("/dashboard/employer") && role !== "employer" && role !== "admin") {
      return NextResponse.redirect(new URL(`/dashboard/${role}`, request.url))
    }

    if (pathname.startsWith("/dashboard/admin") && role !== "admin") {
      return NextResponse.redirect(new URL(`/dashboard/${role}`, request.url))
    }
  }

  return NextResponse.next()
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
