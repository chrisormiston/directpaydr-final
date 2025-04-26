import nodemailer from "nodemailer"

// Create a mock transporter for environments where DNS lookup isn't available
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
    secure: false,
    requireTLS: true,
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

// Test email configuration
export async function testMailgunConfiguration() {
  try {
    const testRecipient = process.env.TEST_EMAIL_RECIPIENT || "test@example.com"

    const testMailOptions = {
      from: `"DirectPayDr" <${process.env.EMAIL_FROM || "noreply@directpaydr.com"}>`,
      to: testRecipient,
      subject: "Mailgun Test Email",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #1E40AF; padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">DirectPayDr</h1>
          </div>
          <div style="padding: 20px; border: 1px solid #e5e7eb; border-top: none;">
            <h2>Test Email</h2>
            <p>This is a test email to verify that your Mailgun configuration is working correctly.</p>
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

    const info = await transporter.sendMail(testMailOptions)

    // Check if we're in preview mode
    const isPreview = typeof window !== "undefined" || process.env.NODE_ENV === "development"

    return {
      success: true,
      message: isPreview
        ? `Test email simulation successful! In production, this would be sent to: ${testRecipient}`
        : "Test email sent successfully!",
      messageId: info.messageId,
      isPreviewMode: isPreview,
    }
  } catch (error) {
    console.error("Error sending test email:", error)
    return {
      success: false,
      message: "Failed to send test email",
      error: error instanceof Error ? error.message : String(error),
    }
  }
}
