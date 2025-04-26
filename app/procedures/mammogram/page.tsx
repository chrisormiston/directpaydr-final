import { ArrowRight, CheckCircle, DollarSign, MapPin, Search, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MammogramPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-2/3">
                <Badge className="bg-blue-100 text-blue-700 mb-4">Procedure</Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Mammogram</h1>
                <p className="text-xl text-gray-600 mb-8">
                  A mammogram is an X-ray image of your breast used to screen for breast cancer. Save up to 58% on your
                  mammogram with DirectPayDr's transparent pricing.
                </p>

                <div className="bg-blue-50 p-6 rounded-xl mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Average Savings</h2>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-500">Typical Price</span>
                        <span className="text-sm font-medium line-through text-gray-500">$350</span>
                      </div>
                      <Progress value={100} className="h-3 bg-gray-200" />
                    </div>
                    <div className="text-xl font-bold">vs</div>
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-blue-600">DirectPayDr Price</span>
                        <span className="text-sm font-medium text-blue-600">$149</span>
                      </div>
                      <Progress value={42} className="h-3 bg-gray-200" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-center">
                      <div className="text-green-600 font-bold text-3xl">Save 58%</div>
                      <div className="text-gray-500">$201 in savings</div>
                    </div>
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                      Find Providers Near Me
                      <MapPin className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">About Mammograms</h2>
                  <p className="text-gray-600 mb-4">
                    A mammogram is an X-ray image of your breast used to screen for breast cancer and investigate breast
                    abnormalities. Mammograms play a key role in early breast cancer detection and can help reduce
                    breast cancer deaths by detecting cancer before symptoms appear.
                  </p>
                  <p className="text-gray-600 mb-4">
                    During a mammogram, your breasts are compressed between two firm surfaces to spread out the breast
                    tissue. An X-ray captures black-and-white images that are displayed on a computer screen and
                    examined by a radiologist for signs of cancer.
                  </p>
                  <p className="text-gray-600">
                    There are two types of mammograms: screening mammograms and diagnostic mammograms. Screening
                    mammograms are used to check for breast cancer in women who have no signs or symptoms. Diagnostic
                    mammograms are used to check for breast cancer after a lump or other symptom has been found.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">What's Included</h2>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Screening mammogram (2D)</span>
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
                      Enter your location to find providers offering mammograms at transparent, affordable prices.
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
                          <span className="text-gray-600">Save up to 58% compared to typical prices</span>
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
                    "I had been putting off my annual mammogram because of the cost. Through DirectPayDr, I found a
                    women's imaging center that charged only $149 instead of the $350 I paid last year. The facility was
                    beautiful, the staff was compassionate, and I received my results within 24 hours. I'm so grateful
                    for this service."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-bold">P</span>
                    </div>
                    <div>
                      <p className="font-semibold">Patricia Lee</p>
                      <p className="text-sm text-gray-500">Orlando, FL</p>
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
                  <h3 className="text-xl font-bold mb-2">3D Mammogram (Tomosynthesis)</h3>
                  <p className="text-gray-600 mb-4">
                    Advanced mammogram that creates a 3D image of the breast for better detection of abnormalities.
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500">Starting at</p>
                      <p className="text-lg font-bold text-blue-700">$249</p>
                    </div>
                    <Button variant="outline" className="text-blue-600 border-blue-600">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Breast Ultrasound</h3>
                  <p className="text-gray-600 mb-4">
                    Imaging test that uses sound waves to create pictures of the inside of the breast.
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500">Starting at</p>
                      <p className="text-lg font-bold text-blue-700">$175</p>
                    </div>
                    <Button variant="outline" className="text-blue-600 border-blue-600">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Breast MRI</h3>
                  <p className="text-gray-600 mb-4">
                    Detailed imaging test that uses magnetic fields to create detailed pictures of breast tissue.
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500">Starting at</p>
                      <p className="text-lg font-bold text-blue-700">$599</p>
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
                  <h3 className="text-lg font-semibold mb-2">What is a mammogram?</h3>
                  <p className="text-gray-600">
                    A mammogram is an X-ray image of the breast used to screen for breast cancer and investigate breast
                    abnormalities. It can detect changes in breast tissue that may be early signs of cancer, often
                    before physical symptoms develop.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">How long does a mammogram take?</h3>
                  <p className="text-gray-600">
                    The mammogram itself takes about 10-15 minutes. However, you should plan to be at the facility for
                    about 30 minutes to allow time for registration and preparation.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Is a mammogram painful?</h3>
                  <p className="text-gray-600">
                    During a mammogram, your breasts are compressed between two firm surfaces to spread out the breast
                    tissue. This compression can be uncomfortable or slightly painful for some women, but it only lasts
                    for a few seconds for each image. The discomfort is temporary and necessary to get a good image.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="preparation" className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">How do I prepare for a mammogram?</h3>
                  <p className="text-gray-600">
                    On the day of your mammogram, don't wear deodorant, antiperspirant, powder, lotion, or ointment on
                    your breasts or underarms, as these can appear as white spots on the X-ray. Wear a two-piece outfit
                    so you only need to remove your top for the procedure. If possible, schedule your mammogram for the
                    week after your menstrual period when your breasts are less likely to be tender.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">When should I get a mammogram?</h3>
                  <p className="text-gray-600">
                    The American Cancer Society recommends that women at average risk of breast cancer start annual
                    mammograms at age 45, with the option to start at age 40 if they choose. Women aged 55 and older can
                    switch to mammograms every 2 years or continue yearly screening. Women at high risk may need to
                    start screening earlier or have additional tests.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">How do I get my mammogram results?</h3>
                  <p className="text-gray-600">
                    A radiologist will analyze your mammogram images and send a report to your doctor. Most facilities
                    will also send you a letter with your results. If there are any concerns, you'll be contacted for
                    follow-up tests. With DirectPayDr, you'll typically receive your results within 1-3 business days.
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
                    Can I use my insurance for a mammogram through DirectPayDr?
                  </h3>
                  <p className="text-gray-600">
                    DirectPayDr operates outside of insurance networks, offering cash-pay prices. However, many
                    insurance plans cover screening mammograms at 100% as preventive care. You may want to check with
                    your insurance before deciding which option is best for you. If you choose DirectPayDr, you can
                    submit your receipt to your insurance company as an out-of-network expense if you choose.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Can I use my HSA or FSA to pay?</h3>
                  <p className="text-gray-600">
                    Yes, you can use your Health Savings Account (HSA) or Flexible Spending Account (FSA) to pay for a
                    mammogram purchased through DirectPayDr, as it's a qualified medical expense.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Schedule Your Mammogram?</h2>
            <p className="text-xl mb-8">
              Join thousands of patients who have already saved an average of 58% on their mammograms with DirectPayDr.
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
