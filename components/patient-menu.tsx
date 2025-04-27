"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { useSession } from "next-auth/react"

export function PatientMenu() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const { data: session } = useSession()

  const menuItems = [
    { name: "My Providers", href: "/dashboard/patient/providers" },
    { name: "My Procedures", href: "/dashboard/patient/procedures" },
    { name: "Find Providers / Procedures", href: "/dashboard/patient/find" },
  ]

  return (
    <>
      {/* Desktop Menu */}
      <div className="flex items-center justify-between w-full">
        <nav className="flex items-center space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                pathname === item.href ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Menu */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between border-b pb-4">
              <span className="text-lg font-bold">Menu</span>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <nav className="flex flex-col space-y-4 mt-6">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-base font-medium transition-colors ${
                    pathname === item.href ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
