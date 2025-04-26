import { Loader2 } from "lucide-react"

export default function SignOutLoading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-center">
        <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-blue-600" />
        <h1 className="text-2xl font-bold mb-2">Signing out...</h1>
        <p className="text-gray-600">Please wait...</p>
      </div>
    </div>
  )
}
