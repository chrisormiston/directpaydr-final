"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, CheckCircle2, DollarSign, FileText, HelpCircle, MapPin, Radio, Search, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ImagingRadiologyPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Imaging & Radiology Services</h1>
              <p className="text-xl mb-6">
                Find affordable diagnostic imaging with transparent pricing and high-quality care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-blue-700 hover:bg-gray-100">Find a Provider</Button>
                <Button variant="outline" className="border-white text-white hover:bg-blue-700">
                  Compare Prices
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-blue-800 font-bold text-xl mb-4">Find Imaging Services Near You</h2>
                <div className="space-y-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="text"
                      placeholder="Zip Code or City"
                      className="pl-10 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="relative">
                    <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none">
                      <option value="">Select Imaging Service</option>
                      <option value="mri">MRI</option>
                      <option value="ct-scan">CT Scan</option>
                      <option value="ultrasound">Ultrasound</option>
                      <option value="x-ray">X-Ray</option>
                      <option value="mammogram">Mammogram</option>
                    </select>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Search</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="procedures">Services</TabsTrigger>
              <TabsTrigger value="providers">Providers</TabsTrigger>
              <TabsTrigger value="faqs">FAQs</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">About Imaging & Radiology</h2>
                <p className="text-gray-700 mb-4">
                  Diagnostic imaging uses various technologies to create visual representations of the interior of your
                  body. These images help healthcare providers diagnose and treat medical conditions, injuries, and
                  diseases.
                </p>
                <p className="text-gray-700 mb-4">
                  Modern imaging techniques provide detailed information about your body's structures and functions,
                  often eliminating the need for exploratory surgery or more invasive procedures.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center">
                        <Radio className="mr-2 text-blue-600" size={20} />
                        Non-Invasive
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">
                        Most imaging procedures are painless and require minimal or no recovery time.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center">
                        <FileText className="mr-2 text-blue-600" size={20} />
                        Detailed Results
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">
                        Advanced imaging provides detailed information for accurate diagnosis and treatment planning.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center">
                        <Zap className="mr-2 text-blue-600" size={20} />
                        Quick Procedures
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">
                        Most imaging exams take between 15 minutes to an hour, depending on the type.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose DirectPayDr for Imaging?</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex">
                    <div className="mr-4 text-blue-600">
                      <DollarSign size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Save 40-70% on Imaging</h3>
                      <p className="text-gray-700">
                        Our transparent pricing model eliminates hidden fees and markups, saving you hundreds or
                        thousands on your imaging needs.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mr-4 text-blue-600">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Board-Certified Radiologists</h3>
                      <p className="text-gray-700">
                        All our imaging centers have board-certified radiologists who interpret your results with
                        expertise and accuracy.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mr-4 text-blue-600">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Convenient Locations</h3>
                      <p className="text-gray-700">
                        Find accredited imaging centers near you with our nationwide network of providers.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mr-4 text-blue-600">
                      <HelpCircle size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Quick Scheduling</h3>
                      <p className="text-gray-700">
                        Book your imaging appointment quickly, often within days instead of weeks or months.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="procedures" className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Common Imaging Services</h2>

                <div className="grid gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>MRI (Magnetic Resonance Imaging)</CardTitle>
                      <CardDescription>
                        Detailed imaging using magnetic fields and radio waves to visualize organs and structures
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between mb-4">
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Average Market Price</p>
                          <p className="text-lg font-bold text-gray-800 line-through">$1,500 - $3,000</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">DirectPayDr Price</p>
                          <p className="text-lg font-bold text-green-600">$400 - $800</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Your Savings</p>
                          <p className="text-lg font-bold text-blue-600">Up to 73%</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">
                        MRI provides detailed images of organs, soft tissues, bone, and other internal body structures.
                        It's especially useful for examining the brain, spine, joints, and soft tissues.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          No Radiation
                        </span>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          30-60 Minute Procedure
                        </span>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Outpatient
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="/procedures/mri">
                        <Button className="w-full">
                          View Details
                          <ArrowRight className="ml-2" size={16} />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>CT Scan (Computed Tomography)</CardTitle>
                      <CardDescription>
                        Cross-sectional imaging using X-rays to create detailed images of internal organs and structures
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between mb-4">
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Average Market Price</p>
                          <p className="text-lg font-bold text-gray-800 line-through">$1,200 - $3,000</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">DirectPayDr Price</p>
                          <p className="text-lg font-bold text-green-600">$300 - $700</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Your Savings</p>
                          <p className="text-lg font-bold text-blue-600">Up to 77%</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">
                        CT scans combine X-ray images taken from different angles to create cross-sectional images of
                        bones, blood vessels, and soft tissues. They provide more detailed information than standard
                        X-rays.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Low Radiation
                        </span>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          10-30 Minute Procedure
                        </span>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Outpatient
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="/procedures/ct-scan">
                        <Button className="w-full">
                          View Details
                          <ArrowRight className="ml-2" size={16} />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Ultrasound</CardTitle>
                      <CardDescription>
                        Imaging using high-frequency sound waves to create images of organs and structures
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between mb-4">
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Average Market Price</p>
                          <p className="text-lg font-bold text-gray-800 line-through">$300 - $1,000</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">DirectPayDr Price</p>
                          <p className="text-lg font-bold text-green-600">$100 - $300</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Your Savings</p>
                          <p className="text-lg font-bold text-blue-600">Up to 70%</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Ultrasound uses sound waves to produce images of structures within the body. It's commonly used
                        to view the heart, blood vessels, kidneys, liver, and other organs, as well as during pregnancy
                        to view the fetus.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          No Radiation
                        </span>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          15-45 Minute Procedure
                        </span>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Outpatient
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="/procedures/ultrasound">
                        <Button className="w-full">
                          View Details
                          <ArrowRight className="ml-2" size={16} />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>X-Ray</CardTitle>
                      <CardDescription>
                        Basic imaging using radiation to create images of bones and some internal organs
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between mb-4">
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Average Market Price</p>
                          <p className="text-lg font-bold text-gray-800 line-through">$200 - $500</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">DirectPayDr Price</p>
                          <p className="text-lg font-bold text-green-600">$50 - $150</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Your Savings</p>
                          <p className="text-lg font-bold text-blue-600">Up to 75%</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">
                        X-rays use radiation to produce images of the structures inside your body, particularly bones.
                        They're commonly used to diagnose bone fractures, joint dislocations, and certain lung
                        conditions.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Minimal Radiation
                        </span>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          5-15 Minute Procedure
                        </span>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Outpatient
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="/procedures/x-ray">
                        <Button className="w-full">
                          View Details
                          <ArrowRight className="ml-2" size={16} />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Mammogram</CardTitle>
                      <CardDescription>
                        Specialized X-ray imaging of the breast to screen for or diagnose breast cancer
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between mb-4">
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Average Market Price</p>
                          <p className="text-lg font-bold text-gray-800 line-through">$300 - $700</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">DirectPayDr Price</p>
                          <p className="text-lg font-bold text-green-600">$100 - $250</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Your Savings</p>
                          <p className="text-lg font-bold text-blue-600">Up to 67%</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Mammograms are specialized X-ray images of the breasts used to screen for breast cancer in women
                        who have no signs or symptoms, or to diagnose breast disease in women experiencing symptoms.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Low Radiation
                        </span>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          20-30 Minute Procedure
                        </span>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Outpatient
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="/procedures/mammogram">
                        <Button className="w-full">
                          View Details
                          <ArrowRight className="ml-2" size={16} />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="providers" className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Imaging Providers</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle>Midwest Imaging Center</CardTitle>
                          <CardDescription>Indianapolis, IN</CardDescription>
                        </div>
                        <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          ACR Accredited
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center mb-4">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-4 h-4 text-yellow-300"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                          ))}
                        </div>
                        <p className="ml-2 text-sm font-medium text-gray-500">4.9 out of 5 (142 reviews)</p>
                      </div>
                      <p className="text-gray-700 mb-4">
                        State-of-the-art imaging center with the latest technology and board-certified radiologists.
                        Same-day and next-day appointments often available.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">MRI</span>
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          CT Scan
                        </span>
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Ultrasound
                        </span>
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          X-Ray
                        </span>
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Mammogram
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">View Provider Profile</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle>Southwest Diagnostic Imaging</CardTitle>
                          <CardDescription>Phoenix, AZ</CardDescription>
                        </div>
                        <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Top Rated
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center mb-4">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-4 h-4 text-yellow-300"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                          ))}
                        </div>
                        <p className="ml-2 text-sm font-medium text-gray-500">4.8 out of 5 (118 reviews)</p>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Patient-centered imaging center with extended hours and weekend appointments. Digital results
                        available within 24 hours through secure patient portal.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">MRI</span>
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          CT Scan
                        </span>
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Ultrasound
                        </span>
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          X-Ray
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">View Provider Profile</Button>
                    </CardFooter>
                  </Card>
                </div>

                <div className="mt-8 text-center">
                  <Button variant="outline" className="mx-auto">
                    View All Imaging Providers
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="faqs" className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How do I prepare for an imaging procedure?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">Preparation varies by procedure:</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>MRI: Remove metal objects, inform provider of implants, possibly fast for certain scans</li>
                        <li>CT Scan: Possibly fast for 4-6 hours, may need to drink contrast solution</li>
                        <li>Ultrasound: For abdominal ultrasounds, you may need to fast or have a full bladder</li>
                        <li>X-Ray: Remove metal objects from the area being imaged</li>
                        <li>Mammogram: Don't use deodorant, powder, or lotion on the day of the exam</li>
                      </ul>
                      <p className="mt-2 text-gray-700">
                        Your provider will give you specific instructions based on your procedure and health status.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>Are imaging procedures safe?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">Most imaging procedures are considered very safe:</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>
                          MRI: Uses no radiation, but strong magnetic fields. Safe for most people except those with
                          certain metal implants
                        </li>
                        <li>
                          CT Scan: Uses radiation but at controlled, safe levels. Benefits typically outweigh risks
                        </li>
                        <li>Ultrasound: Uses sound waves, no radiation, and has no known risks</li>
                        <li>X-Ray: Uses minimal radiation, with very low risks for a single exam</li>
                        <li>Mammogram: Uses low-dose radiation, with benefits that outweigh risks for screening</li>
                      </ul>
                      <p className="mt-2 text-gray-700">
                        Always inform your provider about pregnancy or any medical conditions before any imaging
                        procedure.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>How long does it take to get imaging results?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">Result times vary by provider and procedure:</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>Emergency situations: Results may be available within minutes to hours</li>
                        <li>Routine imaging: Typically 24-48 hours</li>
                        <li>Complex cases: May take 2-3 days for specialist interpretation</li>
                      </ul>
                      <p className="mt-2 text-gray-700">
                        With DirectPayDr providers, many offer digital results through secure patient portals within 24
                        hours. Your ordering physician will receive a full report to discuss with you.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger>Do I need a doctor's order for imaging?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">Most imaging procedures require a doctor's order:</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>Prescription imaging (MRI, CT, etc.): Requires a doctor's order</li>
                        <li>Screening mammograms: May be available without a doctor's order in some states</li>
                        <li>Some preventive ultrasounds: May be available without a doctor's order</li>
                      </ul>
                      <p className="mt-2 text-gray-700">
                        DirectPayDr can help connect you with healthcare providers who can evaluate your symptoms and
                        order appropriate imaging if needed.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5">
                    <AccordionTrigger>Are imaging procedures covered by insurance?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">
                        Many insurance plans cover imaging procedures if medical necessity criteria are met, but
                        coverage varies widely. The DirectPayDr model offers an alternative:
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>No insurance authorization process required</li>
                        <li>Transparent, all-inclusive pricing</li>
                        <li>Significant savings compared to typical out-of-pocket costs</li>
                        <li>Payment plans and financing options available</li>
                      </ul>
                      <p className="mt-2 text-gray-700">
                        Our Care Advisors can help you understand your options and potential costs.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Schedule Your Imaging Procedure?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Take the first step toward affordable, high-quality imaging with transparent pricing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
              Find an Imaging Center
            </Button>
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-100 px-8 py-6 text-lg">
              Compare Imaging Prices
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
