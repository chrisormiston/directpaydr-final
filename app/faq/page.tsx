"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight, ChevronDown, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("general")
  const [searchQuery, setSearchQuery] = useState("")
  const categoryRefs = useRef({})

  // Scroll to category when activeCategory changes
  useEffect(() => {
    let isMounted = true

    // Only scroll if the component is mounted and the ref exists
    if (isMounted && categoryRefs.current[activeCategory]) {
      setTimeout(() => {
        if (categoryRefs.current[activeCategory]) {
          categoryRefs.current[activeCategory].scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      }, 100)
    }

    return () => {
      isMounted = false
    }
  }, [activeCategory])

  // Filter FAQs based on search query
  const filteredFAQs = searchQuery
    ? Object.keys(faqCategories).reduce((acc, category) => {
        const filteredItems = faqCategories[category].items.filter(
          (item) =>
            item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.answer.toLowerCase().includes(searchQuery.toLowerCase()),
        )
        if (filteredItems.length > 0) {
          acc[category] = {
            ...faqCategories[category],
            items: filteredItems,
          }
        }
        return acc
      }, {})
    : faqCategories

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-16 pb-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600 mb-8">
              Find answers to common questions about DirectPayDr and how our healthcare marketplace works.
            </p>
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search for questions or keywords..."
                className="pl-10 py-6 text-base"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar Navigation */}
            <div className="md:w-1/4">
              <div className="sticky top-24 bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">Categories</h2>
                <nav>
                  <ul className="space-y-2">
                    {Object.keys(filteredFAQs).map((category) => (
                      <li key={category}>
                        <button
                          onClick={() => setActiveCategory(category)}
                          className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                            activeCategory === category
                              ? "bg-blue-100 text-blue-700 font-medium"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          {filteredFAQs[category].title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Still have questions?</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Our support team is here to help you with any questions you may have.
                  </p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Contact Support</Button>
                </div>
              </div>
            </div>

            {/* FAQ Content */}
            <div className="md:w-3/4">
              {Object.keys(filteredFAQs).length === 0 ? (
                <div className="text-center py-12">
                  <h3 className="text-xl font-bold mb-2">No results found</h3>
                  <p className="text-gray-600 mb-4">We couldn't find any FAQs matching your search.</p>
                  <Button
                    variant="outline"
                    className="border-blue-600 text-blue-600"
                    onClick={() => setSearchQuery("")}
                  >
                    Clear Search
                  </Button>
                </div>
              ) : (
                Object.keys(filteredFAQs).map((category) => (
                  <div
                    key={category}
                    id={category}
                    className="mb-12"
                    ref={(el) => (categoryRefs.current[category] = el)}
                  >
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b">
                      {filteredFAQs[category].title}
                    </h2>
                    <Accordion type="single" collapsible className="w-full">
                      {filteredFAQs[category].items.map((faq, index) => (
                        <AccordionItem key={index} value={`${category}-item-${index}`}>
                          <AccordionTrigger className="text-left text-lg font-medium py-4">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-600 text-base leading-relaxed pt-2 pb-6">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))
              )}

              {/* Related Resources */}
              <div className="mt-16 bg-gray-50 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Resources</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-bold mb-2">How DirectPayDr Works</h3>
                    <p className="text-gray-600 mb-4">
                      Learn more about our simple 3-step process to save on healthcare costs.
                    </p>
                    <Link
                      href="/how-it-works"
                      className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                    >
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-bold mb-2">Deductible Checker</h3>
                    <p className="text-gray-600 mb-4">
                      Find out if you've met your deductible and how DirectPayDr can help you save.
                    </p>
                    <Link
                      href="/deductible-checker"
                      className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                    >
                      Check your deductible
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
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
                How It Works
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// FAQ Data
const faqCategories = {
  general: {
    title: "General Questions",
    items: [
      {
        question: "What is DirectPayDr?",
        answer:
          "DirectPayDr is a healthcare marketplace that connects patients with medical providers offering upfront, transparent pricing. We negotiate discounted rates with quality healthcare providers, allowing you to save an average of 50% on medical procedures compared to typical costs.",
      },
      {
        question: "How does DirectPayDr work?",
        answer:
          "DirectPayDr works in three simple steps: 1) Search for the medical procedure you need and compare prices from providers in your area. 2) Purchase your procedure online at a pre-negotiated discounted rate. 3) Schedule your appointment with the provider and receive care by presenting your DirectPayDr voucher. No additional payment is needed at the time of service.",
      },
      {
        question: "Do I need insurance to use DirectPayDr?",
        answer:
          "No, DirectPayDr is designed for anyone to use, with or without insurance. Our cash-pay model often provides savings even for those with insurance, especially for those with high deductibles who would otherwise pay full price until meeting their deductible.",
      },
      {
        question: "How much can I save with DirectPayDr?",
        answer:
          "On average, patients save 50% compared to typical healthcare costs. Savings vary by procedure and location, but all prices are clearly displayed so you can see exactly how much you'll pay before purchasing.",
      },
      {
        question: "Is DirectPayDr available in my area?",
        answer:
          "DirectPayDr is available nationwide with over 9,600 healthcare providers across the United States. You can search for providers in your area by entering your zip code or city on our website.",
      },
    ],
  },
  pricing: {
    title: "Pricing & Payment",
    items: [
      {
        question: "Are there any hidden fees?",
        answer:
          "No, the price you see is the price you pay. All DirectPayDr prices are all-inclusive with no surprise bills or hidden fees. The price covers the complete procedure as described in the listing.",
      },
      {
        question: "Can I use my HSA or FSA to pay for procedures?",
        answer:
          "Yes, you can use your Health Savings Account (HSA) or Flexible Spending Account (FSA) to pay for procedures purchased through DirectPayDr. Most medical procedures on our platform are qualified medical expenses eligible for HSA/FSA payment.",
      },
      {
        question: "Do you offer payment plans?",
        answer:
          "Yes, we offer flexible payment options through our financing partners. During checkout, you can select the payment plan option to see available terms. This allows you to get the care you need now and pay over time.",
      },
      {
        question: "Why are DirectPayDr prices so much lower than typical costs?",
        answer:
          "DirectPayDr prices are lower for several reasons: 1) We negotiate directly with providers for cash-pay rates. 2) Providers save on administrative costs by receiving payment upfront without billing insurance. 3) We operate with efficiency and transparency, eliminating many of the costs that drive up traditional healthcare prices.",
      },
      {
        question: "Can I submit my DirectPayDr receipt to my insurance for reimbursement?",
        answer:
          "Yes, you can submit your receipt to your insurance company as an out-of-network expense. While we cannot guarantee reimbursement, many patients with high-deductible plans submit their receipts to count toward their deductible. We provide an itemized receipt that includes all the information typically required by insurance companies.",
      },
    ],
  },
  providers: {
    title: "Providers & Quality",
    items: [
      {
        question: "How do you select healthcare providers?",
        answer:
          "All providers in our network are fully licensed and credentialed in their state of practice. We verify their credentials, review quality metrics, and ensure they maintain appropriate malpractice insurance. Many are the same providers you would see through traditional insurance channels, but at a lower cash price.",
      },
      {
        question: "Can I choose which provider I want to see?",
        answer:
          "Yes, you have complete control over which provider you select. You can compare providers based on price, location, and available information about the facility and provider credentials.",
      },
      {
        question: "What types of providers are in your network?",
        answer:
          "Our network includes a wide range of healthcare providers including hospitals, imaging centers, laboratories, primary care providers, specialists, and more. We have over 9,600 providers nationwide covering various medical specialties and services.",
      },
      {
        question: "How do I know I'm getting quality care?",
        answer:
          "All providers in our network are fully licensed and credentialed. We regularly review quality metrics and patient satisfaction data. Additionally, we offer a satisfaction guarantee – if you're not satisfied with the care you receive, contact our customer service team for assistance.",
      },
      {
        question: "Can I see provider reviews or ratings?",
        answer:
          "Yes, where available, we display provider ratings and patient reviews to help you make an informed decision. We're continuously working to expand this feature across our platform.",
      },
    ],
  },
  procedures: {
    title: "Procedures & Services",
    items: [
      {
        question: "What types of procedures are available through DirectPayDr?",
        answer:
          "DirectPayDr offers a wide range of procedures including imaging (MRI, CT, X-ray), lab tests, preventive care, specialty consultations, and many outpatient procedures. You can search our marketplace by procedure name or browse by category to see what's available.",
      },
      {
        question: "Do you offer emergency care services?",
        answer:
          "DirectPayDr is not designed for emergency care. If you're experiencing a medical emergency, please call 911 or go to your nearest emergency room. Our services are best suited for planned, non-emergency medical care.",
      },
      {
        question: "What if I need additional services beyond what I purchased?",
        answer:
          "If your provider determines that you need additional services beyond what you purchased, they will discuss this with you. You can either purchase additional services through DirectPayDr or make payment arrangements directly with the provider.",
      },
      {
        question: "Are prescription medications included in the price?",
        answer:
          "In most cases, prescription medications are not included in the procedure price unless specifically stated in the procedure description. However, some bundled services may include certain medications as part of the treatment.",
      },
      {
        question: "Can I purchase procedures for someone else?",
        answer:
          "Yes, you can purchase procedures for family members or others. During checkout, you'll be asked to provide the patient information for the person who will be receiving the care.",
      },
    ],
  },
  appointments: {
    title: "Appointments & Scheduling",
    items: [
      {
        question: "How do I schedule my appointment after purchase?",
        answer:
          "After purchasing a procedure, you'll receive a confirmation email with your voucher and instructions. You'll contact the provider directly using the contact information provided to schedule your appointment. Let them know you're a DirectPayDr patient when scheduling.",
      },
      {
        question: "How soon can I schedule my appointment?",
        answer:
          "Appointment availability varies by provider and procedure. Many patients are able to schedule appointments within days of their purchase, while some specialized procedures may require longer wait times. You can contact the provider before purchase to inquire about their current scheduling availability.",
      },
      {
        question: "What should I bring to my appointment?",
        answer:
          "You should bring your DirectPayDr voucher (printed or digital), a valid photo ID, and any medical records or information relevant to your procedure. Your purchase confirmation email will include specific instructions for your procedure.",
      },
      {
        question: "Can I reschedule my appointment?",
        answer:
          "Yes, you can reschedule directly with the provider according to their rescheduling policy. Most providers require 24-48 hours notice for rescheduling. Your DirectPayDr voucher is typically valid for 6-12 months from the date of purchase, giving you flexibility in scheduling.",
      },
      {
        question: "What if I need to cancel my appointment?",
        answer:
          "If you need to cancel, please contact both the provider and DirectPayDr customer service. Our refund policy varies depending on how far in advance you cancel and whether the provider has already incurred costs in preparation for your procedure. Please refer to our refund policy for specific details.",
      },
    ],
  },
  insurance: {
    title: "Insurance & HSA/FSA",
    items: [
      {
        question: "Can I use DirectPayDr if I have insurance?",
        answer:
          "Yes, many patients with insurance choose DirectPayDr because our prices are often lower than their out-of-pocket costs with insurance, especially for those who haven't met their deductible. You can use DirectPayDr regardless of your insurance status.",
      },
      {
        question: "Will using DirectPayDr count toward my insurance deductible?",
        answer:
          "This depends on your insurance plan. Many patients submit their DirectPayDr receipts to their insurance company to apply toward their deductible as an out-of-network expense. We provide detailed receipts that include all the information typically required by insurance companies, but we recommend checking with your insurance provider about their specific policies.",
      },
      {
        question: "Can I use my HSA or FSA card to pay?",
        answer:
          "Yes, you can use your Health Savings Account (HSA) or Flexible Spending Account (FSA) card to pay for procedures on DirectPayDr. Most medical procedures on our platform are qualified medical expenses eligible for HSA/FSA payment.",
      },
      {
        question: "What if my insurance requires pre-authorization for a procedure?",
        answer:
          "When you purchase through DirectPayDr, you're paying directly for the service outside of your insurance network, so insurance pre-authorization is not required. This is one of the advantages of our service – eliminating the administrative burden and delays often associated with insurance pre-authorizations.",
      },
      {
        question: "How do I know if I should use DirectPayDr or my insurance?",
        answer:
          "This depends on your specific situation. DirectPayDr is often the better choice if: 1) You haven't met your deductible and would be paying out-of-pocket anyway. 2) You have a high co-insurance percentage. 3) You don't have insurance. 4) Your insurance doesn't cover the procedure you need. 5) You want to avoid the uncertainty of final costs with insurance billing. We recommend comparing our transparent prices with your estimated out-of-pocket costs through insurance.",
      },
    ],
  },
  refunds: {
    title: "Refunds & Guarantees",
    items: [
      {
        question: "What is your refund policy?",
        answer:
          "DirectPayDr offers a money-back guarantee if you don't receive the care you purchased. If you need to cancel before your appointment, refund eligibility depends on how far in advance you cancel and whether the provider has already incurred costs in preparation for your procedure. Please contact our customer service team for assistance with refunds.",
      },
      {
        question: "What if I'm not satisfied with the care I received?",
        answer:
          "Your satisfaction is important to us. If you're not satisfied with the care you received, please contact our customer service team within 14 days of your procedure. We'll work with you and the provider to address your concerns and find a resolution.",
      },
      {
        question: "How long does it take to process a refund?",
        answer:
          "Once a refund is approved, it typically takes 5-7 business days for the refund to be processed and appear on your original payment method. The exact timing may vary depending on your bank or credit card company.",
      },
      {
        question: "What if my procedure costs more than the quoted price?",
        answer:
          "The price you pay on DirectPayDr is the complete price for the procedure as described. If the provider determines during your visit that you need additional or different services, they should discuss this with you before proceeding. You would only pay extra if you consent to additional services not included in your original purchase.",
      },
      {
        question: "Do vouchers expire?",
        answer:
          "Yes, DirectPayDr vouchers typically expire 6-12 months from the date of purchase, depending on the procedure and provider. The expiration date is clearly stated on your voucher. If you need an extension due to special circumstances, please contact our customer service team.",
      },
    ],
  },
  account: {
    title: "Account & Privacy",
    items: [
      {
        question: "Do I need to create an account to use DirectPayDr?",
        answer:
          "While you can browse procedures without an account, you'll need to create an account to make a purchase. Creating an account allows you to track your purchases, access your vouchers, and manage your personal information.",
      },
      {
        question: "How is my personal and medical information protected?",
        answer:
          "DirectPayDr takes your privacy seriously. We use industry-standard encryption and security measures to protect your personal and payment information. We comply with all applicable privacy laws, including HIPAA for medical information. You can review our detailed Privacy Policy on our website.",
      },
      {
        question: "Can I purchase procedures for my family members?",
        answer:
          "Yes, you can purchase procedures for family members or others through your account. During checkout, you'll be asked to provide the patient information for the person who will be receiving the care.",
      },
      {
        question: "How do I update my account information?",
        answer:
          "You can update your account information by logging into your DirectPayDr account and navigating to the Account Settings section. There you can update your personal information, contact details, and payment methods.",
      },
      {
        question: "Can I see my purchase history?",
        answer:
          "Yes, you can view your complete purchase history by logging into your DirectPayDr account and navigating to the Purchase History section. This includes all current and past purchases, along with their status and voucher information.",
      },
    ],
  },
  support: {
    title: "Customer Support",
    items: [
      {
        question: "How do I contact customer support?",
        answer:
          "You can contact our customer support team by phone at (800) 555-1234, by email at support@directpaydr.com, or through the chat feature on our website. Our support team is available Monday through Friday from 8am to 8pm ET, and Saturday from 9am to 5pm ET.",
      },
      {
        question: "What if I have questions about a specific procedure?",
        answer:
          "If you have questions about a specific procedure, you can contact our customer support team who can provide general information. For detailed medical questions, we recommend contacting the provider directly using the contact information provided on the procedure listing.",
      },
      {
        question: "Can customer support help me find a specific provider?",
        answer:
          "Yes, our customer support team can help you find providers in your area that offer the procedure you're looking for. They can also help you understand price differences and provider options.",
      },
      {
        question: "What if I have a problem with my voucher?",
        answer:
          "If you're having issues with your voucher, please contact our customer support team immediately. They can help resolve issues such as vouchers not being received, problems with voucher redemption, or questions about voucher validity.",
      },
      {
        question: "Do you offer support in languages other than English?",
        answer:
          "Yes, we offer customer support in Spanish and several other languages. When contacting customer support, please let us know if you prefer to communicate in a language other than English, and we'll do our best to accommodate your preference.",
      },
    ],
  },
}
