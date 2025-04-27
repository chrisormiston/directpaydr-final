import type { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { compare } from "bcryptjs"
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

          // Check if user exists
          const { data: user, error: userError } = await supabase
            .from("users")
            .select("*")
            .eq("email", credentials.email)
            .single()

          if (userError || !user) {
            console.error("User not found:", userError)
            return null
          }

          // Check if email is verified
          if (!user.email_verified) {
            throw new Error("Please verify your email before logging in")
          }

          // Check password
          const { data: auth, error: authError } = await supabase
            .from("auth")
            .select("*")
            .eq("user_id", user.id)
            .single()

          if (authError || !auth) {
            console.error("Auth record not found:", authError)
            return null
          }

          const isPasswordValid = await compare(credentials.password, auth.password_hash)

          if (!isPasswordValid) {
            return null
          }

          // Return user object that will be saved in the JWT
          return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
            emailVerified: user.email_verified,
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
