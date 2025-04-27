import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { createClient } from "@/lib/supabase/server"
import { cookies } from "next/headers"
import Link from "next/link"
import { redirect } from "next/navigation"
import { Calendar, CreditCard, FileText, Heart, Search, Shield, User, Users } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default async function PatientDashboard() {
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

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Welcome, {patient.first_name}!</h1>
        <p className="text-muted-foreground">Manage your healthcare needs and find affordable care options.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks you might want to do</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <Button variant="outline" className="justify-start" asChild>
              <Link href="/dashboard/patient/procedures">
                <Search className="mr-2 h-4 w-4" />
                Find a Procedure
              </Link>
            </Button>
            <Button variant="outline" className="justify-start" asChild>
              <Link href="/dashboard/patient/providers">
                <Users className="mr-2 h-4 w-4" />
                Find a Provider
              </Link>
            </Button>
            <Button variant="outline" className="justify-start" asChild>
              <Link href="/dashboard/patient/billing">
                <CreditCard className="mr-2 h-4 w-4" />
                View Billing
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Health Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Health Summary</CardTitle>
            <CardDescription>Your health at a glance</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center gap-4">
              <Heart className="h-5 w-5 text-rose-500" />
              <div>
                <p className="text-sm font-medium">Health Profile</p>
                <p className="text-sm text-muted-foreground">{patient.date_of_birth ? "Complete" : "Incomplete"}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Calendar className="h-5 w-5 text-blue-500" />
              <div>
                <p className="text-sm font-medium">Upcoming Appointments</p>
                <p className="text-sm text-muted-foreground">None scheduled</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FileText className="h-5 w-5 text-green-500" />
              <div>
                <p className="text-sm font-medium">Recent Procedures</p>
                <p className="text-sm text-muted-foreground">None</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/dashboard/patient/profile">View Full Health Profile</Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Insurance Information */}
        <Card>
          <CardHeader>
            <CardTitle>Insurance Information</CardTitle>
            <CardDescription>Your current insurance details</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center gap-4">
              <Shield className="h-5 w-5 text-indigo-500" />
              <div>
                <p className="text-sm font-medium">Provider</p>
                <p className="text-sm text-muted-foreground">{patient.insurance_provider || "Not provided"}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FileText className="h-5 w-5 text-indigo-500" />
              <div>
                <p className="text-sm font-medium">Policy Number</p>
                <p className="text-sm text-muted-foreground">{patient.insurance_policy_number || "Not provided"}</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/dashboard/patient/profile">Update Insurance Info</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {/* Upcoming Appointments */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Appointments</CardTitle>
            <CardDescription>Your scheduled healthcare visits</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border p-4 text-center">
              <p className="text-sm text-muted-foreground">You don't have any upcoming appointments.</p>
              <Button className="mt-4" asChild>
                <Link href="/dashboard/patient/procedures">Schedule an Appointment</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Find Care */}
        <Card>
          <CardHeader>
            <CardTitle>Find Care</CardTitle>
            <CardDescription>Discover affordable healthcare options</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="h-auto flex-col py-4" asChild>
                <Link href="/procedures">
                  <FileText className="mb-2 h-6 w-6" />
                  <span>Browse Procedures</span>
                </Link>
              </Button>
              <Button variant="outline" className="h-auto flex-col py-4" asChild>
                <Link href="/providers">
                  <User className="mb-2 h-6 w-6" />
                  <span>Find Providers</span>
                </Link>
              </Button>
              <Button variant="outline" className="h-auto flex-col py-4" asChild>
                <Link href="/specialties">
                  <Heart className="mb-2 h-6 w-6" />
                  <span>Specialties</span>
                </Link>
              </Button>
              <Button variant="outline" className="h-auto flex-col py-4" asChild>
                <Link href="/locations">
                  <Users className="mb-2 h-6 w-6" />
                  <span>Locations</span>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Resources */}
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Resources</CardTitle>
            <CardDescription>Helpful information and tools</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <Link href="/healthcare-prices" className="rounded-md border p-4 hover:bg-muted/50 transition-colors">
                <h3 className="font-medium">Healthcare Pricing Guide</h3>
                <p className="text-sm text-muted-foreground">Learn about transparent healthcare pricing</p>
              </Link>
              <Link href="/how-it-works" className="rounded-md border p-4 hover:bg-muted/50 transition-colors">
                <h3 className="font-medium">How DirectPayDr Works</h3>
                <p className="text-sm text-muted-foreground">Understand our direct-pay healthcare model</p>
              </Link>
              <Link href="/faq" className="rounded-md border p-4 hover:bg-muted/50 transition-colors">
                <h3 className="font-medium">Frequently Asked Questions</h3>
                <p className="text-sm text-muted-foreground">Find answers to common questions</p>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
