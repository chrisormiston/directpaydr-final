import Image from "next/image"
import { ArrowRight, ChevronRight, Filter, MapPin, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Separator } from "@/components/ui/separator"

export default function ProceduresPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Find and Compare Medical Procedures</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Browse thousands of procedures with transparent pricing and save an average of 50% on your healthcare.
            </p>
          </div>
        </div>
      </section>

      {/* Search Box */}
      <section className="container mx-auto px-4 -mt-6 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input placeholder="Search procedures (MRI, X-Ray, Blood Test...)" className="pl-10 py-6 text-base" />
              </div>
            </div>
            <div>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input placeholder="Zip Code or City" className="pl-10 py-6 text-base" />
              </div>
            </div>
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white py-6">
              Search
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Filters</h2>
                <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                  Reset All
                </Button>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center">
                      <Checkbox id={`category-${index}`} />
                      <label
                        htmlFor={`category-${index}`}
                        className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
                <Button variant="link" size="sm" className="text-blue-600 hover:text-blue-700 p-0 mt-2">
                  Show more
                </Button>
              </div>

              <Separator className="my-6" />

              {/* Price Range Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Price Range</h3>
                <Slider defaultValue={[500]} max={5000} step={100} className="my-6" />
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">$0</span>
                  <span className="text-sm font-medium">$500</span>
                  <span className="text-sm text-gray-500">$5,000+</span>
                </div>
              </div>

              <Separator className="my-6" />

              {/* Location Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Distance</h3>
                <div className="space-y-2">
                  {distances.map((distance, index) => (
                    <div key={index} className="flex items-center">
                      <Checkbox id={`distance-${index}`} />
                      <label
                        htmlFor={`distance-${index}`}
                        className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {distance}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-4">
                Apply Filters
                <Filter className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Procedures List */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h2 className="text-2xl font-bold">All Procedures</h2>
                  <p className="text-gray-500">Showing 1-12 of 248 results</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">Sort by:</span>
                  <select className="border rounded-md p-2 text-sm">
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Distance</option>
                    <option>Popularity</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {procedures.map((procedure, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={procedure.image || "/placeholder.svg"}
                      alt={procedure.name}
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute top-4 right-4 bg-green-100 text-green-800 hover:bg-green-100">
                      Save {procedure.savingsPercent}%
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold">{procedure.name}</h3>
                      <p className="text-gray-500">{procedure.category}</p>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{procedure.location}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-500">DirectPayDr Price</p>
                        <p className="text-lg font-bold text-blue-700">${procedure.price}</p>
                        <p className="text-xs text-gray-500">Typical Price: ${procedure.typicalPrice}</p>
                      </div>
                      <Button variant="outline" className="text-blue-600 border-blue-600">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <nav className="flex items-center gap-1">
                <Button variant="outline" size="icon" disabled>
                  <ChevronRight className="h-4 w-4 rotate-180" />
                </Button>
                <Button variant="outline" size="sm" className="bg-blue-600 text-white hover:bg-blue-700">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <Button variant="outline" size="sm">
                  4
                </Button>
                <Button variant="outline" size="sm">
                  5
                </Button>
                <Button variant="outline" size="icon">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 py-16 mt-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Not Finding What You Need?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Our healthcare specialists can help you find the right procedure at the right price.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            Contact Us
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  )
}

// Sample data
const categories = [
  "Imaging & Radiology",
  "Laboratory Tests",
  "Primary Care",
  "Cardiology",
  "Orthopedics",
  "Gastroenterology",
  "Women's Health",
  "Dermatology",
]

const distances = ["Within 5 miles", "Within 10 miles", "Within 25 miles", "Within 50 miles", "Any distance"]

const procedures = [
  {
    name: "MRI Scan - Brain",
    category: "Imaging & Radiology",
    price: "499",
    typicalPrice: "1,500",
    savingsPercent: "67",
    location: "Memorial Hospital (2.3 miles)",
    image: "/medical-imaging-suite.png",
  },
  {
    name: "Colonoscopy",
    category: "Gastroenterology",
    price: "1,100",
    typicalPrice: "2,800",
    savingsPercent: "61",
    location: "City Medical Center (3.5 miles)",
    image: "/caring-doctor-visit.png",
  },
  {
    name: "Comprehensive Blood Panel",
    category: "Laboratory Tests",
    price: "79",
    typicalPrice: "280",
    savingsPercent: "72",
    location: "LabCorp (1.2 miles)",
    image: "/blood-test-tubes.png",
  },
  {
    name: "X-Ray - Chest",
    category: "Imaging & Radiology",
    price: "89",
    typicalPrice: "250",
    savingsPercent: "64",
    location: "Urgent Care Center (0.8 miles)",
    image: "/medical-xray-room.png",
  },
  {
    name: "Physical Therapy Session",
    category: "Rehabilitation",
    price: "75",
    typicalPrice: "150",
    savingsPercent: "50",
    location: "PhysioHealth (4.1 miles)",
    image: "/guided-knee-rehab.png",
  },
  {
    name: "Ultrasound - Abdominal",
    category: "Imaging & Radiology",
    price: "199",
    typicalPrice: "450",
    savingsPercent: "56",
    location: "Women's Health Center (2.7 miles)",
    image: "/abdominal-ultrasound.png",
  },
]
