"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { useSession } from "next-auth/react"

type User = {
  id: string
  name?: string | null
  email: string
  role?: string | null
  image?: string | null
}

type AuthStatus = "loading" | "authenticated" | "unauthenticated"

type AuthContextType = {
  user: User | null
  status: AuthStatus
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  status: "loading",
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  // Handle the case when useSession might return undefined
  const sessionResult = useSession()
  const [user, setUser] = useState<User | null>(null)
  const [status, setStatus] = useState<AuthStatus>("loading")

  useEffect(() => {
    // Check if sessionResult is defined before destructuring
    if (sessionResult) {
      const { data: session, status: nextAuthStatus } = sessionResult

      if (nextAuthStatus === "authenticated" && session?.user) {
        setUser({
          id: session.user.id || "1",
          name: session.user.name,
          email: session.user.email || "",
          role: (session.user.role as string) || null,
          image: session.user.image,
        })
        setStatus("authenticated")
      } else if (nextAuthStatus === "unauthenticated") {
        setUser(null)
        setStatus("unauthenticated")
      }
    } else {
      // Handle the case when sessionResult is undefined
      console.warn("useSession returned undefined. Check your SessionProvider setup.")
      setStatus("unauthenticated")
    }
  }, [sessionResult])

  return <AuthContext.Provider value={{ user, status }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
