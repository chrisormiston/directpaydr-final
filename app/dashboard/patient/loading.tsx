import { Skeleton } from "@/components/ui/skeleton"

export default function PatientDashboardLoading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Skeleton className="h-10 w-64 mb-2" />
        <Skeleton className="h-5 w-96" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Quick Actions Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <Skeleton className="h-7 w-40 mb-4" />
          <div className="space-y-4">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
          </div>
        </div>

        {/* Health Summary Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <Skeleton className="h-7 w-40 mb-4" />
          <div className="space-y-3">
            <div className="flex justify-between">
              <Skeleton className="h-5 w-40" />
              <Skeleton className="h-5 w-5" />
            </div>
            <div className="flex justify-between">
              <Skeleton className="h-5 w-40" />
              <Skeleton className="h-5 w-5" />
            </div>
            <div className="flex justify-between">
              <Skeleton className="h-5 w-40" />
              <Skeleton className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <Skeleton className="h-5 w-40" />
          </div>
        </div>

        {/* Insurance Info Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <Skeleton className="h-7 w-48 mb-4" />
          <div className="space-y-3">
            <div>
              <Skeleton className="h-4 w-20 mb-1" />
              <Skeleton className="h-5 w-48" />
            </div>
            <div>
              <Skeleton className="h-4 w-20 mb-1" />
              <Skeleton className="h-5 w-48" />
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Appointments Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex justify-between items-center mb-4">
          <Skeleton className="h-7 w-48" />
          <Skeleton className="h-5 w-20" />
        </div>

        <div className="text-center py-8">
          <Skeleton className="h-12 w-12 rounded-full mx-auto mb-4" />
          <Skeleton className="h-6 w-48 mx-auto mb-2" />
          <Skeleton className="h-4 w-64 mx-auto mb-4" />
          <Skeleton className="h-10 w-32 mx-auto rounded-md" />
        </div>
      </div>

      {/* Find Care Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <Skeleton className="h-7 w-32 mb-6" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-50 rounded-lg p-6">
              <Skeleton className="h-8 w-8 rounded-full mb-3" />
              <Skeleton className="h-6 w-40 mb-2" />
              <Skeleton className="h-4 w-full" />
            </div>
          ))}
        </div>
      </div>

      {/* Resources Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <Skeleton className="h-7 w-32 mb-4" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map((i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-4">
              <Skeleton className="h-6 w-48 mb-2" />
              <Skeleton className="h-4 w-full mb-3" />
              <Skeleton className="h-5 w-24" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
