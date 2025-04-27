import type { Metadata } from "next"
import { Search, MapPin, Stethoscope, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Find Providers & Procedures | DirectPayDr",
  description: "Search for healthcare providers and procedures in your area.",
}

export default function FindProvidersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Find Providers & Procedures</h1>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <Tabs defaultValue="providers">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="providers">Find Providers</TabsTrigger>
            <TabsTrigger value="procedures">Find Procedures</TabsTrigger>
          </TabsList>

          <TabsContent value="providers">
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label htmlFor="provider-search" className="block text-sm font-medium text-gray-700 mb-1">
                    Provider Name or Specialty
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                    <Input
                      id="provider-search"
                      placeholder="Search by name, specialty, or condition..."
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <label htmlFor="location-search" className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                    <Input id="location-search" placeholder="City, state, or zip code" className="pl-10" />
                  </div>
                </div>
                <div className="md:self-end">
                  <Button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700">Search Providers</Button>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="text-lg font-semibold mb-3">Popular Specialties</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <Button variant="outline" className="justify-start">
                    <Stethoscope className="mr-2 h-4 w-4" />
                    Primary Care
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Activity className="mr-2 h-4 w-4" />
                    Cardiology
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Stethoscope className="mr-2 h-4 w-4" />
                    Dermatology
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Activity className="mr-2 h-4 w-4" />
                    Orthopedics
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="procedures">
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label htmlFor="procedure-search" className="block text-sm font-medium text-gray-700 mb-1">
                    Procedure or Treatment
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                    <Input id="procedure-search" placeholder="Search by procedure name or type..." className="pl-10" />
                  </div>
                </div>
                <div className="flex-1">
                  <label htmlFor="procedure-location" className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                    <Input id="procedure-location" placeholder="City, state, or zip code" className="pl-10" />
                  </div>
                </div>
                <div className="md:self-end">
                  <Button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700">Search Procedures</Button>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="text-lg font-semibold mb-3">Popular Procedures</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <Button variant="outline" className="justify-start">
                    MRI
                  </Button>
                  <Button variant="outline" className="justify-start">
                    Colonoscopy
                  </Button>
                  <Button variant="outline" className="justify-start">
                    CT Scan
                  </Button>
                  <Button variant="outline" className="justify-start">
                    Mammogram
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Compare Prices</CardTitle>
            <CardDescription>See transparent pricing for procedures across different providers</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500">
              DirectPayDr gives you access to upfront pricing information so you can make informed decisions about your
              healthcare.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Learn More
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Read Reviews</CardTitle>
            <CardDescription>See what other patients are saying about providers</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500">
              Patient reviews and ratings help you choose the right healthcare provider for your needs.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View Reviews
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Save Money</CardTitle>
            <CardDescription>Find affordable healthcare options in your area</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500">
              Our network of providers offers competitive pricing, often 50% less than typical costs.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              See Savings
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
