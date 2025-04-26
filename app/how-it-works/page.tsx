import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Search, CreditCard, FileText, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-16 pb-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">How DirectPayDr Works</h1>
            <p className="text-xl text-gray-600 mb-8">
              DirectPayDr makes healthcare simple, transparent, and affordable. Save up to 50% on medical procedures
              with our easy 3-step process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Find Care Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                View Procedures
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-8 items-center mb-24">
              <div className="order-2 md:order-1">
                <div className="inline-block bg-blue-100 text-blue-600 font-bold rounded-full px-4 py-1 text-sm mb-4">
                  Step 1
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Search and Compare</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Browse our marketplace of 9,600+ healthcare providers to find the procedure you need at a price you
                  can afford. Compare prices, locations, and provider ratings all in one place.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Search by procedure name or type (MRI, X-Ray, Blood Test, etc.)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Filter by location to find care near you</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>See upfront, all-inclusive prices with no hidden fees</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Compare savings against typical healthcare costs</span>
                  </li>
                </ul>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Search Procedures
                  <Search className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="/search-compare-procedures.png"
                    alt="Search and compare procedures"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="bg-green-100 p-2 rounded-full">
                      <span className="text-green-600 font-bold">50%</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Average Savings</p>
                      <p className="text-lg font-bold text-blue-700">On Medical Procedures</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-8 items-center mb-24">
              <div className="relative">
                <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="/purchase-procedure-online.png"
                    alt="Purchase procedure online"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <CreditCard className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Secure Payment</p>
                      <p className="text-lg font-bold text-blue-700">100% Guaranteed</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="inline-block bg-blue-100 text-blue-600 font-bold rounded-full px-4 py-1 text-sm mb-4">
                  Step 2
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Purchase Online</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Once you've found the right procedure at the right price, purchase it directly through our secure
                  platform. Pay with credit card, HSA/FSA, or our flexible payment options.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Secure, encrypted payment processing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Use HSA/FSA cards for eligible procedures</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Flexible payment options available</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Money-back guarantee if you don't receive the care you purchased</span>
                  </li>
                </ul>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  View Payment Options
                  <CreditCard className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-block bg-blue-100 text-blue-600 font-bold rounded-full px-4 py-1 text-sm mb-4">
                  Step 3
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Receive Care</h2>
                <p className="text-lg text-gray-600 mb-6">
                  After purchase, you'll receive a voucher to present to your chosen provider. Schedule your appointment
                  directly with the provider and receive the care you need with no additional payment required.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Receive your voucher instantly via email</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Schedule directly with your chosen provider</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Present your voucher at your appointment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>No additional payment needed at time of service</span>
                  </li>
                </ul>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Learn About Vouchers
                  <FileText className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="/receive-care-voucher.png"
                    alt="Receive care with voucher"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-100 p-2 rounded-full">
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
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Quality Care</p>
                      <p className="text-lg font-bold text-blue-700">9,600+ Providers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The DirectPayDr Advantage</h2>
            <p className="text-lg text-gray-600">
              We're transforming healthcare by making it simple, transparent, and affordable for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
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
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" y1="9" x2="9.01" y2="9" />
                    <line x1="15" y1="9" x2="15.01" y2="9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Save 50% on Average</h3>
                <p className="text-gray-600">
                  Our pre-negotiated rates save you an average of 50% compared to typical healthcare costs. No surprise
                  bills or hidden fees—ever.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
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
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Quality Care Guaranteed</h3>
                <p className="text-gray-600">
                  All providers in our network are fully licensed and credentialed. We stand behind the quality of care
                  with our satisfaction guarantee.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
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
                <h3 className="text-xl font-bold mb-4">Insurance Not Required</h3>
                <p className="text-gray-600">
                  DirectPayDr works with or without insurance. It's perfect for the uninsured or those with high
                  deductibles who want to save.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Common Questions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Questions</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Do I need insurance to use DirectPayDr?</h3>
                    <p className="text-gray-600">
                      No, DirectPayDr is designed for anyone to use, with or without insurance. Our cash-pay model often
                      provides savings even for those with insurance, especially for those with high deductibles.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">How do I know I'm getting quality care?</h3>
                    <p className="text-gray-600">
                      All providers in our network are fully licensed and credentialed. Many are the same providers you
                      would see through traditional insurance channels, but at a lower cash price.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Can I use my HSA or FSA?</h3>
                    <p className="text-gray-600">
                      Yes, you can use your Health Savings Account (HSA) or Flexible Spending Account (FSA) to pay for
                      procedures purchased through DirectPayDr.
                    </p>
                  </div>
                  <div className="pt-4">
                    <Link
                      href="/faq"
                      className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                    >
                      View all FAQs
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-xl">
                  <Image src="/patient-questions.png" alt="Patient questions" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-blue-50 rounded-xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-600 mb-6"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                  </svg>
                  <p className="text-xl md:text-2xl font-medium text-gray-800 mb-6">
                    I saved over $1,200 on my MRI with DirectPayDr. The process was incredibly simple, and the care I
                    received was excellent. I'll never go back to the old way of paying for healthcare.
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-bold">S</span>
                    </div>
                    <div>
                      <p className="font-semibold">Sarah Johnson</p>
                      <p className="text-sm text-gray-500">MRI Scan Patient</p>
                    </div>
                  </div>
                </div>
                <div className="relative h-64 md:h-full">
                  <Image
                    src="/testimonial-patient.png"
                    alt="Patient testimonial"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link
                href="/testimonials"
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                Read more patient stories
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Save on Your Healthcare?</h2>
            <p className="text-xl mb-8">
              Join thousands of patients who have already saved an average of 50% on their medical procedures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
                Find Procedures
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-blue-700">
                Contact Us
                <Phone className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
