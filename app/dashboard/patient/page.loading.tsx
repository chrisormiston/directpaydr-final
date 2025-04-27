import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function PatientDashboardLoading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Skeleton className="h-10 w-64 mb-6" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="md:col-span-2">
          <CardHeader>
            <Skeleton className="h-6 w-48 mb-2" />
            <Skeleton className="h-4 w-64" />
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Array(4)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="flex flex-col space-y-2">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-5 w-40" />
                  </div>
                ))}
            </div>
          </CardContent>
          <CardFooter>
            <Skeleton className="h-9 w-32" />
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-32 mb-2" />
            <Skeleton className="h-4 w-48" />
          </CardHeader>
          <CardContent className="flex flex-col space-y-2">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <Skeleton key={i} className="h-9 w-full" />
              ))}
          </CardContent>
        </Card>
      </div>

      <Skeleton className="h-8 w-48 mb-4" />
      <Card className="mb-8">
        <CardHeader>
          <Skeleton className="h-6 w-32 mb-2" />
          <Skeleton className="h-4 w-48" />
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <Skeleton className="h-5 w-5 rounded-full" />
                  <div>
                    <Skeleton className="h-4 w-16 mb-1" />
                    <Skeleton className="h-5 w-24" />
                  </div>
                </div>
              ))}
          </div>
          <Skeleton className="h-16 w-full mt-4" />
        </CardContent>
        <CardFooter>
          <Skeleton className="h-9 w-40" />
        </CardFooter>
      </Card>

      <div className="flex justify-between items-center mb-4">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-9 w-24" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <Card key={i}>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div>
                      <Skeleton className="h-5 w-32 mb-1" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                  </div>
                  <Skeleton className="h-4 w-12" />
                </div>
              </CardHeader>
              <CardContent>
                <Skeleton className="h-4 w-full mb-4" />
              </CardContent>
              <CardFooter className="pt-0">
                <Skeleton className="h-9 w-full" />
              </CardFooter>
            </Card>
          ))}
      </div>

      <Skeleton className="h-8 w-48 mb-4" />
      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-48 mb-2" />
          <Skeleton className="h-4 w-64" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-16 w-full" />
        </CardContent>
        <CardFooter>
          <Skeleton className="h-9 w-32" />
        </CardFooter>
      </Card>
    </div>
  )
}
