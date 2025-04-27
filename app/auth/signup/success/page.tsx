import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function SignupSuccess() {
  return (
    <div className="container max-w-md mx-auto py-10 px-4">
      <Card>
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <CardTitle className="text-2xl font-bold">Account Created Successfully!</CardTitle>
          <CardDescription>Thank you for creating an account with DirectPayDr</CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="mb-4">
            We've sent a verification email to your inbox. Please check your email and click the verification link to
            activate your account.
          </p>
          <p className="text-sm text-gray-500">If you don't see the email, please check your spam folder.</p>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button asChild className="w-full">
            <Link href="/auth/signin">Sign In</Link>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <Link href="/">Return to Home</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
