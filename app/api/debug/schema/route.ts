import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { cookies } from "next/headers"

export async function GET() {
  try {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    // Get users table schema
    const { data: usersColumns, error: usersError } = await supabase
      .from("information_schema.columns")
      .select("column_name, data_type")
      .eq("table_name", "users")
      .eq("table_schema", "public")

    if (usersError) {
      return NextResponse.json(
        {
          message: `Error fetching users schema: ${usersError.message}`,
          error: usersError,
        },
        { status: 500 },
      )
    }

    // Get patients table schema
    const { data: patientsColumns, error: patientsError } = await supabase
      .from("information_schema.columns")
      .select("column_name, data_type")
      .eq("table_name", "patients")
      .eq("table_schema", "public")

    if (patientsError) {
      return NextResponse.json(
        {
          message: `Error fetching patients schema: ${patientsError.message}`,
          error: patientsError,
        },
        { status: 500 },
      )
    }

    // Get auth table schema
    const { data: authColumns, error: authError } = await supabase
      .from("information_schema.columns")
      .select("column_name, data_type")
      .eq("table_name", "auth")
      .eq("table_schema", "public")

    if (authError) {
      return NextResponse.json(
        {
          message: `Error fetching auth schema: ${authError.message}`,
          error: authError,
        },
        { status: 500 },
      )
    }

    return NextResponse.json({
      users: usersColumns,
      patients: patientsColumns,
      auth: authColumns,
    })
  } catch (error: any) {
    return NextResponse.json(
      {
        message: `Error: ${error.message}`,
        stack: error.stack,
      },
      { status: 500 },
    )
  }
}
