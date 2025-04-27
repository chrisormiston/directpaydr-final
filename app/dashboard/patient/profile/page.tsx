import { createClient } from "@/lib/supabase/server"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { User, Edit } from "lucide-react"

export default async function PatientProfile() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    redirect("/auth/signin?callbackUrl=/dashboard/patient/profile")
  }

  // Get patient data
  const { data: patientData, error } = await supabase.from("patients").select("*").eq("id", session.user.id).single()

  if (error || !patientData) {
    console.error("Error fetching patient data:", error)
    redirect("/dashboard/patient")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
        <p className="text-gray-600 mt-2">View and manage your personal information</p>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-blue-600 px-6 py-4">
          <div className="flex items-center">
            <div className="bg-white rounded-full p-3">
              <User className="h-8 w-8 text-blue-600" />
            </div>
            <div className="ml-4">
              <h2 className="text-xl font-semibold text-white">
                {patientData.first_name} {patientData.last_name}
              </h2>
              <p className="text-blue-100">{session.user.email}</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
            <button className="flex items-center text-blue-600 hover:text-blue-800">
              <Edit className="h-4 w-4 mr-1" />
              Edit
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-500 mb-1">First Name</p>
              <p className="font-medium">{patientData.first_name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Last Name</p>
              <p className="font-medium">{patientData.last_name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Email</p>
              <p className="font-medium">{session.user.email}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Phone</p>
              <p className="font-medium">{patientData.phone}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Date of Birth</p>
              <p className="font-medium">{new Date(patientData.date_of_birth).toLocaleDateString()}</p>
            </div>
          </div>

          <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Address</h3>
              <button className="flex items-center text-blue-600 hover:text-blue-800">
                <Edit className="h-4 w-4 mr-1" />
                Edit
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-500 mb-1">Address Line 1</p>
                <p className="font-medium">{patientData.address_line1}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Address Line 2</p>
                <p className="font-medium">{patientData.address_line2 || "N/A"}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">City</p>
                <p className="font-medium">{patientData.city}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">State</p>
                <p className="font-medium">{patientData.state}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Zip Code</p>
                <p className="font-medium">{patientData.zip_code}</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Insurance Information</h3>
              <button className="flex items-center text-blue-600 hover:text-blue-800">
                <Edit className="h-4 w-4 mr-1" />
                Edit
              </button>
            </div>

            {patientData.insurance_provider ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Insurance Provider</p>
                  <p className="font-medium">{patientData.insurance_provider}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Policy Number</p>
                  <p className="font-medium">{patientData.insurance_policy_number || "N/A"}</p>
                </div>
              </div>
            ) : (
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-gray-600 mb-2">No insurance information on file.</p>
                <button className="text-blue-600 hover:text-blue-800 font-medium">Add Insurance Information</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
