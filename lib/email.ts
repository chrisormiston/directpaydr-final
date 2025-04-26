import nodemailer from "nodemailer"

// Configure email transporter for Mailgun
const createTransporter = () => {
  // Check if we're in a preview environment (like Next.js)
  const isPreviewEnvironment = typeof window !== "undefined" || process.env.NODE_ENV === "development"

  if (isPreviewEnvironment) {
    // Use a mock transporter for preview environments
    return {
      sendMail: async (mailOptions: any) => {
        console.log("MOCK EMAIL SENT:", mailOptions)
        // Simulate a successful email send
        return {
          messageId: `mock-email-${Date.now()}@preview.directpaydr.com`,
          response: "Mock email sent successfully",
        }
      },
    }
  }

  // Use real nodemailer transporter for production
  return nodemailer.createTransport({
    host: process.env.MAILGUN_SMTP_SERVER || "smtp.mailgun.org",
    port: Number(process.env.MAILGUN_SMTP_PORT || 587),
    auth: {
      user: process.env.MAILGUN_SMTP_LOGIN,
      pass: process.env.MAILGUN_SMTP_PASSWORD,
    },
    secure: false, // Use STARTTLS
    requireTLS: true,
    connectionTimeout: 30000, // 30 seconds timeout
    greetingTimeout: 30000, // 30 seconds for greeting timeout
    socketTimeout: 30000, // 30 seconds socket timeout
    debug: true, // Enable debug logging
    logger: true, // Enable logger
  })
}

// Get the appropriate transporter
const transporter = createTransporter()

// Send verification email
export async function sendVerificationEmail(email: string, name: string, token: string) {
  const verificationUrl = `${process.env.NEXTAUTH_URL}/auth/verify-email?token=${token}`

  const mailOptions = {
    from: `"DirectPayDr" <${process.env.EMAIL_FROM || "noreply@directpaydr.com"}>`,
    to: email,
    subject: "Verify Your DirectPayDr Account",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #1E40AF; padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">DirectPayDr</h1>
        </div>
        <div style="padding: 20px; border: 1px solid #e5e7eb; border-top: none;">
          <h2>Hello ${name},</h2>
          <p>Thank you for creating an account with DirectPayDr. Please verify your email address by clicking the button below:</p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="${verificationUrl}" style="background-color: #1E40AF; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">Verify Email Address</a>
          </div>
          <p>If you did not create an account, please ignore this email.</p>
          <p>This link will expire in 24 hours.</p>
          <p>If the button above doesn't work, copy and paste the following link into your browser:</p>
          <p style="word-break: break-all;">${verificationUrl}</p>
          <p>Best regards,<br>The DirectPayDr Team</p>
        </div>
        <div style="background-color: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #6b7280;">
          <p>&copy; ${new Date().getFullYear()} DirectPayDr. All rights reserved.</p>
        </div>
      </div>
    `,
  }

  return transporter.sendMail(mailOptions)
}

// Send password reset email
export async function sendPasswordResetEmail(email: string, token: string) {
  const resetUrl = `${process.env.NEXTAUTH_URL}/auth/reset-password?token=${token}`

  const mailOptions = {
    from: `"DirectPayDr" <${process.env.EMAIL_FROM || "noreply@directpaydr.com"}>`,
    to: email,
    subject: "Reset Your DirectPayDr Password",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #1E40AF; padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">DirectPayDr</h1>
        </div>
        <div style="padding: 20px; border: 1px solid #e5e7eb; border-top: none;">
          <h2>Password Reset Request</h2>
          <p>We received a request to reset your password. Click the button below to create a new password:</p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="${resetUrl}" style="background-color: #1E40AF; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">Reset Password</a>
          </div>
          <p>If you did not request a password reset, please ignore this email or contact support if you have concerns.</p>
          <p>This link will expire in 1 hour.</p>
          <p>If the button above doesn't work, copy and paste the following link into your browser:</p>
          <p style="word-break: break-all;">${resetUrl}</p>
          <p>Best regards,<br>The DirectPayDr Team</p>
        </div>
        <div style="background-color: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #6b7280;">
          <p>&copy; ${new Date().getFullYear()} DirectPayDr. All rights reserved.</p>
        </div>
      </div>
    `,
  }

  return transporter.sendMail(mailOptions)
}

// Test email configuration via SMTP
export async function testMailgunConfiguration() {
  try {
    const testRecipient = process.env.TEST_EMAIL_RECIPIENT || "test@example.com"

    // Log configuration for debugging (sensitive info redacted)
    console.log("Mailgun SMTP Configuration:", {
      host: process.env.MAILGUN_SMTP_SERVER || "smtp.mailgun.org",
      port: Number(process.env.MAILGUN_SMTP_PORT || 587),
      auth: {
        user: process.env.MAILGUN_SMTP_LOGIN ? "CONFIGURED" : "MISSING",
        pass: process.env.MAILGUN_SMTP_PASSWORD ? "CONFIGURED" : "MISSING",
      },
      from: process.env.EMAIL_FROM || "noreply@directpaydr.com",
      to: testRecipient,
    })

    const testMailOptions = {
      from: `"DirectPayDr" <${process.env.EMAIL_FROM || "noreply@directpaydr.com"}>`,
      to: testRecipient,
      subject: "Mailgun SMTP Test Email",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #1E40AF; padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">DirectPayDr</h1>
          </div>
          <div style="padding: 20px; border: 1px solid #e5e7eb; border-top: none;">
            <h2>Test Email via SMTP</h2>
            <p>This is a test email to verify that your Mailgun SMTP configuration is working correctly.</p>
            <p>If you received this email, your email service is properly configured!</p>
            <p>Time sent: ${new Date().toLocaleString()}</p>
            <p>Best regards,<br>The DirectPayDr Team</p>
          </div>
          <div style="background-color: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #6b7280;">
            <p>&copy; ${new Date().getFullYear()} DirectPayDr. All rights reserved.</p>
          </div>
        </div>
      `,
    }

    // Create a new transporter for testing to ensure fresh connection
    const testTransporter = createTransporter()
    const info = await testTransporter.sendMail(testMailOptions)

    // Check if we're in preview mode
    const isPreview = typeof window !== "undefined" || process.env.NODE_ENV === "development"

    return {
      success: true,
      message: isPreview
        ? `Test email simulation successful! In production, this would be sent to: ${testRecipient}`
        : "Test email sent successfully via SMTP!",
      messageId: info.messageId,
      isPreviewMode: isPreview,
    }
  } catch (error) {
    console.error("Error sending test email via SMTP:", error)
    return {
      success: false,
      message: "Failed to send email via SMTP",
      error: error instanceof Error ? error.message : String(error),
    }
  }
}

// Test email configuration via Mailgun API
export async function testMailgunAPI() {
  try {
    const apiKey = process.env.MAILGUN_API_KEY
    const domain = process.env.MAILGUN_DOMAIN
    const testRecipient = process.env.TEST_EMAIL_RECIPIENT || "test@example.com"

    if (!apiKey || !domain) {
      return {
        success: false,
        message: "Mailgun API key or domain not configured",
        error: "Missing API key or domain",
      }
    }

    // Log configuration for debugging (sensitive info redacted)
    console.log("Mailgun API Configuration:", {
      apiKey: apiKey ? "CONFIGURED" : "MISSING",
      domain,
      to: testRecipient,
    })

    // Use fetch with proper error handling
    const url = `https://api.mailgun.net/v3/${domain}/messages`
    const auth = Buffer.from(`api:${apiKey}`).toString("base64")

    // Create form data
    const formData = new URLSearchParams()
    formData.append("from", `DirectPayDr <mailgun@${domain}>`)
    formData.append("to", testRecipient)
    formData.append("subject", "DirectPayDr Test Email via Mailgun API")
    formData.append(
      "html",
      `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #1E40AF; padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">DirectPayDr</h1>
        </div>
        <div style="padding: 20px; border: 1px solid #e5e7eb; border-top: none;">
          <h2>Test Email via API</h2>
          <p>This is a test email sent via the Mailgun API to verify your configuration.</p>
          <p>If you received this email, your Mailgun API is properly configured!</p>
          <p>Time sent: ${new Date().toLocaleString()}</p>
          <p>Best regards,<br>The DirectPayDr Team</p>
        </div>
      </div>
    `,
    )

    console.log("Sending request to Mailgun API:", url)

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    })

    console.log("Mailgun API response status:", response.status, response.statusText)

    // Check if response is ok
    if (!response.ok) {
      const text = await response.text()
      console.error("Mailgun API error response:", text)

      let errorMessage = `HTTP error ${response.status}: ${response.statusText}`
      try {
        // Try to parse as JSON, but handle text responses too
        const errorData = JSON.parse(text)
        errorMessage = errorData.message || errorMessage
      } catch (e) {
        // If it's not JSON, use the text directly
        errorMessage = text || errorMessage
      }

      return {
        success: false,
        message: "Failed to send email via Mailgun API",
        error: errorMessage,
      }
    }

    // Parse the JSON response
    const data = await response.json()
    console.log("Mailgun API success response:", data)

    return {
      success: true,
      message: "Test email sent successfully via Mailgun API!",
      messageId: data.id,
    }
  } catch (error) {
    console.error("Error sending test email via API:", error)
    return {
      success: false,
      message: "Failed to send email via Mailgun API",
      error: error instanceof Error ? error.message : String(error),
    }
  }
}
