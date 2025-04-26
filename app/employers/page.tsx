import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BarChart3, CheckCircle, DollarSign, FileText, LineChart, Mail, Phone, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export default function EmployersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-800 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/corporate-pattern-bg.png" alt="Corporate pattern background" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="text-white space-y-6">
              <Badge className="bg-blue-500 hover:bg-blue-500 text-white">For Employers</Badge>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">Reduce Healthcare Costs for Your Company</h1>
              <p className="text-xl opacity-90">
                DirectPayDr helps self-insured employers and benefits consultants save an average of 50% on employee
                healthcare costs with transparent pricing and no surprise bills.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
                  Schedule a Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-blue-700"
                >
                  Download Employer Guide
                </Button>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="relative h-[500px] w-full">
                <Image
                  src="/employer-meeting.png"
                  alt="Employer meeting discussing benefits"
                  fill
                  className="object-cover rounded-lg shadow-xl"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="bg-green-100 p-2 rounded-full">
                    <DollarSign className="h-6 w-6 text-green-600" />
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
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-4xl font-bold text-blue-600">50%</div>
              <p className="text-gray-600 mt-2">Average Savings</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-4xl font-bold text-blue-600">9,600+</div>
              <p className="text-gray-600 mt-2">Healthcare Providers</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-4xl font-bold text-blue-600">$200M+</div>
              <p className="text-gray-600 mt-2">Total Savings</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-4xl font-bold text-blue-600">97%</div>
              <p className="text-gray-600 mt-2">Employee Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Benefits for Employers</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              DirectPayDr helps employers control healthcare costs while improving employee benefits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-2 bg-blue-600"></div>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <DollarSign className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Reduce Healthcare Costs</h3>
                <p className="text-gray-600 mb-6">
                  Save an average of 50% on employee medical procedures compared to traditional insurance networks.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Lower claims costs for self-insured plans</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Reduce employee out-of-pocket expenses</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Transparent, predictable pricing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-2 bg-blue-600"></div>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Enhance Employee Benefits</h3>
                <p className="text-gray-600 mb-6">
                  Offer a valuable benefit that helps employees access affordable healthcare when they need it.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Improve employee satisfaction</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Attract and retain talent</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Reduce healthcare-related absenteeism</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-2 bg-blue-600"></div>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <BarChart3 className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Simple Implementation</h3>
                <p className="text-gray-600 mb-6">
                  DirectPayDr integrates seamlessly with your existing benefits program with minimal administrative
                  effort.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>No disruption to existing benefits</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Easy employee onboarding</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Comprehensive implementation support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">How It Works</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              DirectPayDr integrates seamlessly with your existing benefits program
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Connection Line */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-blue-200 -translate-y-1/2 z-0"></div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                <div className="bg-white p-8 rounded-xl shadow-md text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                    1
                  </div>
                  <h3 className="text-lg font-bold mb-4">Partner with DirectPayDr</h3>
                  <p className="text-gray-600">
                    We work with you to design a program that meets your company's specific needs.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-md text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                    2
                  </div>
                  <h3 className="text-lg font-bold mb-4">Educate Employees</h3>
                  <p className="text-gray-600">
                    We provide materials and support to help your employees understand and use the benefit.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-md text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                    3
                  </div>
                  <h3 className="text-lg font-bold mb-4">Employees Save</h3>
                  <p className="text-gray-600">
                    Employees shop for procedures on DirectPayDr and save on their healthcare costs.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-md text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                    4
                  </div>
                  <h3 className="text-lg font-bold mb-4">Track Savings</h3>
                  <p className="text-gray-600">
                    Monitor your company's savings through our employer dashboard and reporting tools.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 bg-white rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-center">Implementation Support</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="font-bold mb-2">Employee Education</h4>
                  <p className="text-gray-600 mb-4">
                    Customized materials to help employees understand and use DirectPayDr
                  </p>
                </div>

                <div className="text-center">
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
                      <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
                      <rect x="9" y="9" width="6" height="6" />
                      <line x1="9" y1="1" x2="9" y2="4" />
                      <line x1="15" y1="1" x2="15" y2="4" />
                      <line x1="9" y1="20" x2="9" y2="23" />
                      <line x1="15" y1="20" x2="15" y2="23" />
                      <line x1="20" y1="9" x2="23" y2="9" />
                      <line x1="20" y1="14" x2="23" y2="14" />
                      <line x1="1" y1="9" x2="4" y2="9" />
                      <line x1="1" y1="14" x2="4" y2="14" />
                    </svg>
                  </div>
                  <h4 className="font-bold mb-2">Dedicated Support</h4>
                  <p className="text-gray-600 mb-4">
                    A dedicated account manager to help with implementation and ongoing support
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <LineChart className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="font-bold mb-2">Reporting & Analytics</h4>
                  <p className="text-gray-600 mb-4">Detailed reporting on usage, savings, and employee engagement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Employer Solutions</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible options to meet the needs of companies of all sizes
            </p>
          </div>

          <Tabs defaultValue="self-insured" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-12">
              <TabsTrigger value="self-insured">Self-Insured Employers</TabsTrigger>
              <TabsTrigger value="fully-insured">Fully-Insured Employers</TabsTrigger>
              <TabsTrigger value="consultants">Benefits Consultants</TabsTrigger>
            </TabsList>

            <TabsContent value="self-insured" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Self-Insured Employer Solutions</h3>
                  <p className="text-gray-600 mb-6">
                    DirectPayDr helps self-insured employers reduce healthcare costs by providing access to
                    pre-negotiated rates that are typically 50% lower than traditional networks.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-bold mb-2">Direct Integration</h4>
                      <p className="text-gray-600">
                        Integrate DirectPayDr with your existing benefits program to provide employees with access to
                        affordable healthcare options.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-bold mb-2">Claims Reduction</h4>
                      <p className="text-gray-600">
                        Reduce your claims costs by steering employees to high-quality, affordable care options.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-bold mb-2">Custom Incentives</h4>
                      <p className="text-gray-600">
                        Create custom incentives to encourage employees to choose DirectPayDr for their healthcare
                        needs.
                      </p>
                    </div>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="relative h-80 md:h-96">
                  <Image
                    src="/self-insured-meeting.png"
                    alt="Self-insured employer meeting"
                    fill
                    className="object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="fully-insured" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Fully-Insured Employer Solutions</h3>
                  <p className="text-gray-600 mb-6">
                    Even fully-insured employers can benefit from DirectPayDr by offering it as a supplemental benefit
                    to help employees save on out-of-pocket costs.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-bold mb-2">Supplemental Benefit</h4>
                      <p className="text-gray-600">
                        Offer DirectPayDr as a supplemental benefit to help employees save on deductibles and
                        coinsurance.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-bold mb-2">High-Deductible Support</h4>
                      <p className="text-gray-600">
                        Help employees with high-deductible health plans access affordable care before meeting their
                        deductible.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-bold mb-2">Enhanced Benefits Package</h4>
                      <p className="text-gray-600">
                        Differentiate your benefits package by offering innovative healthcare solutions.
                      </p>
                    </div>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="relative h-80 md:h-96">
                  <Image
                    src="/fully-insured-meeting.png"
                    alt="Fully-insured employer meeting"
                    fill
                    className="object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="consultants" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Benefits Consultant Solutions</h3>
                  <p className="text-gray-600 mb-6">
                    DirectPayDr partners with benefits consultants to provide innovative cost-saving solutions for their
                    clients.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-bold mb-2">Innovative Offerings</h4>
                      <p className="text-gray-600">
                        Add DirectPayDr to your portfolio of solutions to offer clients innovative ways to reduce
                        healthcare costs.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-bold mb-2">Co-Branded Solutions</h4>
                      <p className="text-gray-600">
                        Create co-branded solutions that enhance your value proposition to clients.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-bold mb-2">Implementation Support</h4>
                      <p className="text-gray-600">
                        Receive comprehensive support to help your clients implement DirectPayDr successfully.
                      </p>
                    </div>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="relative h-80 md:h-96">
                  <Image
                    src="/benefits-consultant-meeting.png"
                    alt="Benefits consultant meeting"
                    fill
                    className="object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Success Stories</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              See how employers are saving with DirectPayDr
            </p>
          </div>

          <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <Badge className="bg-blue-100 text-blue-800 mb-4">Case Study</Badge>
                <h3 className="text-2xl font-bold mb-4">Manufacturing Company Saves $420,000 Annually</h3>
                <p className="text-gray-600 mb-6">
                  A mid-sized manufacturing company with 500 employees implemented DirectPayDr as part of their
                  self-insured health plan and saved $420,000 in the first year.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">47% reduction in imaging costs</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">53% reduction in outpatient procedure costs</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">92% employee satisfaction with the program</p>
                    </div>
                  </div>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Read Full Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="relative hidden md:block">
                <Image
                  src="/manufacturing-case-study.png"
                  alt="Manufacturing company case study"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Badge className="bg-blue-100 text-blue-800 mb-4">Case Study</Badge>
              <h3 className="text-xl font-bold mb-2">Tech Startup Enhances Benefits Package</h3>
              <p className="text-gray-600 mb-4">
                A growing tech startup used DirectPayDr to enhance their benefits package and attract top talent in a
                competitive market.
              </p>
              <Link href="#" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                Read More
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <Badge className="bg-blue-100 text-blue-800 mb-4">Case Study</Badge>
              <h3 className="text-xl font-bold mb-2">Retail Chain Reduces Healthcare Spending by 32%</h3>
              <p className="text-gray-600 mb-4">
                A national retail chain implemented DirectPayDr across 50 locations and reduced their healthcare
                spending by 32% in the first year.
              </p>
              <Link href="#" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                Read More
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6">Ready to Reduce Your Company's Healthcare Costs?</h2>
                <p className="text-gray-600 mb-8">
                  Schedule a demo to learn how DirectPayDr can help your company save on healthcare costs while
                  providing valuable benefits to your employees.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Phone className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold">Call Us</h3>
                      <p className="text-gray-600">(800) 555-1234</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Mail className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold">Email Us</h3>
                      <p className="text-gray-600">employers@directpaydr.com</p>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                      Schedule a Demo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <p className="text-sm text-gray-500 mt-2 text-center">
                      Our team will contact you within one business day
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative hidden md:block">
                <Image src="/employer-consultation.png" alt="Employer consultation" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions from employers about DirectPayDr
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">How does DirectPayDr work with our existing health plan?</h3>
              <p className="text-gray-600">
                DirectPayDr works alongside your existing health plan as a complementary benefit. It provides your
                employees with access to pre-negotiated rates for medical procedures and tests, often at prices lower
                than what they would pay through insurance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Is there a cost to implement DirectPayDr?</h3>
              <p className="text-gray-600">
                There is no upfront cost to implement DirectPayDr. We offer flexible pricing models based on your
                company's size and needs. Many employers find that the savings far outweigh any implementation costs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">How do employees access DirectPayDr?</h3>
              <p className="text-gray-600">
                Employees can access DirectPayDr through our website or mobile app. They can search for procedures,
                compare prices, and purchase care directly online. We provide comprehensive educational materials to
                help employees understand how to use the benefit.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Can DirectPayDr be used with HSA/FSA funds?</h3>
              <p className="text-gray-600">
                Yes, employees can use their Health Savings Account (HSA) or Flexible Spending Account (FSA) funds to
                pay for procedures purchased through DirectPayDr, making it even more affordable for them.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">How do we track savings and usage?</h3>
              <p className="text-gray-600">
                We provide a comprehensive employer dashboard that tracks usage, savings, and employee engagement.
                You'll receive regular reports showing your company's savings and the value provided to your employees.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">What types of procedures are available?</h3>
              <p className="text-gray-600">
                DirectPayDr offers a wide range of procedures including imaging (MRI, CT, X-ray), lab tests, preventive
                care, specialty consultations, and many outpatient procedures. Our network includes over 9,600 providers
                nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Employee Benefits?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join hundreds of employers who are saving on healthcare costs while providing valuable benefits to their
            employees with DirectPayDr.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
              Schedule a Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-blue-700">
              Download Employer Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
