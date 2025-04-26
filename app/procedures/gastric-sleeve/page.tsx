import { ArrowRight, CheckCircle, DollarSign, MapPin, Search, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GastricSleevePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-2/3">
                <Badge className="bg-blue-100 text-blue-700 mb-4">Procedure</Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Gastric Sleeve Surgery</h1>
                <p className="text-xl text-gray-600 mb-8">
                  Gastric sleeve surgery (sleeve gastrectomy) is a weight-loss procedure that removes approximately 80%
                  of the stomach. Save up to 40% on your gastric sleeve surgery with DirectPayDr's transparent pricing.
                </p>

                <div className="bg-blue-50 p-6 rounded-xl mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Average Savings</h2>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-500">Typical Price</span>
                        <span className="text-sm font-medium line-through text-gray-500">$18,500</span>
                      </div>
                      <Progress value={100} className="h-3 bg-gray-200" />
                    </div>
                    <div className="text-xl font-bold">vs</div>
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-blue-600">DirectPayDr Price</span>
                        <span className="text-sm font-medium text-blue-600">$10,995</span>
                      </div>
                      <Progress value={59} className="h-3 bg-gray-200" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-center">
                      <div className="text-green-600 font-bold text-3xl">Save 40%</div>
                      <div className="text-gray-500">$7,505 in savings</div>
                    </div>
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                      Find Providers Near Me
                      <MapPin className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">About Gastric Sleeve Surgery</h2>
                  <p className="text-gray-600 mb-4">
                    Gastric sleeve surgery, also called sleeve gastrectomy, is a surgical weight-loss procedure. The
                    surgery removes approximately 80% of the stomach, leaving a tube-shaped stomach about the size and
                    shape of a banana.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Having a smaller stomach limits the amount of food you can eat at one time and helps you feel fuller
                    sooner. It also decreases the production of ghrelin, a hormone that regulates hunger, which may
                    reduce your desire to eat.
                  </p>
                  <p className="text-gray-600">
                    Gastric sleeve surgery is typically performed laparoscopically, which involves inserting small
                    instruments through multiple small incisions in the upper abdomen. This approach is less invasive
                    than open surgery and may result in less pain, fewer complications, and a shorter hospital stay.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">What's Included</h2>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Pre-operative consultations and evaluations</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Gastric sleeve procedure (laparoscopic)</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Anesthesia</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Hospital stay (1-2 nights)</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Post-operative care</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Follow-up appointments</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-1/3">
                <Card className="shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Find a Provider</h3>
                    <p className="text-gray-600 mb-6">
                      Enter your location to find providers offering gastric sleeve surgery at transparent, affordable
                      prices.
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
                          <span className="text-gray-600">Save up to 40% compared to typical prices</span>
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
                    "After struggling with obesity for years, I decided to get gastric sleeve surgery. I was quoted over
                    $25,000 by my local hospital, which I couldn't afford even with insurance. Through DirectPayDr, I
                    found a top-rated bariatric surgeon who performed my surgery for $10,995. The care was excellent,
                    and I've lost 85 pounds in the first year. It changed my life."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-bold">J</span>
                    </div>
                    <div>
                      <p className="font-semibold">Jennifer Williams</p>
                      <p className="text-sm text-gray-500">Nashville, TN</p>
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
                  <h3 className="text-xl font-bold mb-2">Gastric Bypass</h3>
                  <p className="text-gray-600 mb-4">
                    A surgical procedure that changes how your stomach and small intestine handle the food you eat to
                    help you lose weight.
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500">Starting at</p>
                      <p className="text-lg font-bold text-blue-700">$13,995</p>
                    </div>
                    <Button variant="outline" className="text-blue-600 border-blue-600">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Lap Band Surgery</h3>
                  <p className="text-gray-600 mb-4">
                    A less invasive weight-loss surgery that places an adjustable band around the upper part of the
                    stomach.
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500">Starting at</p>
                      <p className="text-lg font-bold text-blue-700">$8,995</p>
                    </div>
                    <Button variant="outline" className="text-blue-600 border-blue-600">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Bariatric Revision Surgery</h3>
                  <p className="text-gray-600 mb-4">
                    Surgical procedures to correct or modify a previous weight-loss surgery for better results.
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500">Starting at</p>
                      <p className="text-lg font-bold text-blue-700">$12,995</p>
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
                <TabsTrigger value="recovery">Recovery</TabsTrigger>
                <TabsTrigger value="pricing">Pricing & Insurance</TabsTrigger>
              </TabsList>

              <TabsContent value="procedure" className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">What is gastric sleeve surgery?</h3>
                  <p className="text-gray-600">
                    Gastric sleeve surgery (sleeve gastrectomy) is a weight-loss procedure that removes about 80% of
                    your stomach, leaving a tube-shaped stomach about the size of a banana. This restricts the amount of
                    food you can eat and helps you feel full sooner.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Am I a candidate for gastric sleeve surgery?</h3>
                  <p className="text-gray-600">
                    Generally, candidates for gastric sleeve surgery have a BMI of 40 or higher, or a BMI of 35-39.9
                    with serious weight-related health problems. You should also have tried other weight-loss methods
                    without success and be committed to making lifestyle changes.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">How is the surgery performed?</h3>
                  <p className="text-gray-600">
                    Gastric sleeve surgery is typically performed laparoscopically, which means the surgeon makes
                    several small incisions in your upper abdomen and inserts small instruments and a camera. The
                    surgeon removes about 80% of your stomach, leaving a tube-shaped portion that's closed with staples.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="recovery" className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">How long is the recovery period?</h3>
                  <p className="text-gray-600">
                    Most people stay in the hospital for 1-2 nights after surgery. You can typically return to normal
                    activities within 2-3 weeks, though full recovery may take 4-6 weeks. You'll need to follow a
                    specific diet progression during recovery.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">What will my diet be like after surgery?</h3>
                  <p className="text-gray-600">
                    After surgery, you'll follow a specific diet progression: clear liquids, pureed foods, soft foods,
                    and then regular foods. This typically takes 4-6 weeks. Long-term, you'll need to eat smaller
                    portions, chew thoroughly, and avoid drinking with meals.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">How much weight can I expect to lose?</h3>
                  <p className="text-gray-600">
                    Most people lose 60-70% of their excess weight within the first year after gastric sleeve surgery.
                    Results vary based on your starting weight, diet, exercise habits, and other factors.
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
                    Can I use my insurance for gastric sleeve surgery through DirectPayDr?
                  </h3>
                  <p className="text-gray-600">
                    DirectPayDr operates outside of insurance networks, offering cash-pay prices that are often lower
                    than what you'd pay with insurance, especially if your insurance doesn't cover bariatric surgery or
                    has high out-of-pocket costs. You can submit your receipt to your insurance company as an
                    out-of-network expense if you choose.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Do you offer financing options?</h3>
                  <p className="text-gray-600">
                    Yes, DirectPayDr partners with several financing companies that specialize in healthcare procedures.
                    These options allow you to pay for your surgery over time with monthly payments. You can explore
                    these options during the checkout process.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Weight Loss Journey?</h2>
            <p className="text-xl mb-8">
              Join thousands of patients who have already saved an average of 40% on their gastric sleeve surgery with
              DirectPayDr.
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
