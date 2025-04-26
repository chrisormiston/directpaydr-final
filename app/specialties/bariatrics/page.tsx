"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle2,
  DollarSign,
  HeartPulse,
  HelpCircle,
  MapPin,
  Scale,
  Search,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function BariatricsPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Bariatric Procedures</h1>
              <p className="text-xl mb-6">
                Find affordable bariatric procedures with transparent pricing and high-quality care.
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
                <h2 className="text-blue-800 font-bold text-xl mb-4">Find Bariatric Procedures Near You</h2>
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
                      <option value="">Select Procedure</option>
                      <option value="gastric-sleeve">Gastric Sleeve</option>
                      <option value="gastric-bypass">Gastric Bypass</option>
                      <option value="lap-band">Lap Band</option>
                      <option value="duodenal-switch">Duodenal Switch</option>
                      <option value="revision-surgery">Revision Surgery</option>
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
              <TabsTrigger value="procedures">Procedures</TabsTrigger>
              <TabsTrigger value="providers">Providers</TabsTrigger>
              <TabsTrigger value="faqs">FAQs</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">About Bariatric Surgery</h2>
                <p className="text-gray-700 mb-4">
                  Bariatric surgery includes various procedures performed on people who have obesity. Weight loss is
                  achieved by reducing the size of the stomach with a gastric band or through removal of a portion of
                  the stomach, or by resecting and re-routing the small intestine to a small stomach pouch.
                </p>
                <p className="text-gray-700 mb-4">
                  These procedures can lead to significant long-term weight loss, recovery from diabetes, improvement in
                  cardiovascular risk factors, and a reduction in mortality.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center">
                        <Scale className="mr-2 text-blue-600" size={20} />
                        Weight Loss
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">
                        Patients typically lose 60-80% of their excess body weight within the first year.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center">
                        <HeartPulse className="mr-2 text-blue-600" size={20} />
                        Health Benefits
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">
                        Improvement or resolution of conditions like type 2 diabetes, sleep apnea, and hypertension.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center">
                        <Users className="mr-2 text-blue-600" size={20} />
                        Quality of Life
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">
                        Enhanced mobility, reduced joint pain, and improved psychological well-being.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose DirectPayDr for Bariatric Surgery?</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex">
                    <div className="mr-4 text-blue-600">
                      <DollarSign size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Save 40-60% on Bariatric Procedures</h3>
                      <p className="text-gray-700">
                        Our transparent pricing model eliminates hidden fees and markups, saving you thousands on your
                        bariatric surgery.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mr-4 text-blue-600">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">High-Quality, Vetted Providers</h3>
                      <p className="text-gray-700">
                        All our bariatric surgeons are board-certified with extensive experience and excellent patient
                        outcomes.
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
                        Find accredited bariatric centers near you with our nationwide network of providers.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mr-4 text-blue-600">
                      <HelpCircle size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Dedicated Support</h3>
                      <p className="text-gray-700">
                        Our care team helps you navigate the entire process, from selecting a provider to post-operative
                        care.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="procedures" className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Common Bariatric Procedures</h2>

                <div className="grid gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Gastric Sleeve (Sleeve Gastrectomy)</CardTitle>
                      <CardDescription>
                        A surgical weight-loss procedure that removes approximately 80% of the stomach
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between mb-4">
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Average Market Price</p>
                          <p className="text-lg font-bold text-gray-800 line-through">$18,000 - $25,000</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">DirectPayDr Price</p>
                          <p className="text-lg font-bold text-green-600">$10,500 - $14,000</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Your Savings</p>
                          <p className="text-lg font-bold text-blue-600">Up to 45%</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">
                        The gastric sleeve procedure reduces the size of your stomach, limiting the amount of food you
                        can eat and helping you feel full sooner. It's one of the most common bariatric surgeries
                        performed today.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Minimally Invasive
                        </span>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          1-2 Hour Procedure
                        </span>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          2-3 Day Hospital Stay
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="/procedures/gastric-sleeve">
                        <Button className="w-full">
                          View Details
                          <ArrowRight className="ml-2" size={16} />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Gastric Bypass (Roux-en-Y)</CardTitle>
                      <CardDescription>
                        A procedure that creates a small stomach pouch and reroutes the small intestine
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between mb-4">
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Average Market Price</p>
                          <p className="text-lg font-bold text-gray-800 line-through">$20,000 - $30,000</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">DirectPayDr Price</p>
                          <p className="text-lg font-bold text-green-600">$12,000 - $17,500</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Your Savings</p>
                          <p className="text-lg font-bold text-blue-600">Up to 42%</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Gastric bypass is considered the gold standard of weight loss surgery. It works by restricting
                        food intake and reducing the absorption of calories and nutrients.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Laparoscopic
                        </span>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          2-3 Hour Procedure
                        </span>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          2-4 Day Hospital Stay
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="/procedures/gastric-bypass">
                        <Button className="w-full">
                          View Details
                          <ArrowRight className="ml-2" size={16} />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Lap Band Surgery</CardTitle>
                      <CardDescription>
                        An adjustable band placed around the upper portion of the stomach to restrict food intake
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between mb-4">
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Average Market Price</p>
                          <p className="text-lg font-bold text-gray-800 line-through">$15,000 - $20,000</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">DirectPayDr Price</p>
                          <p className="text-lg font-bold text-green-600">$8,500 - $12,000</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Your Savings</p>
                          <p className="text-lg font-bold text-blue-600">Up to 43%</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">
                        The Lap Band is an adjustable silicone band that is placed around the upper part of the stomach,
                        creating a small pouch that restricts food intake. It's adjustable and reversible.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Adjustable
                        </span>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          1 Hour Procedure
                        </span>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Outpatient/1 Day Stay
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="/procedures/lap-band">
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
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Bariatric Providers</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle>Midwest Bariatric Center</CardTitle>
                          <CardDescription>Indianapolis, IN</CardDescription>
                        </div>
                        <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Center of Excellence
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
                        <p className="ml-2 text-sm font-medium text-gray-500">4.9 out of 5 (120 reviews)</p>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Specializing in minimally invasive bariatric procedures with over 15 years of experience and
                        more than 5,000 successful surgeries.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Gastric Sleeve
                        </span>
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Gastric Bypass
                        </span>
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Lap Band
                        </span>
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Revision Surgery
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
                          <CardTitle>Southwest Bariatric Institute</CardTitle>
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
                        <p className="ml-2 text-sm font-medium text-gray-500">4.8 out of 5 (98 reviews)</p>
                      </div>
                      <p className="text-gray-700 mb-4">
                        A multidisciplinary team approach with comprehensive pre and post-operative support, including
                        nutritional counseling and support groups.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Gastric Sleeve
                        </span>
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Gastric Bypass
                        </span>
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Duodenal Switch
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
                    View All Bariatric Providers
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="faqs" className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Who qualifies for bariatric surgery?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">Generally, candidates for bariatric surgery:</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>Have a BMI of 40 or higher (extreme obesity)</li>
                        <li>Have a BMI of 35-39.9 (obesity) and a serious weight-related health problem</li>
                        <li>Have tried other weight loss methods without success</li>
                        <li>Are psychologically ready for the lifestyle changes required</li>
                      </ul>
                      <p className="mt-2 text-gray-700">
                        Each provider may have specific requirements, and a comprehensive evaluation is necessary to
                        determine if you're a good candidate.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>How much weight will I lose after bariatric surgery?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">
                        Weight loss varies by procedure and individual factors, but typical results include:
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>Gastric Sleeve: 60-70% of excess weight within 12-18 months</li>
                        <li>Gastric Bypass: 60-80% of excess weight within 12-18 months</li>
                        <li>Lap Band: 40-50% of excess weight over 2-3 years</li>
                      </ul>
                      <p className="mt-2 text-gray-700">
                        Long-term success depends on following dietary guidelines, regular exercise, and lifestyle
                        changes.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>What is the recovery time after bariatric surgery?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">Recovery times vary by procedure and individual factors:</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>Hospital stay: 1-4 days depending on the procedure</li>
                        <li>Return to work: 1-3 weeks for non-physical jobs</li>
                        <li>Full recovery: 4-6 weeks before resuming all normal activities</li>
                      </ul>
                      <p className="mt-2 text-gray-700">
                        Your surgeon will provide specific guidelines based on your procedure and personal health
                        factors.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger>Does insurance cover bariatric surgery?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">
                        Many insurance plans cover bariatric surgery if medical necessity criteria are met, but coverage
                        varies widely. The DirectPayDr model offers an alternative:
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

                  <AccordionItem value="item-5">
                    <AccordionTrigger>What lifestyle changes are required after bariatric surgery?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">
                        Successful long-term outcomes require significant lifestyle changes:
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>Following a specific diet progression (liquid to soft to regular foods)</li>
                        <li>Eating smaller portions and chewing thoroughly</li>
                        <li>Taking recommended vitamins and supplements</li>
                        <li>Regular physical activity</li>
                        <li>Attending follow-up appointments</li>
                        <li>Possibly participating in support groups</li>
                      </ul>
                      <p className="mt-2 text-gray-700">
                        Your bariatric team will provide detailed guidance on these changes.
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
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Start Your Weight Loss Journey?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Take the first step toward a healthier life with affordable, high-quality bariatric care.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
              Find a Bariatric Provider
            </Button>
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-100 px-8 py-6 text-lg">
              Compare Procedure Prices
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
