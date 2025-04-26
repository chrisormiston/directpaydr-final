"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function UltrasoundPage() {
  const [activeTab, setActiveTab] = useState("pricing")

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Ultrasound</h1>
            <p className="text-xl text-gray-700 mb-8">
              Non-invasive imaging that uses sound waves to create pictures of the inside of your body.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Find Ultrasound Providers</Button>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What is an Ultrasound?</h2>
              <p className="text-gray-700 mb-4">
                An ultrasound is a non-invasive imaging test that uses high-frequency sound waves to create pictures of
                the inside of your body. Also called sonography, ultrasounds help doctors diagnose conditions, guide
                procedures, and monitor ongoing treatments. Unlike X-rays or CT scans, ultrasounds don't use radiation,
                making them particularly safe for pregnant women and their developing babies.
              </p>

              <div className="my-8 bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Common Types of Ultrasounds</h3>
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
                    <span>Abdominal Ultrasound</span>
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
                    <span>Pelvic Ultrasound</span>
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
                    <span>Obstetric Ultrasound</span>
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
                    <span>Breast Ultrasound</span>
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
                    <span>Thyroid Ultrasound</span>
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
                    <span>Cardiac Ultrasound (Echocardiogram)</span>
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
                    <span>Vascular Ultrasound</span>
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
                    <span>Musculoskeletal Ultrasound</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Would I Need an Ultrasound?</h2>
              <p className="text-gray-700 mb-4">Ultrasounds are used for a variety of reasons, including:</p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>
                  Examining internal organs such as the liver, gallbladder, spleen, pancreas, kidneys, and bladder
                </li>
                <li>Monitoring the development of a baby during pregnancy</li>
                <li>Diagnosing conditions affecting the heart, blood vessels, and other soft tissues</li>
                <li>Guiding needle biopsies and other minimally invasive procedures</li>
                <li>Evaluating blood flow through vessels</li>
                <li>Examining the thyroid gland, breasts, testes, or ovaries</li>
                <li>Detecting abnormalities in joints, muscles, and tendons</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Prepare for an Ultrasound</h2>
              <p className="text-gray-700 mb-4">
                Preparation for an ultrasound varies depending on the type of exam. Your healthcare provider will give
                you specific instructions, but here are some general guidelines:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>
                  For abdominal ultrasounds, you may need to fast for 8-12 hours before the exam to reduce gas in your
                  intestines and allow better visualization of the gallbladder.
                </li>
                <li>
                  For pelvic ultrasounds, you might need to drink several glasses of water and have a full bladder
                  during the exam.
                </li>
                <li>For obstetric ultrasounds, preparation varies depending on the stage of pregnancy.</li>
                <li>Wear loose, comfortable clothing that can be easily adjusted for the examination.</li>
                <li>
                  Follow any specific instructions about medications, eating, or drinking provided by your healthcare
                  provider.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Expect During an Ultrasound</h2>
              <p className="text-gray-700 mb-4">During an ultrasound:</p>
              <ol className="list-decimal pl-6 mb-6 text-gray-700">
                <li>
                  You'll lie on an examination table, and the technician will apply a special gel to the area being
                  examined. This gel helps transmit the sound waves.
                </li>
                <li>
                  The technician will press a small handheld device called a transducer against your skin and move it
                  over the area being examined.
                </li>
                <li>
                  The transducer sends sound waves into your body, collects the waves that bounce back, and sends them
                  to a computer that creates images.
                </li>
                <li>
                  You may feel slight pressure as the technician moves the transducer, but the procedure is generally
                  painless.
                </li>
                <li>
                  For some types of ultrasounds, a special transducer may be inserted into a natural opening in your
                  body, such as the vagina for certain pelvic ultrasounds.
                </li>
                <li>The procedure typically takes 30 minutes to an hour, depending on the type of ultrasound.</li>
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
                <h3 className="text-xl font-bold text-gray-900 mb-4">Ultrasound Pricing</h3>
                <p className="text-gray-700 mb-4">
                  The cost of an ultrasound can vary depending on the type, location, and provider. With DirectPayDr,
                  you can save significantly compared to traditional pricing.
                </p>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="py-3 px-4 text-left">Ultrasound Type</th>
                        <th className="py-3 px-4 text-left">Average Price</th>
                        <th className="py-3 px-4 text-left">DirectPayDr Price</th>
                        <th className="py-3 px-4 text-left">Savings</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 px-4">Abdominal Ultrasound</td>
                        <td className="py-3 px-4">$300-$600</td>
                        <td className="py-3 px-4">$120-$250</td>
                        <td className="py-3 px-4 text-green-600">Up to 60%</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Pelvic Ultrasound</td>
                        <td className="py-3 px-4">$350-$650</td>
                        <td className="py-3 px-4">$140-$280</td>
                        <td className="py-3 px-4 text-green-600">Up to 60%</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Obstetric Ultrasound</td>
                        <td className="py-3 px-4">$250-$500</td>
                        <td className="py-3 px-4">$100-$200</td>
                        <td className="py-3 px-4 text-green-600">Up to 60%</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Breast Ultrasound</td>
                        <td className="py-3 px-4">$250-$500</td>
                        <td className="py-3 px-4">$100-$200</td>
                        <td className="py-3 px-4 text-green-600">Up to 60%</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Cardiac Ultrasound</td>
                        <td className="py-3 px-4">$1,000-$2,000</td>
                        <td className="py-3 px-4">$400-$800</td>
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
                  DirectPayDr partners with imaging centers and hospitals across the country to provide affordable
                  ultrasound services.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                  <Link
                    href="/locations/arizona"
                    className="block p-4 border rounded-md hover:bg-blue-50 transition-colors"
                  >
                    <h4 className="font-semibold">Arizona</h4>
                    <p className="text-sm text-gray-600">18 providers</p>
                  </Link>
                  <Link
                    href="/locations/florida"
                    className="block p-4 border rounded-md hover:bg-blue-50 transition-colors"
                  >
                    <h4 className="font-semibold">Florida</h4>
                    <p className="text-sm text-gray-600">25 providers</p>
                  </Link>
                  <Link
                    href="/locations/indiana"
                    className="block p-4 border rounded-md hover:bg-blue-50 transition-colors"
                  >
                    <h4 className="font-semibold">Indiana</h4>
                    <p className="text-sm text-gray-600">14 providers</p>
                  </Link>
                  <Link
                    href="/locations/nebraska"
                    className="block p-4 border rounded-md hover:bg-blue-50 transition-colors"
                  >
                    <h4 className="font-semibold">Nebraska</h4>
                    <p className="text-sm text-gray-600">11 providers</p>
                  </Link>
                  <Link
                    href="/locations/oklahoma"
                    className="block p-4 border rounded-md hover:bg-blue-50 transition-colors"
                  >
                    <h4 className="font-semibold">Oklahoma</h4>
                    <p className="text-sm text-gray-600">16 providers</p>
                  </Link>
                  <Link
                    href="/locations/tennessee"
                    className="block p-4 border rounded-md hover:bg-blue-50 transition-colors"
                  >
                    <h4 className="font-semibold">Tennessee</h4>
                    <p className="text-sm text-gray-600">19 providers</p>
                  </Link>
                  <Link
                    href="/locations/texas"
                    className="block p-4 border rounded-md hover:bg-blue-50 transition-colors"
                  >
                    <h4 className="font-semibold">Texas</h4>
                    <p className="text-sm text-gray-600">28 providers</p>
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
                  Our network includes top-rated imaging centers and radiology departments that offer high-quality
                  ultrasound services at affordable prices.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-lg">Premier Imaging Center</h4>
                      <p className="text-sm text-gray-600 mb-2">Houston, TX</p>
                      <div className="flex items-center mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="h-4 w-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>
                        <span className="ml-2 text-sm text-gray-600">5.0 (178 reviews)</span>
                      </div>
                      <p className="text-sm text-gray-700 mb-3">
                        Comprehensive ultrasound services with board-certified radiologists and state-of-the-art
                        equipment.
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
                      <h4 className="font-semibold text-lg">Valley Diagnostic Imaging</h4>
                      <p className="text-sm text-gray-600 mb-2">Phoenix, AZ</p>
                      <div className="flex items-center mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="h-4 w-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>
                        <span className="ml-2 text-sm text-gray-600">4.9 (142 reviews)</span>
                      </div>
                      <p className="text-sm text-gray-700 mb-3">
                        Specializing in 3D and 4D ultrasounds with same-day results and flexible scheduling.
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
                <p className="text-gray-700 mb-4">
                  Find out how much you can save on your ultrasound with DirectPayDr.
                </p>
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
                    <label htmlFor="ultrasound-type" className="block text-sm font-medium text-gray-700 mb-1">
                      Ultrasound Type
                    </label>
                    <select id="ultrasound-type" className="w-full px-3 py-2 border border-gray-300 rounded-md">
                      <option value="">Select type</option>
                      <option value="abdominal">Abdominal Ultrasound</option>
                      <option value="pelvic">Pelvic Ultrasound</option>
                      <option value="obstetric">Obstetric Ultrasound</option>
                      <option value="breast">Breast Ultrasound</option>
                      <option value="thyroid">Thyroid Ultrasound</option>
                      <option value="cardiac">Cardiac Ultrasound</option>
                      <option value="vascular">Vascular Ultrasound</option>
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
                  <AccordionTrigger className="text-left">Are ultrasounds safe?</AccordionTrigger>
                  <AccordionContent>
                    Yes, ultrasounds are considered very safe. Unlike X-rays or CT scans, ultrasounds use sound waves
                    instead of radiation, making them safe for everyone, including pregnant women and their developing
                    babies.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">How long does an ultrasound take?</AccordionTrigger>
                  <AccordionContent>
                    Most ultrasound examinations take between 30 minutes to an hour, depending on the type of ultrasound
                    and the area being examined. Some specialized ultrasounds may take longer.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    Do I need to do anything special to prepare for an ultrasound?
                  </AccordionTrigger>
                  <AccordionContent>
                    Preparation varies depending on the type of ultrasound. For abdominal ultrasounds, you may need to
                    fast for 8-12 hours. For pelvic ultrasounds, you might need to have a full bladder. Your healthcare
                    provider will give you specific instructions.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">When will I get my ultrasound results?</AccordionTrigger>
                  <AccordionContent>
                    A radiologist will review your ultrasound images and send a report to your doctor. Some results may
                    be available immediately after the exam, while others may take a day or two. Your doctor will
                    discuss the results with you.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left">Do I need a referral for an ultrasound?</AccordionTrigger>
                  <AccordionContent>
                    In most cases, yes. Ultrasounds are typically ordered by a physician who has determined that the
                    imaging is necessary for your care. However, some facilities may offer self-referred ultrasounds for
                    specific purposes, such as pregnancy ultrasounds.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Related Procedures */}
            <div className="bg-white rounded-lg border p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Procedures</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/procedures/x-ray" className="flex items-center text-blue-600 hover:text-blue-800">
                    <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    X-Ray
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
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Save on Your Ultrasound?</h2>
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
