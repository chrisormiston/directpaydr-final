import { type NextRequest, NextResponse } from "next/server"
import { sendEmail, type EmailService, type EmailResponse } from "@/lib/email"

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    let requestData
    try {
      requestData = await request.json()
    } catch (error) {
      return NextResponse.json({ success: false, message: "Invalid JSON in request body" }, { status: 400 })
    }

    const { recipient, subject, message, method = "smtp", useEuRegion = false } = requestData

    // Set region environment variable for this request
    process.env.MAILGUN_EU_REGION = useEuRegion ? "true" : "false"

    // Validate required fields
    if (!recipient || !subject || !message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields: recipient, subject, or message" },
        { status: 400 },
      )
    }

    // Get sender from environment or use fallback
    const sender = process.env.EMAIL_FROM || "noreply@directpaydr.com"

    // Send test email
    const emailMethod = (method as EmailService) || "smtp"
    console.log(`Sending test email via ${emailMethod} to ${recipient}`)

    const result = await sendEmail(
      {
        to: recipient,
        from: sender,
        subject,
        text: message,
        html: `<p>${message}</p>`,
      },
      emailMethod,
    )

    // Return response based on email result
    if (result.success) {
      return NextResponse.json(result)
    } else {
      console.error("Email error:", result)
      return NextResponse.json(result, { status: 500 })
    }
  } catch (error: any) {
    console.error("Test email API error:", error)

    // Create detailed error response
    const errorResponse: EmailResponse = {
      success: false,
      message: `Unexpected error: ${error.message}`,
      error: {
        name: error.name,
        message: error.message,
        stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
      },
      details: {
        method: "unknown",
        region: process.env.MAILGUN_EU_REGION === "true" ? "eu" : "us",
        configStatus: {
          smtpServer: process.env.MAILGUN_SMTP_SERVER ? "configured" : "not configured",
          smtpPort: process.env.MAILGUN_SMTP_PORT ? "configured" : "not configured",
          smtpLogin: process.env.MAILGUN_SMTP_LOGIN ? "configured" : "not configured",
          smtpPassword: process.env.MAILGUN_SMTP_PASSWORD ? "configured" : "not configured",
          apiKey: process.env.MAILGUN_API_KEY ? "configured" : "not configured",
          domain: process.env.MAILGUN_DOMAIN ? "configured" : "not configured",
          emailFrom: process.env.EMAIL_FROM ? "configured" : "not configured",
          testRecipient: process.env.TEST_EMAIL_RECIPIENT ? "configured" : "not configured",
        },
      },
    }

    return NextResponse.json(errorResponse, { status: 500 })
  }
}
