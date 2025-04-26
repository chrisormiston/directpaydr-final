"use client"

import { useAuth } from "@/components/providers/custom-auth-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarDays, CreditCard, FileText, Settings, User } from "lucide-react"

export default function PatientDashboard() {
  const { user } = useAuth()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-gray-500">Welcome back, {user?.name || user?.email}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-gray-500">Next: May 15, 2023</p>
            <Button variant="ghost" size="sm" className="mt-4 w-full">
              <CalendarDays className="mr-2 h-4 w-4" />
              View Calendar
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Medical Records</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-gray-500">Last updated: 3 days ago</p>
            <Button variant="ghost" size="sm" className="mt-4 w-full">
              <FileText className="mr-2 h-4 w-4" />
              View Records
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Payment Methods</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-gray-500">Visa ending in 4242</p>
            <Button variant="ghost" size="sm" className="mt-4 w-full">
              <CreditCard className="mr-2 h-4 w-4" />
              Manage Payments
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Account Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              <User className="h-6 w-6" />
            </div>
            <p className="text-xs text-gray-500">Update your profile</p>
            <Button variant="ghost" size="sm" className="mt-4 w-full">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Procedures</CardTitle>
            <CardDescription>Your recent healthcare procedures</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Annual Physical</p>
                  <p className="text-sm text-gray-500">Dr. Smith • April 10, 2023</p>
                </div>
                <Button variant="outline" size="sm">
                  View
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Blood Test</p>
                  <p className="text-sm text-gray-500">LabCorp • March 22, 2023</p>
                </div>
                <Button variant="outline" size="sm">
                  View
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Saved Procedures</CardTitle>
            <CardDescription>Procedures you're interested in</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">MRI - Lower Back</p>
                  <p className="text-sm text-gray-500">$850 • Multiple providers</p>
                </div>
                <Button variant="outline" size="sm">
                  Book
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Colonoscopy</p>
                  <p className="text-sm text-gray-500">$1,200 • Multiple providers</p>
                </div>
                <Button variant="outline" size="sm">
                  Book
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
