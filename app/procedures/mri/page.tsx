"use client"

import { CheckCircle, DollarSign, MapPin, Search, Star } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MRIPage() {
  const [activeTab, setActiveTab] = useState("procedure")

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-2/3">
                <Badge className="bg-blue-100 text-blue-700 mb-4">Procedure</Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">MRI Scan</h1>
                <p className="text-xl text-gray-600 mb-8">
                  Magnetic Resonance Imaging (MRI) uses a strong magnetic field and radio waves to create detailed
                  images of organs and tissues. Save up to 67% on your MRI with DirectPayDr's transparent pricing.
                </p>

                <div className="bg-blue-50 p-6 rounded-xl mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Average Savings</h2>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-500">Typical Price</span>
                        <span className="text-sm font-medium line-through text-gray-500">$1,500</span>
                      </div>
                      <Progress value={100} className="h-3 bg-gray-200" />
                    </div>
                    <div className="text-xl font-bold">vs</div>
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-blue-600">DirectPayDr Price</span>
                        <span className="text-sm font-medium text-blue-600">$499</span>
                      </div>
                      <Progress value={33} className="h-3 bg-gray-200" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-center">
                      <div className="text-green-600 font-bold text-3xl">Save 67%</div>
                      <div className="text-gray-500">$1,001 in savings</div>
                    </div>
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                      Find Providers Near Me
                      <MapPin className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">About MRI Scans</h2>
                  <p className="text-gray-600 mb-4">
                    Magnetic Resonance Imaging (MRI) is a non-invasive imaging technology that produces
                    three-dimensional detailed anatomical images. It is often used for disease detection, diagnosis, and
                    treatment monitoring. It is based on sophisticated technology that excites and detects changes in
                    the rotational axis of protons found in the water that makes up living tissues.
                  </p>
                  <p className="text-gray-600 mb-4">
                    MRIs employ powerful magnets which produce a strong magnetic field that forces protons in the body
                    to align with that field. When a radiofrequency current is then pulsed through the patient, the
                    protons are stimulated, and spin out of equilibrium, straining against the pull of the magnetic
                    field. When the radiofrequency field is turned off, the MRI sensors are able to detect the energy
                    released as the protons realign with the magnetic field.
                  </p>
                  <p className="text-gray-600">
                    The time it takes for the protons to realign with the magnetic field, as well as the amount of
                    energy released, changes depending on the environment and the chemical nature of the molecules.
                    Physicians are able to tell the difference between various types of tissues based on these magnetic
                    properties.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">What's Included</h2>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">MRI scan (without contrast)</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Facility fee</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Radiologist interpretation</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Digital copy of images</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Written report</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-1/3">
                <Card className="shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Find a Provider</h3>
                    <p className="text-gray-600 mb-6">
                      Enter your location to find providers offering MRI scans at transparent, affordable prices.
                    </p>
                    <div className="space-y-4">
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Enter ZIP code"
                          className="w-full pl-10 py-2 border border-gray-300 rounded-md"
                        />
                      </div>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        Search
                        <Search className="ml-2 h-4 w-4" />
                      </Button>
                    </div>

                    <div className="mt-8 pt-6 border-t">
                      <h3 className="text-lg font-bold text-gray-900 mb-4">Why Choose DirectPayDr?</h3>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <DollarSign className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Save up to 67% compared to typical prices</span>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">All-inclusive, transparent pricing</span>
                        </div>
                        <div className="flex items-start">
                          <Star className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">High-quality, credentialed providers</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="mt-6 bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Patient Testimonial</h3>
                  <p className="text-gray-600 italic mb-4">
                    "I needed an MRI for my knee and was quoted $1,800 by my local hospital. Through DirectPayDr, I
                    found a high-quality imaging center that charged only $499. The facility was state-of-the-art, the
                    staff was professional, and my doctor said the images were excellent. I saved over $1,300!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-bold">M</span>
                    </div>
                    <div>
                      <p className="font-semibold">Michael Rodriguez</p>
                      <p className="text-sm text-gray-500">Indianapolis, IN</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of MRI Scans Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Types of MRI Scans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Brain MRI</h3>
                  <p className="text-gray-600 mb-4">
                    Detailed images of the brain to detect tumors, bleeding, inflammation, or other abnormalities.
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500">Starting at</p>
                      <p className="text-lg font-bold text-blue-700">$499</p>
                    </div>
                    <Button variant="outline" className="text-blue-600 border-blue-600">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Knee MRI</h3>
                  <p className="text-gray-600 mb-4">
                    Detailed images of the knee joint to detect injuries to ligaments, tendons, cartilage, or bone.
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500">Starting at</p>
                      <p className="text-lg font-bold text-blue-700">$475</p>
                    </div>
                    <Button variant="outline" className="text-blue-600 border-blue-600">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Spine MRI</h3>
                  <p className="text-gray-600 mb-4">
                    Detailed images of the spine to detect herniated discs, spinal stenosis, tumors, or other
                    abnormalities.
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500">Starting at</p>
                      <p className="text-lg font-bold text-blue-700">$525</p>
                    </div>
                    <Button variant="outline" className="text-blue-600 border-blue-600">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="procedure">About the Procedure</TabsTrigger>
                <TabsTrigger value="preparation">Preparation</TabsTrigger>
                <TabsTrigger value="pricing">Pricing & Insurance</TabsTrigger>
              </TabsList>

              <TabsContent value="procedure" className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">What is an MRI?</h3>
                  <p className="text-gray-600">
                    Magnetic Resonance Imaging (MRI) is a non-invasive imaging technology that produces
                    three-dimensional detailed anatomical images. It uses a strong magnetic field and radio waves to
                    generate images of organs and structures inside the body, without using radiation.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">How long does an MRI take?</h3>
                  <p className="text-gray-600">
                    An MRI scan typically takes 30 to 60 minutes, depending on the part of the body being scanned and
                    how many images are needed. You'll need to lie still during the scan to ensure clear images.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Is an MRI safe?</h3>
                  <p className="text-gray-600">
                    MRI is considered very safe. Unlike CT scans or X-rays, MRI doesn't use ionizing radiation. However,
                    because it uses strong magnets, it's important to inform your provider if you have any metal
                    implants, devices, or objects in your body, as some may not be compatible with MRI.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="preparation" className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">How do I prepare for an MRI?</h3>
                  <p className="text-gray-600">
                    You'll need to remove all metal objects, including jewelry, watches, and clothing with metal
                    fasteners. Inform your provider about any implants, devices, or metal in your body. You may need to
                    change into a hospital gown. For some MRIs, you may need to fast for a few hours beforehand or
                    receive a contrast agent.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">What if I'm claustrophobic?</h3>
                  <p className="text-gray-600">
                    If you're claustrophobic, let your provider know in advance. They may be able to provide a mild
                    sedative to help you relax. Some facilities also offer open MRI machines, which are less confining
                    than traditional MRI machines. You can also ask about listening to music during the scan to help you
                    stay calm.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">What is contrast material and why is it used?</h3>
                  <p className="text-gray-600">
                    Contrast material (sometimes called dye) is a substance that's injected into your bloodstream before
                    some MRI scans. It helps highlight certain areas inside your body, making them easier to see. Not
                    all MRI scans require contrast material. If your scan does require it, the provider will discuss
                    this with you beforehand.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="pricing" className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Why are DirectPayDr prices so much lower?</h3>
                  <p className="text-gray-600">
                    DirectPayDr negotiates directly with providers for cash-pay rates, eliminating the administrative
                    costs of insurance billing. Providers also appreciate getting paid upfront without having to chase
                    payments.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Can I use my insurance for an MRI through DirectPayDr?</h3>
                  <p className="text-gray-600">
                    DirectPayDr operates outside of insurance networks, offering cash-pay prices that are often lower
                    than what you'd pay with insurance, especially if you haven't met your deductible. You can submit
                    your receipt to your insurance company as an out-of-network expense if you choose.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Can I use my HSA or FSA to pay?</h3>
                  <p className="text-gray-600">
                    Yes, you can use your Health Savings Account (HSA) or Flexible Spending Account (FSA) to pay for an
                    MRI through DirectPayDr.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Save on Your MRI?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Find high-quality providers near you offering MRI scans at transparent, affordable prices.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Find MRI Providers Near Me
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
