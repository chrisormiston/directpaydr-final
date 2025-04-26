"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, ChevronUp, Eye, EyeOff, Menu, User, Building, Stethoscope } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isProceduresOpen, setIsProceduresOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 10)
    })
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
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
              <span className="ml-2 text-xl font-bold text-blue-600">DirectPayDr</span>
            </Link>
            <nav className="ml-10 hidden md:flex space-x-8">
              {/* All Procedures Dropdown - Keep this new dropdown */}
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium">
                  All Procedures
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Mega Dropdown */}
                <div className="absolute left-0 mt-2 w-screen max-w-4xl bg-white shadow-lg rounded-lg p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="grid grid-cols-3 gap-8">
                    {/* Top Procedures */}
                    <div>
                      <h3 className="text-lg font-semibold text-blue-700 mb-4">Top Procedures</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link href="/procedures/colonoscopy" className="text-gray-700 hover:text-blue-600">
                            Colonoscopy
                          </Link>
                        </li>
                        <li>
                          <Link href="/procedures/ct-scan" className="text-gray-700 hover:text-blue-600">
                            CT Scan
                          </Link>
                        </li>
                        <li>
                          <Link href="/procedures/gastric-sleeve" className="text-gray-700 hover:text-blue-600">
                            Gastric Sleeve
                          </Link>
                        </li>
                        <li>
                          <Link href="/procedures/mammogram" className="text-gray-700 hover:text-blue-600">
                            Mammogram
                          </Link>
                        </li>
                        <li>
                          <Link href="/procedures/mri" className="text-gray-700 hover:text-blue-600">
                            MRI
                          </Link>
                        </li>
                        <li>
                          <Link href="/procedures/ultrasound" className="text-gray-700 hover:text-blue-600">
                            Ultrasound
                          </Link>
                        </li>
                        <li>
                          <Link href="/procedures/x-ray" className="text-gray-700 hover:text-blue-600">
                            X-ray
                          </Link>
                        </li>
                        <li>
                          <Link href="/procedures/all" className="text-blue-600 font-medium hover:underline">
                            View All
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Featured Specialties */}
                    <div>
                      <h3 className="text-lg font-semibold text-blue-700 mb-4">Featured Specialties</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link href="/specialties/bariatrics" className="text-gray-700 hover:text-blue-600">
                            Bariatrics
                          </Link>
                        </li>
                        <li>
                          <Link href="/specialties/general-surgery" className="text-gray-700 hover:text-blue-600">
                            General Surgery
                          </Link>
                        </li>
                        <li>
                          <Link href="/specialties/imaging-radiology" className="text-gray-700 hover:text-blue-600">
                            Imaging & Radiology
                          </Link>
                        </li>
                        <li>
                          <Link href="/specialties/labs" className="text-gray-700 hover:text-blue-600">
                            Labs
                          </Link>
                        </li>
                        <li>
                          <Link href="/specialties/office-visits" className="text-gray-700 hover:text-blue-600">
                            Office Visits
                          </Link>
                        </li>
                        <li>
                          <Link href="/specialties/pregnancy" className="text-gray-700 hover:text-blue-600">
                            Pregnancy
                          </Link>
                        </li>
                        <li>
                          <Link href="/specialties/wellness" className="text-gray-700 hover:text-blue-600">
                            Wellness
                          </Link>
                        </li>
                        <li>
                          <Link href="/specialties/all" className="text-blue-600 font-medium hover:underline">
                            View All
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Locations */}
                    <div>
                      <h3 className="text-lg font-semibold text-blue-700 mb-4">Locations</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link href="/locations/arizona" className="text-gray-700 hover:text-blue-600">
                            Arizona
                          </Link>
                        </li>
                        <li>
                          <Link href="/locations/florida" className="text-gray-700 hover:text-blue-600">
                            Florida
                          </Link>
                        </li>
                        <li>
                          <Link href="/locations/indiana" className="text-gray-700 hover:text-blue-600">
                            Indiana
                          </Link>
                        </li>
                        <li>
                          <Link href="/locations/nebraska" className="text-gray-700 hover:text-blue-600">
                            Nebraska
                          </Link>
                        </li>
                        <li>
                          <Link href="/locations/oklahoma" className="text-gray-700 hover:text-blue-600">
                            Oklahoma
                          </Link>
                        </li>
                        <li>
                          <Link href="/locations/tennessee" className="text-gray-700 hover:text-blue-600">
                            Tennessee
                          </Link>
                        </li>
                        <li>
                          <Link href="/locations/texas" className="text-gray-700 hover:text-blue-600">
                            Texas
                          </Link>
                        </li>
                        <li>
                          <Link href="/locations/all" className="text-blue-600 font-medium hover:underline">
                            View All
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Restore original "Find Care" link */}
              <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                Find Care
              </Link>

              {/* Restore original "For Patients" dropdown */}
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium">
                  For Patients
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <Link
                    href="/how-it-works"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    How It Works
                  </Link>
                  <Link href="/faq" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    FAQ
                  </Link>
                  <Link
                    href="/testimonials"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Testimonials
                  </Link>
                  <Link
                    href="/deductible-checker"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Deductible Checker
                  </Link>
                  <Link
                    href="/healthcare-prices"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Healthcare Prices
                  </Link>
                </div>
              </div>

              {/* Restore original "For Providers" dropdown */}
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium">
                  For Providers
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <Link
                    href="/providers/join-network"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Join Our Provider Network
                  </Link>
                  <Link
                    href="/providers/referring-providers"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Referring Providers
                  </Link>
                </div>
              </div>

              {/* Restore original "For Employers" link */}
              <Link href="/employers" className="text-gray-700 hover:text-blue-600 font-medium">
                For Employers
              </Link>
            </nav>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setIsLoginOpen(!isLoginOpen)}
                className="flex items-center text-gray-700 hover:text-blue-600 font-medium"
              >
                Log In / Sign Up
                {isLoginOpen ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />}
              </button>

              {isLoginOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg overflow-hidden z-50">
                  <div className="p-4">
                    <h2 className="text-xl font-bold text-gray-800 mb-3">Welcome Back</h2>
                    <div className="space-y-3">
                      <div className="relative">
                        <Input type="email" placeholder="Email" className="pr-10 h-9 text-sm" />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-red-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                            <line x1="4" y1="22" x2="4" y2="15"></line>
                          </svg>
                        </div>
                      </div>

                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Password"
                          className="pr-10 h-9 text-sm"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute inset-y-0 right-0 flex items-center pr-3 text-red-500"
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>

                      <div className="text-right">
                        <Link href="#" className="text-blue-600 hover:text-blue-800 text-xs">
                          Reset password
                        </Link>
                      </div>

                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-1 h-8 text-sm rounded-full">
                        Log In
                      </Button>

                      <div className="text-center text-gray-500 text-xs py-1">or</div>

                      <Button
                        variant="outline"
                        className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 py-1 h-8 text-sm rounded-full"
                      >
                        Email Me a One-time Login Link
                      </Button>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4">
                    <h3 className="text-base font-bold text-gray-800 mb-2">New to DirectPayDr?</h3>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <User className="h-4 w-4 text-gray-700 mr-2" />
                          <span className="font-medium text-sm">Patient</span>
                        </div>
                        <Link href="/signup/patient" className="text-blue-600 hover:text-blue-800 text-sm">
                          Create account
                        </Link>
                      </div>

                      <Separator className="my-1" />

                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Stethoscope className="h-4 w-4 text-gray-700 mr-2" />
                          <span className="font-medium text-sm">Provider</span>
                        </div>
                        <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                          Create account
                        </Link>
                      </div>

                      <Separator className="my-1" />

                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Building className="h-4 w-4 text-gray-700 mr-2" />
                          <span className="font-medium text-sm">Employer</span>
                        </div>
                        <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                          Request access
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between border-b pb-4">
                  <Link href="/" className="flex items-center">
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
                    <span className="ml-2 text-lg font-bold text-blue-600">DirectPayDr</span>
                  </Link>
                </div>
                <nav className="flex flex-col space-y-4 mt-6">
                  {/* All Procedures section in mobile menu */}
                  <div className="py-2">
                    <p className="text-gray-700 font-medium mb-2">All Procedures</p>
                    <div className="pl-4 space-y-2">
                      <Link href="/procedures/all" className="text-gray-600 hover:text-blue-600 block py-1">
                        View All Procedures
                      </Link>
                      <Link href="/specialties/all" className="text-gray-600 hover:text-blue-600 block py-1">
                        View All Specialties
                      </Link>
                      <Link href="/locations/all" className="text-gray-600 hover:text-blue-600 block py-1">
                        View All Locations
                      </Link>
                    </div>
                  </div>

                  {/* Find Care link */}
                  <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                    Find Care
                  </Link>

                  {/* For Patients section */}
                  <div className="py-2">
                    <p className="text-gray-700 font-medium mb-2">For Patients</p>
                    <div className="pl-4 space-y-2">
                      <Link href="/how-it-works" className="text-gray-600 hover:text-blue-600 block py-1">
                        How It Works
                      </Link>
                      <Link href="/faq" className="text-gray-600 hover:text-blue-600 block py-1">
                        FAQ
                      </Link>
                      <Link href="/testimonials" className="text-gray-600 hover:text-blue-600 block py-1">
                        Testimonials
                      </Link>
                      <Link href="/deductible-checker" className="text-gray-600 hover:text-blue-600 block py-1">
                        Deductible Checker
                      </Link>
                      <Link href="/healthcare-prices" className="text-gray-600 hover:text-blue-600 block py-1">
                        Healthcare Prices
                      </Link>
                    </div>
                  </div>

                  {/* For Providers section */}
                  <div className="py-2">
                    <p className="text-gray-700 font-medium mb-2">For Providers</p>
                    <div className="pl-4 space-y-2">
                      <Link href="/providers/join-network" className="text-gray-600 hover:text-blue-600 block py-1">
                        Join Our Provider Network
                      </Link>
                      <Link
                        href="/providers/referring-providers"
                        className="text-gray-600 hover:text-blue-600 block py-1"
                      >
                        Referring Providers
                      </Link>
                    </div>
                  </div>

                  {/* For Employers link */}
                  <Link href="/employers" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                    For Employers
                  </Link>
                </nav>
                <div className="mt-auto border-t pt-4">
                  <div className="flex flex-col space-y-4">
                    <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                      Log In
                    </Link>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">Create Account</Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
