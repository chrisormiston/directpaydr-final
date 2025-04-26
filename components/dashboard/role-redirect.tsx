"use client"

import { useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"

interface RoleRedirectProps {
  userRole: string
}

export function RoleRedirect({ userRole }: RoleRedirectProps) {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Check if user is on the correct dashboard based on role
    if (pathname === "/dashboard" || pathname === "/dashboard/") {
      router.push(`/dashboard/${userRole}`)
    } else if (userRole === "patient" && !pathname.startsWith("/dashboard/patient")) {
      router.push("/dashboard/patient")
    } else if (userRole === "provider" && !pathname.startsWith("/dashboard/provider")) {
      router.push("/dashboard/provider")
    } else if (userRole === "employer" && !pathname.startsWith("/dashboard/employer")) {
      router.push("/dashboard/employer")
    } else if (userRole === "admin" && !pathname.startsWith("/dashboard/admin")) {
      router.push("/dashboard/admin")
    }
  }, [pathname, router, userRole])

  return null
}
