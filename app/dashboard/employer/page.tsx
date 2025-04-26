import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getUserProfile } from "@/lib/auth"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default async function EmployerDashboard() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/auth/signin?callbackUrl=/dashboard/employer")
  }

  if (session.user.role !== "employer") {
    redirect("/dashboard")
  }

  const employerProfile = await getUserProfile(session.user.id, "employer")

  if (!employerProfile) {
    return <div>Error loading profile</div>
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Welcome, {employerProfile.company_name}!</h1>
        <p className="text-gray-600">Manage your employee healthcare benefits.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Total Employees</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{employerProfile.employee_count}</p>
            <p className="text-sm text-gray-500">Enrolled in healthcare plan</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Active Plans</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">1</p>
            <p className="text-sm text-gray-500">{employerProfile.plan_type}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Total Savings</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$0</p>
            <p className="text-sm text-gray-500">No savings data yet</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Usage Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500">Track how your employees are using DirectPayDr services.</p>
            <div className="mt-4">
              <p className="text-sm text-gray-500">No usage data yet</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Popular Procedures</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500">See which procedures are most popular among your employees.</p>
            <div className="mt-4">
              <p className="text-sm text-gray-500">No procedure data yet</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
