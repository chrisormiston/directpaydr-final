import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header Skeleton */}
          <div className="mb-8 text-center">
            <Skeleton className="h-8 w-40 mx-auto mb-6" />
            <Skeleton className="h-10 w-64 mx-auto" />
            <Skeleton className="h-6 w-80 mx-auto mt-2" />
          </div>

          {/* Progress Steps Skeleton */}
          <div className="mb-8">
            <div className="flex items-center justify-between max-w-md mx-auto">
              <div className="flex flex-col items-center">
                <Skeleton className="w-10 h-10 rounded-full" />
                <Skeleton className="mt-2 h-4 w-20" />
              </div>
              <Skeleton className="flex-1 h-1 mx-2" />
              <div className="flex flex-col items-center">
                <Skeleton className="w-10 h-10 rounded-full" />
                <Skeleton className="mt-2 h-4 w-20" />
              </div>
            </div>
          </div>

          {/* Form Card Skeleton */}
          <Skeleton className="h-[600px] w-full rounded-xl" />

          {/* Login Link Skeleton */}
          <div className="mt-8 text-center">
            <Skeleton className="h-6 w-48 mx-auto" />
          </div>

          {/* Benefits Section Skeleton */}
          <div className="mt-12">
            <Skeleton className="h-8 w-64 mx-auto mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <Skeleton key={i} className="h-48 rounded-lg" />
              ))}
            </div>
          </div>

          {/* Testimonial Skeleton */}
          <Skeleton className="mt-12 h-48 w-full rounded-lg" />
        </div>
      </div>
    </div>
  )
}
