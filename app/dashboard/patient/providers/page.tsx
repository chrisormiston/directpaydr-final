import type { Metadata } from "next"
import Image from "next/image"
import { Search, Plus, Star, MapPin, Phone, Mail, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "My Providers | DirectPayDr",
  description: "Manage your healthcare providers and find new ones.",
}

export default function MyProvidersPage() {
  // This would normally come from your database
  const providers = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Primary Care",
      image: "/compassionate-doctor-consultation.png",
      address: "123 Medical Center Dr, Phoenix, AZ 85001",
      phone: "(480) 555-1234",
      email: "sjohnson@example.com",
      rating: 4.8,
      reviews: 124,
      lastVisit: "2023-10-15",
      nextAppointment: "2024-04-20",
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Cardiology",
      image: "/compassionate-heart-care.png",
      address: "456 Heart Center Blvd, Phoenix, AZ 85016",
      phone: "(480) 555-5678",
      email: "mchen@example.com",
      rating: 4.9,
      reviews: 87,
      lastVisit: "2023-11-22",
      nextAppointment: null,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">My Providers</h1>
          <p className="text-gray-500 mt-1">Manage your healthcare providers and find new ones</p>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <Input placeholder="Search providers..." className="pl-10 w-full md:w-[250px]" />
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="mr-2 h-4 w-4" />
            Add Provider
          </Button>
        </div>
      </div>

      {providers.length > 0 ? (
        <div className="grid grid-cols-1 gap-6">
          {providers.map((provider) => (
            <Card key={provider.id} className="overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="p-6 md:w-1/4 flex flex-col items-center md:border-r">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                    <Image
                      src={provider.image || "/placeholder.svg"}
                      alt={provider.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-center">{provider.name}</h3>
                  <p className="text-gray-500 text-center mb-3">{provider.specialty}</p>
                  <div className="flex items-center mb-4">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <span className="ml-1 text-sm font-medium">{provider.rating}</span>
                    <span className="ml-1 text-xs text-gray-500">({provider.reviews} reviews)</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    View Profile
                  </Button>
                </div>

                <div className="p-6 md:w-3/4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-2">Contact Information</h4>
                      <div className="space-y-2">
                        <div className="flex items-start">
                          <MapPin className="h-4 w-4 text-gray-500 mt-1 mr-2" />
                          <span className="text-sm">{provider.address}</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 text-gray-500 mr-2" />
                          <span className="text-sm">{provider.phone}</span>
                        </div>
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 text-gray-500 mr-2" />
                          <span className="text-sm">{provider.email}</span>
                        </div>
                      </div>

                      <div className="mt-6">
                        <h4 className="text-sm font-medium text-gray-500 mb-2">Last Visit</h4>
                        <p className="text-sm">
                          {new Date(provider.lastVisit).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-2">Next Appointment</h4>
                      {provider.nextAppointment ? (
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <p className="text-sm font-medium">
                            {new Date(provider.nextAppointment).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">10:30 AM - 11:15 AM</p>
                          <div className="flex gap-2 mt-4">
                            <Button size="sm" variant="outline" className="text-xs">
                              Reschedule
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-xs text-red-600 border-red-200 hover:bg-red-50"
                            >
                              Cancel
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="text-sm text-gray-500">No upcoming appointments</p>
                          <Button size="sm" className="mt-3 bg-blue-600 hover:bg-blue-700 text-xs">
                            Schedule Appointment
                          </Button>
                        </div>
                      )}

                      <div className="mt-6">
                        <h4 className="text-sm font-medium text-gray-500 mb-2">Quick Actions</h4>
                        <div className="flex flex-wrap gap-2">
                          <Button size="sm" variant="outline" className="text-xs">
                            Message
                          </Button>
                          <Button size="sm" variant="outline" className="text-xs">
                            Request Records
                          </Button>
                          <Button size="sm" variant="outline" className="text-xs">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            Patient Portal
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h3 className="text-xl font-medium text-gray-900 mb-2">No providers added yet</h3>
          <p className="text-gray-500 mb-6 max-w-md mx-auto">
            Add your healthcare providers to keep track of appointments, contact information, and more.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="mr-2 h-4 w-4" />
            Add Your First Provider
          </Button>
        </div>
      )}

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Recommended Providers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={`/compassionate-doctor-consultation.png?height=100&width=100&query=doctor${i}`}
                      alt={`Recommended Doctor ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Dr. Alex Rivera</CardTitle>
                    <CardDescription>Dermatology</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center mb-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  <span className="ml-1 text-sm font-medium">4.7</span>
                  <span className="ml-1 text-xs text-gray-500">(93 reviews)</span>
                </div>
                <p className="text-sm text-gray-500 mb-2">789 Skin Care Ave, Phoenix, AZ 85020</p>
                <div className="flex flex-wrap gap-1 mt-3">
                  <Badge variant="secondary" className="text-xs">
                    In-Network
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Telehealth
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    New Patients
                  </Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Profile
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
