import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { cookies } from "next/headers"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const token = searchParams.get("token")

    if (!token) {
      return NextResponse.json({ message: "Missing token" }, { status: 400 })
    }

    // Create Supabase client
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    // Find the verification token
    const { data: tokenData, error: tokenError } = await supabase
      .from("verification_tokens")
      .select("*")
      .eq("token", token)
      .single()

    if (tokenError || !tokenData) {
      return NextResponse.json({ message: "Invalid or expired token" }, { status: 400 })
    }

    // Check if token is expired
    const now = new Date()
    const expires = new Date(tokenData.expires)
    if (now > expires) {
      return NextResponse.json({ message: "Token has expired" }, { status: 400 })
    }

    // Update user's email_verified status
    const { error: updateError } = await supabase
      .from("users")
      .update({ email_verified: true })
      .eq("id", tokenData.user_id)

    if (updateError) {
      return NextResponse.json({ message: "Failed to verify email" }, { status: 500 })
    }

    // Delete the used token
    await supabase.from("verification_tokens").delete().eq("id", tokenData.id)

    // Redirect to success page
    return NextResponse.redirect(new URL("/auth/verify-success", request.url))
  } catch (error) {
    console.error("Email verification error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
