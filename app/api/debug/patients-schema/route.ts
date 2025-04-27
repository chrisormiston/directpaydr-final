import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { cookies } from "next/headers"

export async function GET() {
  try {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

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

    return NextResponse.json({
      patients: patientsColumns,
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
