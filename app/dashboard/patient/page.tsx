import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { cookies } from "next/headers"
import Link from "next/link"
import { CalendarDays, Clock, MapPin, Star } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

// Mock data for demonstration - in a real app, this would come from the database
const mockLastProcedure = {
  name: "MRI Scan",
  provider: "Imaging Center of Oklahoma",
  date: "2023-11-15",
  time: "10:30 AM",
  location: "Oklahoma City, OK",
  cost: "$450.00",
  status: "Completed",
}

const mockFavoriteProviders = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    location: "Heart Care Specialists, Tulsa",
    image: "/specialist-with-patient.png",
    rating: 4.9,
  },
  {
    id: "2",
    name: "Dr. Michael Chen",
    specialty: "Orthopedics",
    location: "Joint & Spine Center, Oklahoma City",
    image: "/doctor-testimonial-1.png",
    rating: 4.8,
  },
  {
    id: "3",
    name: "Dr. Emily Rodriguez",
    specialty: "Family Medicine",
    location: "Community Health Partners, Norman",
    image: "/doctor-testimonial-2.png",
    rating: 4.7,
  },
]

export default async function PatientDashboard() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/auth/signin")
  }

  // In a real app, we would fetch this data from Supabase
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  // Fetch patient data - this is a placeholder for real data fetching
  // const { data: patientData } = await supabase
  //   .from('patients')
  //   .select('*')
  //   .eq('id', session.user.id)
  //   .single()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Welcome, {session.user?.name || "Patient"}</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Your Health Summary</CardTitle>
            <CardDescription>Quick overview of your health information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col space-y-2">
                <span className="text-sm font-medium text-gray-500">Next Appointment</span>
                <span className="font-semibold">Annual Checkup - Dec 15, 2023</span>
              </div>
              <div className="flex flex-col space-y-2">
                <span className="text-sm font-medium text-gray-500">Primary Care Provider</span>
                <span className="font-semibold">Dr. Emily Rodriguez</span>
              </div>
              <div className="flex flex-col space-y-2">
                <span className="text-sm font-medium text-gray-500">Insurance Status</span>
                <span className="font-semibold">Self-Pay / DirectPayDr Member</span>
              </div>
              <div className="flex flex-col space-y-2">
                <span className="text-sm font-medium text-gray-500">Membership Status</span>
                <span className="font-semibold">Active</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" asChild>
              <Link href="/dashboard/patient/profile">View Full Profile</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks you might need</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col space-y-2">
            <Button variant="outline" className="justify-start" asChild>
              <Link href="/dashboard/patient/find">Find a Provider</Link>
            </Button>
            <Button variant="outline" className="justify-start" asChild>
              <Link href="/dashboard/patient/procedures">Schedule a Procedure</Link>
            </Button>
            <Button variant="outline" className="justify-start" asChild>
              <Link href="/dashboard/patient/billing">View Billing</Link>
            </Button>
            <Button variant="outline" className="justify-start" asChild>
              <Link href="/dashboard/patient/profile">Update Profile</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Last Procedure Section */}
      <h2 className="text-2xl font-bold mb-4">Your Last Procedure</h2>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>{mockLastProcedure.name}</CardTitle>
          <CardDescription>{mockLastProcedure.provider}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center space-x-2">
              <CalendarDays className="h-5 w-5 text-gray-500" />
              <div>
                <p className="text-sm font-medium text-gray-500">Date</p>
                <p>{mockLastProcedure.date}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-gray-500" />
              <div>
                <p className="text-sm font-medium text-gray-500">Time</p>
                <p>{mockLastProcedure.time}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-gray-500" />
              <div>
                <p className="text-sm font-medium text-gray-500">Location</p>
                <p>{mockLastProcedure.location}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-5 w-5 flex items-center justify-center text-gray-500">$</div>
              <div>
                <p className="text-sm font-medium text-gray-500">Cost</p>
                <p>{mockLastProcedure.cost}</p>
              </div>
            </div>
          </div>
          <div className="mt-4 p-3 bg-blue-50 rounded-md">
            <p className="text-sm text-blue-700">
              Status: <span className="font-semibold">{mockLastProcedure.status}</span>
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" asChild>
            <Link href="/dashboard/patient/procedures">View All Procedures</Link>
          </Button>
        </CardFooter>
      </Card>

      {/* Favorite Providers Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Your Favorite Providers</h2>
        <Button variant="outline" asChild>
          <Link href="/dashboard/patient/providers">View All</Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {mockFavoriteProviders.map((provider) => (
          <Card key={provider.id}>
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src={provider.image || "/placeholder.svg"}
                      alt={provider.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{provider.name}</CardTitle>
                    <CardDescription>{provider.specialty}</CardDescription>
                  </div>
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="ml-1 text-sm font-medium">{provider.rating}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <MapPin className="h-4 w-4 mr-1" />
                {provider.location}
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <Button variant="outline" size="sm" className="w-full">
                Schedule Appointment
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Upcoming Appointments Preview */}
      <h2 className="text-2xl font-bold mb-4">Upcoming Appointments</h2>
      <Card>
        <CardHeader>
          <CardTitle>No upcoming appointments</CardTitle>
          <CardDescription>Schedule your next appointment with one of our providers</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500">
            You don't have any upcoming appointments scheduled. Would you like to book one now?
          </p>
        </CardContent>
        <CardFooter>
          <Button asChild>
            <Link href="/dashboard/patient/find">Find a Provider</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
