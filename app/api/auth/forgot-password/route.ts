import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { z } from "zod"
import crypto from "crypto"
import { sendPasswordResetEmail } from "@/lib/email"

const requestSchema = z.object({
  email: z.string().email(),
})

export async function POST(request: Request) {
  try {
    const supabase = createClient()
    const body = await request.json()

    // Validate request body
    const validationResult = requestSchema.safeParse(body)
    if (!validationResult.success) {
      return NextResponse.json({ message: "Invalid email address" }, { status: 400 })
    }

    const { email } = validationResult.data

    // Check if user exists
    const { data: user } = await supabase.from("users").select("id").eq("email", email).single()

    // We don't want to reveal if a user exists or not for security reasons
    // So we'll return a success response even if the user doesn't exist
    if (!user) {
      return NextResponse.json(
        { message: "If an account with this email exists, a password reset link has been sent" },
        { status: 200 },
      )
    }

    // Delete any existing reset tokens for this user
    await supabase.from("password_reset_tokens").delete().eq("user_id", user.id)

    // Create a new reset token
    const token = crypto.randomBytes(32).toString("hex")
    const { error: tokenError } = await supabase.from("password_reset_tokens").insert({
      user_id: user.id,
      token,
      expires_at: new Date(Date.now() + 60 * 60 * 1000).toISOString(), // 1 hour
    })

    if (tokenError) {
      console.error("Error creating reset token:", tokenError)
      return NextResponse.json({ message: "Failed to create reset token" }, { status: 500 })
    }

    // Send password reset email
    try {
      await sendPasswordResetEmail(email, token)
    } catch (emailError) {
      console.error("Error sending password reset email:", emailError)
      return NextResponse.json({ message: "Failed to send password reset email" }, { status: 500 })
    }

    return NextResponse.json(
      { message: "If an account with this email exists, a password reset link has been sent" },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error in forgot password:", error)
    return NextResponse.json({ message: "An unexpected error occurred" }, { status: 500 })
  }
}
