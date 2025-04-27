"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import type { User } from "@supabase/supabase-js"
import { ChevronDown, Menu, X, UserIcon, LogOut, Settings } from "lucide-react"

type PatientData = {
  first_name: string
  last_name: string
  [key: string]: any
}

export default function PatientHeader({ patient, user }: { patient: PatientData; user: User }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push("/")
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    if (isProfileOpen) setIsProfileOpen(false)
  }

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen)
    if (isMenuOpen) setIsMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/dashboard/patient" className="flex items-center">
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
              <span className="ml-2 text-xl font-bold text-gray-900">DirectPayDr</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/dashboard/patient/providers" className="text-gray-700 hover:text-blue-600 font-medium">
              My Providers
            </Link>
            <Link href="/dashboard/patient/procedures" className="text-gray-700 hover:text-blue-600 font-medium">
              My Procedures
            </Link>
            <Link href="/dashboard/patient/billing" className="text-gray-700 hover:text-blue-600 font-medium">
              Billing/Payments
            </Link>
          </nav>

          {/* Profile Dropdown */}
          <div className="hidden md:flex items-center">
            <div className="relative">
              <button
                onClick={toggleProfile}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                <span className="font-medium">
                  {patient.first_name} {patient.last_name}
                </span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isProfileOpen ? "rotate-180" : ""}`} />
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-900">
                      {patient.first_name} {patient.last_name}
                    </p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                  <Link
                    href="/dashboard/patient/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                  >
                    <UserIcon className="h-4 w-4 mr-2" />
                    My Profile
                  </Link>
                  <Link
                    href="/dashboard/patient/settings"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-600 focus:outline-none">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/dashboard/patient/providers"
                className="text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                My Providers
              </Link>
              <Link
                href="/dashboard/patient/procedures"
                className="text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                My Procedures
              </Link>
              <Link
                href="/dashboard/patient/billing"
                className="text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Billing/Payments
              </Link>
              <div className="pt-4 border-t border-gray-200">
                <Link
                  href="/dashboard/patient/profile"
                  className="flex items-center text-gray-700 hover:text-blue-600 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <UserIcon className="h-4 w-4 mr-2" />
                  My Profile
                </Link>
                <button
                  onClick={handleSignOut}
                  className="mt-4 flex items-center text-gray-700 hover:text-blue-600 font-medium"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
