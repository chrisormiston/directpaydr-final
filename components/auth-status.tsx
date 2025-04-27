"use client"

import { useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AuthStatus() {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <div className="text-sm text-gray-500">Loading...</div>
  }

  if (status === "authenticated") {
    return (
      <div className="flex items-center gap-2">
        <span className="text-sm">
          Signed in as <span className="font-medium">{session.user?.email}</span>
        </span>
        <Button asChild variant="outline" size="sm">
          <Link href="/auth/signout">Sign out</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-2">
      <Button asChild variant="outline" size="sm">
        <Link href="/auth/signin">Sign in</Link>
      </Button>
    </div>
  )
}
