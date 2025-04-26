import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { z } from "zod"
import bcrypt from "bcryptjs"
import crypto from "crypto"
import { sendVerificationEmail } from "@/lib/email"

const employerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  companyName: z.string().min(2),
  contactPerson: z.string().min(2),
  phone: z.string().min(10),
  employeeCount: z.number().int().positive(),
  planType: z.string().min(1),
  addressLine1: z.string().min(1),
  addressLine2: z.string().optional(),
  city: z.string().min(1),
  state: z.string().min(1),
  zipCode: z.string().min(5),
})

export async function POST(request: Request) {
  try {
    const supabase = createClient()
    const body = await request.json()

    // Validate request body
    const validationResult = employerSchema.safeParse(body)
    if (!validationResult.success) {
      return NextResponse.json(
        { message: "Invalid request data", errors: validationResult.error.errors },
        { status: 400 },
      )
    }

    const {
      email,
      password,
      companyName,
      contactPerson,
      phone,
      employeeCount,
      planType,
      addressLine1,
      addressLine2,
      city,
      state,
      zipCode,
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
        role: "employer",
      })
      .select("id")
      .single()

    if (userError) {
      console.error("Error creating user:", userError)
      return NextResponse.json({ message: "Failed to create user account" }, { status: 500 })
    }

    // Create employer profile
    const { error: employerError } = await supabase.from("employers").insert({
      id: newUser.id,
      company_name: companyName,
      contact_person: contactPerson,
      phone,
      employee_count: employeeCount,
      plan_type: planType,
      address_line1: addressLine1,
      address_line2: addressLine2 || null,
      city,
      state,
      zip_code: zipCode,
    })

    if (employerError) {
      console.error("Error creating employer profile:", employerError)
      // Attempt to rollback user creation
      await supabase.from("users").delete().eq("id", newUser.id)
      return NextResponse.json({ message: "Failed to create employer profile" }, { status: 500 })
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
        await sendVerificationEmail(email, contactPerson, token)
      } catch (emailError) {
        console.error("Error sending verification email:", emailError)
      }
    }

    return NextResponse.json({ message: "Employer account created successfully" }, { status: 201 })
  } catch (error) {
    console.error("Error in employer signup:", error)
    return NextResponse.json({ message: "An unexpected error occurred" }, { status: 500 })
  }
}
