"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"

export default function PregnancyPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-purple-900">
                  Pregnancy Care
                </h1>
                <p className="max-w-[600px] text-gray-600 md:text-xl">
                  Save up to 50% on pregnancy-related care with DirectPayDr's transparent pricing for prenatal visits,
                  ultrasounds, and more.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild className="bg-purple-600 hover:bg-purple-700">
                  <Link href="#find-provider">Find a Provider</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="#common-procedures">View Pregnancy Services</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div
                className="relative w-full max-w-[500px] h-[400px] bg-cover bg-center rounded-lg shadow-xl"
                style={{ backgroundImage: "url('/abdominal-ultrasound.png')" }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
                <div className="absolute bottom-4 left-4 right-4 p-4">
                  <p className="text-white font-medium">Quality prenatal care at transparent prices</p>
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
              <TabsTrigger value="procedures">Services</TabsTrigger>
              <TabsTrigger value="providers">Providers</TabsTrigger>
              <TabsTrigger value="faqs">FAQs</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter text-purple-900">
                    Why Choose DirectPayDr for Pregnancy Care
                  </h2>
                  <p className="text-gray-600">
                    Pregnancy is a special time that shouldn't be overshadowed by financial stress. DirectPayDr offers
                    transparent, upfront pricing for prenatal care, ultrasounds, and other pregnancy-related services.
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
                      <span>Save 30-50% compared to typical pregnancy care costs</span>
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
                      <span>Know exactly what you'll pay before each appointment</span>
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
                      <span>Access to quality OB/GYNs and specialists without insurance restrictions</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-purple-900">How It Works</h3>
                  <ol className="space-y-4">
                    <li className="flex items-start">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-purple-900 font-bold mr-3">
                        1
                      </div>
                      <div>
                        <h4 className="font-bold">Search for pregnancy services</h4>
                        <p className="text-gray-600">
                          Browse our platform for prenatal visits, ultrasounds, and other pregnancy care in your area.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-purple-900 font-bold mr-3">
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
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-purple-900 font-bold mr-3">
                        3
                      </div>
                      <div>
                        <h4 className="font-bold">Purchase your service online</h4>
                        <p className="text-gray-600">
                          Pay the transparent price upfront and receive your appointment voucher.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-purple-900 font-bold mr-3">
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

            <TabsContent value="procedures" className="space-y-8" id="common-procedures">
              <h2 className="text-3xl font-bold tracking-tighter text-purple-900">Pregnancy Services</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Initial Prenatal Visit",
                    description:
                      "Comprehensive first visit including medical history, physical exam, and initial tests.",
                    price: "$150-250",
                    savings: "Save up to 45%",
                    image: "/doctor-office-consultation.png",
                  },
                  {
                    title: "Routine Prenatal Visit",
                    description: "Regular check-ups to monitor pregnancy progress and baby's development.",
                    price: "$75-125",
                    savings: "Save up to 50%",
                    image: "/specialist-with-patient.png",
                  },
                  {
                    title: "Obstetric Ultrasound",
                    description: "Imaging to check baby's growth, position, and development.",
                    price: "$150-300",
                    savings: "Save up to 60%",
                    image: "/abdominal-ultrasound.png",
                  },
                  {
                    title: "Genetic Screening",
                    description: "Non-invasive prenatal testing for chromosomal abnormalities.",
                    price: "$250-500",
                    savings: "Save up to 40%",
                    image: "/laboratory-testing.png",
                  },
                  {
                    title: "Glucose Tolerance Test",
                    description: "Screening for gestational diabetes during pregnancy.",
                    price: "$75-150",
                    savings: "Save up to 55%",
                    image: "/laboratory-blood-test.png",
                  },
                  {
                    title: "Childbirth Education",
                    description: "Classes to prepare for labor, delivery, and newborn care.",
                    price: "$100-200",
                    savings: "Save up to 50%",
                    image: "/patient-questions.png",
                  },
                ].map((service, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div
                      className="h-48 w-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${service.image})` }}
                    ></div>
                    <CardHeader>
                      <CardTitle>{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-gray-500">Average Price</p>
                          <p className="text-xl font-bold text-purple-900">{service.price}</p>
                        </div>
                        <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          {service.savings}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full">
                        <Link href={`/procedures/${service.title.toLowerCase().replace(/\s+/g, "-")}`}>
                          View Details
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <Button asChild variant="outline" size="lg">
                  <Link href="/procedures">View All Pregnancy Services</Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="providers" className="space-y-8" id="find-provider">
              <h2 className="text-3xl font-bold tracking-tighter text-purple-900">Our Pregnancy Care Providers</h2>
              <p className="text-gray-600 max-w-3xl">
                DirectPayDr partners with board-certified OB/GYNs, maternal-fetal medicine specialists, and midwives to
                provide affordable, quality pregnancy care. Our providers are committed to transparent pricing and
                excellent care.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    name: "Dr. Jennifer Adams",
                    specialty: "Obstetrics & Gynecology",
                    location: "Chicago, IL",
                    image: "/doctor-testimonial-3.png",
                    rating: 4.9,
                  },
                  {
                    name: "Dr. Robert Chen",
                    specialty: "Maternal-Fetal Medicine",
                    location: "San Francisco, CA",
                    image: "/doctor-testimonial-1.png",
                    rating: 4.8,
                  },
                  {
                    name: "Sarah Williams, CNM",
                    specialty: "Certified Nurse Midwife",
                    location: "Miami, FL",
                    image: "/doctor-testimonial-5.png",
                    rating: 4.7,
                  },
                  {
                    name: "Dr. Maria Rodriguez",
                    specialty: "Obstetrics & Gynecology",
                    location: "Dallas, TX",
                    image: "/doctor-testimonial-2.png",
                    rating: 4.9,
                  },
                  {
                    name: "Dr. James Thompson",
                    specialty: "Reproductive Endocrinology",
                    location: "Boston, MA",
                    image: "/doctor-testimonial-4.png",
                    rating: 4.8,
                  },
                  {
                    name: "Women's Health Center",
                    specialty: "Comprehensive OB/GYN Care",
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
              <h2 className="text-3xl font-bold tracking-tighter text-purple-900">Frequently Asked Questions</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    question: "What pregnancy services can I purchase through DirectPayDr?",
                    answer:
                      "DirectPayDr offers a wide range of pregnancy-related services including prenatal visits, ultrasounds, lab tests, genetic screenings, and childbirth education classes. Each service is priced transparently with no hidden fees.",
                  },
                  {
                    question: "Can I use DirectPayDr for my entire pregnancy?",
                    answer:
                      "Yes, many patients use DirectPayDr for their entire prenatal care journey. You can purchase individual services as needed or look for bundled prenatal care packages offered by some of our providers.",
                  },
                  {
                    question: "Does DirectPayDr cover labor and delivery?",
                    answer:
                      "Some DirectPayDr providers offer bundled maternity packages that include labor and delivery. These packages provide significant savings compared to traditional insurance billing. Contact us for specific availability in your area.",
                  },
                  {
                    question: "What if complications arise during my pregnancy?",
                    answer:
                      "If complications arise, your provider will discuss any additional recommended services or referrals. You can purchase these additional services through DirectPayDr at our transparent prices, or use insurance if preferred.",
                  },
                  {
                    question: "Can I use my HSA or FSA to pay for pregnancy services?",
                    answer:
                      "Yes, pregnancy-related medical services purchased through DirectPayDr are eligible expenses for Health Savings Accounts (HSA) and Flexible Spending Accounts (FSA).",
                  },
                  {
                    question: "What if I'm already pregnant? Can I still use DirectPayDr?",
                    answer:
                      "You can start using DirectPayDr at any point during your pregnancy. Many patients switch to our direct pay model mid-pregnancy to save on remaining visits and services.",
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
      <section className="w-full py-12 md:py-24 bg-purple-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-900">
                Ready to save on your pregnancy care?
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of expectant parents who have saved money on their healthcare with DirectPayDr's
                transparent pricing model.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
                <Link href="/procedures">Find Pregnancy Services</Link>
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
