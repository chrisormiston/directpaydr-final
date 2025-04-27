import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function PatientDashboard() {
  const session = await getServerSession(authOptions)

  // CRITICAL FIX: Add detailed logging
  console.log(
    "Patient Dashboard - Session:",
    session
      ? {
          user: {
            id: session.user?.id,
            email: session.user?.email,
            role: session.user?.role,
          },
        }
      : "No session",
  )

  // CRITICAL FIX: Only redirect if there's definitely no session
  if (!session || !session.user) {
    console.log("No session found, redirecting to signin")
    redirect("/auth/signin")
  }

  // CRITICAL FIX: Check if user has the correct role
  const userRole = session.user?.role || "patient"
  if (userRole !== "patient" && userRole !== "admin") {
    console.log(`User has role ${userRole}, redirecting to appropriate dashboard`)
    redirect(`/dashboard/${userRole}`)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Patient Dashboard</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Welcome, {session.user?.name || "Patient"}</h2>
        <p>You are now logged in as a patient.</p>
        <div className="mt-4 p-4 bg-gray-100 rounded overflow-auto">
          <h3 className="font-medium mb-2">Session Information:</h3>
          <pre className="text-xs">{JSON.stringify(session, null, 2)}</pre>
        </div>
      </div>
    </div>
  )
}
