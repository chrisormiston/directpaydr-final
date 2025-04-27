import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Search, Plus, Calendar, Clock, DollarSign, FileText, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "My Procedures | DirectPayDr",
  description: "View and manage your healthcare procedures and appointments.",
}

export default function MyProceduresPage() {
  // This would normally come from your database
  const upcomingProcedures = [
    {
      id: 1,
      name: "MRI - Lower Back",
      provider: "Arizona Imaging Center",
      providerImage: "/modern-hospital-exterior.png",
      date: "2024-05-15",
      time: "10:30 AM",
      address: "789 Medical Parkway, Phoenix, AZ 85012",
      cost: 850,
      prepaid: true,
      status: "confirmed",
      documents: ["Pre-procedure instructions", "Insurance verification"],
    },
    {
      id: 2,
      name: "Annual Physical",
      provider: "Dr. Sarah Johnson",
      providerImage: "/compassionate-doctor-consultation.png",
      date: "2024-06-02",
      time: "9:00 AM",
      address: "123 Medical Center Dr, Phoenix, AZ 85001",
      cost: 150,
      prepaid: false,
      status: "scheduled",
      documents: ["Health questionnaire"],
    },
  ]

  const pastProcedures = [
    {
      id: 3,
      name: "Blood Work Panel",
      provider: "LabCorp",
      providerImage: "/science-lab-setup.png",
      date: "2023-12-10",
      cost: 120,
      prepaid: true,
      status: "completed",
      documents: ["Lab results", "Receipt"],
    },
    {
      id: 4,
      name: "X-Ray - Chest",
      provider: "Arizona Imaging Center",
      providerImage: "/modern-hospital-exterior.png",
      date: "2023-10-05",
      cost: 275,
      prepaid: true,
      status: "completed",
      documents: ["Radiology report", "Receipt"],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">My Procedures</h1>
          <p className="text-gray-500 mt-1">View and manage your healthcare procedures</p>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <Input placeholder="Search procedures..." className="pl-10 w-full md:w-[250px]" />
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="mr-2 h-4 w-4" />
            Schedule New
          </Button>
        </div>
      </div>

      <Tabs defaultValue="upcoming" className="mb-8">
        <TabsList className="grid w-full grid-cols-2 md:w-[400px]">
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="past">Past Procedures</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="mt-6">
          {upcomingProcedures.length > 0 ? (
            <div className="grid grid-cols-1 gap-6">
              {upcomingProcedures.map((procedure) => (
                <Card key={procedure.id}>
                  <div className="flex flex-col md:flex-row">
                    <div className="p-6 md:w-1/4 flex flex-col md:border-r">
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden mb-4 mx-auto md:mx-0">
                        <Image
                          src={procedure.providerImage || "/placeholder.svg"}
                          alt={procedure.provider}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-center md:text-left">{procedure.name}</h3>
                      <p className="text-gray-500 text-center md:text-left">{procedure.provider}</p>

                      <div className="mt-4 flex items-center justify-center md:justify-start">
                        <Badge
                          className={
                            procedure.status === "confirmed"
                              ? "bg-green-100 text-green-800 hover:bg-green-100"
                              : "bg-blue-100 text-blue-800 hover:bg-blue-100"
                          }
                        >
                          {procedure.status === "confirmed" ? (
                            <CheckCircle className="mr-1 h-3 w-3" />
                          ) : (
                            <Clock className="mr-1 h-3 w-3" />
                          )}
                          {procedure.status === "confirmed" ? "Confirmed" : "Scheduled"}
                        </Badge>
                      </div>
                    </div>

                    <div className="p-6 md:w-3/4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 mb-2">Appointment Details</h4>
                          <div className="space-y-3">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 text-gray-500 mr-2" />
                              <span className="text-sm">
                                {new Date(procedure.date).toLocaleDateString("en-US", {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                })}
                              </span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 text-gray-500 mr-2" />
                              <span className="text-sm">{procedure.time}</span>
                            </div>
                            <div className="flex items-start">
                              <DollarSign className="h-4 w-4 text-gray-500 mt-1 mr-2" />
                              <div>
                                <span className="text-sm font-medium">${procedure.cost}</span>
                                {procedure.prepaid && (
                                  <Badge variant="outline" className="ml-2 text-xs border-green-200 text-green-700">
                                    Prepaid
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="mt-6">
                            <h4 className="text-sm font-medium text-gray-500 mb-2">Documents</h4>
                            <div className="space-y-2">
                              {procedure.documents.map((doc, index) => (
                                <div key={index} className="flex items-center">
                                  <FileText className="h-4 w-4 text-gray-500 mr-2" />
                                  <Link href="#" className="text-sm text-blue-600 hover:underline">
                                    {doc}
                                  </Link>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-medium text-gray-500 mb-2">Location</h4>
                          <p className="text-sm mb-4">{procedure.address}</p>

                          <div className="bg-gray-50 p-4 rounded-lg mb-6">
                            <h5 className="text-sm font-medium mb-2">Preparation Instructions</h5>
                            <p className="text-sm text-gray-600 mb-3">
                              Please review your pre-procedure instructions and arrive 15 minutes before your
                              appointment.
                            </p>
                            <Button size="sm" variant="outline" className="text-xs">
                              View Instructions
                            </Button>
                          </div>

                          <div className="flex flex-wrap gap-2">
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
                            <Button size="sm" className="text-xs bg-blue-600 hover:bg-blue-700">
                              Check In Online
                            </Button>
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
              <h3 className="text-xl font-medium text-gray-900 mb-2">No upcoming procedures</h3>
              <p className="text-gray-500 mb-6 max-w-md mx-auto">
                You don't have any upcoming procedures or appointments scheduled.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="mr-2 h-4 w-4" />
                Schedule a Procedure
              </Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="past" className="mt-6">
          {pastProcedures.length > 0 ? (
            <div className="grid grid-cols-1 gap-6">
              {pastProcedures.map((procedure) => (
                <Card key={procedure.id}>
                  <div className="flex flex-col md:flex-row">
                    <div className="p-6 md:w-1/4 flex flex-col md:border-r">
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden mb-4 mx-auto md:mx-0">
                        <Image
                          src={procedure.providerImage || "/placeholder.svg"}
                          alt={procedure.provider}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-center md:text-left">{procedure.name}</h3>
                      <p className="text-gray-500 text-center md:text-left">{procedure.provider}</p>

                      <div className="mt-4 flex items-center justify-center md:justify-start">
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                          <CheckCircle className="mr-1 h-3 w-3" />
                          Completed
                        </Badge>
                      </div>
                    </div>

                    <div className="p-6 md:w-3/4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 mb-2">Procedure Details</h4>
                          <div className="space-y-3">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 text-gray-500 mr-2" />
                              <span className="text-sm">
                                {new Date(procedure.date).toLocaleDateString("en-US", {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                })}
                              </span>
                            </div>
                            <div className="flex items-start">
                              <DollarSign className="h-4 w-4 text-gray-500 mt-1 mr-2" />
                              <div>
                                <span className="text-sm font-medium">${procedure.cost}</span>
                                <Badge variant="outline" className="ml-2 text-xs border-green-200 text-green-700">
                                  Paid
                                </Badge>
                              </div>
                            </div>
                          </div>

                          <div className="mt-6">
                            <h4 className="text-sm font-medium text-gray-500 mb-2">Documents</h4>
                            <div className="space-y-2">
                              {procedure.documents.map((doc, index) => (
                                <div key={index} className="flex items-center">
                                  <FileText className="h-4 w-4 text-gray-500 mr-2" />
                                  <Link href="#" className="text-sm text-blue-600 hover:underline">
                                    {doc}
                                  </Link>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div>
                          <div className="bg-gray-50 p-4 rounded-lg mb-6">
                            <h5 className="text-sm font-medium mb-2">Follow-up Information</h5>
                            <p className="text-sm text-gray-600 mb-3">
                              If you have any questions about your procedure or results, please contact your provider.
                            </p>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            <Button size="sm" variant="outline" className="text-xs">
                              View Results
                            </Button>
                            <Button size="sm" variant="outline" className="text-xs">
                              Download Receipt
                            </Button>
                            <Button size="sm" className="text-xs bg-blue-600 hover:bg-blue-700">
                              Schedule Follow-up
                            </Button>
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
              <h3 className="text-xl font-medium text-gray-900 mb-2">No past procedures</h3>
              <p className="text-gray-500 mb-6 max-w-md mx-auto">
                You don't have any past procedures or appointments in your history.
              </p>
            </div>
          )}
        </TabsContent>
      </Tabs>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Recommended Procedures</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle>Annual Physical Exam</CardTitle>
                <CardDescription>Preventive Care</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 mb-4">
                  Regular check-ups help maintain your health and catch potential issues early.
                </p>
                <div className="flex items-center mb-2">
                  <DollarSign className="h-4 w-4 text-gray-500 mr-1" />
                  <span className="text-sm font-medium">$120 - $180</span>
                </div>
                <div className="flex flex-wrap gap-1 mt-3">
                  <Badge variant="secondary" className="text-xs">
                    Preventive
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Insurance Covered
                  </Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
