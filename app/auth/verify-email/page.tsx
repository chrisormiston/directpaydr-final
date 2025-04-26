"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { CheckCircle, XCircle, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function VerifyEmail() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const token = searchParams.get("token")

  const [verificationStatus, setVerificationStatus] = useState<"loading" | "success" | "error" | "idle">(
    token ? "loading" : "idle",
  )
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [redirectPath, setRedirectPath] = useState<string | null>(null)
  const [countdown, setCountdown] = useState<number>(5)
  const [isVerifying, setIsVerifying] = useState<boolean>(false)

  useEffect(() => {
    const verifyToken = async () => {
      setIsVerifying(true)

      try {
        const response = await fetch(`/api/auth/verify-email?token=${token}`)
        const data = await response.json()

        if (response.ok) {
          setVerificationStatus("success")

          // Get user role from the response
          const userRole = data.role || "patient"

          // Set redirect path based on role
          setRedirectPath(`/dashboard/${userRole}`)

          // Start countdown
          const timer = setInterval(() => {
            setCountdown((prev) => {
              if (prev <= 1) {
                clearInterval(timer)
                router.push(`/dashboard/${userRole}`)
                return 0
              }
              return prev - 1
            })
          }, 1000)

          return () => clearInterval(timer)
        } else {
          setVerificationStatus("error")
          setErrorMessage(data.message || "Verification failed. Please try again.")
        }
      } catch (error) {
        console.error("Verification error:", error)
        setVerificationStatus("error")
        setErrorMessage("An unexpected error occurred. Please try again.")
      } finally {
        setIsVerifying(false)
      }
    }

    if (token) {
      verifyToken()
    } else {
      setVerificationStatus("error")
      setErrorMessage("No verification token provided.")
    }
  }, [token, router])

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
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
            <h1 className="text-3xl font-bold text-gray-900">Email Verification</h1>
          </div>

          <Card className="shadow-lg">
            <CardContent className="p-8">
              {verificationStatus === "loading" && (
                <div className="text-center py-8">
                  <Loader2 className="h-12 w-12 text-blue-600 mx-auto animate-spin" />
                  <p className="mt-4 text-lg">Verifying your email...</p>
                </div>
              )}

              {verificationStatus === "success" && (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
                  <h2 className="text-2xl font-bold mt-4">Email Verified!</h2>
                  <p className="mt-2 text-gray-600 mb-6">
                    Your email has been successfully verified. You will be redirected in {countdown} seconds...
                  </p>
                  <Button disabled={true} className="bg-blue-600 hover:bg-blue-700">
                    Redirecting...
                  </Button>
                </div>
              )}

              {verificationStatus === "error" && (
                <div className="text-center py-8">
                  <XCircle className="h-16 w-16 text-red-500 mx-auto" />
                  <h2 className="text-2xl font-bold mt-4">Verification Failed</h2>
                  <p className="mt-2 text-gray-600 mb-6">
                    {errorMessage ||
                      "The verification link is invalid or has expired. Please request a new verification email."}
                  </p>
                  <Button
                    onClick={() => router.push("/auth/resend-verification")}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Request New Verification
                  </Button>
                </div>
              )}

              {verificationStatus === "idle" && (
                <div className="text-center py-8">
                  <h2 className="text-2xl font-bold">Check Your Email</h2>
                  <p className="mt-4 text-gray-600 mb-6">
                    We've sent a verification link to your email address. Please check your inbox and click the link to
                    verify your account.
                  </p>
                  <p className="text-sm text-gray-500 mb-6">
                    If you don't see the email, check your spam folder or request a new verification email.
                  </p>
                  <div className="space-y-4">
                    <Button
                      onClick={() => router.push("/auth/resend-verification")}
                      variant="outline"
                      className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
                    >
                      Resend Verification Email
                    </Button>
                    <Button onClick={() => router.push("/")} className="w-full bg-blue-600 hover:bg-blue-700">
                      Return to Home
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
