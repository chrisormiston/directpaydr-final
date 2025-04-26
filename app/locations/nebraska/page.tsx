"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Search, DollarSign, Building2, Star, ArrowRight, Phone, Mail, Calendar } from "lucide-react"

export default function NebraskaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                  DirectPayDr in Nebraska
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Find affordable healthcare procedures and providers across Nebraska. Save up to 60% on medical
                  procedures with transparent, upfront pricing.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="#providers">Find Providers</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#procedures">Browse Procedures</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                alt="Nebraska healthcare map"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height="310"
                src="/usa-map-locations.png"
                width="550"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cities */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-gray-50" id="cities">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                Featured Cities in Nebraska
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find DirectPayDr providers in these major Nebraska cities and surrounding areas
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[
              { name: "Omaha", providers: 24, procedures: 150 },
              { name: "Lincoln", providers: 18, procedures: 120 },
              { name: "Grand Island", providers: 8, procedures: 75 },
              { name: "Kearney", providers: 6, procedures: 60 },
              { name: "Fremont", providers: 5, procedures: 45 },
              { name: "Norfolk", providers: 4, procedures: 40 },
            ].map((city) => (
              <Card key={city.name} className="transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    {city.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    <span className="font-medium text-primary">{city.providers}</span> providers
                  </p>
                  <p className="text-sm text-gray-500">
                    <span className="font-medium text-primary">{city.procedures}</span> procedures available
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`#${city.name.toLowerCase()}`}>
                      View Providers <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Providers */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-white" id="providers">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                Featured Providers in Nebraska
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Top-rated healthcare providers offering transparent pricing across Nebraska
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[
              {
                name: "Nebraska Medical Center",
                location: "Omaha",
                type: "Hospital",
                rating: 4.8,
                procedures: 120,
                image: "/modern-hospital-exterior.png",
              },
              {
                name: "Lincoln Surgical Center",
                location: "Lincoln",
                type: "Surgical Center",
                rating: 4.7,
                procedures: 85,
                image: "/specialist-consultation.png",
              },
              {
                name: "Heartland Imaging",
                location: "Omaha",
                type: "Imaging Center",
                rating: 4.9,
                procedures: 45,
                image: "/medical-imaging-suite.png",
              },
              {
                name: "Grand Island Medical Group",
                location: "Grand Island",
                type: "Multi-specialty Clinic",
                rating: 4.6,
                procedures: 75,
                image: "/doctor-with-tablet.png",
              },
              {
                name: "Kearney Regional Medical Center",
                location: "Kearney",
                type: "Hospital",
                rating: 4.5,
                procedures: 90,
                image: "/caring-doctor-visit.png",
              },
              {
                name: "Nebraska Laboratory Services",
                location: "Lincoln",
                type: "Laboratory",
                rating: 4.7,
                procedures: 30,
                image: "/laboratory-testing.png",
              },
            ].map((provider) => (
              <Card key={provider.name} className="transition-all hover:shadow-lg">
                <CardHeader className="p-0">
                  <div className="h-48 w-full overflow-hidden rounded-t-lg">
                    <img
                      alt={provider.name}
                      className="h-full w-full object-cover"
                      height="192"
                      src={provider.image || "/placeholder.svg"}
                      width="384"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl font-bold">{provider.name}</CardTitle>
                  <CardDescription className="flex items-center mt-2">
                    <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                    {provider.location}, Nebraska
                  </CardDescription>
                  <CardDescription className="flex items-center mt-1">
                    <Building2 className="h-4 w-4 mr-1 text-gray-400" />
                    {provider.type}
                  </CardDescription>
                  <div className="flex items-center mt-2">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span className="ml-1 text-sm font-medium">{provider.rating}/5</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-sm text-gray-500">{provider.procedures} procedures</span>
                  </div>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">
                  <Button className="w-full" asChild>
                    <Link href="#">View Provider</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Button variant="outline" asChild>
              <Link href="#">
                View All Nebraska Providers <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Procedures */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-gray-50" id="procedures">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                Popular Procedures in Nebraska
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Browse our most requested procedures with transparent pricing
              </p>
            </div>
          </div>
          <Tabs defaultValue="imaging" className="mt-8">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
              <TabsTrigger value="imaging">Imaging</TabsTrigger>
              <TabsTrigger value="surgery">Surgery</TabsTrigger>
              <TabsTrigger value="labs">Labs</TabsTrigger>
              <TabsTrigger value="office">Office Visits</TabsTrigger>
              <TabsTrigger value="wellness">Wellness</TabsTrigger>
            </TabsList>
            <TabsContent value="imaging" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: "MRI", price: "$450", savings: "60%", image: "/mri-machine-modern.png" },
                  { name: "CT Scan", price: "$325", savings: "55%", image: "/medical-imaging-suite.png" },
                  { name: "X-Ray", price: "$85", savings: "50%", image: "/medical-xray-room.png" },
                  { name: "Ultrasound", price: "$175", savings: "45%", image: "/abdominal-ultrasound.png" },
                  { name: "Mammogram", price: "$150", savings: "50%", image: "/medical-imaging-suite.png" },
                  { name: "DEXA Scan", price: "$125", savings: "45%", image: "/medical-xray-room.png" },
                ].map((procedure) => (
                  <Card key={procedure.name} className="transition-all hover:shadow-lg">
                    <CardHeader className="p-0">
                      <div className="h-40 w-full overflow-hidden rounded-t-lg">
                        <img
                          alt={procedure.name}
                          className="h-full w-full object-cover"
                          height="160"
                          src={procedure.image || "/placeholder.svg"}
                          width="384"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <CardTitle className="text-xl font-bold">{procedure.name}</CardTitle>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center">
                          <DollarSign className="h-5 w-5 text-primary" />
                          <span className="text-lg font-bold text-primary">{procedure.price}</span>
                        </div>
                        <div className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
                          Save {procedure.savings}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="px-6 pb-6 pt-0">
                      <Button className="w-full" asChild>
                        <Link href="#">View Details</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="surgery" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: "Colonoscopy", price: "$1,100", savings: "65%", image: "/specialist-consultation.png" },
                  { name: "Hernia Repair", price: "$3,500", savings: "60%", image: "/surgical-procedure.png" },
                  { name: "Cataract Surgery", price: "$2,800", savings: "55%", image: "/specialist-with-patient.png" },
                  { name: "Knee Arthroscopy", price: "$3,200", savings: "60%", image: "/guided-knee-rehab.png" },
                  { name: "Gallbladder Removal", price: "$4,500", savings: "55%", image: "/surgical-procedure.png" },
                  {
                    name: "Carpal Tunnel Release",
                    price: "$2,100",
                    savings: "50%",
                    image: "/specialist-with-patient.png",
                  },
                ].map((procedure) => (
                  <Card key={procedure.name} className="transition-all hover:shadow-lg">
                    <CardHeader className="p-0">
                      <div className="h-40 w-full overflow-hidden rounded-t-lg">
                        <img
                          alt={procedure.name}
                          className="h-full w-full object-cover"
                          height="160"
                          src={procedure.image || "/placeholder.svg"}
                          width="384"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <CardTitle className="text-xl font-bold">{procedure.name}</CardTitle>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center">
                          <DollarSign className="h-5 w-5 text-primary" />
                          <span className="text-lg font-bold text-primary">{procedure.price}</span>
                        </div>
                        <div className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
                          Save {procedure.savings}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="px-6 pb-6 pt-0">
                      <Button className="w-full" asChild>
                        <Link href="#">View Details</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="labs" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "Comprehensive Metabolic Panel",
                    price: "$35",
                    savings: "70%",
                    image: "/laboratory-testing.png",
                  },
                  { name: "Lipid Panel", price: "$30", savings: "65%", image: "/laboratory-blood-test.png" },
                  { name: "Complete Blood Count", price: "$25", savings: "60%", image: "/blood-test-tubes.png" },
                  { name: "Hemoglobin A1C", price: "$30", savings: "65%", image: "/laboratory-testing.png" },
                  { name: "Thyroid Panel", price: "$45", savings: "60%", image: "/laboratory-blood-test.png" },
                  { name: "Vitamin D Test", price: "$40", savings: "55%", image: "/blood-test-tubes.png" },
                ].map((procedure) => (
                  <Card key={procedure.name} className="transition-all hover:shadow-lg">
                    <CardHeader className="p-0">
                      <div className="h-40 w-full overflow-hidden rounded-t-lg">
                        <img
                          alt={procedure.name}
                          className="h-full w-full object-cover"
                          height="160"
                          src={procedure.image || "/placeholder.svg"}
                          width="384"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <CardTitle className="text-xl font-bold">{procedure.name}</CardTitle>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center">
                          <DollarSign className="h-5 w-5 text-primary" />
                          <span className="text-lg font-bold text-primary">{procedure.price}</span>
                        </div>
                        <div className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
                          Save {procedure.savings}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="px-6 pb-6 pt-0">
                      <Button className="w-full" asChild>
                        <Link href="#">View Details</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="office" className="mt-6">
              {/* Office Visits Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "Primary Care Visit",
                    price: "$75",
                    savings: "50%",
                    image: "/doctor-office-consultation.png",
                  },
                  {
                    name: "Specialist Consultation",
                    price: "$125",
                    savings: "55%",
                    image: "/specialist-consultation.png",
                  },
                  { name: "Dermatology Visit", price: "$110", savings: "45%", image: "/caring-doctor-visit.png" },
                  { name: "Gynecology Exam", price: "$150", savings: "50%", image: "/doctor-with-patient-tablet.png" },
                  { name: "Orthopedic Consultation", price: "$140", savings: "45%", image: "/guided-knee-rehab.png" },
                  { name: "ENT Consultation", price: "$130", savings: "50%", image: "/specialist-with-patient.png" },
                ].map((procedure) => (
                  <Card key={procedure.name} className="transition-all hover:shadow-lg">
                    <CardHeader className="p-0">
                      <div className="h-40 w-full overflow-hidden rounded-t-lg">
                        <img
                          alt={procedure.name}
                          className="h-full w-full object-cover"
                          height="160"
                          src={procedure.image || "/placeholder.svg"}
                          width="384"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <CardTitle className="text-xl font-bold">{procedure.name}</CardTitle>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center">
                          <DollarSign className="h-5 w-5 text-primary" />
                          <span className="text-lg font-bold text-primary">{procedure.price}</span>
                        </div>
                        <div className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
                          Save {procedure.savings}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="px-6 pb-6 pt-0">
                      <Button className="w-full" asChild>
                        <Link href="#">View Details</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="wellness" className="mt-6">
              {/* Wellness Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: "Annual Physical", price: "$150", savings: "55%", image: "/preventive-care-checkup.png" },
                  { name: "Well Woman Exam", price: "$175", savings: "50%", image: "/doctor-with-patient-tablet.png" },
                  { name: "Immunizations", price: "$45", savings: "60%", image: "/caring-doctor-visit.png" },
                  {
                    name: "Nutrition Consultation",
                    price: "$85",
                    savings: "45%",
                    image: "/specialist-consultation.png",
                  },
                  {
                    name: "Health Screening Package",
                    price: "$250",
                    savings: "60%",
                    image: "/preventive-care-checkup.png",
                  },
                  { name: "Smoking Cessation", price: "$75", savings: "50%", image: "/doctor-office-consultation.png" },
                ].map((procedure) => (
                  <Card key={procedure.name} className="transition-all hover:shadow-lg">
                    <CardHeader className="p-0">
                      <div className="h-40 w-full overflow-hidden rounded-t-lg">
                        <img
                          alt={procedure.name}
                          className="h-full w-full object-cover"
                          height="160"
                          src={procedure.image || "/placeholder.svg"}
                          width="384"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <CardTitle className="text-xl font-bold">{procedure.name}</CardTitle>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center">
                          <DollarSign className="h-5 w-5 text-primary" />
                          <span className="text-lg font-bold text-primary">{procedure.price}</span>
                        </div>
                        <div className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
                          Save {procedure.savings}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="px-6 pb-6 pt-0">
                      <Button className="w-full" asChild>
                        <Link href="#">View Details</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          <div className="flex justify-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/procedures">
                View All Procedures <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose DirectPayDr in Nebraska */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex items-center justify-center">
              <img
                alt="Nebraska healthcare savings"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height="310"
                src="/healthcare-cost-conversation.png"
                width="550"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                  Why Choose DirectPayDr in Nebraska
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  DirectPayDr is changing healthcare in Nebraska by offering transparent pricing and significant savings
                </p>
              </div>
              <ul className="grid gap-2 py-4">
                <li className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                    <DollarSign className="h-4 w-4 text-primary" />
                  </div>
                  <span>Save 40-60% compared to typical Nebraska healthcare costs</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                    <Search className="h-4 w-4 text-primary" />
                  </div>
                  <span>Compare prices across multiple Nebraska providers</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                    <Building2 className="h-4 w-4 text-primary" />
                  </div>
                  <span>Access to top-rated Nebraska medical facilities</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                    <Calendar className="h-4 w-4 text-primary" />
                  </div>
                  <span>Simple scheduling with Nebraska providers</span>
                </li>
              </ul>
              <div>
                <Button asChild size="lg">
                  <Link href="#procedures">Browse Nebraska Procedures</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                Have Questions About DirectPayDr in Nebraska?
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our team is here to help you navigate affordable healthcare options in Nebraska
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <div className="flex justify-center space-x-4">
                <Button className="flex items-center" asChild>
                  <Link href="#">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Us
                  </Link>
                </Button>
                <Button variant="outline" className="flex items-center" asChild>
                  <Link href="#">
                    <Mail className="mr-2 h-4 w-4" />
                    Email Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
