"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function TestEmailPage() {
  const router = useRouter()
  const [recipient, setRecipient] = useState(process.env.TEST_EMAIL_RECIPIENT || "")
  const [subject, setSubject] = useState("Test Email from DirectPayDr")
  const [message, setMessage] = useState("This is a test email from the DirectPayDr platform.")
  const [method, setMethod] = useState<"smtp" | "api">("smtp")
  const [useEuRegion, setUseEuRegion] = useState(false)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)
  const [rawResponse, setRawResponse] = useState<string | null>(null)

  const sendTestEmail = async () => {
    setLoading(true)
    setError(null)
    setResult(null)
    setRawResponse(null)

    try {
      const response = await fetch("/api/test-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          recipient,
          subject,
          message,
          method,
          useEuRegion,
        }),
      })

      // Get raw response text first
      const responseText = await response.text()
      setRawResponse(responseText)

      // Try to parse as JSON
      let data
      try {
        data = JSON.parse(responseText)
        setResult(data)
      } catch (e) {
        setError(`Failed to parse response as JSON: ${e instanceof Error ? e.message : String(e)}`)
        console.error("JSON parse error:", e)
        return
      }

      if (!response.ok) {
        setError(`Error: ${data.message || response.statusText}`)
      }
    } catch (err) {
      setError(`Request failed: ${err instanceof Error ? err.message : String(err)}`)
      console.error("Request error:", err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="pb-5 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900">Email Test Tool</h1>
            <p className="mt-2 text-sm text-gray-500">
              Test your Mailgun email configuration with detailed error reporting
            </p>
          </div>

          <div className="mt-6 space-y-6">
            <div>
              <label htmlFor="recipient" className="block text-sm font-medium text-gray-700">
                Recipient Email
              </label>
              <input
                type="email"
                id="recipient"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:space-x-6">
              <div className="mb-4 sm:mb-0">
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Method</label>
                <div className="flex space-x-4">
                  <div className="flex items-center">
                    <input
                      id="smtp"
                      name="method"
                      type="radio"
                      checked={method === "smtp"}
                      onChange={() => setMethod("smtp")}
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    />
                    <label htmlFor="smtp" className="ml-2 block text-sm text-gray-700">
                      SMTP
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="api"
                      name="method"
                      type="radio"
                      checked={method === "api"}
                      onChange={() => setMethod("api")}
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    />
                    <label htmlFor="api" className="ml-2 block text-sm text-gray-700">
                      API
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Region</label>
                <div className="flex items-center">
                  <input
                    id="eu-region"
                    name="eu-region"
                    type="checkbox"
                    checked={useEuRegion}
                    onChange={() => setUseEuRegion(!useEuRegion)}
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                  />
                  <label htmlFor="eu-region" className="ml-2 block text-sm text-gray-700">
                    Use EU Region
                  </label>
                </div>
              </div>
            </div>

            <div className="pt-5">
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => router.push("/admin")}
                  className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={sendTestEmail}
                  disabled={loading || !recipient || !subject || !message}
                  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Test Email"}
                </button>
              </div>
            </div>
          </div>

          {error && (
            <div className="mt-6 bg-red-50 border-l-4 border-red-400 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-red-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">Error</h3>
                  <div className="mt-2 text-sm text-red-700">
                    <p>{error}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {result && (
            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-900">Result</h3>
              <div className={`mt-2 p-4 rounded-md ${result.success ? "bg-green-50" : "bg-red-50"}`}>
                <p className={`text-sm ${result.success ? "text-green-700" : "text-red-700"}`}>{result.message}</p>

                {result.details && (
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-900">Details</h4>
                    <dl className="mt-2 divide-y divide-gray-200">
                      <div className="py-2 flex justify-between">
                        <dt className="text-sm font-medium text-gray-500">Method</dt>
                        <dd className="text-sm text-gray-900">{result.details.method}</dd>
                      </div>
                      <div className="py-2 flex justify-between">
                        <dt className="text-sm font-medium text-gray-500">Region</dt>
                        <dd className="text-sm text-gray-900">{result.details.region}</dd>
                      </div>

                      {result.details.statusCode && (
                        <div className="py-2 flex justify-between">
                          <dt className="text-sm font-medium text-gray-500">Status Code</dt>
                          <dd className="text-sm text-gray-900">{result.details.statusCode}</dd>
                        </div>
                      )}

                      {result.details.smtpResponse && (
                        <div className="py-2 flex justify-between">
                          <dt className="text-sm font-medium text-gray-500">SMTP Response</dt>
                          <dd className="text-sm text-gray-900">{result.details.smtpResponse}</dd>
                        </div>
                      )}

                      {result.details.responseText && (
                        <div className="py-2 flex flex-col">
                          <dt className="text-sm font-medium text-gray-500">API Response</dt>
                          <dd className="mt-1 text-sm text-gray-900 overflow-auto max-h-40">
                            <pre className="whitespace-pre-wrap">{result.details.responseText}</pre>
                          </dd>
                        </div>
                      )}

                      {result.details.configStatus && (
                        <div className="py-2">
                          <dt className="text-sm font-medium text-gray-500">Configuration Status</dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            <ul className="divide-y divide-gray-200">
                              {Object.entries(result.details.configStatus).map(([key, value]) => (
                                <li key={key} className="py-1 flex justify-between">
                                  <span className="text-gray-500">{key}</span>
                                  <span className={value === "configured" ? "text-green-600" : "text-red-600"}>
                                    {value}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </dd>
                        </div>
                      )}
                    </dl>
                  </div>
                )}
              </div>
            </div>
          )}

          {rawResponse && (
            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-900">Raw Response</h3>
              <div className="mt-2 p-4 bg-gray-50 rounded-md">
                <div className="overflow-auto max-h-60">
                  <pre className="text-xs text-gray-700 whitespace-pre-wrap">
                    {rawResponse.length > 500 ? `${rawResponse.substring(0, 500)}... (truncated)` : rawResponse}
                  </pre>
                </div>
              </div>
            </div>
          )}

          {(error || (result && !result.success)) && (
            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-900">Troubleshooting</h3>
              <div className="mt-2 p-4 bg-yellow-50 rounded-md">
                <h4 className="text-sm font-medium text-yellow-800">Common Issues:</h4>
                <ul className="mt-2 list-disc pl-5 text-sm text-yellow-700 space-y-1">
                  <li>
                    <strong>SMTP Timeout</strong>: Check if your hosting provider allows outbound connections on port
                    587
                  </li>
                  <li>
                    <strong>Authentication Failed</strong>: Verify your SMTP credentials in the Mailgun dashboard
                  </li>
                  <li>
                    <strong>API Forbidden</strong>: Make sure you're using the Private API key (not the Public API key)
                  </li>
                  <li>
                    <strong>Domain Not Found</strong>: Verify your domain is properly set up and verified in Mailgun
                  </li>
                  <li>
                    <strong>JSON Parsing Error</strong>: Check for middleware that might be intercepting API responses
                  </li>
                  <li>
                    <strong>Region Issues</strong>: If your account is in the EU region, make sure to check "Use EU
                    Region"
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
