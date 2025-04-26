"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle, AlertCircle, Loader2, Info } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TestEmailPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<{
    success: boolean
    message: string
    error?: string
    smtpError?: string
    apiError?: string
    messageId?: string
    isPreviewMode?: boolean
    method?: string
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
          method: data.method,
        })
      } else {
        setResult({
          success: false,
          message: "Failed to send email",
          error: data.error || "Unknown error occurred",
          smtpError: data.smtpError,
          apiError: data.apiError,
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
                {result.method && (
                  <div className="mt-2 text-sm">
                    <span className="font-semibold">Method:</span> {result.method === "smtp" ? "SMTP" : "Mailgun API"}
                  </div>
                )}
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
                {result.smtpError && (
                  <div className="mt-2 text-sm">
                    <span className="font-semibold">SMTP Error:</span>
                    <div className="bg-gray-100 p-2 rounded mt-1">
                      <code>{result.smtpError}</code>
                    </div>
                  </div>
                )}
                {result.apiError && (
                  <div className="mt-2 text-sm">
                    <span className="font-semibold">API Error:</span>
                    <div className="bg-gray-100 p-2 rounded mt-1">
                      <code>{result.apiError}</code>
                    </div>
                  </div>
                )}
              </AlertDescription>
            </Alert>
          )}

          <Tabs defaultValue="smtp" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="smtp">SMTP Configuration</TabsTrigger>
              <TabsTrigger value="api">API Configuration</TabsTrigger>
            </TabsList>
            <TabsContent value="smtp" className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-md">
                <div className="flex items-start gap-2">
                  <Info className="h-5 w-5 text-blue-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-blue-800">Mailgun SMTP Configuration</h4>
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
            </TabsContent>
            <TabsContent value="api" className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-md">
                <div className="flex items-start gap-2">
                  <Info className="h-5 w-5 text-blue-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-blue-800">Mailgun API Configuration</h4>
                    <p className="text-sm text-blue-700 mt-1">
                      As a fallback, we can use the Mailgun API. Set up these variables:
                    </p>
                    <ul className="text-sm text-blue-700 mt-2 list-disc list-inside space-y-1">
                      <li>MAILGUN_API_KEY (your Mailgun API key)</li>
                      <li>MAILGUN_DOMAIN (your verified Mailgun domain)</li>
                      <li>TEST_EMAIL_RECIPIENT (where test emails will be sent)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
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
