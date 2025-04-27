import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getToken } from "next-auth/jwt"

// Define protected routes and required roles
const protectedRoutes = [
  {
    path: "/dashboard/patient",
    roles: ["patient"],
  },
  {
    path: "/dashboard/provider",
    roles: ["provider"],
  },
  {
    path: "/dashboard/employer",
    roles: ["employer"],
  },
  {
    path: "/dashboard/admin",
    roles: ["admin"],
  },
  {
    path: "/dashboard",
    roles: ["patient", "provider", "employer", "admin"],
  },
]

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the path is a protected route
  const matchedRoute = protectedRoutes.find((route) => pathname.startsWith(route.path))

  // If it's not a protected route, allow the request
  if (!matchedRoute) {
    return NextResponse.next()
  }

  // Get the token
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  })

  // If there's no token, redirect to the sign-in page
  if (!token) {
    const url = new URL("/auth/signin", request.url)
    url.searchParams.set("callbackUrl", encodeURI(request.url))
    return NextResponse.redirect(url)
  }

  // Check if the user has the required role
  const hasRequiredRole = matchedRoute.roles.includes(token.role as string)

  // If the user doesn't have the required role, redirect to unauthorized page
  if (!hasRequiredRole) {
    return NextResponse.redirect(new URL("/auth/unauthorized", request.url))
  }

  // Allow the request
  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*", "/api/dashboard/:path*"],
}
