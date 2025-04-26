"use client"

import { useAuth } from "@/components/providers/auth-provider"
import { useSession } from "next-auth/react"

export function AuthStatus() {
  const { user, status } = useAuth()
  const { data: session, status: nextAuthStatus } = useSession()

  return (
    <div className="p-4 bg-gray-100 rounded-md my-4">
      <h2 className="text-lg font-semibold mb-2">Auth Status</h2>
      <div className="mb-4">
        <h3 className="font-medium">Custom Auth:</h3>
        <p>Status: {status}</p>
        {user ? (
          <div>
            <p>Signed in as: {user.email}</p>
            <p>User role: {user.role || "Not available"}</p>
          </div>
        ) : (
          <p>Not signed in</p>
        )}
      </div>

      <div>
        <h3 className="font-medium">NextAuth:</h3>
        <p>Status: {nextAuthStatus}</p>
        {session ? (
          <div>
            <p>Signed in as: {session.user?.email}</p>
            <p>User role: {session.user?.role || "Not available"}</p>
          </div>
        ) : (
          <p>Not signed in</p>
        )}
      </div>
    </div>
  )
}
