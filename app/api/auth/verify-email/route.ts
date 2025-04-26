import { type NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const token = searchParams.get("token")

  if (!token) {
    return NextResponse.json({ message: "No token provided" }, { status: 400 })
  }

  try {
    // Verify the token
    const { data: tokenData, error: tokenError } = await supabase
      .from("verification_tokens")
      .select("*")
      .eq("token", token)
      .single()

    if (tokenError || !tokenData) {
      return NextResponse.json({ message: "Invalid or expired token" }, { status: 400 })
    }

    // Check if token is expired (24 hours)
    const tokenCreatedAt = new Date(tokenData.created_at)
    const now = new Date()
    const tokenAgeHours = (now.getTime() - tokenCreatedAt.getTime()) / (1000 * 60 * 60)

    if (tokenAgeHours > 24) {
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

    // Get user's role
    const { data: userData, error: userError } = await supabase
      .from("users")
      .select("role")
      .eq("id", tokenData.user_id)
      .single()

    if (userError) {
      return NextResponse.json({ message: "Failed to get user role" }, { status: 500 })
    }

    // Delete the used token
    await supabase.from("verification_tokens").delete().eq("token", token)

    return NextResponse.json(
      {
        message: "Email verified successfully",
        role: userData.role,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error verifying email:", error)
    return NextResponse.json({ message: "An error occurred during verification" }, { status: 500 })
  }
}
