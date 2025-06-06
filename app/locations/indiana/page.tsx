"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"
import Link from "next/link"

export default function IndianaPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                  DirectPayDr in Indiana
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Find affordable healthcare procedures and providers across Indiana. Save up to 60% on medical care
                  with transparent, upfront pricing.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="#providers">Find Indiana Providers</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#procedures">Browse Procedures</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[300px] w-full overflow-hidden rounded-xl lg:h-[400px]">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl flex items-center justify-center">
                  <img
                    alt="Indiana healthcare map"
                    className="mx-auto h-auto max-w-[80%]"
                    src="/usa-map-locations.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="procedures" id="procedures">
                Popular Procedures
              </TabsTrigger>
              <TabsTrigger value="providers" id="providers">
                Featured Providers
              </TabsTrigger>
              <TabsTrigger value="cities">Major Cities</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="pt-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter">Healthcare in Indiana</h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    Indiana offers a diverse healthcare landscape with major medical centers in Indianapolis, Fort
                    Wayne, and South Bend. DirectPayDr partners with quality providers across the state to offer
                    transparent, affordable pricing on hundreds of medical procedures.
                  </p>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Why Choose DirectPayDr in Indiana?</h3>
                    <ul className="grid gap-2">
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Save 40-60% compared to insurance-based pricing</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Access to top-rated providers across the state</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Transparent, upfront pricing with no surprise bills</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Convenient locations in major cities and rural areas</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="rounded-xl bg-white p-6 shadow-sm">
                    <h3 className="text-xl font-bold">Indiana Healthcare Statistics</h3>
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div className="rounded-lg bg-gray-50 p-4">
                        <div className="text-2xl font-bold text-primary">90+</div>
                        <div className="text-sm text-gray-500">Participating Providers</div>
                      </div>
                      <div className="rounded-lg bg-gray-50 p-4">
                        <div className="text-2xl font-bold text-primary">400+</div>
                        <div className="text-sm text-gray-500">Available Procedures</div>
                      </div>
                      <div className="rounded-lg bg-gray-50 p-4">
                        <div className="text-2xl font-bold text-primary">48%</div>
                        <div className="text-sm text-gray-500">Average Savings</div>
                      </div>
                      <div className="rounded-lg bg-gray-50 p-4">
                        <div className="text-2xl font-bold text-primary">12+</div>
                        <div className="text-sm text-gray-500">Cities Covered</div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl bg-white p-6 shadow-sm">
                    <h3 className="text-xl font-bold">Get Started Today</h3>
                    <p className="mt-2 text-gray-500">
                      Browse our Indiana providers and procedures to find the care you need at prices you can afford.
                    </p>
                    <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                      <Button className="w-full sm:w-auto">Search Procedures</Button>
                      <Button variant="outline" className="w-full sm:w-auto">
                        Contact Us
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Procedures Tab */}
            <TabsContent value="procedures" className="pt-6">
              <div className="space-y-6">
                <div className="flex flex-col gap-2">
                  <h2 className="text-3xl font-bold tracking-tighter">Popular Procedures in Indiana</h2>
                  <p className="text-gray-500">
                    Browse our most commonly booked procedures in Indiana with transparent, upfront pricing.
                  </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {/* Procedure Cards */}
                  <Card>
                    <CardHeader>
                      <CardTitle>MRI</CardTitle>
                      <CardDescription>Diagnostic Imaging</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center mb-4">
                        <div className="text-sm text-gray-500">Average Price</div>
                        <div className="text-sm line-through text-gray-500">$1,100</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-sm font-medium">DirectPayDr Price</div>
                        <div className="text-lg font-bold text-primary">$425</div>
                      </div>
                      <div className="mt-2 text-sm text-green-600 font-medium">Save 61%</div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full">
                        <Link href="/procedures/mri">View Details</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Colonoscopy</CardTitle>
                      <CardDescription>Preventive Screening</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center mb-4">
                        <div className="text-sm text-gray-500">Average Price</div>
                        <div className="text-sm line-through text-gray-500">$3,200</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-sm font-medium">DirectPayDr Price</div>
                        <div className="text-lg font-bold text-primary">$1,050</div>
                      </div>
                      <div className="mt-2 text-sm text-green-600 font-medium">Save 67%</div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full">
                        <Link href="/procedures/colonoscopy">View Details</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>CT Scan</CardTitle>
                      <CardDescription>Diagnostic Imaging</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center mb-4">
                        <div className="text-sm text-gray-500">Average Price</div>
                        <div className="text-sm line-through text-gray-500">$1,600</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-sm font-medium">DirectPayDr Price</div>
                        <div className="text-lg font-bold text-primary">$625</div>
                      </div>
                      <div className="mt-2 text-sm text-green-600 font-medium">Save 61%</div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full">
                        <Link href="/procedures/ct-scan">View Details</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Mammogram</CardTitle>
                      <CardDescription>Women's Health</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center mb-4">
                        <div className="text-sm text-gray-500">Average Price</div>
                        <div className="text-sm line-through text-gray-500">$325</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-sm font-medium">DirectPayDr Price</div>
                        <div className="text-lg font-bold text-primary">$165</div>
                      </div>
                      <div className="mt-2 text-sm text-green-600 font-medium">Save 49%</div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full">
                        <Link href="/procedures/mammogram">View Details</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Ultrasound</CardTitle>
                      <CardDescription>Diagnostic Imaging</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center mb-4">
                        <div className="text-sm text-gray-500">Average Price</div>
                        <div className="text-sm line-through text-gray-500">$525</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-sm font-medium">DirectPayDr Price</div>
                        <div className="text-lg font-bold text-primary">$215</div>
                      </div>
                      <div className="mt-2 text-sm text-green-600 font-medium">Save 59%</div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full">
                        <Link href="/procedures/ultrasound">View Details</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>X-Ray</CardTitle>
                      <CardDescription>Diagnostic Imaging</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center mb-4">
                        <div className="text-sm text-gray-500">Average Price</div>
                        <div className="text-sm line-through text-gray-500">$225</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-sm font-medium">DirectPayDr Price</div>
                        <div className="text-lg font-bold text-primary">$85</div>
                      </div>
                      <div className="mt-2 text-sm text-green-600 font-medium">Save 62%</div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full">
                        <Link href="/procedures/x-ray">View Details</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>

                <div className="flex justify-center mt-8">
                  <Button size="lg">View All Indiana Procedures</Button>
                </div>
              </div>
            </TabsContent>

            {/* Providers Tab */}
            <TabsContent value="providers" className="pt-6">
              <div className="space-y-6">
                <div className="flex flex-col gap-2">
                  <h2 className="text-3xl font-bold tracking-tighter">Featured Indiana Providers</h2>
                  <p className="text-gray-500">
                    Our network of trusted healthcare providers across Indiana offers quality care at affordable prices.
                  </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {/* Provider Cards */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Indianapolis Medical Imaging</CardTitle>
                      <CardDescription>Indianapolis, IN</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="h-4 w-4 text-yellow-500"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clipRule="evenodd"
                              />
                            </svg>
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">5.0 (92 reviews)</span>
                      </div>
                      <p className="text-sm text-gray-500 mb-4">
                        Specializing in MRI, CT, X-ray, and Ultrasound services with state-of-the-art equipment.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-gray-700">
                          MRI
                        </span>
                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-gray-700">
                          CT Scan
                        </span>
                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-gray-700">
                          X-Ray
                        </span>
                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-gray-700">
                          Ultrasound
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">View Provider</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Fort Wayne Surgical Center</CardTitle>
                      <CardDescription>Fort Wayne, IN</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="h-4 w-4 text-yellow-500"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clipRule="evenodd"
                              />
                            </svg>
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">4.9 (78 reviews)</span>
                      </div>
                      <p className="text-sm text-gray-500 mb-4">
                        Outpatient surgical center offering a wide range of procedures with board-certified surgeons.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-gray-700">
                          Colonoscopy
                        </span>
                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-gray-700">
                          Hernia Repair
                        </span>
                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-gray-700">
                          Cataract Surgery
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">View Provider</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>South Bend Women's Health</CardTitle>
                      <CardDescription>South Bend, IN</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className={`h-4 w-4 ${star <= 4 ? "text-yellow-500" : "text-gray-300"}`}
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clipRule="evenodd"
                              />
                            </svg>
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">4.8 (65 reviews)</span>
                      </div>
                      <p className="text-sm text-gray-500 mb-4">
                        Comprehensive women's health services including mammography, OB/GYN care, and preventive
                        screenings.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-gray-700">
                          Mammogram
                        </span>
                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-gray-700">
                          OB/GYN Visits
                        </span>
                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-gray-700">
                          Ultrasound
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">View Provider</Button>
                    </CardFooter>
                  </Card>
                </div>

                <div className="flex justify-center mt-8">
                  <Button size="lg">View All Indiana Providers</Button>
                </div>
              </div>
            </TabsContent>

            {/* Cities Tab */}
            <TabsContent value="cities" className="pt-6">
              <div className="space-y-6">
                <div className="flex flex-col gap-2">
                  <h2 className="text-3xl font-bold tracking-tighter">Indiana Cities</h2>
                  <p className="text-gray-500">
                    Find DirectPayDr providers in these major Indiana cities and surrounding areas.
                  </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {/* City Cards */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Indianapolis</CardTitle>
                      <CardDescription>Marion County</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 mb-4">
                        Indiana's capital and largest city with a comprehensive network of healthcare providers.
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          <span>35+ Providers</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          <span>400+ Procedures</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          <span>10 Imaging Centers</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          <span>6 Surgery Centers</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Explore Indianapolis</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Fort Wayne</CardTitle>
                      <CardDescription>Allen County</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 mb-4">
                        Indiana's second-largest city with a diverse range of healthcare facilities.
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          <span>20+ Providers</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          <span>250+ Procedures</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          <span>5 Imaging Centers</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          <span>3 Surgery Centers</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Explore Fort Wayne</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>South Bend</CardTitle>
                      <CardDescription>St. Joseph County</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 mb-4">
                        Northern Indiana healthcare hub with specialized medical services.
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          <span>15+ Providers</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          <span>200+ Procedures</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          <span>4 Imaging Centers</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          <span>2 Surgery Centers</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Explore South Bend</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Evansville</CardTitle>
                      <CardDescription>Vanderburgh County</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 mb-4">
                        Southwestern Indiana's largest city with growing healthcare options.
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          <span>12+ Providers</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          <span>180+ Procedures</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          <span>3 Imaging Centers</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          <span>2 Surgery Centers</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Explore Evansville</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Bloomington</CardTitle>
                      <CardDescription>Monroe County</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 mb-4">
                        College town with quality healthcare facilities and specialized services.
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          <span>10+ Providers</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          <span>150+ Procedures</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          <span>2 Imaging Centers</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          <span>1 Surgery Center</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Explore Bloomington</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Lafayette</CardTitle>
                      <CardDescription>Tippecanoe County</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 mb-4">
                        Home to Purdue University with growing healthcare services.
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          <span>8+ Providers</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          <span>120+ Procedures</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          <span>2 Imaging Centers</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          <span>1 Surgery Center</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Explore Lafayette</Button>
                    </CardFooter>
                  </Card>
                </div>

                <div className="flex justify-center mt-8">
                  <Button size="lg">View All Indiana Cities</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Save on Healthcare in Indiana?
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                Browse our procedures, find a provider, and start saving today with transparent, upfront pricing.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg">Search Procedures</Button>
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
