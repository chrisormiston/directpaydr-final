"use client"

import { useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { signIn, signOut } from "next-auth/react"
import { useState } from "react"

export default function TestAuthPage() {
  const { data: session, status } = useSession()
  const [loading, setLoading] = useState(false)

  const handleSignIn = async () => {
    setLoading(true)
    await signIn()
    setLoading(false)
  }

  const handleSignOut = async () => {
    setLoading(true)
    await signOut()
    setLoading(false)
  }

  return (
    <div className="container mx-auto py-10">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6">NextAuth Test Page</h1>

        <div className="mb-6 p-4 bg-gray-100 rounded">
          <h2 className="font-semibold mb-2">Session Status: {status}</h2>
          {status === "loading" ? (
            <p>Loading session...</p>
          ) : status === "authenticated" ? (
            <div>
              <p className="mb-2">Signed in as: {session?.user?.email}</p>
              <p className="mb-2">User role: {session?.user?.role}</p>
              <pre className="bg-gray-200 p-2 rounded text-xs overflow-auto max-h-40">
                {JSON.stringify(session, null, 2)}
              </pre>
            </div>
          ) : (
            <p>Not signed in</p>
          )}
        </div>

        <div className="flex justify-center space-x-4">
          {status === "authenticated" ? (
            <Button onClick={handleSignOut} disabled={loading}>
              {loading ? "Signing out..." : "Sign out"}
            </Button>
          ) : (
            <Button onClick={handleSignIn} disabled={loading || status === "loading"}>
              {loading ? "Signing in..." : "Sign in"}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
