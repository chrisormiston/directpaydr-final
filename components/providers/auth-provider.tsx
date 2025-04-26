"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
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
  signIn: (email: string, password: string) => Promise<boolean>
  signOut: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { data: session, status: nextAuthStatus } = useSession()
  const [user, setUser] = useState<User | null>(null)
  const [status, setStatus] = useState<AuthStatus>("loading")

  // Sync with NextAuth session
  useEffect(() => {
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
      // Fall back to localStorage if no NextAuth session
      const storedUser = localStorage.getItem("user")
      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser))
          setStatus("authenticated")
        } catch (error) {
          console.error("Failed to parse stored user:", error)
          setStatus("unauthenticated")
        }
      } else {
        setStatus("unauthenticated")
      }
    }
  }, [session, nextAuthStatus])

  // Mock sign in function - replace with real authentication later
  const signIn = async (email: string, password: string) => {
    // For demo purposes only - replace with real authentication
    if (email === "test@example.com" && password === "password") {
      const mockUser: User = {
        id: "1",
        name: "Test User",
        email: "test@example.com",
        role: "patient",
      }

      setUser(mockUser)
      setStatus("authenticated")
      localStorage.setItem("user", JSON.stringify(mockUser))
      return true
    }

    return false
  }

  const signOut = () => {
    setUser(null)
    setStatus("unauthenticated")
    localStorage.removeItem("user")
  }

  return <AuthContext.Provider value={{ user, status, signIn, signOut }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
