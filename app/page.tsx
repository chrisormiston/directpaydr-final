import Image from "next/image"
import { ArrowRight, CheckCircle, MapPin, Search, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-700 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="text-white space-y-6">
              <Badge className="bg-blue-500 hover:bg-blue-500 text-white">Save up to 50% on medical procedures</Badge>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">Quality Healthcare at Transparent Prices</h1>
              <p className="text-xl opacity-90">
                DirectPayDr connects you with 9,600+ healthcare providers nationwide, offering upfront pricing with no
                surprise bills.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
                  Find Procedures
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="bg-white text-blue-700 hover:bg-blue-50">
                  How It Works
                </Button>
              </div>
            </div>
            <div className="relative hidden md:block">
              <Image
                src="/healthcare-cost-conversation.png"
                alt="Doctor with patient"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
                priority
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="bg-green-100 p-2 rounded-full">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Average Savings</p>
                    <p className="text-2xl font-bold text-blue-700">50%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search Box */}
        <div className="container mx-auto px-4 relative">
          <div className="absolute left-0 right-0 -bottom-16 z-10">
            <div className="bg-white rounded-xl shadow-xl p-6">
              <Tabs defaultValue="procedure" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="procedure">Find by Procedure</TabsTrigger>
                  <TabsTrigger value="location">Find by Location</TabsTrigger>
                </TabsList>
                <TabsContent value="procedure">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <div className="relative">
                        <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <Input
                          placeholder="Search procedures (MRI, X-Ray, Blood Test...)"
                          className="pl-10 py-6 text-base"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <Input placeholder="Zip Code or City" className="pl-10 py-6 text-base" />
                      </div>
                    </div>
                    <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white py-6">
                      Search
                    </Button>
                  </div>
                </TabsContent>
                <TabsContent value="location">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <Input placeholder="Enter Zip Code or City" className="pl-10 py-6 text-base" />
                      </div>
                    </div>
                    <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white py-6">
                      Find Providers
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Trusted Healthcare Marketplace</h2>
            <p className="mt-2 text-xl text-gray-600">Join thousands of patients who have saved on their healthcare</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-blue-600">9,600+</div>
              <p className="text-gray-600 mt-2">Healthcare Providers</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-blue-600">50%</div>
              <p className="text-gray-600 mt-2">Average Savings</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-blue-600">$200M+</div>
              <p className="text-gray-600 mt-2">Patient Savings</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-center">
                <div className="flex items-center">
                  <Star className="h-6 w-6 fill-amber-400 text-amber-400" />
                  <Star className="h-6 w-6 fill-amber-400 text-amber-400" />
                  <Star className="h-6 w-6 fill-amber-400 text-amber-400" />
                  <Star className="h-6 w-6 fill-amber-400 text-amber-400" />
                  <Star className="h-6 w-6 fill-amber-400 text-amber-400" />
                </div>
              </div>
              <p className="text-gray-600 mt-2">4.8 Trustpilot Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Procedures Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Popular Medical Procedures</h2>
            <p className="mt-2 text-xl text-gray-600">Browse our most commonly purchased procedures</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularProcedures.map((procedure, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={procedure.image || "/placeholder.svg"}
                    alt={procedure.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{procedure.name}</h3>
                      <p className="text-gray-500">{procedure.category}</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                      Save {procedure.savingsPercent}%
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500">Average Price</p>
                      <p className="text-lg font-bold text-blue-700">${procedure.price}</p>
                    </div>
                    <Button variant="outline" className="text-blue-600 border-blue-600">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              View All Procedures
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">How DirectPayDr Works</h2>
            <p className="mt-2 text-xl text-gray-600">Simple steps to save on your healthcare</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">1. Compare</h3>
              <p className="text-gray-600">
                Search for procedures in your area and compare upfront, all-inclusive prices.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-600"
                >
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <line x1="2" x2="22" y1="10" y2="10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">2. Buy</h3>
              <p className="text-gray-600">
                Purchase your procedure online with our secure payment system. No surprise bills.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-600"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">3. Receive Care</h3>
              <p className="text-gray-600">
                Visit your chosen provider with your DirectPayDr voucher. No additional payment needed.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
              Learn More About Our Process
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="mt-2 text-xl text-gray-600">Get answers to common questions about DirectPayDr</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-medium">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" className="border-blue-600 text-blue-600">
              View All FAQs
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What Our Patients Say</h2>
            <p className="mt-2 text-xl text-gray-600">Real experiences from DirectPayDr users</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-bold">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.procedure}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Provider/Employer Marketing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-blue-600 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">For Healthcare Providers</h3>
              <p className="mb-6">
                Join our network of 9,600+ providers and diversify your revenue stream with cash-pay patients.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span>Attract new patients</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span>Reduce administrative costs</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span>Get paid upfront with no billing hassles</span>
                </li>
              </ul>
              <Button className="bg-white text-blue-600 hover:bg-blue-50">Join Our Provider Network</Button>
            </div>

            <div className="bg-amber-500 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">For Employers</h3>
              <p className="mb-6">Reduce healthcare costs for your organization with our employer solutions.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span>Save on employee healthcare costs</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span>Transparent pricing for budgeting</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span>Custom solutions for self-funded plans</span>
                </li>
              </ul>
              <Button className="bg-white text-amber-600 hover:bg-amber-50">Explore Employer Solutions</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Location Finder */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Find Care Near You</h2>
            <p className="mt-2 text-xl text-gray-600">DirectPayDr is available in locations across the country</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Nationwide Coverage</h3>
                <p className="text-gray-600 mb-6">
                  With over 9,600 providers across the United States, quality healthcare at transparent prices is just a
                  search away.
                </p>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input placeholder="Enter your zip code" className="pl-10 py-6 text-base mb-4" />
                </div>
                <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Find Providers Near Me
                </Button>
              </div>
              <div className="relative h-[300px] md:h-[400px]">
                <Image src="/usa-map-locations.png" alt="Provider locations map" fill className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Save on Your Healthcare?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of patients who have already saved an average of 50% on their medical procedures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
              Find Procedures
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-blue-700">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

// Sample data
const popularProcedures = [
  {
    name: "MRI Scan",
    category: "Diagnostic Imaging",
    price: "399",
    savingsPercent: "67",
    image: "/medical-imaging-suite.png",
  },
  {
    name: "Colonoscopy",
    category: "Preventive Care",
    price: "1,100",
    savingsPercent: "58",
    image: "/caring-doctor-visit.png",
  },
  {
    name: "Blood Panel",
    category: "Laboratory",
    price: "79",
    savingsPercent: "72",
    image: "/blood-test-tubes.png",
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    procedure: "MRI Scan",
    quote: "I saved over $800 on my MRI with DirectPayDr. The process was simple and the care was excellent.",
  },
  {
    name: "Michael Rodriguez",
    procedure: "Colonoscopy",
    quote:
      "As someone without insurance, DirectPayDr made preventive care affordable. I paid less than half of what I was quoted elsewhere.",
  },
  {
    name: "Jennifer Williams",
    procedure: "CT Scan",
    quote:
      "Even with insurance, DirectPayDr saved me money on my deductible. The upfront pricing gave me peace of mind.",
  },
]

const faqs = [
  {
    question: "How does DirectPayDr work?",
    answer:
      "DirectPayDr allows you to search for medical procedures, compare prices, and purchase your care upfront at pre-negotiated rates. After purchase, you'll receive a voucher to present to your provider at your appointment.",
  },
  {
    question: "Do I need insurance to use DirectPayDr?",
    answer:
      "No, DirectPayDr is designed for anyone to use, with or without insurance. Our cash-pay model often provides savings even for those with insurance, especially for those with high deductibles.",
  },
  {
    question: "Are there any hidden fees?",
    answer:
      "No, the price you see is the price you pay. All DirectPayDr prices are all-inclusive with no surprise bills or hidden fees.",
  },
  {
    question: "What if I need to cancel my procedure?",
    answer:
      "DirectPayDr offers a money-back guarantee if you don't receive the care you purchased. Contact our customer service team for assistance with cancellations or rescheduling.",
  },
  {
    question: "Can I use DirectPayDr with my HSA or FSA?",
    answer:
      "Yes, you can use your Health Savings Account (HSA) or Flexible Spending Account (FSA) to pay for procedures purchased through DirectPayDr.",
  },
]
