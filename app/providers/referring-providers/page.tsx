import Image from "next/image"
import { ArrowRight, CheckCircle, ChevronRight, Download, FileText, HeartPulse, Mail, Phone, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export default function ReferringProvidersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-800 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/medical-pattern-bg.png" alt="Medical pattern background" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="text-white space-y-6">
              <Badge className="bg-blue-500 hover:bg-blue-500 text-white">For Healthcare Providers</Badge>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">Help Your Patients Save on Healthcare</h1>
              <p className="text-xl opacity-90">
                Refer your patients to DirectPayDr for affordable, transparent pricing on medical procedures and tests.
                No cost to you, tremendous value for them.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
                  Become a Referring Provider
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-blue-700"
                >
                  Download Referral Guide
                  <Download className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="relative h-[500px] w-full">
                <Image
                  src="/doctor-with-patient-tablet.png"
                  alt="Doctor showing patient options on tablet"
                  fill
                  className="object-cover rounded-lg shadow-xl"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="bg-green-100 p-2 rounded-full">
                    <HeartPulse className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Average Patient Savings</p>
                    <p className="text-2xl font-bold text-blue-700">50%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Benefits for Referring Providers</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Help your patients access affordable care while strengthening your practice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-2 bg-blue-600"></div>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Improve Patient Satisfaction</h3>
                <p className="text-gray-600 mb-6">
                  Offer your patients an affordable option for procedures and tests they might otherwise delay or avoid
                  due to cost concerns.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Provide a solution for uninsured patients</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Help patients with high deductibles</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Increase compliance with recommended care</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-2 bg-blue-600"></div>
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
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Maintain Continuity of Care</h3>
                <p className="text-gray-600 mb-6">
                  Keep your patients within your care network by referring them to DirectPayDr participating providers
                  you trust.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Refer to specific providers in our network</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Receive results and follow-up information</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Maintain your role as primary care coordinator</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-2 bg-blue-600"></div>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <FileText className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">No Administrative Burden</h3>
                <p className="text-gray-600 mb-6">
                  Our referral process is simple and streamlined, requiring minimal effort from you and your staff.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Simple referral process</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>No paperwork or insurance authorization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Free referral materials for your office</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">How the Referral Process Works</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              A simple, three-step process designed to integrate seamlessly with your practice workflow
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md text-center relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  1
                </div>
                <div className="h-48 flex items-center justify-center mb-6">
                  <Image
                    src="/doctor-referring-patient.png"
                    alt="Doctor referring patient"
                    width={200}
                    height={150}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4">Recommend DirectPayDr</h3>
                <p className="text-gray-600">
                  Identify patients who could benefit from affordable cash pricing and recommend DirectPayDr as an
                  option.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md text-center relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  2
                </div>
                <div className="h-48 flex items-center justify-center mb-6">
                  <Image
                    src="/patient-searching-procedures.png"
                    alt="Patient searching procedures"
                    width={200}
                    height={150}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4">Patient Purchases Procedure</h3>
                <p className="text-gray-600">
                  Your patient visits DirectPayDr.com, searches for the procedure, and purchases it online at a
                  pre-negotiated rate.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md text-center relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  3
                </div>
                <div className="h-48 flex items-center justify-center mb-6">
                  <Image
                    src="/patient-receiving-care.png"
                    alt="Patient receiving care"
                    width={200}
                    height={150}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4">Patient Receives Care</h3>
                <p className="text-gray-600">
                  The patient schedules with the provider and receives care. Results are sent back to you for follow-up
                  care.
                </p>
              </div>
            </div>

            <div className="mt-16 p-8 bg-white rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-center">Referral Tools for Your Practice</h3>
              <div className="grid md:grid-cols-3 gap-8">
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
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                  </div>
                  <h4 className="font-bold mb-2">Referral Cards</h4>
                  <p className="text-gray-600 mb-4">Printed cards with your practice information to give to patients</p>
                  <Button variant="outline" className="border-blue-600 text-blue-600">
                    Order Cards
                  </Button>
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
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                  <h4 className="font-bold mb-2">Patient Handouts</h4>
                  <p className="text-gray-600 mb-4">Educational materials explaining DirectPayDr to your patients</p>
                  <Button variant="outline" className="border-blue-600 text-blue-600">
                    Download PDF
                  </Button>
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
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  </div>
                  <h4 className="font-bold mb-2">Digital Resources</h4>
                  <p className="text-gray-600 mb-4">
                    Digital materials for your website, patient portal, or email communications
                  </p>
                  <Button variant="outline" className="border-blue-600 text-blue-600">
                    Access Resources
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Procedures Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Procedures You Can Refer</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              DirectPayDr offers a wide range of procedures across specialties at transparent, affordable prices
            </p>
          </div>

          <Tabs defaultValue="imaging" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-12">
              <TabsTrigger value="imaging">Imaging</TabsTrigger>
              <TabsTrigger value="labs">Lab Tests</TabsTrigger>
              <TabsTrigger value="specialty">Specialty Care</TabsTrigger>
              <TabsTrigger value="preventive">Preventive Care</TabsTrigger>
              <TabsTrigger value="surgery">Surgery</TabsTrigger>
            </TabsList>

            <TabsContent value="imaging" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Diagnostic Imaging</h3>
                  <p className="text-gray-600 mb-6">
                    Refer your patients for high-quality imaging services at prices up to 67% lower than typical costs.
                    All imaging centers in our network are accredited and results are sent directly to you.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div>
                      <h4 className="font-bold mb-2">Common Procedures:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span>MRI Scans</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span>CT Scans</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span>Ultrasounds</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span>X-Rays</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span>Mammograms</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Average Savings:</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span>MRI</span>
                          <Badge className="bg-green-100 text-green-800">67%</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>CT Scan</span>
                          <Badge className="bg-green-100 text-green-800">65%</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Ultrasound</span>
                          <Badge className="bg-green-100 text-green-800">56%</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>X-Ray</span>
                          <Badge className="bg-green-100 text-green-800">64%</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Mammogram</span>
                          <Badge className="bg-green-100 text-green-800">58%</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    View All Imaging Procedures
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="relative h-80 md:h-96">
                  <Image
                    src="/mri-machine-technician.png"
                    alt="MRI machine with technician"
                    fill
                    className="object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="labs" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Laboratory Tests</h3>
                  <p className="text-gray-600 mb-6">
                    Refer your patients for affordable lab work with savings up to 72% compared to typical costs. All
                    lab results are sent directly to you for review and follow-up.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div>
                      <h4 className="font-bold mb-2">Common Tests:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span>Comprehensive Metabolic Panel</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span>Complete Blood Count</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span>Lipid Panel</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span>Thyroid Panel</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span>Vitamin D Test</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Average Savings:</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span>Metabolic Panel</span>
                          <Badge className="bg-green-100 text-green-800">72%</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Blood Count</span>
                          <Badge className="bg-green-100 text-green-800">68%</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Lipid Panel</span>
                          <Badge className="bg-green-100 text-green-800">70%</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Thyroid Panel</span>
                          <Badge className="bg-green-100 text-green-800">65%</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Vitamin D</span>
                          <Badge className="bg-green-100 text-green-800">69%</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    View All Lab Tests
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="relative h-80 md:h-96">
                  <Image
                    src="/laboratory-blood-test.png"
                    alt="Laboratory blood testing"
                    fill
                    className="object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="specialty" className="mt-0">
              {/* Content for Specialty Care tab */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Specialty Care</h3>
                  <p className="text-gray-600 mb-6">
                    Refer your patients to specialists in our network for consultations and procedures at transparent,
                    affordable prices.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div>
                      <h4 className="font-bold mb-2">Common Specialties:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span>Cardiology</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span>Gastroenterology</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span>Orthopedics</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span>Dermatology</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span>Neurology</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Average Savings:</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span>Cardiology</span>
                          <Badge className="bg-green-100 text-green-800">55%</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Gastroenterology</span>
                          <Badge className="bg-green-100 text-green-800">58%</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Orthopedics</span>
                          <Badge className="bg-green-100 text-green-800">52%</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Dermatology</span>
                          <Badge className="bg-green-100 text-green-800">50%</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Neurology</span>
                          <Badge className="bg-green-100 text-green-800">48%</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    View All Specialty Care
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="relative h-80 md:h-96">
                  <Image
                    src="/specialist-consultation.png"
                    alt="Specialist consultation"
                    fill
                    className="object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="preventive" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Preventive Care</h3>
                  <p className="text-gray-600 mb-6">
                    Help your patients access affordable preventive care services that can detect health issues early
                    and improve long-term outcomes.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div>
                      <h4 className="font-bold mb-2">Common Procedures:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span>Colonoscopy</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span>Mammogram</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span>Bone Density Scan</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span>Cardiac Stress Test</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span>Skin Cancer Screening</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Average Savings:</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span>Colonoscopy</span>
                          <Badge className="bg-green-100 text-green-800">61%</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Mammogram</span>
                          <Badge className="bg-green-100 text-green-800">58%</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Bone Density</span>
                          <Badge className="bg-green-100 text-green-800">55%</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Stress Test</span>
                          <Badge className="bg-green-100 text-green-800">53%</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Skin Screening</span>
                          <Badge className="bg-green-100 text-green-800">50%</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    View All Preventive Care
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="relative h-80 md:h-96">
                  <Image
                    src="/preventive-care-checkup.png"
                    alt="Preventive care checkup"
                    fill
                    className="object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="surgery" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Surgical Procedures</h3>
                  <p className="text-gray-600 mb-6">
                    Refer your patients for surgical procedures at transparent, all-inclusive prices that can save them
                    thousands of dollars compared to typical costs.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div>
                      <h4 className="font-bold mb-2">Common Procedures:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span>Cataract Surgery</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span>Hernia Repair</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span>Knee Arthroscopy</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span>Carpal Tunnel Release</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span>Tonsillectomy</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Average Savings:</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span>Cataract</span>
                          <Badge className="bg-green-100 text-green-800">45%</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Hernia</span>
                          <Badge className="bg-green-100 text-green-800">48%</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Knee</span>
                          <Badge className="bg-green-100 text-green-800">52%</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Carpal Tunnel</span>
                          <Badge className="bg-green-100 text-green-800">55%</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Tonsillectomy</span>
                          <Badge className="bg-green-100 text-green-800">50%</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    View All Surgical Procedures
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="relative h-80 md:h-96">
                  <Image
                    src="/surgical-procedure.png"
                    alt="Surgical procedure"
                    fill
                    className="object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Referring Providers Say</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from healthcare providers who refer their patients to DirectPayDr
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/doctor-testimonial-3.png"
                    alt="Dr. Robert Chen"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Dr. Robert Chen</h3>
                  <p className="text-gray-600">Family Medicine Physician</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-6">
                "DirectPayDr has been a game-changer for my uninsured and high-deductible patients. I've seen a
                significant increase in compliance with recommended imaging and lab work since I started referring to
                DirectPayDr."
              </p>
              <div className="flex items-center text-amber-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/doctor-testimonial-4.png"
                    alt="Dr. Jennifer Martinez"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Dr. Jennifer Martinez</h3>
                  <p className="text-gray-600">Internal Medicine Physician</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-6">
                "My patients appreciate having a transparent, affordable option for their healthcare needs. The referral
                process is simple, and I receive results promptly to coordinate follow-up care. It's a win-win for
                everyone."
              </p>
              <div className="flex items-center text-amber-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/doctor-testimonial-5.png"
                    alt="Dr. Michael Thompson"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Dr. Michael Thompson</h3>
                  <p className="text-gray-600">Orthopedic Surgeon</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-6">
                "As a specialist, I often refer patients for imaging studies and lab work. DirectPayDr has made it easy
                for my patients to access these services at affordable prices, which helps them get the care they need
                faster."
              </p>
              <div className="flex items-center text-amber-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
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
                <h2 className="text-3xl font-bold mb-6">Become a Referring Provider</h2>
                <p className="text-gray-600 mb-8">
                  Join thousands of healthcare providers who refer their patients to DirectPayDr for affordable,
                  transparent healthcare. There's no cost to join and no administrative burden.
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
                      <p className="text-gray-600">providers@directpaydr.com</p>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                      Sign Up Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <p className="text-sm text-gray-500 mt-2 text-center">
                      Our team will contact you within one business day
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative hidden md:block">
                <Image
                  src="/doctor-office-consultation.png"
                  alt="Doctor office consultation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Help Your Patients Save on Healthcare</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of healthcare providers who refer their patients to DirectPayDr for affordable, transparent
            healthcare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
              Become a Referring Provider
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-blue-700">
              Download Referral Guide
              <Download className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
