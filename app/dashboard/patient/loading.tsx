import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function PatientDashboardLoading() {
  return (
    <div className="container py-8">
      <div className="mb-8">
        <Skeleton className="h-10 w-[250px]" />
        <Skeleton className="mt-2 h-4 w-[350px]" />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-[120px]" />
            <Skeleton className="h-4 w-[180px]" />
          </CardHeader>
          <CardContent className="grid gap-4">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
          </CardContent>
        </Card>

        {/* Health Summary */}
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-[150px]" />
            <Skeleton className="h-4 w-[180px]" />
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center gap-4">
              <Skeleton className="h-5 w-5 rounded-full" />
              <div className="space-y-1">
                <Skeleton className="h-4 w-[100px]" />
                <Skeleton className="h-3 w-[80px]" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Skeleton className="h-5 w-5 rounded-full" />
              <div className="space-y-1">
                <Skeleton className="h-4 w-[120px]" />
                <Skeleton className="h-3 w-[90px]" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Skeleton className="h-5 w-5 rounded-full" />
              <div className="space-y-1">
                <Skeleton className="h-4 w-[110px]" />
                <Skeleton className="h-3 w-[70px]" />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Skeleton className="h-10 w-full" />
          </CardFooter>
        </Card>

        {/* Insurance Information */}
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-[180px]" />
            <Skeleton className="h-4 w-[200px]" />
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center gap-4">
              <Skeleton className="h-5 w-5 rounded-full" />
              <div className="space-y-1">
                <Skeleton className="h-4 w-[80px]" />
                <Skeleton className="h-3 w-[150px]" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Skeleton className="h-5 w-5 rounded-full" />
              <div className="space-y-1">
                <Skeleton className="h-4 w-[100px]" />
                <Skeleton className="h-3 w-[120px]" />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Skeleton className="h-10 w-full" />
          </CardFooter>
        </Card>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {/* Upcoming Appointments */}
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-[200px]" />
            <Skeleton className="h-4 w-[250px]" />
          </CardHeader>
          <CardContent>
            <div className="rounded-md border p-4 text-center">
              <Skeleton className="mx-auto h-4 w-[300px]" />
              <Skeleton className="mx-auto mt-4 h-10 w-[200px]" />
            </div>
          </CardContent>
        </Card>

        {/* Find Care */}
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-[100px]" />
            <Skeleton className="h-4 w-[220px]" />
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-24 w-full" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Resources */}
      <div className="mt-8">
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-[100px]" />
            <Skeleton className="h-4 w-[180px]" />
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-24 w-full" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
