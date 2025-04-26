import { ArrowRight, CheckCircle, DollarSign, MapPin, Search, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ColonoscopyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-2/3">
                <Badge className="bg-blue-100 text-blue-700 mb-4">Procedure</Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Colonoscopy</h1>
                <p className="text-xl text-gray-600 mb-8">
                  A colonoscopy is a procedure that allows your doctor to examine the lining of your large intestine
                  (colon) for abnormalities. Save up to 61% on your colonoscopy with DirectPayDr's transparent pricing.
                </p>

                <div className="bg-blue-50 p-6 rounded-xl mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Average Savings</h2>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-500">Typical Price</span>
                        <span className="text-sm font-medium line-through text-gray-500">$2,800</span>
                      </div>
                      <Progress value={100} className="h-3 bg-gray-200" />
                    </div>
                    <div className="text-xl font-bold">vs</div>
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-blue-600">DirectPayDr Price</span>
                        <span className="text-sm font-medium text-blue-600">$1,100</span>
                      </div>
                      <Progress value={39} className="h-3 bg-gray-200" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-center">
                      <div className="text-green-600 font-bold text-3xl">Save 61%</div>
                      <div className="text-gray-500">$1,700 in savings</div>
                    </div>
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                      Find Providers Near Me
                      <MapPin className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">About Colonoscopy</h2>
                  <p className="text-gray-600 mb-4">
                    A colonoscopy is a procedure that allows your doctor to look at the inner lining of your large
                    intestine (rectum and colon). A thin, flexible tube called a colonoscope is used to look at the
                    colon. A colonoscopy helps find ulcers, polyps, tumors, and areas of inflammation or bleeding.
                  </p>
                  <p className="text-gray-600 mb-4">
                    During a colonoscopy, tissue samples can be collected (biopsy) and abnormal growths can be taken
                    out. Colonoscopy can also be used as a screening test to check for cancer or precancerous growths in
                    the colon or rectum (polyps).
                  </p>
                  <p className="text-gray-600">
                    The American Cancer Society recommends regular colonoscopy screening starting at age 45 for people
                    at average risk of colorectal cancer.
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
                      <span className="text-gray-600">Colonoscopy procedure</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Facility fee</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Anesthesia (conscious sedation)</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Pathology for up to 3 polyps (if needed)</span>
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
                      Enter your location to find providers offering colonoscopies at transparent, affordable prices.
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
                          <span className="text-gray-600">Save up to 61% compared to typical prices</span>
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
                    "I saved over $1,800 on my colonoscopy with DirectPayDr. The procedure was exactly the same as my
                    previous one through insurance, but at a fraction of the cost. The doctor was excellent and took
                    time to explain everything."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-bold">M</span>
                    </div>
                    <div>
                      <p className="font-semibold">Marcus Johnson</p>
                      <p className="text-sm text-gray-500">Dallas, TX</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Procedures Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Procedures</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Upper Endoscopy (EGD)</h3>
                  <p className="text-gray-600 mb-4">
                    Examination of the upper digestive tract using a flexible tube with a camera.
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500">Starting at</p>
                      <p className="text-lg font-bold text-blue-700">$850</p>
                    </div>
                    <Button variant="outline" className="text-blue-600 border-blue-600">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Flexible Sigmoidoscopy</h3>
                  <p className="text-gray-600 mb-4">
                    Examination of the lower part of the colon using a flexible tube with a camera.
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500">Starting at</p>
                      <p className="text-lg font-bold text-blue-700">$650</p>
                    </div>
                    <Button variant="outline" className="text-blue-600 border-blue-600">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Colorectal Cancer Screening</h3>
                  <p className="text-gray-600 mb-4">
                    Various screening options for colorectal cancer, including stool tests and imaging.
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500">Starting at</p>
                      <p className="text-lg font-bold text-blue-700">$120</p>
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
                  <h3 className="text-lg font-semibold mb-2">What is a colonoscopy?</h3>
                  <p className="text-gray-600">
                    A colonoscopy is a procedure that allows your doctor to look at the inner lining of your large
                    intestine (rectum and colon) using a thin, flexible tube called a colonoscope that has a tiny camera
                    at the tip. It helps find ulcers, polyps, tumors, and areas of inflammation or bleeding.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">How long does a colonoscopy take?</h3>
                  <p className="text-gray-600">
                    The procedure itself usually takes 30 to 60 minutes. However, you should plan to spend 2-3 hours at
                    the facility for preparation, the procedure, and recovery from sedation.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Is a colonoscopy painful?</h3>
                  <p className="text-gray-600">
                    Most people don't experience pain during a colonoscopy because they receive sedation. You might feel
                    some cramping or bloating afterward, but this typically resolves quickly.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="preparation" className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">How do I prepare for a colonoscopy?</h3>
                  <p className="text-gray-600">
                    Preparation typically involves a clear liquid diet the day before the procedure and taking a bowel
                    prep solution to clean out your colon. Your doctor will provide specific instructions, which you
                    should follow carefully.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Can I drive myself home after a colonoscopy?</h3>
                  <p className="text-gray-600">
                    No, you cannot drive yourself home after a colonoscopy. Because of the sedation, you'll need someone
                    to drive you home and stay with you for a few hours after the procedure.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">When can I eat after a colonoscopy?</h3>
                  <p className="text-gray-600">
                    You can usually eat a light meal after a colonoscopy once you're fully awake. Your doctor may have
                    specific recommendations based on the findings of your procedure.
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
                    Can I use my insurance for a colonoscopy through DirectPayDr?
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
                    colonoscopy purchased through DirectPayDr, as it's a qualified medical expense.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Save on Your Colonoscopy?</h2>
            <p className="text-xl mb-8">
              Join thousands of patients who have already saved an average of 61% on their colonoscopy with DirectPayDr.
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
