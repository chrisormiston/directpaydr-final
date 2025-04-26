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
  Scissors,
  Search,
  ShieldCheck,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function GeneralSurgeryPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">General Surgery Procedures</h1>
              <p className="text-xl mb-6">
                Find affordable general surgery procedures with transparent pricing and high-quality care.
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
                <h2 className="text-blue-800 font-bold text-xl mb-4">Find General Surgery Procedures Near You</h2>
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
                      <option value="hernia-repair">Hernia Repair</option>
                      <option value="gallbladder-removal">Gallbladder Removal</option>
                      <option value="appendectomy">Appendectomy</option>
                      <option value="colonoscopy">Colonoscopy</option>
                      <option value="hemorrhoid-treatment">Hemorrhoid Treatment</option>
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
                <h2 className="text-2xl font-bold text-gray-800 mb-4">About General Surgery</h2>
                <p className="text-gray-700 mb-4">
                  General surgery encompasses a wide range of procedures that involve the abdomen, digestive tract,
                  endocrine system, and other organs. These procedures are performed to treat various conditions, from
                  hernias and gallbladder disease to appendicitis and intestinal disorders.
                </p>
                <p className="text-gray-700 mb-4">
                  Many general surgery procedures can now be performed using minimally invasive techniques, which offer
                  benefits such as smaller incisions, less pain, and faster recovery times.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center">
                        <Scissors className="mr-2 text-blue-600" size={20} />
                        Minimally Invasive
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">
                        Many procedures use laparoscopic or robotic techniques for smaller incisions and faster
                        recovery.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center">
                        <HeartPulse className="mr-2 text-blue-600" size={20} />
                        Common Procedures
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">
                        Includes hernia repairs, gallbladder removal, appendectomy, and digestive tract procedures.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center">
                        <ShieldCheck className="mr-2 text-blue-600" size={20} />
                        High Success Rates
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">
                        Most general surgery procedures have excellent outcomes with low complication rates.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose DirectPayDr for General Surgery?</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex">
                    <div className="mr-4 text-blue-600">
                      <DollarSign size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Save 30-60% on General Surgery</h3>
                      <p className="text-gray-700">
                        Our transparent pricing model eliminates hidden fees and markups, saving you thousands on your
                        procedure.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mr-4 text-blue-600">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Board-Certified Surgeons</h3>
                      <p className="text-gray-700">
                        All our general surgeons are board-certified with extensive experience and excellent patient
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
                        Find accredited surgical centers near you with our nationwide network of providers.
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
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Common General Surgery Procedures</h2>

                <div className="grid gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Hernia Repair</CardTitle>
                      <CardDescription>
                        Surgical repair of a hernia, where tissue protrudes through a weak spot in the abdominal muscles
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between mb-4">
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Average Market Price</p>
                          <p className="text-lg font-bold text-gray-800 line-through">$8,000 - $12,000</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">DirectPayDr Price</p>
                          <p className="text-lg font-bold text-green-600">$3,500 - $5,500</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Your Savings</p>
                          <p className="text-lg font-bold text-blue-600">Up to 56%</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Hernia repair surgery fixes a hernia by pushing the bulging tissue back into place and
                        strengthening the weakened area. Most hernia repairs are performed as outpatient procedures
                        using minimally invasive techniques.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Minimally Invasive
                        </span>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          1-2 Hour Procedure
                        </span>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Outpatient
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="/procedures/hernia-repair">
                        <Button className="w-full">
                          View Details
                          <ArrowRight className="ml-2" size={16} />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Gallbladder Removal (Cholecystectomy)</CardTitle>
                      <CardDescription>
                        Surgical removal of the gallbladder, usually to treat gallstones or inflammation
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between mb-4">
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Average Market Price</p>
                          <p className="text-lg font-bold text-gray-800 line-through">$10,000 - $20,000</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">DirectPayDr Price</p>
                          <p className="text-lg font-bold text-green-600">$5,000 - $8,000</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Your Savings</p>
                          <p className="text-lg font-bold text-blue-600">Up to 60%</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Gallbladder removal is typically performed laparoscopically through several small incisions in
                        the abdomen. The procedure removes the gallbladder, which stores bile produced by the liver.
                        Most people can function normally without a gallbladder.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Laparoscopic
                        </span>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          1-2 Hour Procedure
                        </span>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Same-day or Overnight Stay
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="/procedures/gallbladder-removal">
                        <Button className="w-full">
                          View Details
                          <ArrowRight className="ml-2" size={16} />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Colonoscopy</CardTitle>
                      <CardDescription>
                        Examination of the large intestine (colon) using a flexible tube with a camera
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between mb-4">
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Average Market Price</p>
                          <p className="text-lg font-bold text-gray-800 line-through">$3,000 - $5,000</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">DirectPayDr Price</p>
                          <p className="text-lg font-bold text-green-600">$1,200 - $2,000</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Your Savings</p>
                          <p className="text-lg font-bold text-blue-600">Up to 60%</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">
                        A colonoscopy allows your doctor to examine the lining of your large intestine for
                        abnormalities. It's commonly used to screen for colon cancer and to investigate digestive
                        symptoms. During the procedure, polyps or tissue samples can be removed for further testing.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Diagnostic
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
                      <Link href="/procedures/colonoscopy">
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
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured General Surgery Providers</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle>Midwest Surgical Associates</CardTitle>
                          <CardDescription>Indianapolis, IN</CardDescription>
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
                        <p className="ml-2 text-sm font-medium text-gray-500">4.9 out of 5 (135 reviews)</p>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Specializing in minimally invasive general surgery procedures with over 20 years of experience
                        and more than 10,000 successful surgeries.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Hernia Repair
                        </span>
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Gallbladder Removal
                        </span>
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Appendectomy
                        </span>
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Colonoscopy
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
                          <CardTitle>Southwest Surgical Center</CardTitle>
                          <CardDescription>Phoenix, AZ</CardDescription>
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
                        <p className="ml-2 text-sm font-medium text-gray-500">4.8 out of 5 (112 reviews)</p>
                      </div>
                      <p className="text-gray-700 mb-4">
                        A state-of-the-art surgical center offering advanced laparoscopic and robotic-assisted
                        procedures with comprehensive pre and post-operative care.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Hernia Repair
                        </span>
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Gallbladder Removal
                        </span>
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Hemorrhoid Treatment
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
                    View All General Surgery Providers
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="faqs" className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How do I prepare for general surgery?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">Preparation for general surgery typically includes:</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>Following your surgeon's instructions about eating and drinking before surgery</li>
                        <li>Stopping certain medications as directed</li>
                        <li>Arranging for someone to drive you home after the procedure</li>
                        <li>Preparing your home for recovery (easy meals, comfortable resting area)</li>
                        <li>Showering with a special soap if instructed</li>
                      </ul>
                      <p className="mt-2 text-gray-700">
                        Your surgeon will provide specific instructions based on your procedure and health status.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>What is the recovery time for general surgery procedures?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">Recovery times vary by procedure and individual factors:</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>Hernia repair: 1-2 weeks for normal activities, 4-6 weeks for strenuous activities</li>
                        <li>Gallbladder removal: 1-2 weeks for normal activities, 4 weeks for full recovery</li>
                        <li>Colonoscopy: 24 hours for the sedation to wear off, then normal activities</li>
                        <li>Appendectomy: 1-3 weeks depending on surgical approach</li>
                      </ul>
                      <p className="mt-2 text-gray-700">
                        Minimally invasive procedures generally have shorter recovery times than open surgeries. Your
                        surgeon will provide specific guidelines for your recovery.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>Are general surgery procedures covered by insurance?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">
                        Many insurance plans cover general surgery procedures if medical necessity criteria are met, but
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

                  <AccordionItem value="item-4">
                    <AccordionTrigger>What are the risks of general surgery?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">All surgical procedures carry some risks, which may include:</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>Infection at the incision site</li>
                        <li>Bleeding</li>
                        <li>Adverse reaction to anesthesia</li>
                        <li>Blood clots</li>
                        <li>Procedure-specific complications</li>
                      </ul>
                      <p className="mt-2 text-gray-700">
                        The risk of complications is generally low, especially with minimally invasive techniques. Your
                        surgeon will discuss specific risks based on your procedure and health status.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5">
                    <AccordionTrigger>How do I choose the right surgeon for my procedure?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">When selecting a surgeon, consider these factors:</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>Board certification and specialization</li>
                        <li>Experience with your specific procedure</li>
                        <li>Hospital or surgical center accreditation</li>
                        <li>Patient reviews and satisfaction ratings</li>
                        <li>Communication style and comfort level</li>
                      </ul>
                      <p className="mt-2 text-gray-700">
                        DirectPayDr carefully vets all providers in our network to ensure they meet high standards for
                        quality and patient care.
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
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Schedule Your Procedure?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Take the first step toward affordable, high-quality surgical care with transparent pricing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
              Find a General Surgeon
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
