import { NextResponse } from "next/server"
import { testMailgunConfiguration } from "@/lib/email"

export async function GET() {
  try {
    const result = await testMailgunConfiguration()

    if (result.success) {
      return NextResponse.json(
        {
          message: result.message,
          messageId: result.messageId,
          isPreviewMode: result.isPreviewMode,
        },
        { status: 200 },
      )
    } else {
      return NextResponse.json(
        {
          message: "Email test failed",
          error: result.error,
        },
        { status: 500 },
      )
    }
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
