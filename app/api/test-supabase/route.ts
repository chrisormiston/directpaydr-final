import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { cookies } from "next/headers"

export async function GET() {
  try {
    // Log environment variables (without sensitive values)
    console.log("NEXT_PUBLIC_SUPABASE_URL exists:", !!process.env.NEXT_PUBLIC_SUPABASE_URL)
    console.log("SUPABASE_ANON_KEY exists:", !!process.env.SUPABASE_ANON_KEY)

    // Create Supabase client
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    // Test connection by getting table info
    const { data: tables, error: tablesError } = await supabase
      .from("information_schema.tables")
      .select("table_name")
      .eq("table_schema", "public")
      .limit(10)

    if (tablesError) {
      console.error("Error fetching tables:", tablesError)
      return NextResponse.json(
        {
          success: false,
          message: "Failed to connect to Supabase",
          error: tablesError,
        },
        { status: 500 },
      )
    }

    // Get users table schema
    const { data: usersSchema, error: usersSchemaError } = await supabase
      .from("information_schema.columns")
      .select("column_name, data_type")
      .eq("table_name", "users")
      .eq("table_schema", "public")

    if (usersSchemaError) {
      console.error("Error fetching users schema:", usersSchemaError)
    }

    return NextResponse.json({
      success: true,
      message: "Successfully connected to Supabase",
      tables: tables,
      usersSchema: usersSchema,
    })
  } catch (error: any) {
    console.error("Test Supabase error:", error)
    return NextResponse.json(
      {
        success: false,
        message: `Error: ${error.message}`,
        stack: error.stack,
      },
      { status: 500 },
    )
  }
}
