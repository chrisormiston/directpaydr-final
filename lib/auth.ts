import { createClient } from "@supabase/supabase-js"
import bcrypt from "bcryptjs"
import crypto from "crypto"

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
const supabase = createClient(supabaseUrl, supabaseKey)

// Hash password
export async function hashPassword(password: string): Promise<string> {
  return await bcrypt.hash(password, 10)
}

// Verify password
export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return await bcrypt.compare(password, hashedPassword)
}

// Create a new user
export async function createUser(email: string, password: string, role: string): Promise<{ id: string } | null> {
  try {
    const hashedPassword = await hashPassword(password)

    // Insert user into users table
    const { data: userData, error: userError } = await supabase
      .from("users")
      .insert({
        email: email.toLowerCase(),
        password_hash: hashedPassword,
        role,
        email_verified: false,
      })
      .select("id")
      .single()

    if (userError) {
      console.error("Error creating user:", userError)
      return null
    }

    return { id: userData.id }
  } catch (error) {
    console.error("Error in createUser:", error)
    return null
  }
}

// Generate verification token
export async function generateVerificationToken(userId: string): Promise<string | null> {
  try {
    const token = crypto.randomBytes(32).toString("hex")
    const expiresAt = new Date()
    expiresAt.setHours(expiresAt.getHours() + 24) // Token expires in 24 hours

    // Insert token into verification_tokens table
    const { error } = await supabase.from("verification_tokens").insert({
      user_id: userId,
      token,
      expires_at: expiresAt.toISOString(),
    })

    if (error) {
      console.error("Error generating verification token:", error)
      return null
    }

    return token
  } catch (error) {
    console.error("Error in generateVerificationToken:", error)
    return null
  }
}

// Verify email with token
export async function verifyEmail(token: string): Promise<boolean> {
  try {
    // Get token from verification_tokens table
    const { data: tokenData, error: tokenError } = await supabase
      .from("verification_tokens")
      .select("user_id, expires_at")
      .eq("token", token)
      .single()

    if (tokenError || !tokenData) {
      console.error("Error verifying email:", tokenError)
      return false
    }

    // Check if token is expired
    if (new Date(tokenData.expires_at) < new Date()) {
      console.error("Token expired")
      return false
    }

    // Update user's email_verified status
    const { error: updateError } = await supabase
      .from("users")
      .update({ email_verified: true })
      .eq("id", tokenData.user_id)

    if (updateError) {
      console.error("Error updating user:", updateError)
      return false
    }

    // Delete used token
    await supabase.from("verification_tokens").delete().eq("token", token)

    return true
  } catch (error) {
    console.error("Error in verifyEmail:", error)
    return false
  }
}

// Generate password reset token
export async function generatePasswordResetToken(email: string): Promise<string | null> {
  try {
    // Get user by email
    const { data: userData, error: userError } = await supabase
      .from("users")
      .select("id")
      .eq("email", email.toLowerCase())
      .single()

    if (userError || !userData) {
      console.error("Error finding user:", userError)
      return null
    }

    const token = crypto.randomBytes(32).toString("hex")
    const expiresAt = new Date()
    expiresAt.setHours(expiresAt.getHours() + 1) // Token expires in 1 hour

    // Insert token into password_reset_tokens table
    const { error } = await supabase.from("password_reset_tokens").insert({
      user_id: userData.id,
      token,
      expires_at: expiresAt.toISOString(),
    })

    if (error) {
      console.error("Error generating password reset token:", error)
      return null
    }

    return token
  } catch (error) {
    console.error("Error in generatePasswordResetToken:", error)
    return null
  }
}

// Reset password with token
export async function resetPassword(token: string, newPassword: string): Promise<boolean> {
  try {
    // Get token from password_reset_tokens table
    const { data: tokenData, error: tokenError } = await supabase
      .from("password_reset_tokens")
      .select("user_id, expires_at")
      .eq("token", token)
      .single()

    if (tokenError || !tokenData) {
      console.error("Error resetting password:", tokenError)
      return false
    }

    // Check if token is expired
    if (new Date(tokenData.expires_at) < new Date()) {
      console.error("Token expired")
      return false
    }

    // Hash new password
    const hashedPassword = await hashPassword(newPassword)

    // Update user's password
    const { error: updateError } = await supabase
      .from("users")
      .update({ password_hash: hashedPassword })
      .eq("id", tokenData.user_id)

    if (updateError) {
      console.error("Error updating password:", updateError)
      return false
    }

    // Delete used token
    await supabase.from("password_reset_tokens").delete().eq("token", token)

    return true
  } catch (error) {
    console.error("Error in resetPassword:", error)
    return false
  }
}

// Get user profile based on role
export async function getUserProfile(userId: string, role: string) {
  try {
    let table

    switch (role) {
      case "patient":
        table = "patients"
        break
      case "provider":
        table = "providers"
        break
      case "employer":
        table = "employers"
        break
      case "admin":
        table = "admins"
        break
      default:
        return null
    }

    const { data, error } = await supabase.from(table).select("*").eq("id", userId).single()

    if (error) {
      console.error(`Error getting ${role} profile:`, error)
      return null
    }

    return data
  } catch (error) {
    console.error("Error in getUserProfile:", error)
    return null
  }
}
