"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function SignupSuccess() {
  const searchParams = useSearchParams()
  const role = searchParams.get("role") || "patient"
  const [countdown, setCountdown] = useState(5)

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardContent className="pt-6 px-6 pb-8 text-center">
          <div className="mb-6 flex justify-center">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Account Created Successfully!</h1>
          <p className="text-gray-600 mb-6">
            Thank you for signing up as a {role}. Please check your email to verify your account.
          </p>

          <div className="space-y-4">
            <p className="text-sm text-gray-500">
              After verifying your email, you'll be able to access your {role} dashboard.
            </p>

            <div className="border-t border-gray-200 pt-4 mt-4">
              <h2 className="font-medium text-gray-800 mb-2">What's Next?</h2>
              {role === "patient" && (
                <p className="text-sm text-gray-600 mb-4">
                  Once verified, you can search for procedures, compare prices, and schedule appointments.
                </p>
              )}
              {role === "provider" && (
                <p className="text-sm text-gray-600 mb-4">
                  Once verified, you can list your services, set prices, and manage your profile.
                </p>
              )}
              {role === "employer" && (
                <p className="text-sm text-gray-600 mb-4">
                  Once verified, you can manage employee benefits, view analytics, and explore healthcare options.
                </p>
              )}
            </div>

            <div className="space-y-3">
              <Button asChild className="w-full">
                <Link href="/auth/signin">Sign In {countdown > 0 && `(${countdown})`}</Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link href="/">Return to Home</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
