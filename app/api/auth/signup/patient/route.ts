import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { cookies } from "next/headers"
import { hashPassword, generateToken } from "@/lib/auth-utils"
import { sendVerificationEmail } from "@/lib/email"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      firstName,
      lastName,
      email,
      password,
      phone,
      dateOfBirth,
      address,
      city,
      state,
      zipCode,
      insuranceProvider,
      insurancePolicyNumber,
    } = body

    // Validate required fields
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !phone ||
      !dateOfBirth ||
      !address ||
      !city ||
      !state ||
      !zipCode
    ) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 })
    }

    // Create Supabase client
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    // Check if user already exists
    const { data: existingUser } = await supabase.from("users").select("*").eq("email", email).single()

    if (existingUser) {
      return NextResponse.json({ message: "User with this email already exists" }, { status: 409 })
    }

    // Create transaction
    // Since we can't use actual transactions in the Supabase REST API, we'll handle errors and rollback manually

    // 1. Create user
    const { data: userData, error: userError } = await supabase
      .from("users")
      .insert({
        email,
        name: `${firstName} ${lastName}`,
        role: "patient",
        email_verified: false,
      })
      .select()

    if (userError || !userData || userData.length === 0) {
      console.error("Error creating user:", userError)
      return NextResponse.json({ message: "Error creating user" }, { status: 500 })
    }

    const userId = userData[0].id

    // 2. Create auth record with hashed password
    const hashedPassword = await hashPassword(password)
    const { error: authError } = await supabase.from("auth").insert({
      user_id: userId,
      password_hash: hashedPassword,
    })

    if (authError) {
      // Rollback - delete user
      await supabase.from("users").delete().eq("id", userId)
      console.error("Error creating auth record:", authError)
      return NextResponse.json({ message: "Error creating auth record" }, { status: 500 })
    }

    // 3. Create patient record
    const { error: patientError } = await supabase.from("patients").insert({
      user_id: userId,
      first_name: firstName,
      last_name: lastName,
      date_of_birth: dateOfBirth,
      phone,
      address,
      city,
      state,
      zip_code: zipCode,
      insurance_provider: insuranceProvider || null,
      insurance_policy_number: insurancePolicyNumber || null,
    })

    if (patientError) {
      // Rollback - delete user and auth
      await supabase.from("auth").delete().eq("user_id", userId)
      await supabase.from("users").delete().eq("id", userId)
      console.error("Error creating patient record:", patientError)
      return NextResponse.json({ message: "Error creating patient record" }, { status: 500 })
    }

    // 4. Create verification token
    const token = generateToken()
    const expiresAt = new Date()
    expiresAt.setHours(expiresAt.getHours() + 24) // Token expires in 24 hours

    const { error: tokenError } = await supabase.from("verification_tokens").insert({
      user_id: userId,
      token,
      expires: expiresAt.toISOString(),
    })

    if (tokenError) {
      console.error("Error creating verification token:", tokenError)
      // Continue anyway, we can resend verification email later
    }

    // 5. Send verification email
    try {
      await sendVerificationEmail(email, token)
    } catch (emailError) {
      console.error("Error sending verification email:", emailError)
      // Continue anyway, user can request verification email resend
    }

    return NextResponse.json(
      {
        message: "Patient account created successfully",
        userId,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Signup error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
