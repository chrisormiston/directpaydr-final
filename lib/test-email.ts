import { sendVerificationEmail } from "./email"

export async function testEmailConfiguration() {
  try {
    console.log("Testing email configuration...")

    // Send a test email
    await sendVerificationEmail("test@example.com", "Test User", "test-verification-token")

    console.log("Test email sent successfully!")
    return { success: true, message: "Email sent successfully" }
  } catch (error) {
    console.error("Error sending test email:", error)
    return {
      success: false,
      message: "Failed to send email",
      error: error instanceof Error ? error.message : String(error),
    }
  }
}
