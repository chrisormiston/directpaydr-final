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
          console.log("Missing credentials")
          return null
        }

        try {
          console.log("Attempting to authenticate:", credentials.email)

          // Create a Supabase client
          const cookieStore = cookies()
          const supabase = createClient(cookieStore)

          // Authenticate with Supabase Auth
          const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
            email: credentials.email,
            password: credentials.password,
          })

          if (authError) {
            console.error("Supabase auth error:", authError)
            return null
          }

          if (!authData.user) {
            console.error("No user returned from Supabase auth")
            return null
          }

          console.log("User authenticated successfully:", authData.user.id)
          console.log("User metadata:", authData.user.user_metadata)

          // Get user metadata to determine role
          const role = authData.user.user_metadata?.role || "patient"
          console.log("User role:", role)

          // For patients, get additional data from patients table
          if (role === "patient") {
            const { data: patient, error: patientError } = await supabase
              .from("patients")
              .select("*")
              .eq("id", authData.user.id)
              .single()

            if (patientError) {
              console.error("Error fetching patient data:", patientError)
              // If we can't find the patient record, we'll still allow login with basic info
            } else {
              console.log("Patient data retrieved:", patient)
            }

            // Get patient name from either the patient record or user metadata
            const firstName = patient?.first_name || authData.user.user_metadata?.first_name || ""
            const lastName = patient?.last_name || authData.user.user_metadata?.last_name || ""
            const name = `${firstName} ${lastName}`.trim() || authData.user.email?.split("@")[0] || "Patient"

            console.log("Patient authenticated:", name)

            // Return user object that will be saved in the JWT
            return {
              id: authData.user.id,
              email: authData.user.email,
              name: name,
              role: "patient",
              emailVerified: true, // Bypass email verification for now
            }
          } else {
            // For other roles, check the users table
            const { data: user, error: userError } = await supabase
              .from("users")
              .select("*")
              .eq("id", authData.user.id)
              .single()

            if (userError) {
              console.error("Error fetching user data:", userError)
              // If we can't find the user record, we'll still allow login with basic info
            } else {
              console.log("User data retrieved:", user)
            }

            // Return user object that will be saved in the JWT
            return {
              id: authData.user.id,
              email: authData.user.email,
              name: user?.name || authData.user.email?.split("@")[0] || "User",
              role: user?.role || role,
              emailVerified: true, // Bypass email verification for now
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
    async jwt({ token, user, trigger, session }) {
      // Initial sign in
      if (user) {
        console.log("JWT callback - setting token from user:", user)
        token.id = user.id
        token.role = user.role
        token.emailVerified = user.emailVerified
      } else {
        console.log("JWT callback - existing token:", {
          id: token.id,
          email: token.email,
          role: token.role,
          exp: token.exp ? new Date(token.exp * 1000).toISOString() : "unknown",
        })
      }

      // CRITICAL FIX: Handle session updates
      if (trigger === "update" && session) {
        console.log("JWT update triggered with session:", session)
        // Update the token with the new session data
        token = { ...token, ...session.user }
      }

      return token
    },
    async session({ session, token }) {
      console.log("Session callback - token:", {
        id: token.id,
        email: token.email,
        role: token.role,
      })

      if (token && session.user) {
        // CRITICAL FIX: Ensure role is always set
        session.user.id = token.id as string
        session.user.role = (token.role as string) || "patient" // Default to patient if role is missing
        session.user.emailVerified = token.emailVerified as boolean

        console.log("Session updated with user data:", {
          id: session.user.id,
          email: session.user.email,
          role: session.user.role,
        })
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
  // CRITICAL FIX: Ensure cookies are properly configured
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
