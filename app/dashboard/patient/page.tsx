import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function PatientDashboard() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/auth/signin")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Patient Dashboard</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Welcome, {session.user?.name || "Patient"}</h2>
        <p>You are now logged in as a patient.</p>
        <pre className="mt-4 p-4 bg-gray-100 rounded overflow-auto">{JSON.stringify(session, null, 2)}</pre>
      </div>
    </div>
  )
}
