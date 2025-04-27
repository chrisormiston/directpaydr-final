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

  console.log("Middleware - Path:", pathname, "Token:", token ? "exists" : "none")

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
    const role = token.role as string

    // Only redirect if trying to access a dashboard for a different role
    // Don't redirect patients from their own dashboard
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
  }

  // Allow all other requests to proceed
  return NextResponse.next()
}

// Update the matcher to be more specific about which routes to apply middleware to
export const config = {
  matcher: ["/dashboard/:path*", "/auth/signin", "/auth/signup/:path*"],
}
