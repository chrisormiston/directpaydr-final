"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  DollarSign,
  FlaskRoundIcon as Flask,
  HelpCircle,
  MapPin,
  Search,
  ShieldCheck,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function LabsPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Laboratory Services</h1>
              <p className="text-xl mb-6">Find affordable lab tests with transparent pricing and high-quality care.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-blue-700 hover:bg-gray-100">Find a Lab</Button>
                <Button variant="outline" className="border-white text-white hover:bg-blue-700">
                  Compare Prices
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-blue-800 font-bold text-xl mb-4">Find Lab Services Near You</h2>
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
                      <option value="">Select Lab Test</option>
                      <option value="blood-panel">Comprehensive Blood Panel</option>
                      <option value="metabolic-panel">Metabolic Panel</option>
                      <option value="lipid-panel">Lipid Panel</option>
                      <option value="thyroid-panel">Thyroid Panel</option>
                      <option value="vitamin-panel">Vitamin Panel</option>
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
              <TabsTrigger value="tests">Lab Tests</TabsTrigger>
              <TabsTrigger value="providers">Providers</TabsTrigger>
              <TabsTrigger value="faqs">FAQs</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">About Laboratory Services</h2>
                <p className="text-gray-700 mb-4">
                  Laboratory tests analyze samples of blood, urine, or other substances from your body to help diagnose
                  medical conditions, monitor the effectiveness of treatments, and track overall health. These tests
                  provide critical information that helps healthcare providers make informed decisions about your care.
                </p>
                <p className="text-gray-700 mb-4">
                  From routine blood work to specialized diagnostic tests, laboratory services are an essential
                  component of preventive care and disease management.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center">
                        <Flask className="mr-2 text-blue-600" size={20} />
                        Comprehensive Testing
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">
                        From basic blood panels to specialized hormone and genetic testing.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center">
                        <Clock className="mr-2 text-blue-600" size={20} />
                        Quick Results
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">
                        Most results available within 24-48 hours, with some tests offering same-day results.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center">
                        <ShieldCheck className="mr-2 text-blue-600" size={20} />
                        Accredited Facilities
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">
                        All labs in our network meet strict quality and accuracy standards.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose DirectPayDr for Lab Tests?</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex">
                    <div className="mr-4 text-blue-600">
                      <DollarSign size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Save 50-80% on Lab Tests</h3>
                      <p className="text-gray-700">
                        Our transparent pricing model eliminates hidden fees and markups, saving you hundreds on your
                        lab testing needs.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mr-4 text-blue-600">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">High-Quality, Certified Labs</h3>
                      <p className="text-gray-700">
                        All our lab partners are CLIA-certified with rigorous quality control measures.
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
                        Find accredited labs near you with our nationwide network of providers.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mr-4 text-blue-600">
                      <HelpCircle size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">No Insurance Required</h3>
                      <p className="text-gray-700">
                        Skip the insurance hassle with our direct-pay model that's often cheaper than using insurance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="tests" className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Common Laboratory Tests</h2>

                <div className="grid gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Comprehensive Metabolic Panel (CMP)</CardTitle>
                      <CardDescription>
                        A group of 14 tests that provide information about the current status of your kidneys, liver,
                        and electrolyte and acid/base balance
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between mb-4">
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Average Market Price</p>
                          <p className="text-lg font-bold text-gray-800 line-through">$150 - $300</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">DirectPayDr Price</p>
                          <p className="text-lg font-bold text-green-600">$30 - $60</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Your Savings</p>
                          <p className="text-lg font-bold text-blue-600">Up to 80%</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">
                        The CMP is often used as part of a routine health examination. It helps screen for a variety of
                        conditions, including kidney disease, liver disease, and diabetes. It can also be used to
                        monitor known conditions and treatments.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Blood Test
                        </span>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Fasting Required
                        </span>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Results in 24-48 Hours
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="/procedures/comprehensive-metabolic-panel">
                        <Button className="w-full">
                          View Details
                          <ArrowRight className="ml-2" size={16} />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Lipid Panel</CardTitle>
                      <CardDescription>
                        A group of tests that measure different types of cholesterol and triglycerides in your blood
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between mb-4">
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Average Market Price</p>
                          <p className="text-lg font-bold text-gray-800 line-through">$100 - $200</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">DirectPayDr Price</p>
                          <p className="text-lg font-bold text-green-600">$25 - $45</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Your Savings</p>
                          <p className="text-lg font-bold text-blue-600">Up to 78%</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">
                        A lipid panel helps determine your risk of heart disease and monitors the effectiveness of
                        treatments to lower cholesterol levels. It typically includes total cholesterol, HDL (good)
                        cholesterol, LDL (bad) cholesterol, and triglycerides.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Blood Test
                        </span>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Fasting Required
                        </span>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Results in 24-48 Hours
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="/procedures/lipid-panel">
                        <Button className="w-full">
                          View Details
                          <ArrowRight className="ml-2" size={16} />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Complete Blood Count (CBC)</CardTitle>
                      <CardDescription>
                        A test that evaluates the cells that circulate in blood, including red blood cells, white blood
                        cells, and platelets
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between mb-4">
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Average Market Price</p>
                          <p className="text-lg font-bold text-gray-800 line-through">$140 - $250</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">DirectPayDr Price</p>
                          <p className="text-lg font-bold text-green-600">$25 - $50</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Your Savings</p>
                          <p className="text-lg font-bold text-blue-600">Up to 82%</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">
                        A CBC is used to evaluate your overall health and detect a wide range of disorders, including
                        anemia, infection, and leukemia. It measures several components and features of your blood,
                        including red blood cells, white blood cells, and platelets.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Blood Test
                        </span>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          No Fasting Required
                        </span>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Results in 24 Hours
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="/procedures/complete-blood-count">
                        <Button className="w-full">
                          View Details
                          <ArrowRight className="ml-2" size={16} />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Thyroid Panel</CardTitle>
                      <CardDescription>
                        A group of tests that evaluate how well your thyroid gland is functioning
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between mb-4">
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Average Market Price</p>
                          <p className="text-lg font-bold text-gray-800 line-through">$150 - $300</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">DirectPayDr Price</p>
                          <p className="text-lg font-bold text-green-600">$40 - $80</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Your Savings</p>
                          <p className="text-lg font-bold text-blue-600">Up to 73%</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">
                        A thyroid panel helps diagnose and monitor thyroid disorders, including hypothyroidism and
                        hyperthyroidism. It typically includes tests for thyroid-stimulating hormone (TSH), free T4, and
                        sometimes free T3.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Blood Test
                        </span>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          No Fasting Required
                        </span>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Results in 24-48 Hours
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="/procedures/thyroid-panel">
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
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Laboratory Providers</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle>Midwest Diagnostic Laboratories</CardTitle>
                          <CardDescription>Indianapolis, IN</CardDescription>
                        </div>
                        <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          CLIA Certified
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
                        <p className="ml-2 text-sm font-medium text-gray-500">4.9 out of 5 (156 reviews)</p>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Full-service laboratory with state-of-the-art equipment and experienced technicians. Offers
                        walk-in service with no appointment necessary and extended hours.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Blood Tests
                        </span>
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Urine Tests
                        </span>
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Hormone Tests
                        </span>
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Allergy Tests
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
                          <CardTitle>Southwest Clinical Laboratories</CardTitle>
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
                        <p className="ml-2 text-sm font-medium text-gray-500">4.8 out of 5 (132 reviews)</p>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Comprehensive laboratory services with online scheduling and digital results delivery.
                        Specializes in quick turnaround times and pediatric-friendly blood draws.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Blood Tests
                        </span>
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Genetic Tests
                        </span>
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Vitamin Panels
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
                    View All Laboratory Providers
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="faqs" className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How do I prepare for lab tests?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">Preparation varies by test:</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>
                          Fasting tests (like glucose, lipid panels): No food or drink except water for 8-12 hours
                        </li>
                        <li>Hormone tests: May need to be done at specific times of day</li>
                        <li>Medication considerations: Some tests require you to hold certain medications</li>
                      </ul>
                      <p className="mt-2 text-gray-700">
                        When you schedule your test, you'll receive specific instructions based on the tests ordered.
                        Always follow these instructions for the most accurate results.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>How long does it take to get lab results?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">Result times vary by test:</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>Routine tests (CBC, metabolic panels): Usually 24-48 hours</li>
                        <li>Specialized tests: May take 3-7 days</li>
                        <li>Genetic or complex tests: Can take 1-2 weeks or longer</li>
                      </ul>
                      <p className="mt-2 text-gray-700">
                        With DirectPayDr providers, many offer digital results through secure patient portals as soon as
                        they're available. Your ordering physician will also receive a copy of your results.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>Do I need a doctor's order for lab tests?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">
                        Most lab tests require a doctor's order, but there are some exceptions:
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>Prescription tests: Require a doctor's order</li>
                        <li>
                          Direct-to-consumer tests: Some basic wellness tests can be ordered without a prescription in
                          certain states
                        </li>
                      </ul>
                      <p className="mt-2 text-gray-700">
                        DirectPayDr can help connect you with healthcare providers who can evaluate your needs and order
                        appropriate tests. We also offer a selection of wellness panels that may be available without a
                        prescription in some locations.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger>Are lab tests covered by insurance?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">
                        Many insurance plans cover lab tests if medical necessity criteria are met, but coverage varies
                        widely. The DirectPayDr model offers an alternative:
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>No insurance authorization process required</li>
                        <li>Transparent, all-inclusive pricing</li>
                        <li>Significant savings compared to typical out-of-pocket costs</li>
                        <li>Often less expensive than using insurance, especially with high-deductible plans</li>
                      </ul>
                      <p className="mt-2 text-gray-700">
                        Our Care Advisors can help you understand your options and potential costs.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5">
                    <AccordionTrigger>How accurate are lab tests?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">
                        Lab tests are generally very accurate, but several factors can affect results:
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>Proper preparation (fasting, medication timing)</li>
                        <li>Sample collection technique</li>
                        <li>Laboratory quality control measures</li>
                        <li>Individual biological variations</li>
                      </ul>
                      <p className="mt-2 text-gray-700">
                        All DirectPayDr partner laboratories are CLIA-certified and follow strict quality control
                        protocols to ensure accurate results. If you have questions about your results, it's best to
                        discuss them with your healthcare provider.
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
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Schedule Your Lab Tests?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Take the first step toward affordable, high-quality laboratory testing with transparent pricing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">Find a Laboratory</Button>
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-100 px-8 py-6 text-lg">
              Compare Test Prices
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
