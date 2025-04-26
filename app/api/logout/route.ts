import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function GET() {
  const cookieStore = cookies()

  // Clear all NextAuth cookies
  cookieStore.getAll().forEach((cookie) => {
    if (cookie.name.startsWith("next-auth") || cookie.name.startsWith("__Secure-next-auth")) {
      cookieStore.delete(cookie.name)
    }
  })

  return NextResponse.json({ success: true })
}
