"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function ArizonaPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-8 md:py-12 lg:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                  DirectPayDr in Arizona
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Find affordable healthcare procedures and providers across Arizona. Save up to 60% on medical care
                  with transparent, upfront pricing.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="#providers">Find Arizona Providers</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#procedures">Browse Procedures</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[300px] w-full overflow-hidden rounded-xl lg:h-[400px]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/arizona-NTouq1hXvnSofGuP23fLVhrtFCNkcn.jpeg"
                  alt="Arizona landscape with Phoenix skyline, desert, and cacti"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full py-6 md:py-10 lg:py-12 bg-gray-50">
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
            <TabsContent value="overview" className="pt-4">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter">Healthcare in Arizona</h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    Arizona offers a diverse healthcare landscape with major medical centers in Phoenix, Tucson, and
                    Scottsdale. DirectPayDr partners with quality providers across the state to offer transparent,
                    affordable pricing on hundreds of medical procedures.
                  </p>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Why Choose DirectPayDr in Arizona?</h3>
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
                    <h3 className="text-xl font-bold">Arizona Healthcare Statistics</h3>
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div className="rounded-lg bg-gray-50 p-4">
                        <div className="text-2xl font-bold text-primary">120+</div>
                        <div className="text-sm text-gray-500">Participating Providers</div>
                      </div>
                      <div className="rounded-lg bg-gray-50 p-4">
                        <div className="text-2xl font-bold text-primary">500+</div>
                        <div className="text-sm text-gray-500">Available Procedures</div>
                      </div>
                      <div className="rounded-lg bg-gray-50 p-4">
                        <div className="text-2xl font-bold text-primary">45%</div>
                        <div className="text-sm text-gray-500">Average Savings</div>
                      </div>
                      <div className="rounded-lg bg-gray-50 p-4">
                        <div className="text-2xl font-bold text-primary">15+</div>
                        <div className="text-sm text-gray-500">Cities Covered</div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl bg-white p-6 shadow-sm">
                    <h3 className="text-xl font-bold">Get Started Today</h3>
                    <p className="mt-2 text-gray-500">
                      Browse our Arizona providers and procedures to find the care you need at prices you can afford.
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
            <TabsContent value="procedures" className="pt-4">
              <div className="space-y-6">
                <div className="flex flex-col gap-2">
                  <h2 className="text-3xl font-bold tracking-tighter">Popular Procedures in Arizona</h2>
                  <p className="text-gray-500">
                    Browse our most commonly booked procedures in Arizona with transparent, upfront pricing.
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
                        <div className="text-sm line-through text-gray-500">$1,200</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-sm font-medium">DirectPayDr Price</div>
                        <div className="text-lg font-bold text-primary">$450</div>
                      </div>
                      <div className="mt-2 text-sm text-green-600 font-medium">Save 62%</div>
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
                        <div className="text-sm line-through text-gray-500">$3,500</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-sm font-medium">DirectPayDr Price</div>
                        <div className="text-lg font-bold text-primary">$1,100</div>
                      </div>
                      <div className="mt-2 text-sm text-green-600 font-medium">Save 69%</div>
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
                        <div className="text-sm line-through text-gray-500">$1,800</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-sm font-medium">DirectPayDr Price</div>
                        <div className="text-lg font-bold text-primary">$675</div>
                      </div>
                      <div className="mt-2 text-sm text-green-600 font-medium">Save 63%</div>
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
                        <div className="text-sm line-through text-gray-500">$350</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-sm font-medium">DirectPayDr Price</div>
                        <div className="text-lg font-bold text-primary">$175</div>
                      </div>
                      <div className="mt-2 text-sm text-green-600 font-medium">Save 50%</div>
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
                        <div className="text-sm line-through text-gray-500">$550</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-sm font-medium">DirectPayDr Price</div>
                        <div className="text-lg font-bold text-primary">$225</div>
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
                        <div className="text-sm line-through text-gray-500">$250</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-sm font-medium">DirectPayDr Price</div>
                        <div className="text-lg font-bold text-primary">$95</div>
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
                  <Button size="lg">View All Arizona Procedures</Button>
                </div>
              </div>
            </TabsContent>

            {/* Providers Tab */}
            <TabsContent value="providers" className="pt-4">
              <div className="space-y-6">
                <div className="flex flex-col gap-2">
                  <h2 className="text-3xl font-bold tracking-tighter">Featured Arizona Providers</h2>
                  <p className="text-gray-500">
                    Our network of trusted healthcare providers across Arizona offers quality care at affordable prices.
                  </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {/* Provider Cards */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Phoenix Medical Imaging</CardTitle>
                      <CardDescription>Phoenix, AZ</CardDescription>
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
                        <span className="text-sm text-gray-500">5.0 (124 reviews)</span>
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
                      <CardTitle>Tucson Surgical Center</CardTitle>
                      <CardDescription>Tucson, AZ</CardDescription>
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
                        <span className="text-sm text-gray-500">4.9 (87 reviews)</span>
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
                      <CardTitle>Scottsdale Women's Health</CardTitle>
                      <CardDescription>Scottsdale, AZ</CardDescription>
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
                        <span className="text-sm text-gray-500">4.8 (103 reviews)</span>
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
                  <Button size="lg">View All Arizona Providers</Button>
                </div>
              </div>
            </TabsContent>

            {/* Cities Tab */}
            <TabsContent value="cities" className="pt-4">
              <div className="space-y-6">
                <div className="flex flex-col gap-2">
                  <h2 className="text-3xl font-bold tracking-tighter">Arizona Cities</h2>
                  <p className="text-gray-500">
                    Find DirectPayDr providers in these major Arizona cities and surrounding areas.
                  </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {/* City Cards */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Phoenix</CardTitle>
                      <CardDescription>Maricopa County</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 mb-4">
                        Arizona's capital and largest city with a comprehensive network of healthcare providers.
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          <span>45+ Providers</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          <span>500+ Procedures</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          <span>12 Imaging Centers</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          <span>8 Surgery Centers</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Explore Phoenix</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Tucson</CardTitle>
                      <CardDescription>Pima County</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 mb-4">
                        Arizona's second-largest city with a diverse range of healthcare facilities.
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          <span>30+ Providers</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          <span>350+ Procedures</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          <span>8 Imaging Centers</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          <span>5 Surgery Centers</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Explore Tucson</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Scottsdale</CardTitle>
                      <CardDescription>Maricopa County</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 mb-4">
                        Known for luxury healthcare facilities and specialized medical services.
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          <span>25+ Providers</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          <span>300+ Procedures</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          <span>6 Imaging Centers</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          <span>7 Surgery Centers</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Explore Scottsdale</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Mesa</CardTitle>
                      <CardDescription>Maricopa County</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 mb-4">
                        A growing healthcare hub in the East Valley with affordable medical services.
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
                      <Button className="w-full">Explore Mesa</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Chandler</CardTitle>
                      <CardDescription>Maricopa County</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 mb-4">
                        Modern healthcare facilities serving the Southeast Valley area.
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
                      <Button className="w-full">Explore Chandler</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Flagstaff</CardTitle>
                      <CardDescription>Coconino County</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 mb-4">
                        Northern Arizona's healthcare hub serving a large rural area.
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
                      <Button className="w-full">Explore Flagstaff</Button>
                    </CardFooter>
                  </Card>
                </div>

                <div className="flex justify-center mt-8">
                  <Button size="lg">View All Arizona Cities</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-8 md:py-12 lg:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Save on Healthcare in Arizona?
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
