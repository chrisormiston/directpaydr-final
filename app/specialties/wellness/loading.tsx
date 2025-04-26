import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section Skeleton */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-green-50 to-teal-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <Skeleton className="h-12 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-4/6" />
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Skeleton className="h-10 w-32" />
                <Skeleton className="h-10 w-32" />
              </div>
            </div>
            <div className="flex justify-center">
              <Skeleton className="w-full max-w-[500px] h-[400px] rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Skeleton */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-8">
            <div className="flex space-x-4 overflow-auto">
              <Skeleton className="h-10 w-24 flex-shrink-0" />
              <Skeleton className="h-10 w-24 flex-shrink-0" />
              <Skeleton className="h-10 w-24 flex-shrink-0" />
              <Skeleton className="h-10 w-24 flex-shrink-0" />
            </div>

            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
              <div className="space-y-4">
                <Skeleton className="h-8 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-4/6" />

                <div className="space-y-2">
                  <div className="flex items-start">
                    <Skeleton className="h-6 w-6 mr-2" />
                    <Skeleton className="h-4 w-5/6" />
                  </div>
                  <div className="flex items-start">
                    <Skeleton className="h-6 w-6 mr-2" />
                    <Skeleton className="h-4 w-4/6" />
                  </div>
                  <div className="flex items-start">
                    <Skeleton className="h-6 w-6 mr-2" />
                    <Skeleton className="h-4 w-3/6" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Skeleton className="h-8 w-1/2" />
                <div className="space-y-4">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex items-start">
                      <Skeleton className="h-8 w-8 rounded-full mr-3" />
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-32" />
                        <Skeleton className="h-4 w-64" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="border rounded-lg overflow-hidden">
                  <Skeleton className="h-48 w-full" />
                  <div className="p-4 space-y-4">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                    <div className="flex justify-between items-center">
                      <div>
                        <Skeleton className="h-4 w-20" />
                        <Skeleton className="h-6 w-24" />
                      </div>
                      <Skeleton className="h-6 w-20 rounded-full" />
                    </div>
                    <Skeleton className="h-10 w-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section Skeleton */}
      <section className="w-full py-12 md:py-24 bg-teal-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Skeleton className="h-10 w-3/4 mx-auto" />
              <Skeleton className="h-4 w-full max-w-[900px] mx-auto" />
              <Skeleton className="h-4 w-5/6 max-w-[800px] mx-auto" />
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Skeleton className="h-12 w-40" />
              <Skeleton className="h-12 w-40" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
