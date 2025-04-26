import { NextResponse } from "next/server"
import { testMailgunConfiguration, testMailgunAPI } from "@/lib/email"

export async function GET() {
  try {
    // First try SMTP
    console.log("Attempting to send email via Mailgun SMTP...")
    const smtpResult = await testMailgunConfiguration()

    // If SMTP succeeds, return success
    if (smtpResult.success) {
      return NextResponse.json(
        {
          message: smtpResult.message,
          messageId: smtpResult.messageId,
          isPreviewMode: smtpResult.isPreviewMode,
          method: "smtp",
        },
        { status: 200 },
      )
    }

    // If SMTP fails, try Mailgun API
    console.log("SMTP method failed, trying Mailgun API method...")
    const apiResult = await testMailgunAPI()

    // If Mailgun API succeeds, return success
    if (apiResult.success) {
      return NextResponse.json(
        {
          message: apiResult.message,
          messageId: apiResult.messageId,
          method: "mailgun-api",
        },
        { status: 200 },
      )
    }

    // Both methods failed
    console.log("Both Mailgun methods failed")
    return NextResponse.json(
      {
        message: "Email test failed with both Mailgun methods",
        smtpError: smtpResult.error,
        apiError: apiResult.error,
        mailgunConfig: {
          smtpServer: process.env.MAILGUN_SMTP_SERVER ? "configured" : "missing",
          smtpPort: process.env.MAILGUN_SMTP_PORT ? "configured" : "missing",
          smtpLogin: process.env.MAILGUN_SMTP_LOGIN ? "configured" : "missing",
          smtpPassword: process.env.MAILGUN_SMTP_PASSWORD ? "configured" : "missing",
          apiKey: process.env.MAILGUN_API_KEY ? "configured" : "missing",
          domain: process.env.MAILGUN_DOMAIN ? "configured" : "missing",
          emailFrom: process.env.EMAIL_FROM ? "configured" : "missing",
          testRecipient: process.env.TEST_EMAIL_RECIPIENT ? "configured" : "missing",
        },
      },
      { status: 500 },
    )
  } catch (error) {
    return NextResponse.json(
      {
        message: "Server error",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    )
  }
}
