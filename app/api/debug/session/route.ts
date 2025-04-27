import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

export async function GET() {
  const session = await getServerSession(authOptions)

  return NextResponse.json({
    authenticated: !!session,
    session: session
      ? {
          user: {
            id: session.user?.id,
            name: session.user?.name,
            email: session.user?.email,
            role: session.user?.role,
            emailVerified: session.user?.emailVerified,
          },
          expires: session.expires,
        }
      : null,
  })
}
