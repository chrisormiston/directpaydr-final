import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { createClient } from "@supabase/supabase-js"
import bcrypt from "bcryptjs"

export const dynamic = "force-dynamic"

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
const supabase = createClient(supabaseUrl, supabaseKey)

// Extract authOptions to a separate export
export const authOptions = {
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
          // Get user from database
          const { data: user, error } = await supabase
            .from("users")
            .select("*")
            .eq("email", credentials.email.toLowerCase())
            .single()

          if (error || !user) {
            console.log("User not found:", error)
            return null
          }

          // Verify password
          const isPasswordValid = await bcrypt.compare(credentials.password, user.password_hash)

          if (!isPasswordValid) {
            console.log("Invalid password")
            return null
          }

          // Return user object
          return {
            id: user.id,
            email: user.email,
            name: user.first_name ? `${user.first_name} ${user.last_name || ""}`.trim() : null,
            role: user.role,
            emailVerified: user.email_verified,
          }
        } catch (error) {
          console.error("Auth error:", error)
          return null
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.role = user.role
        token.emailVerified = user.emailVerified
        token.name = user.name
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id
        session.user.role = token.role
        session.user.emailVerified = token.emailVerified
      }
      return session
    },
  },
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
