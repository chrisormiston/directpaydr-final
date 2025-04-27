import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { cookies } from "next/headers"

export async function POST(request: Request) {
  try {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const formData = await request.json()

    // Extract patient data
    const {
      email,
      password,
      firstName,
      lastName,
      dateOfBirth,
      phone,
      addressLine1, // Use addressLine1 instead of address
      addressLine2, // Include addressLine2
      city,
      state,
      zipCode,
    } = formData

    console.log("Creating patient account for:", email)

    // Create user in Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          role: "patient",
          first_name: firstName,
          last_name: lastName,
        },
        // Set emailRedirectTo for verification
        emailRedirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/auth/verify-success`,
      },
    })

    if (authError) {
      console.error("Error creating auth user:", authError)
      return NextResponse.json({ error: authError.message }, { status: 400 })
    }

    if (!authData.user) {
      console.error("No user returned from auth signup")
      return NextResponse.json({ error: "Failed to create user" }, { status: 400 })
    }

    console.log("Auth user created with ID:", authData.user.id)

    // Set email as verified for testing purposes (remove in production)
    const { error: updateError } = await supabase.auth.admin.updateUserById(authData.user.id, { email_confirm: true })

    if (updateError) {
      console.error("Error confirming email:", updateError)
      // Continue anyway, this is just for testing
    } else {
      console.log("Email confirmed for testing purposes")
    }

    // Create patient record with correct address fields
    const { data: patient, error: patientError } = await supabase
      .from("patients")
      .insert([
        {
          id: authData.user.id,
          email,
          first_name: firstName,
          last_name: lastName,
          date_of_birth: dateOfBirth,
          phone,
          address_line1: addressLine1, // Use address_line1 instead of address
          address_line2: addressLine2 || null, // Include address_line2
          city,
          state,
          zip_code: zipCode,
          created_at: new Date().toISOString(),
        },
      ])
      .select()

    if (patientError) {
      console.error("Error creating patient record:", patientError)
      return NextResponse.json({ error: "Error creating patient record: " + patientError.message }, { status: 400 })
    }

    console.log("Patient record created successfully")

    return NextResponse.json({ success: true, user: authData.user, patient: patient[0] })
  } catch (error) {
    console.error("Signup error:", error)
    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 })
  }
}
