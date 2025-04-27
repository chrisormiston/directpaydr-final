import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { cookies } from "next/headers"

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

    // 2. Create the patient record in the patients table
    console.log("Creating patient record...")

    // Create patient record with the auth user ID
    const patientData = {
      id: userId, // Use the auth user ID
      first_name: firstName,
      last_name: lastName,
      email: email, // Store email in the patients table
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
        console.error("Error cleaning up after patient creation failed:", deleteError)
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
