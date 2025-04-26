"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"

export default function OfficeVisitsPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-blue-900">
                  Office Visits
                </h1>
                <p className="max-w-[600px] text-gray-600 md:text-xl">
                  Save up to 60% on primary care and specialist office visits with DirectPayDr's transparent pricing and
                  direct pay model.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link href="#find-provider">Find a Provider</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="#common-visits">View Common Visits</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div
                className="relative w-full max-w-[500px] h-[400px] bg-cover bg-center rounded-lg shadow-xl"
                style={{ backgroundImage: "url('/doctor-office-consultation.png')" }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
                <div className="absolute bottom-4 left-4 right-4 p-4">
                  <p className="text-white font-medium">Quality care at transparent prices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="procedures">Common Visits</TabsTrigger>
              <TabsTrigger value="providers">Providers</TabsTrigger>
              <TabsTrigger value="faqs">FAQs</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter text-blue-900">
                    Why Choose DirectPayDr for Office Visits
                  </h2>
                  <p className="text-gray-600">
                    Office visits are the foundation of healthcare, but they can be expensive and unpredictable when
                    using insurance. DirectPayDr offers a better way with transparent, upfront pricing for primary care
                    and specialist visits.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg
                        className="h-6 w-6 mr-2 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Save 40-60% compared to typical office visit costs</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-6 w-6 mr-2 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Know exactly what you'll pay before your appointment</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-6 w-6 mr-2 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>No surprise bills or hidden fees</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-6 w-6 mr-2 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Access to quality providers without insurance restrictions</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-blue-900">How It Works</h3>
                  <ol className="space-y-4">
                    <li className="flex items-start">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-900 font-bold mr-3">
                        1
                      </div>
                      <div>
                        <h4 className="font-bold">Search for office visits</h4>
                        <p className="text-gray-600">
                          Browse our platform for primary care or specialist visits in your area.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-900 font-bold mr-3">
                        2
                      </div>
                      <div>
                        <h4 className="font-bold">Compare prices and providers</h4>
                        <p className="text-gray-600">
                          See upfront pricing and provider information to make an informed choice.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-900 font-bold mr-3">
                        3
                      </div>
                      <div>
                        <h4 className="font-bold">Purchase your visit online</h4>
                        <p className="text-gray-600">
                          Pay the transparent price upfront and receive your appointment voucher.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-900 font-bold mr-3">
                        4
                      </div>
                      <div>
                        <h4 className="font-bold">Visit your provider</h4>
                        <p className="text-gray-600">
                          Show your voucher at your appointment - no additional payments required.
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="procedures" className="space-y-8" id="common-visits">
              <h2 className="text-3xl font-bold tracking-tighter text-blue-900">Common Office Visits</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Primary Care Visit",
                    description: "Routine check-ups, preventive care, and management of common health issues.",
                    price: "$75-125",
                    savings: "Save up to 50%",
                    image: "/doctor-office-consultation.png",
                  },
                  {
                    title: "Specialist Consultation",
                    description: "Initial or follow-up visits with medical specialists for specific conditions.",
                    price: "$150-250",
                    savings: "Save up to 60%",
                    image: "/specialist-consultation.png",
                  },
                  {
                    title: "Urgent Care Visit",
                    description: "Same-day care for non-emergency illnesses and injuries.",
                    price: "$125-175",
                    savings: "Save up to 45%",
                    image: "/patient-receiving-care.png",
                  },
                  {
                    title: "Dermatology Visit",
                    description: "Skin examinations, condition diagnosis, and treatment recommendations.",
                    price: "$125-200",
                    savings: "Save up to 55%",
                    image: "/specialist-with-patient.png",
                  },
                  {
                    title: "Mental Health Consultation",
                    description: "Evaluation and treatment planning for mental health concerns.",
                    price: "$100-175",
                    savings: "Save up to 50%",
                    image: "/thoughtful-portrait.png",
                  },
                  {
                    title: "Physical Therapy Session",
                    description: "Therapeutic exercises and treatments for injury recovery and pain management.",
                    price: "$75-125",
                    savings: "Save up to 60%",
                    image: "/guided-knee-rehab.png",
                  },
                ].map((visit, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div
                      className="h-48 w-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${visit.image})` }}
                    ></div>
                    <CardHeader>
                      <CardTitle>{visit.title}</CardTitle>
                      <CardDescription>{visit.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-gray-500">Average Price</p>
                          <p className="text-xl font-bold text-blue-900">{visit.price}</p>
                        </div>
                        <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          {visit.savings}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full">
                        <Link href={`/procedures/${visit.title.toLowerCase().replace(/\s+/g, "-")}`}>View Details</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <Button asChild variant="outline" size="lg">
                  <Link href="/procedures">View All Office Visits</Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="providers" className="space-y-8" id="find-provider">
              <h2 className="text-3xl font-bold tracking-tighter text-blue-900">Our Office Visit Providers</h2>
              <p className="text-gray-600 max-w-3xl">
                DirectPayDr partners with quality primary care physicians, specialists, and urgent care centers to
                provide affordable office visits. Our providers are board-certified and committed to transparent
                pricing.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    name: "Dr. Sarah Johnson",
                    specialty: "Family Medicine",
                    location: "Chicago, IL",
                    image: "/doctor-testimonial-1.png",
                    rating: 4.9,
                  },
                  {
                    name: "Dr. Michael Chen",
                    specialty: "Internal Medicine",
                    location: "San Francisco, CA",
                    image: "/doctor-testimonial-2.png",
                    rating: 4.8,
                  },
                  {
                    name: "Dr. Emily Rodriguez",
                    specialty: "Dermatology",
                    location: "Miami, FL",
                    image: "/doctor-testimonial-3.png",
                    rating: 4.7,
                  },
                  {
                    name: "Dr. James Wilson",
                    specialty: "Cardiology",
                    location: "Dallas, TX",
                    image: "/doctor-testimonial-4.png",
                    rating: 4.9,
                  },
                  {
                    name: "Dr. Lisa Thompson",
                    specialty: "Psychiatry",
                    location: "Boston, MA",
                    image: "/doctor-testimonial-5.png",
                    rating: 4.8,
                  },
                  {
                    name: "Urgent Care Center",
                    specialty: "Urgent Care",
                    location: "Multiple Locations",
                    image: "/modern-hospital-exterior.png",
                    rating: 4.6,
                  },
                ].map((provider, index) => (
                  <Card key={index}>
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-4">
                        <div
                          className="h-16 w-16 rounded-full bg-cover bg-center"
                          style={{ backgroundImage: `url(${provider.image})` }}
                        ></div>
                        <div>
                          <CardTitle className="text-lg">{provider.name}</CardTitle>
                          <CardDescription>{provider.specialty}</CardDescription>
                          <div className="flex items-center mt-1">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <svg
                                  key={i}
                                  className={`h-4 w-4 ${i < Math.floor(provider.rating) ? "text-yellow-400" : "text-gray-300"}`}
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                            <span className="ml-1 text-sm text-gray-500">{provider.rating}/5</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-medium">{provider.location}</p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full">
                        <Link href="/providers">View Profile</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              <div className="flex justify-center mt-8">
                <Button asChild size="lg">
                  <Link href="/providers">Find More Providers</Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="faqs" className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tighter text-blue-900">Frequently Asked Questions</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    question: "What's included in the office visit price?",
                    answer:
                      "The price includes the provider's time, basic examination, and standard in-office procedures. Any additional tests, labs, or procedures will be clearly listed as separate items with their own transparent pricing.",
                  },
                  {
                    question: "Do I need insurance to book an office visit?",
                    answer:
                      "No, DirectPayDr is designed for patients with or without insurance. Our direct pay model often saves patients money compared to using insurance, especially for those with high deductibles.",
                  },
                  {
                    question: "How do I schedule my appointment after purchasing?",
                    answer:
                      "After purchasing your office visit, you'll receive a voucher with instructions for scheduling. Most providers allow online scheduling, or you can call the provider directly using the contact information provided.",
                  },
                  {
                    question: "What if I need follow-up care after my visit?",
                    answer:
                      "Any recommended follow-up visits will be discussed during your appointment. You can purchase additional visits through DirectPayDr at the same transparent prices.",
                  },
                  {
                    question: "Can I use my HSA or FSA to pay for office visits?",
                    answer:
                      "Yes, office visits purchased through DirectPayDr are eligible expenses for Health Savings Accounts (HSA) and Flexible Spending Accounts (FSA).",
                  },
                  {
                    question: "What if I need to cancel or reschedule my visit?",
                    answer:
                      "DirectPayDr vouchers are valid for 12 months from purchase. You can reschedule directly with the provider according to their cancellation policy, which is provided at the time of purchase.",
                  },
                ].map((faq, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <Button asChild variant="outline" size="lg">
                  <Link href="/faq">View All FAQs</Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">
                Ready to save on your next office visit?
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of patients who have saved money on their healthcare with DirectPayDr's transparent
                pricing model.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/procedures">Find Office Visits</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/how-it-works">Learn How It Works</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
