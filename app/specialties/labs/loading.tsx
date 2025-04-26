import { Skeleton } from "@/components/ui/skeleton"

export default function LabsLoading() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section Skeleton */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Skeleton className="h-12 w-3/4 mb-4 bg-blue-500/50" />
              <Skeleton className="h-6 w-full mb-2 bg-blue-500/50" />
              <Skeleton className="h-6 w-5/6 mb-6 bg-blue-500/50" />
              <div className="flex flex-col sm:flex-row gap-4">
                <Skeleton className="h-10 w-32 bg-blue-500/50" />
                <Skeleton className="h-10 w-32 bg-blue-500/50" />
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <Skeleton className="h-8 w-3/4 mb-4" />
                <div className="space-y-4">
                  <Skeleton className="h-10 w-full" />
                  <Skeleton className="h-10 w-full" />
                  <Skeleton className="h-10 w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Skeleton */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-4 gap-4 mb-8">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <Skeleton className="h-8 w-1/3 mb-4" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-5/6 mb-6" />

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="border rounded-lg p-4">
                  <Skeleton className="h-6 w-1/2 mb-2" />
                  <Skeleton className="h-4 w-full mb-1" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <Skeleton className="h-8 w-2/5 mb-4" />
            <div className="grid md:grid-cols-2 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex">
                  <Skeleton className="h-10 w-10 mr-4" />
                  <div className="flex-1">
                    <Skeleton className="h-6 w-1/2 mb-2" />
                    <Skeleton className="h-4 w-full mb-1" />
                    <Skeleton className="h-4 w-5/6" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section Skeleton */}
      <div className="py-12 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <Skeleton className="h-8 w-1/2 mx-auto mb-4" />
          <Skeleton className="h-4 w-2/3 mx-auto mb-2" />
          <Skeleton className="h-4 w-1/2 mx-auto mb-8" />
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Skeleton className="h-12 w-40 mx-auto sm:mx-0" />
            <Skeleton className="h-12 w-40 mx-auto sm:mx-0" />
          </div>
        </div>
      </div>
    </div>
  )
}
