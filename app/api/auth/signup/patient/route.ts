import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { cookies } from "next/headers"
import bcrypt from "bcryptjs"

// Helper function to hash passwords
async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10)
  return bcrypt.hash(password, salt)
}

// Helper function to generate a random token
function generateToken(length = 32): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  let token = ""
  for (let i = 0; i < length; i++) {
    token += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return token
}

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
      addressLine1,
      addressLine2,
      city,
      state,
      zipCode,
      insuranceProvider,
      insurancePolicyNumber,
    } = body

    console.log("Received patient signup request for:", email)

    // Create Supabase client
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    // 1. First, create the user in Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
          phone: phone,
          role: "patient",
        },
      },
    })

    if (authError) {
      console.error("Error creating Supabase auth user:", authError)
      return NextResponse.json(
        {
          message: `Error creating user: ${authError.message}`,
          details: authError,
        },
        { status: 500 },
      )
    }

    if (!authData.user) {
      console.error("No user data returned after auth signup")
      return NextResponse.json({ message: "Error creating user: No data returned" }, { status: 500 })
    }

    const userId = authData.user.id
    console.log("Auth user created with ID:", userId)

    // 2. Now create the patient record in the patients table
    console.log("Creating patient record...")

    // Create patient record with fields that match your schema
    // Using address_line1 and address_line2 instead of address
    const patientData = {
      user_id: userId,
      first_name: firstName,
      last_name: lastName,
      date_of_birth: dateOfBirth,
      phone,
      address_line1: addressLine1,
      address_line2: addressLine2 || null, // Optional field
      city,
      state,
      zip_code: zipCode,
      insurance_provider: insuranceProvider || null,
      insurance_policy_number: insurancePolicyNumber || null,
    }

    const { error: patientError } = await supabase.from("patients").insert(patientData)

    if (patientError) {
      console.error("Error creating patient record:", patientError)
      // Try to delete the auth user if possible
      try {
        await supabase.auth.admin.deleteUser(userId)
      } catch (deleteError) {
        console.error("Error deleting auth user after patient creation failed:", deleteError)
      }

      return NextResponse.json(
        {
          message: `Error creating patient record: ${patientError.message}`,
          details: patientError,
        },
        { status: 500 },
      )
    }

    return NextResponse.json(
      {
        message: "Patient account created successfully",
        userId,
      },
      { status: 201 },
    )
  } catch (error: any) {
    console.error("Signup error:", error)
    return NextResponse.json(
      {
        message: `Internal server error: ${error.message}`,
        stack: error.stack,
      },
      { status: 500 },
    )
  }
}
