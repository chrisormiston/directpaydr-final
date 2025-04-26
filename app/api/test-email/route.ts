import { NextResponse } from "next/server"
import { testMailgunConfiguration, testMailgunAPI } from "@/lib/email"

export async function GET() {
  try {
    // First try SMTP
    const smtpResult = await testMailgunConfiguration()

    // If SMTP fails, try API
    if (!smtpResult.success) {
      console.log("SMTP method failed, trying API method...")
      const apiResult = await testMailgunAPI()

      if (apiResult.success) {
        return NextResponse.json(
          {
            message: apiResult.message,
            messageId: apiResult.messageId,
            method: "api",
          },
          { status: 200 },
        )
      } else {
        // Both methods failed
        return NextResponse.json(
          {
            message: "Email test failed with both SMTP and API methods",
            smtpError: smtpResult.error,
            apiError: apiResult.error,
          },
          { status: 500 },
        )
      }
    }

    // SMTP succeeded
    return NextResponse.json(
      {
        message: smtpResult.message,
        messageId: smtpResult.messageId,
        isPreviewMode: smtpResult.isPreviewMode,
        method: "smtp",
      },
      { status: 200 },
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
