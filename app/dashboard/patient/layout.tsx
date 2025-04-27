import type React from "react"
import { redirect } from "next/navigation"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { createClient } from "@/lib/supabase/server"
import { cookies } from "next/headers"

import { PatientHeader } from "@/components/dashboard/patient/header"
import { PatientFooter } from "@/components/dashboard/patient/footer"

export default async function PatientDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Get the user session
  const session = await getServerSession(authOptions)

  // If not authenticated or not a patient, redirect to sign in
  if (!session || session.user.role !== "patient") {
    redirect("/auth/signin")
  }

  // Get patient data from Supabase
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data: patient, error } = await supabase.from("patients").select("*").eq("id", session.user.id).single()

  if (error || !patient) {
    console.error("Error fetching patient data:", error)
    redirect("/auth/signin")
  }

  const patientName = `${patient.first_name} ${patient.last_name}`

  return (
    <div className="flex min-h-screen flex-col">
      <PatientHeader patientName={patientName} />
      <main className="flex-1 bg-muted/20">{children}</main>
      <PatientFooter />
    </div>
  )
}
