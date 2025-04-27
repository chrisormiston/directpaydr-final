import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getToken } from "next-auth/jwt"

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request })
  const isAuthenticated = !!token
  const isAuthPage =
    request.nextUrl.pathname.startsWith("/auth/signin") ||
    request.nextUrl.pathname.startsWith("/auth/signup") ||
    request.nextUrl.pathname.startsWith("/auth/forgot-password")

  // Redirect authenticated users away from auth pages
  if (isAuthenticated && isAuthPage) {
    // Redirect based on user role
    if (token.role === "patient") {
      return NextResponse.redirect(new URL("/dashboard/patient", request.url))
    } else if (token.role === "provider") {
      return NextResponse.redirect(new URL("/dashboard/provider", request.url))
    } else if (token.role === "employer") {
      return NextResponse.redirect(new URL("/dashboard/employer", request.url))
    } else if (token.role === "admin") {
      return NextResponse.redirect(new URL("/dashboard/admin", request.url))
    } else {
      return NextResponse.redirect(new URL("/", request.url))
    }
  }

  // Protect dashboard routes
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL("/auth/signin", request.url))
    }

    // Check role-specific access
    if (
      request.nextUrl.pathname.startsWith("/dashboard/patient") &&
      token?.role !== "patient" &&
      token?.role !== "admin"
    ) {
      return NextResponse.redirect(new URL("/auth/signin", request.url))
    }

    if (
      request.nextUrl.pathname.startsWith("/dashboard/provider") &&
      token?.role !== "provider" &&
      token?.role !== "admin"
    ) {
      return NextResponse.redirect(new URL("/auth/signin", request.url))
    }

    if (
      request.nextUrl.pathname.startsWith("/dashboard/employer") &&
      token?.role !== "employer" &&
      token?.role !== "admin"
    ) {
      return NextResponse.redirect(new URL("/auth/signin", request.url))
    }

    if (request.nextUrl.pathname.startsWith("/dashboard/admin") && token?.role !== "admin") {
      return NextResponse.redirect(new URL("/auth/signin", request.url))
    }
  }

  // Protect admin routes
  if (request.nextUrl.pathname.startsWith("/admin")) {
    if (!isAuthenticated || token?.role !== "admin") {
      return NextResponse.redirect(new URL("/auth/signin", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*", "/auth/signin", "/auth/signup/:path*", "/auth/forgot-password"],
}
