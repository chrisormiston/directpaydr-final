"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  User,
  Calendar,
  CreditCard,
  Settings,
  FileText,
  Building,
  Users,
  ShoppingCart,
  BarChart,
  Heart,
  Stethoscope,
  ClipboardList,
  MessageSquare,
  HelpCircle,
  LogOut,
} from "lucide-react"

import { cn } from "@/lib/utils"

interface SidebarProps {
  userRole: string
}

export default function DashboardSidebar({ userRole }: SidebarProps) {
  const pathname = usePathname()

  const patientLinks = [
    {
      name: "Overview",
      href: "/dashboard/patient",
      icon: User,
    },
    {
      name: "Appointments",
      href: "/dashboard/patient/appointments",
      icon: Calendar,
    },
    {
      name: "Medical Records",
      href: "/dashboard/patient/records",
      icon: FileText,
    },
    {
      name: "Saved Procedures",
      href: "/dashboard/patient/saved",
      icon: Heart,
    },
    {
      name: "Orders",
      href: "/dashboard/patient/orders",
      icon: ShoppingCart,
    },
    {
      name: "Billing",
      href: "/dashboard/patient/billing",
      icon: CreditCard,
    },
    {
      name: "Messages",
      href: "/dashboard/patient/messages",
      icon: MessageSquare,
    },
    {
      name: "Settings",
      href: "/dashboard/patient/settings",
      icon: Settings,
    },
  ]

  const providerLinks = [
    {
      name: "Overview",
      href: "/dashboard/provider",
      icon: Stethoscope,
    },
    {
      name: "Patients",
      href: "/dashboard/provider/patients",
      icon: Users,
    },
    {
      name: "Appointments",
      href: "/dashboard/provider/appointments",
      icon: Calendar,
    },
    {
      name: "Procedures",
      href: "/dashboard/provider/procedures",
      icon: ClipboardList,
    },
    {
      name: "Orders",
      href: "/dashboard/provider/orders",
      icon: ShoppingCart,
    },
    {
      name: "Billing",
      href: "/dashboard/provider/billing",
      icon: CreditCard,
    },
    {
      name: "Analytics",
      href: "/dashboard/provider/analytics",
      icon: BarChart,
    },
    {
      name: "Messages",
      href: "/dashboard/provider/messages",
      icon: MessageSquare,
    },
    {
      name: "Settings",
      href: "/dashboard/provider/settings",
      icon: Settings,
    },
  ]

  const employerLinks = [
    {
      name: "Overview",
      href: "/dashboard/employer",
      icon: Building,
    },
    {
      name: "Employees",
      href: "/dashboard/employer/employees",
      icon: Users,
    },
    {
      name: "Plans",
      href: "/dashboard/employer/plans",
      icon: FileText,
    },
    {
      name: "Usage",
      href: "/dashboard/employer/usage",
      icon: BarChart,
    },
    {
      name: "Billing",
      href: "/dashboard/employer/billing",
      icon: CreditCard,
    },
    {
      name: "Settings",
      href: "/dashboard/employer/settings",
      icon: Settings,
    },
  ]

  const adminLinks = [
    {
      name: "Overview",
      href: "/dashboard/admin",
      icon: BarChart,
    },
    {
      name: "Users",
      href: "/dashboard/admin/users",
      icon: Users,
    },
    {
      name: "Providers",
      href: "/dashboard/admin/providers",
      icon: Stethoscope,
    },
    {
      name: "Employers",
      href: "/dashboard/admin/employers",
      icon: Building,
    },
    {
      name: "Procedures",
      href: "/dashboard/admin/procedures",
      icon: ClipboardList,
    },
    {
      name: "Orders",
      href: "/dashboard/admin/orders",
      icon: ShoppingCart,
    },
    {
      name: "Analytics",
      href: "/dashboard/admin/analytics",
      icon: BarChart,
    },
    {
      name: "Settings",
      href: "/dashboard/admin/settings",
      icon: Settings,
    },
  ]

  const links =
    userRole === "patient"
      ? patientLinks
      : userRole === "provider"
        ? providerLinks
        : userRole === "employer"
          ? employerLinks
          : userRole === "admin"
            ? adminLinks
            : []

  return (
    <div className="w-64 bg-white border-r border-gray-200 min-h-[calc(100vh-64px)]">
      <div className="p-4">
        <nav className="space-y-1">
          {links.map((link) => {
            const isActive = pathname === link.href

            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "flex items-center px-4 py-3 text-sm font-medium rounded-md",
                  isActive ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-100",
                )}
              >
                <link.icon className={cn("mr-3 h-5 w-5", isActive ? "text-blue-700" : "text-gray-400")} />
                {link.name}
              </Link>
            )
          })}

          <div className="pt-4 mt-4 border-t border-gray-200">
            <Link
              href="/help"
              className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100"
            >
              <HelpCircle className="mr-3 h-5 w-5 text-gray-400" />
              Help & Support
            </Link>

            <Link
              href="/api/auth/signout"
              className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100"
            >
              <LogOut className="mr-3 h-5 w-5 text-gray-400" />
              Sign Out
            </Link>
          </div>
        </nav>
      </div>
    </div>
  )
}
