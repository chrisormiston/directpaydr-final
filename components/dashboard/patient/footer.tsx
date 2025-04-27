import Link from "next/link"

export default function PatientFooter() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} DirectPayDr. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-sm text-gray-600 hover:text-blue-600">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm text-gray-600 hover:text-blue-600">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-sm text-gray-600 hover:text-blue-600">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
