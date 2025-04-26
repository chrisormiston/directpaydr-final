"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle, AlertCircle, Loader2, Info } from "lucide-react"

export default function TestEmailPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<{
    success: boolean
    message: string
    error?: string
    messageId?: string
    isPreviewMode?: boolean
  } | null>(null)

  const handleTestEmail = async () => {
    setIsLoading(true)
    setResult(null)

    try {
      const response = await fetch("/api/test-email")
      const data = await response.json()

      if (response.ok) {
        setResult({
          success: true,
          message: data.message || "Email sent successfully! Check your inbox.",
          messageId: data.messageId,
          isPreviewMode: data.isPreviewMode,
        })
      } else {
        setResult({
          success: false,
          message: "Failed to send email",
          error: data.error || "Unknown error occurred",
        })
      }
    } catch (error) {
      setResult({
        success: false,
        message: "An error occurred",
        error: error instanceof Error ? error.message : "Unknown error",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto py-10">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Mailgun Email Configuration Test</CardTitle>
          <CardDescription>Test your Mailgun email configuration by sending a test email</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {result && (
            <Alert variant={result.success ? "default" : "destructive"} className="mb-4">
              <div className="flex items-center gap-2">
                {result.success ? <CheckCircle className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
                <AlertTitle>{result.success ? "Success" : "Error"}</AlertTitle>
              </div>
              <AlertDescription>
                {result.message}
                {result.isPreviewMode && (
                  <div className="mt-2 p-2 bg-yellow-50 border border-yellow-200 rounded-md text-yellow-700 text-sm">
                    <strong>Preview Mode:</strong> Email sending is simulated in this environment. In production, real
                    emails will be sent using Mailgun.
                  </div>
                )}
                {result.messageId && !result.isPreviewMode && (
                  <div className="mt-2 text-sm">
                    <span className="font-semibold">Message ID:</span> {result.messageId}
                  </div>
                )}
                {result.error && (
                  <div className="mt-2 text-sm bg-gray-100 p-2 rounded">
                    <code>{result.error}</code>
                  </div>
                )}
              </AlertDescription>
            </Alert>
          )}

          <div className="bg-blue-50 p-4 rounded-md">
            <div className="flex items-start gap-2">
              <Info className="h-5 w-5 text-blue-500 mt-0.5" />
              <div>
                <h4 className="font-medium text-blue-800">Mailgun Configuration</h4>
                <p className="text-sm text-blue-700 mt-1">
                  Make sure you've set up the following environment variables:
                </p>
                <ul className="text-sm text-blue-700 mt-2 list-disc list-inside space-y-1">
                  <li>MAILGUN_SMTP_SERVER (default: smtp.mailgun.org)</li>
                  <li>MAILGUN_SMTP_PORT (default: 587)</li>
                  <li>MAILGUN_SMTP_LOGIN (your Mailgun SMTP username)</li>
                  <li>MAILGUN_SMTP_PASSWORD (your Mailgun SMTP password)</li>
                  <li>EMAIL_FROM (your sender email address)</li>
                  <li>TEST_EMAIL_RECIPIENT (where test emails will be sent)</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleTestEmail} disabled={isLoading} className="w-full">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending Test Email...
              </>
            ) : (
              "Send Test Email"
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
