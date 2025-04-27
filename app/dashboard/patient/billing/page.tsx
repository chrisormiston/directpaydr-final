import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Billing | DirectPayDr",
  description: "Manage your billing information and payment history",
}

export default function BillingPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Billing</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Payment Methods</h2>
          <div className="border rounded-md p-4 mb-4 flex items-start">
            <div className="bg-blue-100 rounded-md p-2 mr-4">
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
            <div>
              <div className="font-medium">Visa ending in 4242</div>
              <div className="text-sm text-gray-500">Expires 12/2025</div>
              <div className="mt-2">
                <button className="text-sm text-blue-600 hover:text-blue-800">Edit</button>
                <span className="mx-2 text-gray-300">|</span>
                <button className="text-sm text-red-600 hover:text-red-800">Remove</button>
              </div>
            </div>
          </div>
          <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
            Add Payment Method
          </button>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Billing Address</h2>
          <div className="mb-4">
            <p>John Doe</p>
            <p>123 Main Street</p>
            <p>Apt 4B</p>
            <p>Oklahoma City, OK 73102</p>
            <p>United States</p>
          </div>
          <button className="text-blue-600 hover:text-blue-800 font-medium">Edit Address</button>
        </div>
      </div>

      <div className="mt-8 bg-white rounded-lg shadow overflow-hidden">
        <h2 className="text-xl font-semibold p-6 border-b">Payment History</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Receipt
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Apr 15, 2023</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  MRI Scan - Oklahoma Medical Center
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$450.00</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Paid
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:text-blue-800">
                  <a href="#">View</a>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Mar 22, 2023</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Blood Test - City Labs</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$85.00</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Paid
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:text-blue-800">
                  <a href="#">View</a>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Feb 10, 2023</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Annual Physical - Dr. Smith</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$120.00</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Paid
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:text-blue-800">
                  <a href="#">View</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
