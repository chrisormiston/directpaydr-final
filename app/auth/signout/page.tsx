"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/providers/auth-provider"

export default function SignOut() {
  const router = useRouter()
  const { signOut } = useAuth()

  useEffect(() => {
    signOut()
    router.push("/")
  }, [router, signOut])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Signing out...</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            You are being signed out and redirected to the home page.
          </p>
        </div>
      </div>
    </div>
  )
}
