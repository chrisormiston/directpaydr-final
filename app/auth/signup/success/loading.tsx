import { Loader2 } from "lucide-react"

export default function SignupSuccessLoading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center space-y-4">
        <Loader2 className="h-12 w-12 animate-spin text-blue-600" />
        <h2 className="text-xl font-semibold">Loading...</h2>
      </div>
    </div>
  )
}
