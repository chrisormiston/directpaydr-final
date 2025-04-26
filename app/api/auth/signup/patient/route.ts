import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"
import { createUser, generateVerificationToken } from "@/lib/auth"
import { sendVerificationEmail } from "@/lib/email"

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
const supabase = createClient(supabaseUrl, supabaseKey)

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Create user in the users table
    const userResult = await createUser(data.email, data.password, "patient")

    if (!userResult) {
      return NextResponse.json({ message: "Failed to create user account" }, { status: 500 })
    }

    // Insert patient details
    const { error: patientError } = await supabase.from("patients").insert({
      id: userResult.id,
      first_name: data.firstName,
      last_name: data.lastName,
      date_of_birth: data.dateOfBirth,
      phone: data.phone,
      address_line1: data.addressLine1,
      address_line2: data.addressLine2 || null,
      city: data.city,
      state: data.state,
      zip_code: data.zipCode,
      insurance_provider: data.insuranceProvider || null,
      insurance_policy_number: data.insurancePolicyNumber || null,
      insurance_group_number: data.insuranceGroupNumber || null,
    })

    if (patientError) {
      // Rollback user creation if patient details insertion fails
      await supabase.from("users").delete().eq("id", userResult.id)

      return NextResponse.json({ message: "Failed to create patient profile" }, { status: 500 })
    }

    // Generate verification token
    const verificationToken = await generateVerificationToken(userResult.id)

    if (!verificationToken) {
      return NextResponse.json({ message: "Failed to generate verification token" }, { status: 500 })
    }

    // Send verification email
    await sendVerificationEmail(data.email, data.firstName, verificationToken)

    return NextResponse.json({ message: "Patient account created successfully" }, { status: 201 })
  } catch (error) {
    console.error("Error in patient signup:", error)
    return NextResponse.json({ message: "An error occurred during signup" }, { status: 500 })
  }
}
