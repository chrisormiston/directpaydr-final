import { createClient } from "@/lib/supabase/server"
import { cookies } from "next/headers"
import Link from "next/link"
import { Calendar, CreditCard, Search, Clock, FileText, User, MapPin } from "lucide-react"

export default async function PatientDashboard() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    return null // Layout will handle redirect
  }

  // Get patient data
  const { data: patientData, error } = await supabase.from("patients").select("*").eq("id", session.user.id).single()

  if (error || !patientData) {
    console.error("Error fetching patient data:", error)
    return null // Layout will handle redirect
  }

  // For demo purposes, we'll create some mock data
  const upcomingAppointments = []
  const recentProcedures = []
  const savedProviders = []

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome, {patientData.first_name}!</h1>
        <p className="text-gray-600 mt-2">Manage your healthcare journey with DirectPayDr</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Quick Actions Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="space-y-4">
            <Link href="/procedures" className="flex items-center text-blue-600 hover:text-blue-800">
              <Search className="h-5 w-5 mr-2" />
              Find a Procedure
            </Link>
            <Link
              href="/dashboard/patient/appointments"
              className="flex items-center text-blue-600 hover:text-blue-800"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Schedule an Appointment
            </Link>
            <Link href="/dashboard/patient/billing" className="flex items-center text-blue-600 hover:text-blue-800">
              <CreditCard className="h-5 w-5 mr-2" />
              Make a Payment
            </Link>
          </div>
        </div>

        {/* Health Summary Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Health Summary</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Upcoming Appointments</span>
              <span className="font-medium">{upcomingAppointments.length || 0}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Recent Procedures</span>
              <span className="font-medium">{recentProcedures.length || 0}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Saved Providers</span>
              <span className="font-medium">{savedProviders.length || 0}</span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <Link href="/dashboard/patient/health-records" className="text-blue-600 hover:text-blue-800 font-medium">
              View Health Records
            </Link>
          </div>
        </div>

        {/* Insurance Info Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Insurance Information</h2>
          {patientData.insurance_provider ? (
            <div className="space-y-3">
              <div>
                <span className="text-gray-600 block">Provider</span>
                <span className="font-medium">{patientData.insurance_provider}</span>
              </div>
              {patientData.insurance_policy_number && (
                <div>
                  <span className="text-gray-600 block">Policy Number</span>
                  <span className="font-medium">{patientData.insurance_policy_number}</span>
                </div>
              )}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <Link href="/dashboard/patient/insurance" className="text-blue-600 hover:text-blue-800 font-medium">
                  Update Insurance Info
                </Link>
              </div>
            </div>
          ) : (
            <div>
              <p className="text-gray-600 mb-4">No insurance information on file.</p>
              <Link href="/dashboard/patient/insurance" className="text-blue-600 hover:text-blue-800 font-medium">
                Add Insurance Info
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Upcoming Appointments Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Upcoming Appointments</h2>
          <Link href="/dashboard/patient/appointments" className="text-blue-600 hover:text-blue-800 font-medium">
            View All
          </Link>
        </div>

        {upcomingAppointments.length > 0 ? (
          <div className="space-y-4">{/* Appointment items would go here */}</div>
        ) : (
          <div className="text-center py-8">
            <Clock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No Upcoming Appointments</h3>
            <p className="text-gray-600 mb-4">Schedule your next appointment with one of our providers.</p>
            <Link
              href="/dashboard/patient/appointments/schedule"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Schedule Now
            </Link>
          </div>
        )}
      </div>

      {/* Find Care Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Find Care</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/procedures" className="group">
            <div className="bg-gray-50 rounded-lg p-6 transition-all group-hover:shadow-md">
              <FileText className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Browse Procedures</h3>
              <p className="text-gray-600">Find procedures with upfront pricing and save up to 50%.</p>
            </div>
          </Link>

          <Link href="/providers" className="group">
            <div className="bg-gray-50 rounded-lg p-6 transition-all group-hover:shadow-md">
              <User className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Find Providers</h3>
              <p className="text-gray-600">Search our network of quality healthcare providers.</p>
            </div>
          </Link>

          <Link href="/locations" className="group">
            <div className="bg-gray-50 rounded-lg p-6 transition-all group-hover:shadow-md">
              <MapPin className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Locations</h3>
              <p className="text-gray-600">Find care near you in our expanding service areas.</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Resources Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Resources</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-medium text-gray-900 mb-2">How DirectPayDr Works</h3>
            <p className="text-gray-600 mb-3">
              Learn how to save on healthcare costs with our transparent pricing model.
            </p>
            <Link href="/how-it-works" className="text-blue-600 hover:text-blue-800 font-medium">
              Learn More
            </Link>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Healthcare Savings Guide</h3>
            <p className="text-gray-600 mb-3">Tips and strategies to maximize your healthcare savings.</p>
            <Link href="/healthcare-prices" className="text-blue-600 hover:text-blue-800 font-medium">
              Read Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
