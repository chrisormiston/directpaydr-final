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
  debug: process.env.NODE_ENV === "development",
}
