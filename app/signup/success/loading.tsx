import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header Skeleton */}
          <div className="mb-8 text-center">
            <Skeleton className="h-8 w-40 mx-auto mb-6" />
          </div>

          {/* Success Card Skeleton */}
          <Skeleton className="h-[400px] w-full rounded-xl" />

          {/* Next Steps Skeleton */}
          <div className="mt-12">
            <Skeleton className="h-8 w-48 mx-auto mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <Skeleton key={i} className="h-48 rounded-lg" />
              ))}
            </div>
          </div>

          {/* Help Section Skeleton */}
          <div className="mt-12 text-center">
            <Skeleton className="h-6 w-64 mx-auto" />
          </div>
        </div>
      </div>
    </div>
  )
}
