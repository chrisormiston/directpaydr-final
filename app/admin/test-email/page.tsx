"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle, AlertCircle, Loader2, Info, HelpCircle } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

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
    mailgunConfig?: {
      smtpServer: string
      smtpPort: string
      smtpLogin: string
      smtpPassword: string
      apiKey: string
      domain: string
      emailFrom: string
      testRecipient: string
    }
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
          mailgunConfig: data.mailgunConfig,
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
                    <span className="font-semibold">Method:</span>{" "}
                    {result.method === "smtp" ? "Mailgun SMTP" : "Mailgun API"}
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
                  <div className="mt-2 text-sm">
                    <span className="font-semibold">Error:</span>
                    <div className="bg-gray-100 p-2 rounded mt-1">
                      <code>{result.error}</code>
                    </div>
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
                {result.mailgunConfig && (
                  <div className="mt-4 text-sm">
                    <span className="font-semibold">Configuration Status:</span>
                    <div className="bg-gray-100 p-2 rounded mt-1 space-y-1">
                      <div>
                        SMTP Server:{" "}
                        <span
                          className={result.mailgunConfig.smtpServer === "missing" ? "text-red-500" : "text-green-500"}
                        >
                          {result.mailgunConfig.smtpServer}
                        </span>
                      </div>
                      <div>
                        SMTP Port:{" "}
                        <span
                          className={result.mailgunConfig.smtpPort === "missing" ? "text-red-500" : "text-green-500"}
                        >
                          {result.mailgunConfig.smtpPort}
                        </span>
                      </div>
                      <div>
                        SMTP Login:{" "}
                        <span
                          className={result.mailgunConfig.smtpLogin === "missing" ? "text-red-500" : "text-green-500"}
                        >
                          {result.mailgunConfig.smtpLogin}
                        </span>
                      </div>
                      <div>
                        SMTP Password:{" "}
                        <span
                          className={
                            result.mailgunConfig.smtpPassword === "missing" ? "text-red-500" : "text-green-500"
                          }
                        >
                          {result.mailgunConfig.smtpPassword}
                        </span>
                      </div>
                      <div>
                        API Key:{" "}
                        <span className={result.mailgunConfig.apiKey === "missing" ? "text-red-500" : "text-green-500"}>
                          {result.mailgunConfig.apiKey}
                        </span>
                      </div>
                      <div>
                        Domain:{" "}
                        <span className={result.mailgunConfig.domain === "missing" ? "text-red-500" : "text-green-500"}>
                          {result.mailgunConfig.domain}
                        </span>
                      </div>
                      <div>
                        Email From:{" "}
                        <span
                          className={result.mailgunConfig.emailFrom === "missing" ? "text-red-500" : "text-green-500"}
                        >
                          {result.mailgunConfig.emailFrom}
                        </span>
                      </div>
                      <div>
                        Test Recipient:{" "}
                        <span
                          className={
                            result.mailgunConfig.testRecipient === "missing" ? "text-red-500" : "text-green-500"
                          }
                        >
                          {result.mailgunConfig.testRecipient}
                        </span>
                      </div>
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

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="troubleshooting-smtp">
                  <AccordionTrigger className="text-sm font-medium flex items-center">
                    <HelpCircle className="h-4 w-4 mr-2" />
                    Troubleshooting SMTP Issues
                  </AccordionTrigger>
                  <AccordionContent className="text-sm">
                    <div className="space-y-2">
                      <p>
                        <strong>Greeting never received error:</strong> This typically indicates one of the following
                        issues:
                      </p>
                      <ul className="list-disc list-inside space-y-1 pl-4">
                        <li>Network connectivity issues or firewall blocking the SMTP port</li>
                        <li>Incorrect SMTP server address or port</li>
                        <li>Server timeout due to slow connection</li>
                        <li>Mailgun service disruption</li>
                      </ul>

                      <p className="mt-3">
                        <strong>Recommended steps:</strong>
                      </p>
                      <ol className="list-decimal list-inside space-y-1 pl-4">
                        <li>Verify your SMTP credentials in the Mailgun dashboard</li>
                        <li>Check if your hosting provider allows outbound SMTP connections</li>
                        <li>Try using the EU server (smtp.eu.mailgun.org) if you're using EU region</li>
                        <li>Ensure your sender domain is properly verified in Mailgun</li>
                        <li>Check Mailgun's status page for any service disruptions</li>
                      </ol>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
            <TabsContent value="api" className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-md">
                <div className="flex items-start gap-2">
                  <Info className="h-5 w-5 text-blue-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-blue-800">Mailgun API Configuration</h4>
                    <p className="text-sm text-blue-700 mt-1">
                      As an alternative to SMTP, you can use the Mailgun API. Set up these variables:
                    </p>
                    <ul className="text-sm text-blue-700 mt-2 list-disc list-inside space-y-1">
                      <li>MAILGUN_API_KEY (your Mailgun API key)</li>
                      <li>MAILGUN_DOMAIN (your verified Mailgun domain)</li>
                      <li>TEST_EMAIL_RECIPIENT (where test emails will be sent)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="troubleshooting-api">
                  <AccordionTrigger className="text-sm font-medium flex items-center">
                    <HelpCircle className="h-4 w-4 mr-2" />
                    Troubleshooting API Issues
                  </AccordionTrigger>
                  <AccordionContent className="text-sm">
                    <div className="space-y-2">
                      <p>
                        <strong>Forbidden error:</strong> This typically indicates one of the following issues:
                      </p>
                      <ul className="list-disc list-inside space-y-1 pl-4">
                        <li>Invalid API key or insufficient permissions</li>
                        <li>Domain not properly verified or authorized</li>
                        <li>Sending to unauthorized recipients (for sandbox domains)</li>
                        <li>Account restrictions or billing issues</li>
                      </ul>

                      <p className="mt-3">
                        <strong>Recommended steps:</strong>
                      </p>
                      <ol className="list-decimal list-inside space-y-1 pl-4">
                        <li>Verify your API key in the Mailgun dashboard</li>
                        <li>Ensure you're using the correct API key type (private key)</li>
                        <li>Check if your domain is properly verified and active</li>
                        <li>If using a sandbox domain, ensure the recipient is authorized</li>
                        <li>Check if your Mailgun account is in good standing</li>
                        <li>Try using the EU endpoint if you're using EU region</li>
                      </ol>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
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
