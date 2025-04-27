import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function PatientProfileLoading() {
  return (
    <div className="container py-8">
      <div className="mb-8">
        <Skeleton className="h-10 w-[150px]" />
        <Skeleton className="mt-2 h-4 w-[300px]" />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Personal Information */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <Skeleton className="h-6 w-[180px]" />
              <Skeleton className="mt-1 h-4 w-[150px]" />
            </div>
            <Skeleton className="h-9 w-[60px]" />
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              {[...Array(5)].map((_, i) => (
                <div key={i}>
                  <Skeleton className="h-4 w-[100px]" />
                  <Skeleton className="mt-1 h-5 w-[150px]" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Address Information */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <Skeleton className="h-6 w-[180px]" />
              <Skeleton className="mt-1 h-4 w-[150px]" />
            </div>
            <Skeleton className="h-9 w-[60px]" />
          </CardHeader>
          <CardContent className="grid gap-4">
            <div>
              <Skeleton className="h-4 w-[100px]" />
              <Skeleton className="mt-1 h-5 w-full" />
            </div>
            <div>
              <Skeleton className="h-4 w-[100px]" />
              <Skeleton className="mt-1 h-5 w-full" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[...Array(3)].map((_, i) => (
                <div key={i}>
                  <Skeleton className="h-4 w-[60px]" />
                  <Skeleton className="mt-1 h-5 w-full" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Insurance Information */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <Skeleton className="h-6 w-[180px]" />
              <Skeleton className="mt-1 h-4 w-[150px]" />
            </div>
            <Skeleton className="h-9 w-[60px]" />
          </CardHeader>
          <CardContent className="grid gap-4">
            <div>
              <Skeleton className="h-4 w-[120px]" />
              <Skeleton className="mt-1 h-5 w-[200px]" />
            </div>
            <div>
              <Skeleton className="h-4 w-[100px]" />
              <Skeleton className="mt-1 h-5 w-[180px]" />
            </div>
            <div className="mt-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="mt-1 h-4 w-full" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
