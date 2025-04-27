import { Skeleton } from "@/components/ui/skeleton"

export default function BillingLoading() {
  return (
    <div className="container mx-auto py-8 px-4">
      <Skeleton className="h-10 w-48 mb-6" />

      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white rounded-lg shadow p-6">
          <Skeleton className="h-8 w-40 mb-4" />
          <div className="border rounded-md p-4 mb-4 flex items-start">
            <Skeleton className="h-10 w-10 mr-4" />
            <div className="w-full">
              <Skeleton className="h-5 w-32 mb-2" />
              <Skeleton className="h-4 w-24 mb-3" />
              <Skeleton className="h-4 w-40" />
            </div>
          </div>
          <Skeleton className="h-6 w-40" />
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <Skeleton className="h-8 w-40 mb-4" />
          <div className="mb-4">
            <Skeleton className="h-5 w-32 mb-2" />
            <Skeleton className="h-5 w-48 mb-2" />
            <Skeleton className="h-5 w-24 mb-2" />
            <Skeleton className="h-5 w-56 mb-2" />
            <Skeleton className="h-5 w-32 mb-2" />
          </div>
          <Skeleton className="h-6 w-32" />
        </div>
      </div>

      <div className="mt-8 bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b">
          <Skeleton className="h-8 w-40" />
        </div>
        <div className="p-6">
          <Skeleton className="h-12 w-full mb-4" />
          <Skeleton className="h-16 w-full mb-4" />
          <Skeleton className="h-16 w-full mb-4" />
          <Skeleton className="h-16 w-full" />
        </div>
      </div>
    </div>
  )
}
