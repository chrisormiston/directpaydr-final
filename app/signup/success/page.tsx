import Link from "next/link"
import { CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function SignupSuccess() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="mb-8 text-center">
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-600"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
                <span className="ml-2 text-2xl font-bold text-blue-600">DirectPayDr</span>
              </div>
            </Link>
          </div>

          {/* Success Card */}
          <Card className="shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-4">Account Created Successfully!</h1>

              <p className="text-lg text-gray-600 mb-8">
                Thank you for creating an account with DirectPayDr. You can now start saving on your healthcare costs.
              </p>

              <p className="text-gray-600 mb-6">
                We've sent a confirmation email to your inbox. Please verify your email address to complete the setup
                process.
              </p>

              <div className="space-y-4">
                <Button className="w-full py-6 text-lg bg-blue-600 hover:bg-blue-700" asChild>
                  <Link href="/procedures">Start Browsing Procedures</Link>
                </Button>

                <Button variant="outline" className="w-full py-6 text-lg border-blue-600 text-blue-600" asChild>
                  <Link href="/dashboard">Go to My Dashboard</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-center mb-8">What's Next?</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-600"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" y2="3" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Browse Procedures</h3>
                <p className="text-gray-600">Search for medical procedures in your area and compare prices</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-600"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Complete Your Profile</h3>
                <p className="text-gray-600">Add your health information for a more personalized experience</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-600"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Book Your First Procedure</h3>
                <p className="text-gray-600">Purchase your first procedure and start saving on healthcare costs</p>
              </div>
            </div>
          </div>

          {/* Help Section */}
          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Need help? Contact our support team at{" "}
              <a href="mailto:support@directpaydr.com" className="text-blue-600 hover:underline">
                support@directpaydr.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
