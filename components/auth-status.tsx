"use client"

import { useSession } from "next-auth/react"
import { useEffect } from "react"

export function AuthStatus() {
  const { data: session, status } = useSession()

  useEffect(() => {
    console.log("Auth Status Component - Session:", session)
    console.log("Auth Status Component - Status:", status)
  }, [session, status])

  return null // This component is just for debugging
}
