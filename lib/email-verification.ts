import { createClient } from "@/lib/supabase/server"
import { cookies } from "next/headers"
import { sendEmail } from "@/lib/email"
import { v4 as uuidv4 } from "uuid"

// Generate a verification token
export async function generateVerificationToken(email: string): Promise<string> {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  // Delete any existing tokens for this email
  await supabase.from("verification_tokens").delete().eq("email", email)

  // Create a new token
  const token = uuidv4()
  const expires = new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours

  // Store the token
  await supabase.from("verification_tokens").insert({
    email,
    token,
    expires: expires.toISOString(),
  })

  return token
}

// Send verification email
export async function sendVerificationEmail(email: string, name: string): Promise<boolean> {
  try {
    const token = await generateVerificationToken(email)
    const verificationUrl = `${process.env.NEXTAUTH_URL}/auth/verify-email?token=${token}`

    await sendEmail({
      to: email,
      from: process.env.EMAIL_FROM || "noreply@directpaydr.com",
      subject: "Verify your DirectPayDr account",
      text: `Hello ${name},\n\nPlease verify your email address by clicking the link below:\n\n${verificationUrl}\n\nIf you did not create an account, please ignore this email.\n\nThank you,\nThe DirectPayDr Team`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #1E40AF; padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">DirectPayDr</h1>
          </div>
          <div style="padding: 20px; border: 1px solid #e5e7eb; border-top: none;">
            <h2>Hello ${name},</h2>
            <p>Thank you for creating an account with DirectPayDr. Please verify your email address by clicking the button below:</p>
            <div style="text-align: center; margin: 30px 0;">
              <a href="${verificationUrl}" style="background-color: #1E40AF; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">Verify Email Address</a>
            </div>
            <p>If you did not create an account, please ignore this email.</p>
            <p>This link will expire in 24 hours.</p>
            <p>If the button above doesn't work, copy and paste the following link into your browser:</p>
            <p style="word-break: break-all;">${verificationUrl}</p>
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
    console.error("Error sending verification email:", error)
    return false
  }
}

// Verify email token
export async function verifyEmailToken(token: string): Promise<{ success: boolean; email?: string; error?: string }> {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  // Find the token
  const { data, error } = await supabase.from("verification_tokens").select("*").eq("token", token).single()

  if (error || !data) {
    return { success: false, error: "Invalid or expired token" }
  }

  // Check if token is expired
  if (new Date(data.expires) < new Date()) {
    return { success: false, error: "Token has expired" }
  }

  // Update user's email_verified status
  const { error: updateError } = await supabase.from("users").update({ email_verified: true }).eq("email", data.email)

  if (updateError) {
    return { success: false, error: "Failed to verify email" }
  }

  // Delete the token
  await supabase.from("verification_tokens").delete().eq("token", token)

  return { success: true, email: data.email }
}
