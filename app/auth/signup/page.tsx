"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Building, Stethoscope, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function SignUp() {
  const router = useRouter()

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Create Your DirectPayDr Account</h1>
        <p className="text-gray-500 mt-2">Choose the account type that best fits your needs</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Patient Account */}
        <Card className="overflow-hidden">
          <div className="bg-blue-600 p-4">
            <User className="h-8 w-8 text-white" />
            <h2 className="text-xl font-bold text-white mt-2">Patient</h2>
          </div>
          <CardContent className="p-6">
            <p className="text-gray-600 mb-6">
              Find and compare healthcare procedures with transparent pricing. Save up to 50% on medical costs.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-blue-600 mr-2 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Search for procedures</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-blue-600 mr-2 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Compare prices</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-blue-600 mr-2 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Book appointments</span>
              </li>
            </ul>
            <Button
              onClick={() => router.push("/auth/signup/patient")}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              Sign Up as Patient
            </Button>
          </CardContent>
        </Card>

        {/* Provider Account */}
        <Card className="overflow-hidden">
          <div className="bg-green-600 p-4">
            <Stethoscope className="h-8 w-8 text-white" />
            <h2 className="text-xl font-bold text-white mt-2">Provider</h2>
          </div>
          <CardContent className="p-6">
            <p className="text-gray-600 mb-6">
              Join our network of healthcare providers offering transparent pricing and expand your patient base.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-green-600 mr-2 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>List your services</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-green-600 mr-2 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Set transparent prices</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-green-600 mr-2 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Manage appointments</span>
              </li>
            </ul>
            <Button
              onClick={() => router.push("/auth/signup/provider")}
              className="w-full bg-green-600 hover:bg-green-700"
            >
              Sign Up as Provider
            </Button>
          </CardContent>
        </Card>

        {/* Employer Account */}
        <Card className="overflow-hidden">
          <div className="bg-purple-600 p-4">
            <Building className="h-8 w-8 text-white" />
            <h2 className="text-xl font-bold text-white mt-2">Employer</h2>
          </div>
          <CardContent className="p-6">
            <p className="text-gray-600 mb-6">
              Reduce healthcare costs for your company and employees with our transparent pricing model.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-purple-600 mr-2 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Reduce benefit costs</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-purple-600 mr-2 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Custom healthcare plans</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-purple-600 mr-2 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Employee portal access</span>
              </li>
            </ul>
            <Button
              onClick={() => router.push("/auth/signup/employer")}
              className="w-full bg-purple-600 hover:bg-purple-700"
            >
              Sign Up as Employer
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mt-8">
        <p className="text-gray-600">
          Already have an account?{" "}
          <Link href="/auth/signin" className="text-blue-600 hover:text-blue-800 font-medium">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}
