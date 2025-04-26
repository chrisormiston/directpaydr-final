import { ArrowRight, CheckCircle, DollarSign, MapPin, Search, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CTScanPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-2/3">
                <Badge className="bg-blue-100 text-blue-700 mb-4">Procedure</Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">CT Scan</h1>
                <p className="text-xl text-gray-600 mb-8">
                  A CT scan (computed tomography) combines a series of X-ray images taken from different angles to
                  create detailed images of your body. Save up to 65% on your CT scan with DirectPayDr's transparent
                  pricing.
                </p>

                <div className="bg-blue-50 p-6 rounded-xl mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Average Savings</h2>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-500">Typical Price</span>
                        <span className="text-sm font-medium line-through text-gray-500">$1,200</span>
                      </div>
                      <Progress value={100} className="h-3 bg-gray-200" />
                    </div>
                    <div className="text-xl font-bold">vs</div>
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-blue-600">DirectPayDr Price</span>
                        <span className="text-sm font-medium text-blue-600">$420</span>
                      </div>
                      <Progress value={35} className="h-3 bg-gray-200" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-center">
                      <div className="text-green-600 font-bold text-3xl">Save 65%</div>
                      <div className="text-gray-500">$780 in savings</div>
                    </div>
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                      Find Providers Near Me
                      <MapPin className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">About CT Scans</h2>
                  <p className="text-gray-600 mb-4">
                    A CT scan, or computed tomography scan, uses computer-processed combinations of many X-ray
                    measurements taken from different angles to produce cross-sectional images of specific areas of a
                    scanned object, allowing the user to see inside the object without cutting.
                  </p>
                  <p className="text-gray-600 mb-4">
                    CT scans are used to diagnose muscle and bone disorders, such as tumors and fractures, locate blood
                    clots and infections, guide procedures like surgery and radiation therapy, detect and monitor
                    diseases like cancer, and detect internal injuries and internal bleeding.
                  </p>
                  <p className="text-gray-600">
                    Different types of CT scans include head CT scans, chest CT scans, abdominal and pelvic CT scans,
                    spine CT scans, and CT angiography.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">What's Included</h2>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Pre-procedure consultation</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">CT scan procedure</span>
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
                      <span className="text-gray-600">Follow-up consultation to review results</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-1/3">
                <Card className="shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Find a Provider</h3>
                    <p className="text-gray-600 mb-6">
                      Enter your location to find providers offering CT scans at transparent, affordable prices.
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
                          <span className="text-gray-600">Save up to 65% compared to typical prices</span>
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
                    "I needed a chest CT scan and was shocked when I got a quote for over $1,300 from my local hospital.
                    Through DirectPayDr, I found a reputable imaging center that charged only $395. The facility was
                    clean, the staff was professional, and I got my results the next day."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-bold">R</span>
                    </div>
                    <div>
                      <p className="font-semibold">Rachel Cohen</p>
                      <p className="text-sm text-gray-500">Phoenix, AZ</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of CT Scans Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Types of CT Scans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Head CT Scan</h3>
                  <p className="text-gray-600 mb-4">
                    Used to examine the brain and skull for injuries, tumors, bleeding, or other conditions.
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500">Starting at</p>
                      <p className="text-lg font-bold text-blue-700">$350</p>
                    </div>
                    <Button variant="outline" className="text-blue-600 border-blue-600">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Chest CT Scan</h3>
                  <p className="text-gray-600 mb-4">
                    Examines the chest area, including lungs, heart, and chest wall, for abnormalities.
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500">Starting at</p>
                      <p className="text-lg font-bold text-blue-700">$420</p>
                    </div>
                    <Button variant="outline" className="text-blue-600 border-blue-600">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Abdominal CT Scan</h3>
                  <p className="text-gray-600 mb-4">
                    Visualizes the liver, spleen, kidneys, and other organs in the abdominal cavity.
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500">Starting at</p>
                      <p className="text-lg font-bold text-blue-700">$450</p>
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

            <Tabs defaultValue="procedure" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="procedure">About the Procedure</TabsTrigger>
                <TabsTrigger value="preparation">Preparation</TabsTrigger>
                <TabsTrigger value="pricing">Pricing & Insurance</TabsTrigger>
              </TabsList>

              <TabsContent value="procedure" className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">What is a CT scan?</h3>
                  <p className="text-gray-600">
                    A CT (computed tomography) scan uses X-rays and computer processing to create detailed images of the
                    inside of your body. The scan produces cross-sectional images that show bones, blood vessels, and
                    soft tissues in greater detail than standard X-rays.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">How long does a CT scan take?</h3>
                  <p className="text-gray-600">
                    The actual CT scan typically takes only 5 to 10 minutes. However, you should plan to be at the
                    facility for about 1-2 hours, which includes preparation time and possibly waiting for the
                    radiologist to check the images to make sure they're clear.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Is a CT scan safe?</h3>
                  <p className="text-gray-600">
                    CT scans use radiation, but the benefit of an accurate diagnosis generally outweighs the risks. The
                    amount of radiation you're exposed to during a CT scan is minimal. However, if you're pregnant or
                    think you might be, tell your doctor before having a CT scan.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="preparation" className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">How do I prepare for a CT scan?</h3>
                  <p className="text-gray-600">
                    Preparation varies depending on which part of your body is being scanned. You may be asked to remove
                    metal objects, such as jewelry, and wear a hospital gown. For some CT scans, you may need to fast
                    for a few hours beforehand or drink a contrast solution. Your provider will give you specific
                    instructions.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">What is contrast material and why is it used?</h3>
                  <p className="text-gray-600">
                    Contrast material (sometimes called dye) is a substance that's either swallowed, injected, or
                    administered as an enema before some CT scans. It helps highlight specific areas inside your body,
                    making them easier to see. Not all CT scans require contrast material.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Can I drive myself home after a CT scan?</h3>
                  <p className="text-gray-600">
                    Yes, in most cases you can drive yourself home after a CT scan. Unlike some other procedures, CT
                    scans don't typically involve sedation. However, if you're given a sedative or feel unwell after the
                    procedure, you should arrange for someone to drive you home.
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
                  <h3 className="text-lg font-semibold mb-2">
                    Can I use my insurance for a CT scan through DirectPayDr?
                  </h3>
                  <p className="text-gray-600">
                    DirectPayDr operates outside of insurance networks, offering cash-pay prices that are often lower
                    than what you'd pay with insurance, especially if you haven't met your deductible. You can submit
                    your receipt to your insurance company as an out-of-network expense if you choose.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Can I use my HSA or FSA to pay?</h3>
                  <p className="text-gray-600">
                    Yes, you can use your Health Savings Account (HSA) or Flexible Spending Account (FSA) to pay for a
                    CT scan purchased through DirectPayDr, as it's a qualified medical expense.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Save on Your CT Scan?</h2>
            <p className="text-xl mb-8">
              Join thousands of patients who have already saved an average of 65% on their CT scans with DirectPayDr.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
                Find Providers Near Me
                <MapPin className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-blue-700">
                Learn How It Works
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
