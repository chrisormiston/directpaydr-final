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
      address,
      city,
      state,
      zipCode,
      insuranceProvider,
      insurancePolicyNumber,
    } = body

    console.log("Received signup request for:", email)

    // Create Supabase client
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    // First, let's check if we can connect to Supabase
    const { data: testData, error: testError } = await supabase.from("users").select("count").limit(1)

    if (testError) {
      console.error("Supabase connection test failed:", testError)
      return NextResponse.json(
        {
          message: `Supabase connection error: ${testError.message}`,
          details: testError,
        },
        { status: 500 },
      )
    }

    console.log("Supabase connection successful, test data:", testData)

    // Check if user already exists
    const { data: existingUser, error: checkError } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .maybeSingle()

    if (checkError) {
      console.error("Error checking existing user:", checkError)
      return NextResponse.json(
        {
          message: `Error checking existing user: ${checkError.message}`,
          details: checkError,
        },
        { status: 500 },
      )
    }

    if (existingUser) {
      return NextResponse.json({ message: "User with this email already exists" }, { status: 409 })
    }

    // Let's log the database schema to see what columns are available
    const { data: usersColumns, error: usersColumnsError } = await supabase
      .from("information_schema.columns")
      .select("column_name")
      .eq("table_name", "users")
      .eq("table_schema", "public")

    if (usersColumnsError) {
      console.error("Error fetching users table schema:", usersColumnsError)
    } else {
      console.log("Users table columns:", usersColumns)
    }

    // 1. Create user with minimal fields to avoid schema mismatches
    console.log("Creating user record...")
    const { data: userData, error: userError } = await supabase
      .from("users")
      .insert({
        email,
        name: `${firstName} ${lastName}`,
        role: "patient",
      })
      .select()

    if (userError) {
      console.error("Error creating user:", userError)
      return NextResponse.json(
        {
          message: `Error creating user: ${userError.message}`,
          details: userError,
        },
        { status: 500 },
      )
    }

    if (!userData || userData.length === 0) {
      console.error("No user data returned after insert")
      return NextResponse.json({ message: "Error creating user: No data returned" }, { status: 500 })
    }

    const userId = userData[0].id
    console.log("User created with ID:", userId)

    // Return success response
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
