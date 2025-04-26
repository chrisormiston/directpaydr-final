import Link from "next/link"
import { ArrowRight, CheckCircle, DollarSign, LineChart, Search, ShieldCheck, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

export default function HealthcarePricesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-700 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="text-white space-y-6">
              <Badge className="bg-blue-500 hover:bg-blue-500 text-white">Pricing Transparency</Badge>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Why Healthcare Prices Are So High (And How We're Changing That)
              </h1>
              <p className="text-xl opacity-90">
                Discover how DirectPayDr is revolutionizing healthcare with transparent, affordable pricing that saves
                patients an average of 50% on medical procedures.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
                  Find Affordable Care
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-blue-700"
                >
                  How It Works
                </Button>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="bg-white p-6 rounded-lg shadow-xl">
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">MRI Scan</span>
                      <div className="flex items-center">
                        <span className="text-green-600 font-bold">Save 67%</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
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
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Colonoscopy</span>
                      <div className="flex items-center">
                        <span className="text-green-600 font-bold">Save 61%</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
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
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Blood Panel</span>
                      <div className="flex items-center">
                        <span className="text-green-600 font-bold">Save 72%</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-gray-500">Typical Price</span>
                          <span className="text-sm font-medium line-through text-gray-500">$280</span>
                        </div>
                        <Progress value={100} className="h-3 bg-gray-200" />
                      </div>
                      <div className="text-xl font-bold">vs</div>
                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-blue-600">DirectPayDr Price</span>
                          <span className="text-sm font-medium text-blue-600">$79</span>
                        </div>
                        <Progress value={28} className="h-3 bg-gray-200" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Healthcare Prices Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Understanding Healthcare Prices</h2>
            <p className="text-xl text-gray-600">
              Healthcare pricing in the United States is complex and often confusing. Here's why prices are so high and
              how DirectPayDr is changing the game.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <DollarSign className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">The Problem with Healthcare Pricing</h3>
                <p className="text-gray-600">
                  Traditional healthcare pricing involves complex negotiations between providers and insurance
                  companies, resulting in inflated "chargemaster" rates that few actually pay but many are billed.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <LineChart className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Why Prices Vary So Much</h3>
                <p className="text-gray-600">
                  The same procedure can cost drastically different amounts depending on where you go, who your
                  insurance is, and even what time of year it is. This unpredictability makes healthcare costs
                  impossible to budget for.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <ShieldCheck className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">The DirectPayDr Solution</h3>
                <p className="text-gray-600">
                  We negotiate directly with providers for cash-pay rates that are typically 50% lower than traditional
                  prices. Our transparent pricing means you know exactly what you'll pay upfront.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Price Comparison Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">See How Much You Can Save</h2>
            <p className="text-xl text-gray-600">
              Compare typical healthcare prices with DirectPayDr's transparent, all-inclusive prices across popular
              procedures.
            </p>
          </div>

          <Tabs defaultValue="imaging" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-12">
              <TabsTrigger value="imaging">Imaging</TabsTrigger>
              <TabsTrigger value="surgery">Surgery</TabsTrigger>
              <TabsTrigger value="preventive">Preventive</TabsTrigger>
              <TabsTrigger value="specialty">Specialty</TabsTrigger>
              <TabsTrigger value="labs">Lab Tests</TabsTrigger>
            </TabsList>

            <TabsContent value="imaging" className="mt-0">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6 bg-blue-50 border-b border-blue-100">
                  <h3 className="text-xl font-bold text-gray-900">Imaging & Radiology Procedures</h3>
                  <p className="text-gray-600">
                    Compare prices for common imaging procedures like MRIs, CT scans, and ultrasounds.
                  </p>
                </div>
                <div className="divide-y">
                  {imagingProcedures.map((procedure, index) => (
                    <PriceComparisonRow key={index} procedure={procedure} />
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="surgery" className="mt-0">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6 bg-blue-50 border-b border-blue-100">
                  <h3 className="text-xl font-bold text-gray-900">Surgical Procedures</h3>
                  <p className="text-gray-600">
                    Compare prices for common surgical procedures like hernia repair and cataract surgery.
                  </p>
                </div>
                <div className="divide-y">
                  {surgicalProcedures.map((procedure, index) => (
                    <PriceComparisonRow key={index} procedure={procedure} />
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="preventive" className="mt-0">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6 bg-blue-50 border-b border-blue-100">
                  <h3 className="text-xl font-bold text-gray-900">Preventive Care</h3>
                  <p className="text-gray-600">
                    Compare prices for preventive procedures like colonoscopies and mammograms.
                  </p>
                </div>
                <div className="divide-y">
                  {preventiveProcedures.map((procedure, index) => (
                    <PriceComparisonRow key={index} procedure={procedure} />
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="specialty" className="mt-0">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6 bg-blue-50 border-b border-blue-100">
                  <h3 className="text-xl font-bold text-gray-900">Specialty Care</h3>
                  <p className="text-gray-600">
                    Compare prices for specialty consultations and treatments across medical specialties.
                  </p>
                </div>
                <div className="divide-y">
                  {specialtyProcedures.map((procedure, index) => (
                    <PriceComparisonRow key={index} procedure={procedure} />
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="labs" className="mt-0">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6 bg-blue-50 border-b border-blue-100">
                  <h3 className="text-xl font-bold text-gray-900">Laboratory Tests</h3>
                  <p className="text-gray-600">Compare prices for common lab tests and diagnostic procedures.</p>
                </div>
                <div className="divide-y">
                  {labProcedures.map((procedure, index) => (
                    <PriceComparisonRow key={index} procedure={procedure} />
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="max-w-5xl mx-auto mt-8 text-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              View All Procedures
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Healthcare Costs So Much Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Does Healthcare Cost So Much?</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mt-1 bg-blue-100 p-1 rounded-full mr-3">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Complex Billing Systems</h3>
                      <p className="text-gray-600">
                        Healthcare providers employ entire departments just to navigate the complex billing systems of
                        different insurance companies. These administrative costs get passed on to patients.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mt-1 bg-blue-100 p-1 rounded-full mr-3">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Lack of Price Transparency</h3>
                      <p className="text-gray-600">
                        When prices aren't transparent, there's no incentive for providers to compete on price. This
                        leads to wildly inflated "chargemaster" rates that bear little relation to actual costs.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mt-1 bg-blue-100 p-1 rounded-full mr-3">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Insurance Middlemen</h3>
                      <p className="text-gray-600">
                        Insurance companies negotiate different rates with different providers, creating a complex web
                        of pricing that's nearly impossible for patients to navigate.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mt-1 bg-blue-100 p-1 rounded-full mr-3">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Cost Shifting</h3>
                      <p className="text-gray-600">
                        Providers often charge privately insured patients more to make up for lower reimbursements from
                        Medicare, Medicaid, and uninsured patients who can't pay.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">The DirectPayDr Difference</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mt-1 bg-green-100 p-1 rounded-full mr-3">
                      <Zap className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Direct Provider Negotiations</h4>
                      <p className="text-gray-600">
                        We negotiate directly with providers for cash-pay rates that cut out the middlemen and
                        administrative overhead.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mt-1 bg-green-100 p-1 rounded-full mr-3">
                      <Zap className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Transparent, All-Inclusive Pricing</h4>
                      <p className="text-gray-600">
                        The price you see is the price you pay. No surprise bills, hidden fees, or unexpected charges.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mt-1 bg-green-100 p-1 rounded-full mr-3">
                      <Zap className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Upfront Payment Model</h4>
                      <p className="text-gray-600">
                        Providers receive payment at the time of purchase, eliminating billing costs and allowing them
                        to offer lower prices.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mt-1 bg-green-100 p-1 rounded-full mr-3">
                      <Zap className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Quality Care, Lower Prices</h4>
                      <p className="text-gray-600">
                        Our network includes the same high-quality providers you'd see through insurance, just at much
                        lower prices.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How DirectPayDr Works</h2>
            <p className="text-xl text-gray-600">
              Our simple process makes it easy to find and purchase affordable healthcare.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Connection Line */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-blue-200 -translate-y-1/2 z-0"></div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                <div className="bg-white p-8 rounded-xl shadow-md text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-bold mb-4">Search & Compare</h3>
                  <p className="text-gray-600">
                    Browse our marketplace to find the procedure you need. Compare prices, locations, and provider
                    ratings all in one place.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-md text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-bold mb-4">Purchase Online</h3>
                  <p className="text-gray-600">
                    Buy your procedure at our pre-negotiated price. Pay with credit card, HSA/FSA, or our flexible
                    payment options.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-md text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-bold mb-4">Receive Care</h3>
                  <p className="text-gray-600">
                    Schedule with your chosen provider and receive care. Present your DirectPayDr voucher at your
                    appointment - no additional payment needed.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Learn More About Our Process
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Questions About Healthcare Pricing</h2>
            <p className="text-xl text-gray-600">
              Get answers to frequently asked questions about healthcare costs and DirectPayDr's pricing model.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Why are DirectPayDr prices so much lower?</h3>
              <p className="text-gray-600">
                Our prices are lower because we negotiate directly with providers for cash-pay rates, eliminating the
                administrative costs of insurance billing. Providers also appreciate getting paid upfront without having
                to chase payments.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Can I use DirectPayDr if I have insurance?</h3>
              <p className="text-gray-600">
                Yes! Many patients with insurance choose DirectPayDr because our prices are often lower than their
                out-of-pocket costs with insurance, especially for those who haven't met their deductible.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Are there any hidden fees?</h3>
              <p className="text-gray-600">
                No. The price you see is the price you pay. All DirectPayDr prices are all-inclusive with no surprise
                bills or hidden fees. The price covers the complete procedure as described in the listing.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Can I use my HSA or FSA to pay?</h3>
              <p className="text-gray-600">
                Yes, you can use your Health Savings Account (HSA) or Flexible Spending Account (FSA) to pay for
                procedures purchased through DirectPayDr. Most medical procedures on our platform are qualified medical
                expenses.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Will this count toward my deductible?</h3>
              <p className="text-gray-600">
                This depends on your insurance plan. Many patients submit their DirectPayDr receipts to their insurance
                company to apply toward their deductible as an out-of-network expense. We provide detailed receipts for
                this purpose.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">How do I know I'm getting quality care?</h3>
              <p className="text-gray-600">
                All providers in our network are fully licensed and credentialed. Many are the same providers you would
                see through traditional insurance channels, but at a lower cash price. We regularly review quality
                metrics and patient satisfaction.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-8 text-center">
            <Link href="/faq" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
              View All FAQs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Search CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Save on Your Healthcare?</h2>
            <p className="text-xl mb-8">
              Search our marketplace of 9,600+ providers to find affordable healthcare near you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
                Search Procedures
                <Search className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-blue-700">
                Learn How It Works
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function PriceComparisonRow({ procedure }) {
  const savingsPercent = Math.round(
    ((procedure.typicalPrice - procedure.directPaydrPrice) / procedure.typicalPrice) * 100,
  )

  return (
    <div className="p-6 hover:bg-gray-50 transition-colors">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="md:w-1/3">
          <h4 className="font-bold text-lg">{procedure.name}</h4>
          <p className="text-gray-500 text-sm">{procedure.description}</p>
        </div>
        <div className="md:w-1/3">
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-500">Typical Price</span>
                <span className="text-sm font-medium line-through text-gray-500">${procedure.typicalPrice}</span>
              </div>
              <Progress value={100} className="h-2 bg-gray-200" />
            </div>
            <div className="text-lg font-bold">vs</div>
            <div className="flex-1">
              <div className="flex justify-between mb-1">
                <span className="text-sm text-blue-600">DirectPayDr Price</span>
                <span className="text-sm font-medium text-blue-600">${procedure.directPaydrPrice}</span>
              </div>
              <Progress
                value={(procedure.directPaydrPrice / procedure.typicalPrice) * 100}
                className="h-2 bg-gray-200"
              />
            </div>
          </div>
        </div>
        <div className="md:w-1/3 flex justify-end">
          <div className="flex items-center gap-4">
            <div className="text-center">
              <div className="text-green-600 font-bold text-xl">Save {savingsPercent}%</div>
              <div className="text-gray-500 text-sm">
                ${procedure.typicalPrice - procedure.directPaydrPrice} in savings
              </div>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white whitespace-nowrap">View Details</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Sample data for procedures
const imagingProcedures = [
  {
    name: "MRI Scan - Brain (without contrast)",
    description: "Diagnostic imaging of the brain using magnetic resonance",
    typicalPrice: 1500,
    directPaydrPrice: 499,
  },
  {
    name: "CT Scan - Chest",
    description: "Computed tomography scan of the chest area",
    typicalPrice: 1200,
    directPaydrPrice: 420,
  },
  {
    name: "Ultrasound - Abdominal",
    description: "Ultrasound imaging of the abdominal area",
    typicalPrice: 450,
    directPaydrPrice: 199,
  },
  {
    name: "X-Ray - Chest (2 views)",
    description: "Standard chest X-ray with two views",
    typicalPrice: 250,
    directPaydrPrice: 89,
  },
  {
    name: "Mammogram - Screening",
    description: "Standard screening mammogram",
    typicalPrice: 350,
    directPaydrPrice: 149,
  },
]

const surgicalProcedures = [
  {
    name: "Hernia Repair - Inguinal",
    description: "Surgical repair of inguinal hernia",
    typicalPrice: 7500,
    directPaydrPrice: 3600,
  },
  {
    name: "Cataract Surgery (per eye)",
    description: "Removal of cataract and lens replacement",
    typicalPrice: 4200,
    directPaydrPrice: 2300,
  },
  {
    name: "Knee Arthroscopy",
    description: "Minimally invasive knee joint examination and repair",
    typicalPrice: 6800,
    directPaydrPrice: 3250,
  },
  {
    name: "Carpal Tunnel Release",
    description: "Surgical treatment for carpal tunnel syndrome",
    typicalPrice: 3900,
    directPaydrPrice: 1750,
  },
  {
    name: "Tonsillectomy",
    description: "Surgical removal of the tonsils",
    typicalPrice: 5400,
    directPaydrPrice: 2700,
  },
]

const preventiveProcedures = [
  {
    name: "Colonoscopy - Screening",
    description: "Preventive screening colonoscopy",
    typicalPrice: 2800,
    directPaydrPrice: 1100,
  },
  {
    name: "Annual Physical",
    description: "Comprehensive annual physical examination",
    typicalPrice: 350,
    directPaydrPrice: 150,
  },
  {
    name: "Bone Density Scan (DEXA)",
    description: "Screening for osteoporosis and bone health",
    typicalPrice: 450,
    directPaydrPrice: 199,
  },
  {
    name: "Well Woman Exam",
    description: "Annual preventive care visit for women",
    typicalPrice: 400,
    directPaydrPrice: 175,
  },
  {
    name: "Skin Cancer Screening",
    description: "Full-body examination for skin cancer detection",
    typicalPrice: 300,
    directPaydrPrice: 150,
  },
]

const specialtyProcedures = [
  {
    name: "Cardiology Consultation",
    description: "Initial consultation with a cardiologist",
    typicalPrice: 450,
    directPaydrPrice: 199,
  },
  {
    name: "Dermatology Visit",
    description: "Consultation with a dermatologist",
    typicalPrice: 350,
    directPaydrPrice: 175,
  },
  {
    name: "Gastroenterology Consultation",
    description: "Initial consultation with a gastroenterologist",
    typicalPrice: 400,
    directPaydrPrice: 189,
  },
  {
    name: "Orthopedic Evaluation",
    description: "Comprehensive orthopedic assessment",
    typicalPrice: 425,
    directPaydrPrice: 199,
  },
  {
    name: "Neurology Consultation",
    description: "Initial consultation with a neurologist",
    typicalPrice: 475,
    directPaydrPrice: 225,
  },
]

const labProcedures = [
  {
    name: "Comprehensive Metabolic Panel",
    description: "Blood test measuring 14 different substances in the blood",
    typicalPrice: 280,
    directPaydrPrice: 79,
  },
  {
    name: "Complete Blood Count (CBC)",
    description: "Blood test evaluating overall health and detecting disorders",
    typicalPrice: 150,
    directPaydrPrice: 49,
  },
  {
    name: "Lipid Panel",
    description: "Blood test measuring cholesterol and triglycerides",
    typicalPrice: 120,
    directPaydrPrice: 39,
  },
  {
    name: "Thyroid Panel",
    description: "Blood test evaluating thyroid function",
    typicalPrice: 240,
    directPaydrPrice: 85,
  },
  {
    name: "Hemoglobin A1C",
    description: "Blood test measuring average blood sugar levels",
    typicalPrice: 140,
    directPaydrPrice: 45,
  },
]
