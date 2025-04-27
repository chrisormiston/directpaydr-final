import type React from "react"
import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { cookies } from "next/headers"
import PatientHeader from "@/components/dashboard/patient/header"
import PatientFooter from "@/components/dashboard/patient/footer"

export default async function PatientDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Check if user is authenticated and is a patient
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    redirect("/auth/signin?callbackUrl=/dashboard/patient")
  }

  // Get user data to check role
  const { data: userData } = await supabase.auth.getUser()

  if (!userData?.user || userData.user.user_metadata?.role !== "patient") {
    redirect("/auth/signin?message=You must be logged in as a patient to view this page")
  }

  // Get patient data
  const { data: patientData, error } = await supabase.from("patients").select("*").eq("id", userData.user.id).single()

  if (error || !patientData) {
    console.error("Error fetching patient data:", error)
    redirect("/auth/signin?message=Error loading patient data")
  }

  return (
    <div className="flex flex-col min-h-screen">
      <PatientHeader patient={patientData} user={userData.user} />
      <main className="flex-grow">{children}</main>
      <PatientFooter />
    </div>
  )
}
