import Image from "next/image"
import { ArrowRight, CheckCircle, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProvidersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">For Healthcare Providers</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Join our network of 9,600+ providers and diversify your revenue stream with cash-pay patients.
            </p>
            <Button size="lg" className="mt-8 bg-amber-500 hover:bg-amber-600 text-white">
              Join Our Network
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Benefits for Providers</h2>
            <p className="mt-2 text-xl text-gray-600">Why thousands of healthcare providers partner with DirectPayDr</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-600"
                  >
                    <path d="M12 2v20" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">New Revenue Streams</h3>
                <p className="text-gray-600">
                  Attract new cash-pay patients and diversify your revenue beyond traditional insurance.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Fill unused appointment slots</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Increase facility utilization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Predictable cash flow</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
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
                <h3 className="text-xl font-bold mb-4">Upfront Payment</h3>
                <p className="text-gray-600">
                  Get paid at the time of purchase, not months later. No billing or collections needed.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Eliminate billing costs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Reduce administrative burden</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>No insurance claims to file</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-600"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Simplified Patient Experience</h3>
                <p className="text-gray-600">
                  Provide a better experience for patients with transparent pricing and simplified care.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Improved patient satisfaction</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Streamlined check-in process</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Focus on care, not paperwork</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">How It Works For Providers</h2>
            <p className="mt-2 text-xl text-gray-600">A simple process to start accepting DirectPayDr patients</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-600"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Join Our Network</h3>
              <p className="text-gray-600">Complete our simple application process to join our provider network.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-600"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Set Your Prices</h3>
              <p className="text-gray-600">
                Work with our team to establish competitive cash-pay prices for your services.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-600"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                  <line x1="3" x2="21" y1="9" y2="9" />
                  <line x1="9" x2="9" y1="21" y2="9" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Receive Patients</h3>
              <p className="text-gray-600">
                Patients purchase your services online and schedule appointments directly with you.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                4
              </div>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
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
              <h3 className="text-lg font-bold mb-2">Get Paid</h3>
              <p className="text-gray-600">
                Receive payment directly from DirectPayDr after providing care to the patient.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Provider Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What Our Providers Say</h2>
            <p className="mt-2 text-xl text-gray-600">Hear from healthcare providers in our network</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {providerTestimonials.map((testimonial, index) => (
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
                      <p className="text-sm text-gray-500">{testimonial.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Provider FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Provider FAQs</h2>
            <p className="mt-2 text-xl text-gray-600">Common questions from healthcare providers</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="payment">Payment</TabsTrigger>
                <TabsTrigger value="operations">Operations</TabsTrigger>
              </TabsList>

              <TabsContent value="general" className="bg-white p-6 rounded-lg shadow-sm">
                <div className="space-y-6">
                  {generalFaqs.map((faq, index) => (
                    <div key={index}>
                      <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                      {index < generalFaqs.length - 1 && <div className="border-b my-6"></div>}
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="payment" className="bg-white p-6 rounded-lg shadow-sm">
                <div className="space-y-6">
                  {paymentFaqs.map((faq, index) => (
                    <div key={index}>
                      <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                      {index < paymentFaqs.length - 1 && <div className="border-b my-6"></div>}
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="operations" className="bg-white p-6 rounded-lg shadow-sm">
                <div className="space-y-6">
                  {operationsFaqs.map((faq, index) => (
                    <div key={index}>
                      <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                      {index < operationsFaqs.length - 1 && <div className="border-b my-6"></div>}
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Provider Network?</h2>
              <p className="text-xl mb-8">
                Diversify your revenue stream, reduce administrative costs, and provide a better patient experience with
                DirectPayDr.
              </p>
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative h-64 md:h-96">
              <Image
                src="/placeholder.svg?height=400&width=600&query=doctor with patient in medical office"
                alt="Provider with patient"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Sample data
const providerTestimonials = [
  {
    name: "Dr. James Wilson",
    title: "Radiologist, Imaging Center Director",
    quote:
      "DirectPayDr has helped us fill unused appointment slots and increase our facility utilization. The upfront payment model eliminates billing headaches and improves our cash flow.",
  },
  {
    name: "Dr. Sarah Chen",
    title: "Family Physician",
    quote:
      "As a primary care provider, I appreciate how DirectPayDr simplifies the patient experience. My patients know exactly what they're paying, and I can focus on providing care instead of dealing with insurance.",
  },
  {
    name: "Mark Johnson",
    title: "Hospital Administrator",
    quote:
      "Partnering with DirectPayDr has allowed us to diversify our revenue streams and reach patients who might otherwise delay care due to cost concerns. It's been a win-win for our facility and our community.",
  },
]

const generalFaqs = [
  {
    question: "What types of providers can join the DirectPayDr network?",
    answer:
      "We welcome a wide range of healthcare providers including hospitals, imaging centers, laboratories, primary care providers, specialists, and more. If you provide medical services and are interested in attracting cash-pay patients, we'd love to talk with you.",
  },
  {
    question: "What are the requirements to join?",
    answer:
      "Providers must be licensed and credentialed in their state of practice, maintain appropriate malpractice insurance, and agree to our provider terms and conditions. We also review quality metrics and patient satisfaction data when available.",
  },
  {
    question: "Is there a cost to join the DirectPayDr network?",
    answer:
      "There is no upfront cost to join our network. We operate on a simple revenue-sharing model where we retain a small percentage of each transaction as our fee. You'll only pay when you receive patients through our platform.",
  },
  {
    question: "Can I choose which services to offer through DirectPayDr?",
    answer:
      "Yes, you have complete control over which services you offer through our platform and at what price points. You can start with a few procedures and expand your offerings over time.",
  },
]

const paymentFaqs = [
  {
    question: "How and when do I get paid?",
    answer:
      "Payments are processed within 5-7 business days after the patient receives care. Funds are deposited directly into your designated bank account via ACH transfer.",
  },
  {
    question: "What happens if a patient cancels or doesn't show up?",
    answer:
      "If a patient cancels with adequate notice (typically 24-48 hours), they receive a refund and you are not paid. For no-shows or late cancellations, our policy allows you to receive a percentage of the payment, with the specific terms outlined in our provider agreement.",
  },
  {
    question: "How are prices determined?",
    answer:
      "You set your own prices in collaboration with our team. We provide market data and recommendations based on competitive rates in your area, but the final decision on pricing is yours.",
  },
  {
    question: "What is DirectPayDr's fee structure?",
    answer:
      "DirectPayDr retains a percentage of each transaction as our service fee. The exact percentage varies based on procedure type and volume, typically ranging from 10-20%. Detailed fee information is provided during the application process.",
  },
]

const operationsFaqs = [
  {
    question: "How do patients schedule appointments?",
    answer:
      "After purchasing a procedure through DirectPayDr, patients contact your office directly to schedule their appointment. You maintain control over your schedule and appointment availability.",
  },
  {
    question: "How do I verify a patient has paid through DirectPayDr?",
    answer:
      "Patients will present a DirectPayDr voucher (digital or printed) at the time of their appointment. You can also verify voucher validity through our provider portal or by contacting our provider support team.",
  },
  {
    question: "What if a patient needs additional services beyond what they purchased?",
    answer:
      "If you determine that additional services are needed, you can either offer those services at your standard cash rate or refer the patient back to DirectPayDr to purchase additional services if available.",
  },
  {
    question: "How do I handle patient records and information?",
    answer:
      "You maintain your standard patient intake and record-keeping processes. DirectPayDr does not store or manage clinical information. We simply facilitate the financial transaction and provide the voucher system.",
  },
]
