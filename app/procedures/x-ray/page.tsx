"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useState } from "react"

export default function XRayPage() {
  const [activeTab, setActiveTab] = useState("pricing")

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">X-Ray</h1>
            <p className="text-xl text-gray-700 mb-8">
              Fast, effective imaging that uses radiation to create pictures of the structures inside your body.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Find X-Ray Providers</Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Compare Prices
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What is an X-Ray?</h2>
              <p className="text-gray-700 mb-4">
                An X-ray is a quick, painless test that produces images of the structures inside your body —
                particularly your bones. X-ray beams pass through your body, and they are absorbed in different amounts
                depending on the density of the material they pass through. Dense materials, such as bone and metal,
                show up as white on X-rays. The air in your lungs shows up as black. Fat and muscle appear as shades of
                gray.
              </p>

              <div className="my-8 bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Common Types of X-Rays</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-blue-600 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Chest X-Ray</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-blue-600 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Abdominal X-Ray</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-blue-600 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Bone X-Ray</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-blue-600 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Dental X-Ray</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-blue-600 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Skull X-Ray</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-blue-600 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Spine X-Ray</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-blue-600 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Joint X-Ray</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-blue-600 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Sinus X-Ray</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Would I Need an X-Ray?</h2>
              <p className="text-gray-700 mb-4">X-rays are commonly used for a variety of reasons, including:</p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Examining broken bones or joint dislocations</li>
                <li>Diagnosing pneumonia, lung cancer, or other chest conditions</li>
                <li>Looking for foreign objects in the body</li>
                <li>Detecting tooth decay and dental problems</li>
                <li>Monitoring the progression of certain diseases, such as osteoporosis</li>
                <li>Assisting with the placement of medical devices, such as pacemakers or stents</li>
                <li>Guiding orthopedic surgery procedures</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Prepare for an X-Ray</h2>
              <p className="text-gray-700 mb-4">
                X-rays require very little preparation. However, there are a few things to keep in mind:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Wear loose, comfortable clothing that can be easily removed or moved aside.</li>
                <li>Remove any jewelry, eyeglasses, or metal objects from the area being X-rayed.</li>
                <li>
                  Inform your doctor if you are pregnant or think you might be pregnant, as X-rays may not be
                  recommended.
                </li>
                <li>Tell your doctor if you have any metal implants, such as artificial joints or pacemakers.</li>
                <li>
                  For some types of X-rays, you may need to fast for a few hours beforehand or take a special contrast
                  material.
                </li>
              </ul>
              <p className="text-gray-700 mb-4">
                Always follow the specific instructions provided by your healthcare provider or the imaging facility.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Expect During an X-Ray</h2>
              <p className="text-gray-700 mb-4">During an X-ray:</p>
              <ol className="list-decimal pl-6 mb-6 text-gray-700">
                <li>
                  You'll be positioned on an examination table or standing in front of a specialized plate that contains
                  X-ray film or sensors.
                </li>
                <li>The technologist will position the X-ray machine over the area of your body to be examined.</li>
                <li>
                  You'll need to stay still and may be asked to hold your breath for a moment to prevent blurring of the
                  images.
                </li>
                <li>
                  The technologist will step behind a protective wall or into the next room to activate the X-ray
                  machine.
                </li>
                <li>The procedure is painless and typically takes only a few minutes.</li>
                <li>You might need to be repositioned for additional images.</li>
              </ol>
            </div>

            {/* Tabs for additional information */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-12">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="pricing">Pricing</TabsTrigger>
                <TabsTrigger value="locations">Locations</TabsTrigger>
                <TabsTrigger value="providers">Providers</TabsTrigger>
              </TabsList>
              <TabsContent value="pricing" className="p-4 border rounded-md mt-2">
                <h3 className="text-xl font-bold text-gray-900 mb-4">X-Ray Pricing</h3>
                <p className="text-gray-700 mb-4">
                  The cost of an X-ray can vary depending on the type, location, and provider. With DirectPayDr, you can
                  save significantly compared to traditional pricing.
                </p>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="py-3 px-4 text-left">X-Ray Type</th>
                        <th className="py-3 px-4 text-left">Average Price</th>
                        <th className="py-3 px-4 text-left">DirectPayDr Price</th>
                        <th className="py-3 px-4 text-left">Savings</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 px-4">Chest X-Ray</td>
                        <td className="py-3 px-4">$200-$400</td>
                        <td className="py-3 px-4">$80-$150</td>
                        <td className="py-3 px-4 text-green-600">Up to 65%</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Abdominal X-Ray</td>
                        <td className="py-3 px-4">$250-$450</td>
                        <td className="py-3 px-4">$100-$180</td>
                        <td className="py-3 px-4 text-green-600">Up to 60%</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Bone X-Ray (Single)</td>
                        <td className="py-3 px-4">$150-$300</td>
                        <td className="py-3 px-4">$60-$120</td>
                        <td className="py-3 px-4 text-green-600">Up to 60%</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Spine X-Ray</td>
                        <td className="py-3 px-4">$300-$600</td>
                        <td className="py-3 px-4">$120-$240</td>
                        <td className="py-3 px-4 text-green-600">Up to 60%</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Dental X-Ray</td>
                        <td className="py-3 px-4">$100-$250</td>
                        <td className="py-3 px-4">$40-$100</td>
                        <td className="py-3 px-4 text-green-600">Up to 60%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">Compare Prices Near You</Button>
                </div>
              </TabsContent>
              <TabsContent value="locations" className="p-4 border rounded-md mt-2">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Available Locations</h3>
                <p className="text-gray-700 mb-4">
                  DirectPayDr partners with imaging centers and hospitals across the country to provide affordable X-ray
                  services.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                  <Link
                    href="/locations/arizona"
                    className="block p-4 border rounded-md hover:bg-blue-50 transition-colors"
                  >
                    <h4 className="font-semibold">Arizona</h4>
                    <p className="text-sm text-gray-600">15 providers</p>
                  </Link>
                  <Link
                    href="/locations/florida"
                    className="block p-4 border rounded-md hover:bg-blue-50 transition-colors"
                  >
                    <h4 className="font-semibold">Florida</h4>
                    <p className="text-sm text-gray-600">22 providers</p>
                  </Link>
                  <Link
                    href="/locations/indiana"
                    className="block p-4 border rounded-md hover:bg-blue-50 transition-colors"
                  >
                    <h4 className="font-semibold">Indiana</h4>
                    <p className="text-sm text-gray-600">12 providers</p>
                  </Link>
                  <Link
                    href="/locations/nebraska"
                    className="block p-4 border rounded-md hover:bg-blue-50 transition-colors"
                  >
                    <h4 className="font-semibold">Nebraska</h4>
                    <p className="text-sm text-gray-600">9 providers</p>
                  </Link>
                  <Link
                    href="/locations/oklahoma"
                    className="block p-4 border rounded-md hover:bg-blue-50 transition-colors"
                  >
                    <h4 className="font-semibold">Oklahoma</h4>
                    <p className="text-sm text-gray-600">14 providers</p>
                  </Link>
                  <Link
                    href="/locations/tennessee"
                    className="block p-4 border rounded-md hover:bg-blue-50 transition-colors"
                  >
                    <h4 className="font-semibold">Tennessee</h4>
                    <p className="text-sm text-gray-600">17 providers</p>
                  </Link>
                  <Link
                    href="/locations/texas"
                    className="block p-4 border rounded-md hover:bg-blue-50 transition-colors"
                  >
                    <h4 className="font-semibold">Texas</h4>
                    <p className="text-sm text-gray-600">25 providers</p>
                  </Link>
                </div>
                <div className="mt-6">
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    View All Locations
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="providers" className="p-4 border rounded-md mt-2">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Featured Providers</h3>
                <p className="text-gray-700 mb-4">
                  Our network includes top-rated imaging centers and radiology departments that offer high-quality X-ray
                  services at affordable prices.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-lg">Clearview Imaging</h4>
                      <p className="text-sm text-gray-600 mb-2">Dallas, TX</p>
                      <div className="flex items-center mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="h-4 w-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>
                        <span className="ml-2 text-sm text-gray-600">5.0 (156 reviews)</span>
                      </div>
                      <p className="text-sm text-gray-700 mb-3">
                        State-of-the-art digital X-ray technology with same-day results available.
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
                      >
                        View Provider
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-lg">Midwest Radiology Center</h4>
                      <p className="text-sm text-gray-600 mb-2">Indianapolis, IN</p>
                      <div className="flex items-center mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="h-4 w-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>
                        <span className="ml-2 text-sm text-gray-600">4.8 (112 reviews)</span>
                      </div>
                      <p className="text-sm text-gray-700 mb-3">
                        Comprehensive X-ray services with board-certified radiologists.
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
                      >
                        View Provider
                      </Button>
                    </CardContent>
                  </Card>
                </div>
                <div className="mt-6">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">Find Providers Near You</Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            {/* Price Estimate Card */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Get a Price Estimate</h3>
                <p className="text-gray-700 mb-4">Find out how much you can save on your X-ray with DirectPayDr.</p>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      placeholder="Enter ZIP code"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label htmlFor="xray-type" className="block text-sm font-medium text-gray-700 mb-1">
                      X-Ray Type
                    </label>
                    <select id="xray-type" className="w-full px-3 py-2 border border-gray-300 rounded-md">
                      <option value="">Select type</option>
                      <option value="chest">Chest X-Ray</option>
                      <option value="abdominal">Abdominal X-Ray</option>
                      <option value="bone">Bone X-Ray</option>
                      <option value="spine">Spine X-Ray</option>
                      <option value="skull">Skull X-Ray</option>
                      <option value="dental">Dental X-Ray</option>
                      <option value="joint">Joint X-Ray</option>
                    </select>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Get Estimate</Button>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Accordion */}
            <div className="bg-white rounded-lg border p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">Are X-rays safe?</AccordionTrigger>
                  <AccordionContent>
                    X-rays use radiation, but the amount is very small and considered safe for most people. However, if
                    you're pregnant or might be pregnant, tell your doctor before having an X-ray, as radiation can be
                    harmful to a developing fetus.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">How long does an X-ray take?</AccordionTrigger>
                  <AccordionContent>
                    The actual X-ray procedure typically takes only a few minutes. However, you may need to wait for the
                    images to be processed and reviewed, which can take a bit longer.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    Do I need to do anything special to prepare for an X-ray?
                  </AccordionTrigger>
                  <AccordionContent>
                    For most X-rays, no special preparation is needed. You may be asked to remove jewelry, eyeglasses,
                    or any metal objects from the area being X-rayed. For some types of X-rays, you might need to fast
                    for a few hours or take a contrast material.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">When will I get my X-ray results?</AccordionTrigger>
                  <AccordionContent>
                    A radiologist will review your X-ray images and send a report to your doctor. Some results may be
                    available immediately after the exam, while others may take a day or two. Your doctor will discuss
                    the results with you.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left">Do I need a referral for an X-ray?</AccordionTrigger>
                  <AccordionContent>
                    In most cases, yes. X-rays are typically ordered by a physician who has determined that the imaging
                    is necessary for your care. However, some facilities may offer self-referred X-rays for specific
                    purposes.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Related Procedures */}
            <div className="bg-white rounded-lg border p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Procedures</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/procedures/ultrasound" className="flex items-center text-blue-600 hover:text-blue-800">
                    <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    Ultrasound
                  </Link>
                </li>
                <li>
                  <Link href="/procedures/ct-scan" className="flex items-center text-blue-600 hover:text-blue-800">
                    <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    CT Scan
                  </Link>
                </li>
                <li>
                  <Link href="/procedures/mri" className="flex items-center text-blue-600 hover:text-blue-800">
                    <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    MRI
                  </Link>
                </li>
                <li>
                  <Link href="/procedures/mammogram" className="flex items-center text-blue-600 hover:text-blue-800">
                    <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    Mammogram
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Save on Your X-Ray?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Compare prices, find providers, and book your appointment online with DirectPayDr.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-blue-600 hover:bg-blue-50">Find Providers Near You</Button>
              <Button variant="outline" className="border-white text-white hover:bg-blue-700">
                Learn How It Works
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
