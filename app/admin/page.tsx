import Link from "next/link"

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="pb-5 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="mt-2 text-sm text-gray-500">Manage your DirectPayDr platform</p>
          </div>

          <div className="mt-6 space-y-4">
            <div className="bg-gray-50 p-4 rounded-md shadow-sm hover:bg-gray-100 transition-colors">
              <Link href="/admin/test-email" className="block">
                <h2 className="text-lg font-medium text-indigo-600">Email Test Tool</h2>
                <p className="mt-1 text-sm text-gray-500">
                  Test your Mailgun email configuration with detailed error reporting
                </p>
              </Link>
            </div>

            {/* Add more admin tools here as needed */}
          </div>
        </div>
      </div>
    </div>
  )
}
