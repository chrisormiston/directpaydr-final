import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { z } from "zod"
import bcrypt from "bcryptjs"

const resetSchema = z.object({
  token: z.string().min(32),
  password: z.string().min(8),
})

export async function POST(request: Request) {
  try {
    const supabase = createClient()
    const body = await request.json()

    // Validate request body
    const validationResult = resetSchema.safeParse(body)
    if (!validationResult.success) {
      return NextResponse.json({ message: "Invalid request data" }, { status: 400 })
    }

    const { token, password } = validationResult.data

    // Find the reset token
    const { data: resetToken, error: tokenError } = await supabase
      .from("password_reset_tokens")
      .select("user_id, expires_at")
      .eq("token", token)
      .single()

    if (tokenError || !resetToken) {
      return NextResponse.json({ message: "Invalid or expired reset token" }, { status: 400 })
    }

    // Check if token is expired
    if (new Date(resetToken.expires_at) < new Date()) {
      return NextResponse.json({ message: "Reset token has expired" }, { status: 400 })
    }

    // Hash the new password
    const passwordHash = await bcrypt.hash(password, 10)

    // Update the user's password
    const { error: updateError } = await supabase
      .from("users")
      .update({ password_hash: passwordHash })
      .eq("id", resetToken.user_id)

    if (updateError) {
      console.error("Error updating password:", updateError)
      return NextResponse.json({ message: "Failed to update password" }, { status: 500 })
    }

    // Delete the used token
    await supabase.from("password_reset_tokens").delete().eq("token", token)

    return NextResponse.json({ message: "Password has been reset successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error in reset password:", error)
    return NextResponse.json({ message: "An unexpected error occurred" }, { status: 500 })
  }
}
