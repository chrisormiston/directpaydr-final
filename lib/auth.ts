import type { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { createClient } from "@/lib/supabase/server"
import { cookies } from "next/headers"

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        try {
          // Create a Supabase client
          const cookieStore = cookies()
          const supabase = createClient(cookieStore)

          // First, try to authenticate with Supabase Auth
          const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
            email: credentials.email,
            password: credentials.password,
          })

          if (authError || !authData.user) {
            console.error("Authentication failed:", authError)
            return null
          }

          // Get user metadata to determine role
          const role = authData.user.user_metadata?.role || "patient"

          // For patients, get additional data from patients table
          if (role === "patient") {
            const { data: patient, error: patientError } = await supabase
              .from("patients")
              .select("*")
              .eq("id", authData.user.id)
              .single()

            if (patientError || !patient) {
              console.error("Patient record not found:", patientError)
              return null
            }

            // Return user object that will be saved in the JWT
            return {
              id: authData.user.id,
              email: authData.user.email,
              name: `${patient.first_name} ${patient.last_name}`,
              role: "patient",
              emailVerified: authData.user.email_confirmed_at ? new Date(authData.user.email_confirmed_at) : null,
            }
          } else {
            // For other roles, check the users table
            const { data: user, error: userError } = await supabase
              .from("users")
              .select("*")
              .eq("id", authData.user.id)
              .single()

            if (userError || !user) {
              console.error("User record not found:", userError)
              return null
            }

            // Return user object that will be saved in the JWT
            return {
              id: authData.user.id,
              email: authData.user.email,
              name: user.name,
              role: user.role,
              emailVerified: user.email_verified,
            }
          }
        } catch (error) {
          console.error("Authorization error:", error)
          return null
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Initial sign in
      if (user) {
        token.id = user.id
        token.role = user.role
        token.emailVerified = user.emailVerified
      }
      return token
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string
        session.user.role = token.role as string
        session.user.emailVerified = token.emailVerified as boolean
      }
      return session
    },
  },
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error",
    verifyRequest: "/auth/verify-request",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  cookies: {
    sessionToken: {
      name: `next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
      },
    },
  },
  debug: process.env.NODE_ENV === "development",
}
