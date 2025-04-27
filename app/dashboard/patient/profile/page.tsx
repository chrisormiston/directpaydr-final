import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { createClient } from "@/lib/supabase/server"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { format } from "date-fns"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default async function PatientProfile() {
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

  // Format date of birth if available
  const formattedDateOfBirth = patient.date_of_birth
    ? format(new Date(patient.date_of_birth), "MMMM d, yyyy")
    : "Not provided"

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">My Profile</h1>
        <p className="text-muted-foreground">View and manage your personal information</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Personal Information */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Your basic information</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              Edit
            </Button>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">First Name</p>
                <p>{patient.first_name}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Last Name</p>
                <p>{patient.last_name}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Email</p>
                <p>{patient.email}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Phone</p>
                <p>{patient.phone}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Date of Birth</p>
                <p>{formattedDateOfBirth}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Address Information */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Address Information</CardTitle>
              <CardDescription>Your current address</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              Edit
            </Button>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Address Line 1</p>
              <p>{patient.address_line1}</p>
            </div>
            {patient.address_line2 && (
              <div>
                <p className="text-sm font-medium text-muted-foreground">Address Line 2</p>
                <p>{patient.address_line2}</p>
              </div>
            )}
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">City</p>
                <p>{patient.city}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">State</p>
                <p>{patient.state}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">ZIP Code</p>
                <p>{patient.zip_code}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Insurance Information */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Insurance Information</CardTitle>
              <CardDescription>Your insurance details</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              Edit
            </Button>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Insurance Provider</p>
              <p>{patient.insurance_provider || "Not provided"}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Policy Number</p>
              <p>{patient.insurance_policy_number || "Not provided"}</p>
            </div>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">
                Note: While DirectPayDr offers direct-pay options, we keep your insurance information on file for your
                convenience.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
