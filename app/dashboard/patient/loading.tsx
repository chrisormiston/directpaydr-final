import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function PatientDashboardLoading() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <Skeleton className="h-10 w-[250px]" />
      </div>

      {/* Top Row Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Health Summary Card */}
        <Card className="md:col-span-2">
          <CardHeader>
            <Skeleton className="h-6 w-[150px]" />
            <Skeleton className="h-4 w-[180px]" />
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col space-y-2">
                <Skeleton className="h-4 w-[100px]" />
                <Skeleton className="h-5 w-[150px]" />
              </div>
              <div className="flex flex-col space-y-2">
                <Skeleton className="h-4 w-[120px]" />
                <Skeleton className="h-5 w-[130px]" />
              </div>
              <div className="flex flex-col space-y-2">
                <Skeleton className="h-4 w-[90px]" />
                <Skeleton className="h-5 w-[180px]" />
              </div>
              <div className="flex flex-col space-y-2">
                <Skeleton className="h-4 w-[110px]" />
                <Skeleton className="h-5 w-[80px]" />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Skeleton className="h-10 w-[120px]" />
          </CardFooter>
        </Card>

        {/* Quick Actions Card */}
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-[120px]" />
            <Skeleton className="h-4 w-[180px]" />
          </CardHeader>
          <CardContent className="flex flex-col space-y-2">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
          </CardContent>
        </Card>
      </div>

      {/* Last Procedure Section */}
      <div className="mb-8">
        <Skeleton className="h-8 w-[200px] mb-4" />
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-[150px]" />
            <Skeleton className="h-4 w-[200px]" />
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center space-x-2">
                <Skeleton className="h-5 w-5 rounded-full" />
                <div>
                  <Skeleton className="h-4 w-[50px]" />
                  <Skeleton className="h-5 w-[100px] mt-1" />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Skeleton className="h-5 w-5 rounded-full" />
                <div>
                  <Skeleton className="h-4 w-[50px]" />
                  <Skeleton className="h-5 w-[80px] mt-1" />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Skeleton className="h-5 w-5 rounded-full" />
                <div>
                  <Skeleton className="h-4 w-[70px]" />
                  <Skeleton className="h-5 w-[120px] mt-1" />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Skeleton className="h-5 w-5 rounded-full" />
                <div>
                  <Skeleton className="h-4 w-[40px]" />
                  <Skeleton className="h-5 w-[70px] mt-1" />
                </div>
              </div>
            </div>
            <div className="mt-4 p-3 rounded-md">
              <Skeleton className="h-5 w-[150px]" />
            </div>
          </CardContent>
          <CardFooter>
            <Skeleton className="h-10 w-[150px]" />
          </CardFooter>
        </Card>
      </div>

      {/* Favorite Providers Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <Skeleton className="h-8 w-[220px]" />
          <Skeleton className="h-10 w-[100px]" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div>
                      <Skeleton className="h-5 w-[120px]" />
                      <Skeleton className="h-4 w-[100px] mt-1" />
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Skeleton className="h-4 w-[50px]" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Skeleton className="h-4 w-full" />
              </CardContent>
              <CardFooter className="pt-0">
                <Skeleton className="h-9 w-full" />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Upcoming Appointments */}
      <div>
        <Skeleton className="h-8 w-[250px] mb-4" />
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-[200px]" />
            <Skeleton className="h-4 w-[300px]" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-[80%] mt-2" />
          </CardContent>
          <CardFooter>
            <Skeleton className="h-10 w-[150px]" />
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
