"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { AlertTriangle } from "lucide-react"

export default function AuthError() {
  const searchParams = useSearchParams()
  const error = searchParams.get("error")

  let errorMessage = "An unknown error occurred during authentication."

  if (error === "Configuration") {
    errorMessage = "There is a problem with the server configuration."
  } else if (error === "AccessDenied") {
    errorMessage = "You do not have permission to sign in."
  } else if (error === "Verification") {
    errorMessage = "The verification link may have expired or already been used."
  } else if (error === "OAuthSignin" || error === "OAuthCallback" || error === "OAuthCreateAccount") {
    errorMessage = "There was a problem with the OAuth authentication."
  } else if (error === "EmailCreateAccount") {
    errorMessage = "There was a problem creating your account with this email."
  } else if (error === "Callback") {
    errorMessage = "There was a problem with the authentication callback."
  } else if (error === "OAuthAccountNotLinked") {
    errorMessage = "This email is already associated with another account."
  } else if (error === "EmailSignin") {
    errorMessage = "There was a problem sending the email with the sign-in link."
  } else if (error === "CredentialsSignin") {
    errorMessage = "The email or password you entered is incorrect."
  } else if (error === "SessionRequired") {
    errorMessage = "You must be signed in to access this page."
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-red-100 p-3 rounded-full">
            <AlertTriangle className="h-8 w-8 text-red-600" />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Authentication Error</h1>
        <p className="text-gray-600 mb-6">{errorMessage}</p>
        <div className="space-y-4">
          <Link
            href="/auth/signin"
            className="block w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md"
          >
            Try Again
          </Link>
          <Link href="/" className="block text-blue-600 hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
