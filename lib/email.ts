import nodemailer from "nodemailer"
import formData from "form-data"
import Mailgun from "mailgun.js"
import { createTransport } from "nodemailer"

// Email service types
export type EmailService = "smtp" | "api"
export type EmailRegion = "us" | "eu"

// Email content interface
export interface EmailContent {
  to: string
  from: string
  subject: string
  text: string
  html?: string
}

// Email response interface
export interface EmailResponse {
  success: boolean
  message: string
  error?: any
  details?: {
    method: EmailService
    region: EmailRegion
    statusCode?: number
    responseText?: string
    smtpResponse?: string
    configStatus?: {
      smtpServer: string
      smtpPort: string
      smtpLogin: string
      smtpPassword: string
      apiKey: string
      domain: string
      emailFrom: string
      testRecipient: string
    }
  }
}

// Get environment variables with fallbacks
const getEnvVar = (name: string, defaultValue = ""): string => {
  return process.env[name] || defaultValue
}

// Check if environment variable is configured
const isConfigured = (name: string): string => {
  return process.env[name] ? "configured" : "not configured"
}

// Get Mailgun region from environment variables
const getMailgunRegion = (): EmailRegion => {
  const regionEnv = getEnvVar("MAILGUN_EU_REGION", "false").toLowerCase()
  return regionEnv === "true" ? "eu" : "us"
}

// Send email using SMTP
export async function sendEmailSMTP(emailContent: EmailContent): Promise<EmailResponse> {
  try {
    const region = getMailgunRegion()
    const smtpServer = getEnvVar("MAILGUN_SMTP_SERVER", region === "eu" ? "smtp.eu.mailgun.org" : "smtp.mailgun.org")
    const smtpPort = Number.parseInt(getEnvVar("MAILGUN_SMTP_PORT", "587"))
    const smtpLogin = getEnvVar("MAILGUN_SMTP_LOGIN")
    const smtpPassword = getEnvVar("MAILGUN_SMTP_PASSWORD")

    // Check for required configuration
    if (!smtpLogin || !smtpPassword) {
      return {
        success: false,
        message: "SMTP credentials not configured",
        details: {
          method: "smtp",
          region,
          configStatus: {
            smtpServer: isConfigured("MAILGUN_SMTP_SERVER"),
            smtpPort: isConfigured("MAILGUN_SMTP_PORT"),
            smtpLogin: isConfigured("MAILGUN_SMTP_LOGIN"),
            smtpPassword: isConfigured("MAILGUN_SMTP_PASSWORD"),
            apiKey: isConfigured("MAILGUN_API_KEY"),
            domain: isConfigured("MAILGUN_DOMAIN"),
            emailFrom: isConfigured("EMAIL_FROM"),
            testRecipient: isConfigured("TEST_EMAIL_RECIPIENT"),
          },
        },
      }
    }

    // Create SMTP transport with extended timeout
    const transport = nodemailer.createTransport({
      host: smtpServer,
      port: smtpPort,
      auth: {
        user: smtpLogin,
        pass: smtpPassword,
      },
      connectionTimeout: 60000, // 60 seconds
      greetingTimeout: 30000, // 30 seconds
      socketTimeout: 60000, // 60 seconds
    })

    // Send email
    const info = await transport.sendMail({
      from: emailContent.from,
      to: emailContent.to,
      subject: emailContent.subject,
      text: emailContent.text,
      html: emailContent.html,
    })

    return {
      success: true,
      message: `Email sent via SMTP: ${info.messageId}`,
      details: {
        method: "smtp",
        region,
        smtpResponse: info.response,
      },
    }
  } catch (error: any) {
    console.error("SMTP Error:", error)

    return {
      success: false,
      message: `Failed to send email via SMTP: ${error.message}`,
      error,
      details: {
        method: "smtp",
        region: getMailgunRegion(),
        smtpResponse: error.response || "No SMTP response",
        configStatus: {
          smtpServer: isConfigured("MAILGUN_SMTP_SERVER"),
          smtpPort: isConfigured("MAILGUN_SMTP_PORT"),
          smtpLogin: isConfigured("MAILGUN_SMTP_LOGIN"),
          smtpPassword: isConfigured("MAILGUN_SMTP_PASSWORD"),
          apiKey: isConfigured("MAILGUN_API_KEY"),
          domain: isConfigured("MAILGUN_DOMAIN"),
          emailFrom: isConfigured("EMAIL_FROM"),
          testRecipient: isConfigured("TEST_EMAIL_RECIPIENT"),
        },
      },
    }
  }
}

// Send email using Mailgun API
export async function sendEmailAPI(emailContent: EmailContent): Promise<EmailResponse> {
  try {
    const region = getMailgunRegion()
    const apiKey = getEnvVar("MAILGUN_API_KEY")
    const domain = getEnvVar("MAILGUN_DOMAIN")

    // Check for required configuration
    if (!apiKey || !domain) {
      return {
        success: false,
        message: "Mailgun API credentials not configured",
        details: {
          method: "api",
          region,
          configStatus: {
            smtpServer: isConfigured("MAILGUN_SMTP_SERVER"),
            smtpPort: isConfigured("MAILGUN_SMTP_PORT"),
            smtpLogin: isConfigured("MAILGUN_SMTP_LOGIN"),
            smtpPassword: isConfigured("MAILGUN_SMTP_PASSWORD"),
            apiKey: isConfigured("MAILGUN_API_KEY"),
            domain: isConfigured("MAILGUN_DOMAIN"),
            emailFrom: isConfigured("EMAIL_FROM"),
            testRecipient: isConfigured("TEST_EMAIL_RECIPIENT"),
          },
        },
      }
    }

    // Initialize Mailgun client
    const mailgun = new Mailgun(formData)
    const client = mailgun.client({
      username: "api",
      key: apiKey,
      url: region === "eu" ? "https://api.eu.mailgun.net" : "https://api.mailgun.net",
    })

    // Send email
    const result = await client.messages.create(domain, {
      from: emailContent.from,
      to: emailContent.to,
      subject: emailContent.subject,
      text: emailContent.text,
      html: emailContent.html,
    })

    return {
      success: true,
      message: `Email sent via API: ${result.id}`,
      details: {
        method: "api",
        region,
        statusCode: 200,
        responseText: JSON.stringify(result),
      },
    }
  } catch (error: any) {
    console.error("API Error:", error)

    let statusCode: number | undefined
    let responseText: string | undefined

    if (error.response) {
      statusCode = error.response.status
      try {
        responseText = JSON.stringify(error.response.data)
      } catch (e) {
        responseText = error.response.statusText || "Unknown error"
      }
    }

    return {
      success: false,
      message: `Failed to send email via API: ${error.message}`,
      error,
      details: {
        method: "api",
        region: getMailgunRegion(),
        statusCode,
        responseText,
        configStatus: {
          smtpServer: isConfigured("MAILGUN_SMTP_SERVER"),
          smtpPort: isConfigured("MAILGUN_SMTP_PORT"),
          smtpLogin: isConfigured("MAILGUN_SMTP_LOGIN"),
          smtpPassword: isConfigured("MAILGUN_SMTP_PASSWORD"),
          apiKey: isConfigured("MAILGUN_API_KEY"),
          domain: isConfigured("MAILGUN_DOMAIN"),
          emailFrom: isConfigured("EMAIL_FROM"),
          testRecipient: isConfigured("TEST_EMAIL_RECIPIENT"),
        },
      },
    }
  }
}

// Send email using preferred method with fallback
export async function sendEmail(emailContent: EmailContent, method: EmailService = "smtp"): Promise<EmailResponse> {
  try {
    // Try primary method
    const response = method === "smtp" ? await sendEmailSMTP(emailContent) : await sendEmailAPI(emailContent)

    // If primary method fails, try fallback
    if (!response.success) {
      console.log(`Primary method (${method}) failed, trying fallback...`)
      const fallbackResponse = method === "smtp" ? await sendEmailAPI(emailContent) : await sendEmailSMTP(emailContent)

      // If fallback succeeds, return success with note
      if (fallbackResponse.success) {
        return {
          ...fallbackResponse,
          message: `${fallbackResponse.message} (Fallback after ${method} failed)`,
        }
      }

      // Both methods failed
      return {
        success: false,
        message: `Both email methods failed. Primary (${method}): ${response.message}. Fallback: ${fallbackResponse.message}`,
        details: {
          method: "smtp",
          region: getMailgunRegion(),
          configStatus: {
            smtpServer: isConfigured("MAILGUN_SMTP_SERVER"),
            smtpPort: isConfigured("MAILGUN_SMTP_PORT"),
            smtpLogin: isConfigured("MAILGUN_SMTP_LOGIN"),
            smtpPassword: isConfigured("MAILGUN_SMTP_PASSWORD"),
            apiKey: isConfigured("MAILGUN_API_KEY"),
            domain: isConfigured("MAILGUN_DOMAIN"),
            emailFrom: isConfigured("EMAIL_FROM"),
            testRecipient: isConfigured("TEST_EMAIL_RECIPIENT"),
          },
        },
      }
    }

    return response
  } catch (error: any) {
    console.error("Email Service Error:", error)
    return {
      success: false,
      message: `Unexpected error: ${error.message}`,
      error,
      details: {
        method,
        region: getMailgunRegion(),
        configStatus: {
          smtpServer: isConfigured("MAILGUN_SMTP_SERVER"),
          smtpPort: isConfigured("MAILGUN_SMTP_PORT"),
          smtpLogin: isConfigured("MAILGUN_SMTP_LOGIN"),
          smtpPassword: isConfigured("MAILGUN_SMTP_PASSWORD"),
          apiKey: isConfigured("MAILGUN_API_KEY"),
          domain: isConfigured("MAILGUN_DOMAIN"),
          emailFrom: isConfigured("EMAIL_FROM"),
          testRecipient: isConfigured("TEST_EMAIL_RECIPIENT"),
        },
      },
    }
  }
}

// Configure email transporter
const transporter = createTransport({
  host: process.env.MAILGUN_SMTP_SERVER,
  port: Number(process.env.MAILGUN_SMTP_PORT),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.MAILGUN_SMTP_LOGIN,
    pass: process.env.MAILGUN_SMTP_PASSWORD,
  },
})

// Send verification email
export async function sendVerificationEmail(email: string, token: string) {
  const verificationUrl = `${process.env.NEXTAUTH_URL}/auth/verify-email?token=${token}`

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: email,
    subject: "Verify your DirectPayDr account",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0070f3;">Welcome to DirectPayDr!</h2>
        <p>Thank you for signing up. Please verify your email address by clicking the button below:</p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="${verificationUrl}" style="background-color: #0070f3; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block;">Verify Email Address</a>
        </div>
        <p>If you didn't create an account, you can safely ignore this email.</p>
        <p>This link will expire in 24 hours.</p>
        <hr style="border: none; border-top: 1px solid #eaeaea; margin: 20px 0;" />
        <p style="color: #666; font-size: 14px;">DirectPayDr - Transparent Healthcare Pricing</p>
      </div>
    `,
  }

  return transporter.sendMail(mailOptions)
}

// Send password reset email
export async function sendPasswordResetEmail(email: string, token: string) {
  const resetUrl = `${process.env.NEXTAUTH_URL}/auth/reset-password?token=${token}`

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: email,
    subject: "Reset your DirectPayDr password",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0070f3;">Reset Your Password</h2>
        <p>You requested a password reset. Click the button below to create a new password:</p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="${resetUrl}" style="background-color: #0070f3; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block;">Reset Password</a>
        </div>
        <p>If you didn't request a password reset, you can safely ignore this email.</p>
        <p>This link will expire in 1 hour.</p>
        <hr style="border: none; border-top: 1px solid #eaeaea; margin: 20px 0;" />
        <p style="color: #666; font-size: 14px;">DirectPayDr - Transparent Healthcare Pricing</p>
      </div>
    `,
  }

  return transporter.sendMail(mailOptions)
}

// Send test email
export async function sendTestEmail(to: string) {
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to,
    subject: "Test Email from DirectPayDr",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0070f3;">Test Email</h2>
        <p>This is a test email from DirectPayDr.</p>
        <p>If you received this email, your email configuration is working correctly.</p>
        <hr style="border: none; border-top: 1px solid #eaeaea; margin: 20px 0;" />
        <p style="color: #666; font-size: 14px;">DirectPayDr - Transparent Healthcare Pricing</p>
      </div>
    `,
  }

  return transporter.sendMail(mailOptions)
}
