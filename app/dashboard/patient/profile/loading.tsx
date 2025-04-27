import { Skeleton } from "@/components/ui/skeleton"

export default function PatientProfileLoading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Skeleton className="h-10 w-40 mb-2" />
        <Skeleton className="h-5 w-64" />
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-blue-600 px-6 py-4">
          <div className="flex items-center">
            <Skeleton className="h-14 w-14 rounded-full" />
            <div className="ml-4">
              <Skeleton className="h-6 w-48 bg-blue-300 mb-1" />
              <Skeleton className="h-4 w-32 bg-blue-300" />
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <Skeleton className="h-6 w-48" />
            <Skeleton className="h-4 w-16" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i}>
                <Skeleton className="h-4 w-24 mb-1" />
                <Skeleton className="h-5 w-48" />
              </div>
            ))}
          </div>

          <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-4 w-16" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i}>
                  <Skeleton className="h-4 w-24 mb-1" />
                  <Skeleton className="h-5 w-48" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
              <Skeleton className="h-6 w-48" />
              <Skeleton className="h-4 w-16" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2].map((i) => (
                <div key={i}>
                  <Skeleton className="h-4 w-24 mb-1" />
                  <Skeleton className="h-5 w-48" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
