import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { z } from "zod"
import bcrypt from "bcryptjs"
import crypto from "crypto"
import { sendVerificationEmail } from "@/lib/email"

const providerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  providerName: z.string().min(2),
  practiceName: z.string().min(2),
  specialty: z.string().min(1),
  phone: z.string().min(10),
  addressLine1: z.string().min(1),
  addressLine2: z.string().optional(),
  city: z.string().min(1),
  state: z.string().min(1),
  zipCode: z.string().min(5),
  licenseNumber: z.string().min(1),
  licenseState: z.string().min(1),
  licenseExpiration: z.string().min(1),
  npiNumber: z.string().min(1),
  taxId: z.string().min(1),
})

export async function POST(request: Request) {
  try {
    const supabase = createClient()
    const body = await request.json()

    // Validate request body
    const validationResult = providerSchema.safeParse(body)
    if (!validationResult.success) {
      return NextResponse.json(
        { message: "Invalid request data", errors: validationResult.error.errors },
        { status: 400 },
      )
    }

    const {
      email,
      password,
      providerName,
      practiceName,
      specialty,
      phone,
      addressLine1,
      addressLine2,
      city,
      state,
      zipCode,
      licenseNumber,
      licenseState,
      licenseExpiration,
      npiNumber,
      taxId,
    } = validationResult.data

    // Check if user already exists
    const { data: existingUser } = await supabase.from("users").select("id").eq("email", email).single()

    if (existingUser) {
      return NextResponse.json({ message: "A user with this email already exists" }, { status: 409 })
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, 10)

    // Begin transaction
    const { data: newUser, error: userError } = await supabase
      .from("users")
      .insert({
        email,
        password_hash: passwordHash,
        role: "provider",
      })
      .select("id")
      .single()

    if (userError) {
      console.error("Error creating user:", userError)
      return NextResponse.json({ message: "Failed to create user account" }, { status: 500 })
    }

    // Create provider profile
    const { error: providerError } = await supabase.from("providers").insert({
      id: newUser.id,
      provider_name: providerName,
      practice_name: practiceName,
      specialty,
      phone,
      address_line1: addressLine1,
      address_line2: addressLine2 || null,
      city,
      state,
      zip_code: zipCode,
      license_number: licenseNumber,
      license_state: licenseState,
      license_expiration: new Date(licenseExpiration).toISOString(),
      npi_number: npiNumber,
      tax_id: taxId,
    })

    if (providerError) {
      console.error("Error creating provider profile:", providerError)
      // Attempt to rollback user creation
      await supabase.from("users").delete().eq("id", newUser.id)
      return NextResponse.json({ message: "Failed to create provider profile" }, { status: 500 })
    }

    // Create verification token
    const token = crypto.randomBytes(32).toString("hex")
    const { error: tokenError } = await supabase.from("verification_tokens").insert({
      user_id: newUser.id,
      token,
      expires_at: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // 24 hours
    })

    if (tokenError) {
      console.error("Error creating verification token:", tokenError)
    } else {
      // Send verification email
      try {
        await sendVerificationEmail(email, providerName, token)
      } catch (emailError) {
        console.error("Error sending verification email:", emailError)
      }
    }

    return NextResponse.json({ message: "Provider account created successfully" }, { status: 201 })
  } catch (error) {
    console.error("Error in provider signup:", error)
    return NextResponse.json({ message: "An unexpected error occurred" }, { status: 500 })
  }
}
