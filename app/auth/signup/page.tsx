import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { User, Stethoscope, Building } from "lucide-react"

export default function SignupOptions() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
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
            <h1 className="text-3xl font-bold text-gray-900">Create Your Account</h1>
            <p className="mt-2 text-lg text-gray-600">Choose the account type that best fits your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Patient Card */}
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mt-4">
                  <User className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-xl font-bold mb-2">Patient</h2>
                <p className="text-gray-600 mb-6">Find and book healthcare services at transparent prices</p>
                <Link href="/auth/signup/patient" className="w-full">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Sign Up as Patient</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Provider Card */}
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mt-4">
                  <Stethoscope className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-xl font-bold mb-2">Provider</h2>
                <p className="text-gray-600 mb-6">Join our network and offer your services to patients</p>
                <Link href="/auth/signup/provider" className="w-full">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Sign Up as Provider</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Employer Card */}
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mt-4">
                  <Building className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-xl font-bold mb-2">Employer</h2>
                <p className="text-gray-600 mb-6">Provide healthcare benefits to your employees at reduced costs</p>
                <Link href="/auth/signup/employer" className="w-full">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Sign Up as Employer</Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Login Link */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link href="/auth/signin" className="text-blue-600 hover:underline font-medium">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
