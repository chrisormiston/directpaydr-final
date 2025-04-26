import { Loader2 } from "lucide-react"

export default function AuthErrorLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="h-8 w-8 animate-spin mx-auto text-blue-600" />
        <p className="mt-4 text-lg text-gray-600">Loading...</p>
      </div>
    </div>
  )
}
