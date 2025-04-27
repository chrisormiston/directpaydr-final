import { createClient } from "@/lib/supabase/server"
import { cookies } from "next/headers"
import { sendEmail } from "@/lib/email"
import { v4 as uuidv4 } from "uuid"
import { hash } from "bcryptjs"

// Generate a password reset token
export async function generatePasswordResetToken(email: string): Promise<string | null> {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  // Check if user exists
  const { data: user, error: userError } = await supabase.from("users").select("id").eq("email", email).single()

  if (userError || !user) {
    console.error("User not found:", userError)
    return null
  }

  // Delete any existing tokens for this email
  await supabase.from("password_reset_tokens").delete().eq("email", email)

  // Create a new token
  const token = uuidv4()
  const expires = new Date(Date.now() + 1 * 60 * 60 * 1000) // 1 hour

  // Store the token
  await supabase.from("password_reset_tokens").insert({
    email,
    token,
    expires: expires.toISOString(),
  })

  return token
}

// Send password reset email
export async function sendPasswordResetEmail(email: string): Promise<boolean> {
  try {
    const token = await generatePasswordResetToken(email)

    if (!token) {
      return false
    }

    const resetUrl = `${process.env.NEXTAUTH_URL}/auth/reset-password?token=${token}`

    await sendEmail({
      to: email,
      from: process.env.EMAIL_FROM || "noreply@directpaydr.com",
      subject: "Reset your DirectPayDr password",
      text: `Hello,\n\nYou requested to reset your password. Please click the link below to set a new password:\n\n${resetUrl}\n\nIf you did not request a password reset, please ignore this email.\n\nThank you,\nThe DirectPayDr Team`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #1E40AF; padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">DirectPayDr</h1>
          </div>
          <div style="padding: 20px; border: 1px solid #e5e7eb; border-top: none;">
            <h2>Password Reset Request</h2>
            <p>We received a request to reset your password. Click the button below to create a new password:</p>
            <div style="text-align: center; margin: 30px 0;">
              <a href="${resetUrl}" style="background-color: #1E40AF; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">Reset Password</a>
            </div>
            <p>If you did not request a password reset, please ignore this email or contact support if you have concerns.</p>
            <p>This link will expire in 1 hour.</p>
            <p>If the button above doesn't work, copy and paste the following link into your browser:</p>
            <p style="word-break: break-all;">${resetUrl}</p>
            <p>Best regards,<br>The DirectPayDr Team</p>
          </div>
          <div style="background-color: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #6b7280;">
            <p>&copy; ${new Date().getFullYear()} DirectPayDr. All rights reserved.</p>
          </div>
        </div>
      `,
    })

    return true
  } catch (error) {
    console.error("Error sending password reset email:", error)
    return false
  }
}

// Verify password reset token
export async function verifyPasswordResetToken(token: string): Promise<{ valid: boolean; email?: string }> {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  // Find the token
  const { data, error } = await supabase.from("password_reset_tokens").select("*").eq("token", token).single()

  if (error || !data) {
    return { valid: false }
  }

  // Check if token is expired
  if (new Date(data.expires) < new Date()) {
    return { valid: false }
  }

  return { valid: true, email: data.email }
}

// Reset password
export async function resetPassword(token: string, newPassword: string): Promise<{ success: boolean; error?: string }> {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  // Verify token
  const { valid, email } = await verifyPasswordResetToken(token)

  if (!valid || !email) {
    return { success: false, error: "Invalid or expired token" }
  }

  try {
    // Get user ID
    const { data: user, error: userError } = await supabase.from("users").select("id").eq("email", email).single()

    if (userError || !user) {
      return { success: false, error: "User not found" }
    }

    // Hash the new password
    const hashedPassword = await hash(newPassword, 12)

    // Update password
    const { error: authError } = await supabase
      .from("auth")
      .update({ password_hash: hashedPassword })
      .eq("user_id", user.id)

    if (authError) {
      return { success: false, error: "Failed to update password" }
    }

    // Delete the token
    await supabase.from("password_reset_tokens").delete().eq("token", token)

    return { success: true }
  } catch (error) {
    console.error("Error resetting password:", error)
    return { success: false, error: "An unexpected error occurred" }
  }
}
