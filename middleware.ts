import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getToken } from "next-auth/jwt"

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Get the token with more detailed logging
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  })

  // More detailed logging
  console.log("Middleware - Path:", pathname)
  console.log("Token exists:", !!token)
  if (token) {
    console.log("Token details:", {
      id: token.id,
      email: token.email,
      role: token.role,
      name: token.name,
      exp: token.exp ? new Date(token.exp * 1000).toISOString() : "unknown",
    })
  }

  // CRITICAL FIX: Skip middleware for public assets and API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api/") ||
    pathname.includes(".") // Skip files with extensions (images, etc.)
  ) {
    return NextResponse.next()
  }

  // CRITICAL FIX: Check if we're in a server-side rendering context
  // NextAuth sets a special header during SSR
  const isSSR = request.headers.get("x-middleware-ssr") === "1"
  if (isSSR) {
    console.log("SSR context detected, skipping middleware auth check")
    return NextResponse.next()
  }

  // If accessing dashboard without authentication, redirect to login
  if (pathname.startsWith("/dashboard") && !token) {
    console.log("Redirecting to login - not authenticated")
    return NextResponse.redirect(new URL("/auth/signin", request.url))
  }

  // If authenticated and accessing auth pages, redirect to dashboard
  if (token && (pathname.startsWith("/auth/signin") || pathname.startsWith("/auth/signup"))) {
    const role = (token.role as string) || "patient"
    console.log("Redirecting to dashboard - already authenticated as", role)
    return NextResponse.redirect(new URL(`/dashboard/${role}`, request.url))
  }

  // Role-based access control for dashboard
  if (pathname.startsWith("/dashboard") && token) {
    const role = (token.role as string) || "patient" // Default to patient if role is not set
    console.log("Checking dashboard access for role:", role)

    // CRITICAL FIX: Special handling for patient dashboard
    if (pathname.startsWith("/dashboard/patient")) {
      // If user is a patient or admin, allow access to patient dashboard
      if (role === "patient" || role === "admin") {
        console.log("Allowing access to patient dashboard for role:", role)
        return NextResponse.next()
      } else {
        console.log("Redirecting - not a patient or admin")
        return NextResponse.redirect(new URL(`/dashboard/${role}`, request.url))
      }
    }

    // Only redirect if trying to access a dashboard for a different role
    if (pathname.startsWith("/dashboard/provider") && role !== "provider" && role !== "admin") {
      console.log("Redirecting - wrong dashboard for role", role)
      return NextResponse.redirect(new URL(`/dashboard/${role}`, request.url))
    }

    if (pathname.startsWith("/dashboard/employer") && role !== "employer" && role !== "admin") {
      console.log("Redirecting - wrong dashboard for role", role)
      return NextResponse.redirect(new URL(`/dashboard/${role}`, request.url))
    }

    if (pathname.startsWith("/dashboard/admin") && role !== "admin") {
      console.log("Redirecting - wrong dashboard for role", role)
      return NextResponse.redirect(new URL(`/dashboard/${role}`, request.url))
    }

    // Special case for root dashboard
    if ((pathname === "/dashboard" || pathname === "/dashboard/") && role) {
      console.log("Redirecting from root dashboard to role-specific dashboard")
      return NextResponse.redirect(new URL(`/dashboard/${role}`, request.url))
    }
  }

  // Allow all other requests to proceed
  console.log("Allowing request to proceed")
  return NextResponse.next()
}

// CRITICAL FIX: Update the matcher to be more specific and exclude API routes
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
    "/dashboard/:path*",
    "/auth/signin",
    "/auth/signup/:path*",
  ],
}
