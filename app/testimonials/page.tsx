import { ArrowRight, ChevronDown, Heart, MessageCircle, Play, Quote, Search, Star, ThumbsUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 bg-gradient-to-r from-blue-50 to-blue-100 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-blue-200"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-blue-100 text-blue-700 mb-4">Real Patient Stories</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Lives Changed Through Affordable Healthcare
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover how DirectPayDr has helped thousands of patients access quality care, form meaningful connections
              with healthcare providers, and transform their lives.
            </p>
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search stories by procedure, condition, or location..."
                className="pl-10 py-6 text-base"
              />
            </div>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="container mx-auto px-4 relative">
          <div className="absolute left-0 right-0 -bottom-16 z-10">
            <div className="bg-white rounded-xl shadow-xl p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="flex items-center justify-center mb-2">
                    <Star className="h-6 w-6 fill-amber-400 text-amber-400" />
                    <Star className="h-6 w-6 fill-amber-400 text-amber-400" />
                    <Star className="h-6 w-6 fill-amber-400 text-amber-400" />
                    <Star className="h-6 w-6 fill-amber-400 text-amber-400" />
                    <Star className="h-6 w-6 fill-amber-400 text-amber-400" />
                  </div>
                  <p className="text-2xl font-bold text-blue-700">4.9/5</p>
                  <p className="text-gray-600">Average Rating</p>
                </div>
                <div>
                  <div className="flex items-center justify-center mb-2">
                    <MessageCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <p className="text-2xl font-bold text-blue-700">5,280+</p>
                  <p className="text-gray-600">Patient Stories</p>
                </div>
                <div>
                  <div className="flex items-center justify-center mb-2">
                    <Heart className="h-6 w-6 text-red-500" />
                  </div>
                  <p className="text-2xl font-bold text-blue-700">98%</p>
                  <p className="text-gray-600">Would Recommend</p>
                </div>
                <div>
                  <div className="flex items-center justify-center mb-2">
                    <ThumbsUp className="h-6 w-6 text-green-600" />
                  </div>
                  <p className="text-2xl font-bold text-blue-700">9,600+</p>
                  <p className="text-gray-600">Trusted Providers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Patient Stories</h2>
              <p className="text-xl text-gray-600">
                Real stories from patients whose lives were changed by affordable, quality healthcare
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Featured Story 1 */}
              <div className="bg-blue-50 rounded-xl p-8 relative">
                <Quote className="absolute top-6 left-6 h-12 w-12 text-blue-200" />
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                      <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                      <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                      <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                      <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                    </div>
                    <Badge className="ml-3 bg-blue-100 text-blue-700">Life-Changing</Badge>
                  </div>
                  <p className="text-xl font-medium text-gray-800 mb-6">
                    "After years of putting off my knee surgery due to cost, DirectPayDr made it possible. Not only did
                    I save over $8,000, but Dr. Martinez was the most compassionate surgeon I've ever met. He called me
                    personally the night before surgery to ease my fears. I'm now pain-free and back to hiking with my
                    grandkids!"
                  </p>
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 border-2 border-white">
                      <AvatarFallback>RW</AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                      <p className="font-semibold">Robert Wilson, 67</p>
                      <p className="text-sm text-gray-500">Knee Replacement Surgery • Denver, CO</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Featured Story 2 */}
              <div className="bg-blue-50 rounded-xl p-8 relative">
                <Quote className="absolute top-6 left-6 h-12 w-12 text-blue-200" />
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                      <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                      <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                      <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                      <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                    </div>
                    <Badge className="ml-3 bg-blue-100 text-blue-700">Early Detection</Badge>
                  </div>
                  <p className="text-xl font-medium text-gray-800 mb-6">
                    "As a single mom without insurance, I'd been avoiding getting my mammogram. DirectPayDr made it
                    affordable, and it saved my life. They detected my breast cancer early, and Dr. Patel became my rock
                    through treatment. She even connected me with a support group of other survivors. I'm now
                    cancer-free and forever grateful."
                  </p>
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 border-2 border-white">
                      <AvatarFallback>SJ</AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                      <p className="font-semibold">Sarah Johnson, 42</p>
                      <p className="text-sm text-gray-500">Mammogram & Cancer Treatment • Atlanta, GA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Testimonial */}
            <div className="mb-16">
              <div className="relative rounded-xl overflow-hidden">
                <div className="aspect-video relative bg-blue-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <h3 className="text-2xl font-bold text-blue-800 mb-2">
                        "How DirectPayDr Helped Me Access Life-Saving Heart Surgery"
                      </h3>
                      <p className="text-blue-600">Michael's journey from heart failure to recovery with Dr. Ramirez</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white bg-opacity-90 rounded-full p-4">
                      <Play className="h-12 w-12 text-blue-600" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                  <Badge className="bg-blue-100 text-blue-700 mb-2">Featured Video</Badge>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    "How DirectPayDr Helped Me Access Life-Saving Heart Surgery"
                  </h3>
                  <p className="text-white text-opacity-90">
                    Michael's journey from heart failure to recovery with Dr. Ramirez
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials By Category */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Stories By Category</h2>
              <p className="text-xl text-gray-600">Explore patient experiences across different types of care</p>
            </div>

            <Tabs defaultValue="imaging" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-12">
                <TabsTrigger value="imaging">Imaging</TabsTrigger>
                <TabsTrigger value="surgery">Surgery</TabsTrigger>
                <TabsTrigger value="preventive">Preventive Care</TabsTrigger>
                <TabsTrigger value="specialty">Specialty Care</TabsTrigger>
                <TabsTrigger value="labs">Lab Tests</TabsTrigger>
              </TabsList>

              <TabsContent value="imaging" className="mt-0">
                <div className="grid md:grid-cols-3 gap-6">
                  {imagingTestimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} testimonial={testimonial} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="surgery" className="mt-0">
                <div className="grid md:grid-cols-3 gap-6">
                  {surgeryTestimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} testimonial={testimonial} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="preventive" className="mt-0">
                <div className="grid md:grid-cols-3 gap-6">
                  {preventiveTestimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} testimonial={testimonial} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="specialty" className="mt-0">
                <div className="grid md:grid-cols-3 gap-6">
                  {specialtyTestimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} testimonial={testimonial} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="labs" className="mt-0">
                <div className="grid md:grid-cols-3 gap-6">
                  {labsTestimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} testimonial={testimonial} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Provider Relationships */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Exceptional Provider Relationships</h2>
              <p className="text-xl text-gray-600">
                Stories of the meaningful connections formed between patients and healthcare providers
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 relative bg-blue-100 flex items-center justify-center p-4">
                    <div className="text-blue-800 font-bold text-center">Dr. Martinez & Patient</div>
                  </div>
                  <div className="p-8 md:w-2/3">
                    <Badge className="mb-2 bg-green-100 text-green-800">Provider Connection</Badge>
                    <h3 className="text-xl font-bold mb-4">
                      "Dr. Martinez Didn't Just Fix My Knee, He Changed My Outlook on Life"
                    </h3>
                    <p className="text-gray-600 mb-6">
                      "When I met Dr. Martinez, I was in constant pain and had lost hope. Not only did he perform a
                      perfect knee replacement, but he spent time understanding my goals and fears. He's called me
                      personally to check in multiple times since surgery. I've never experienced such personalized care
                      from a surgeon before."
                    </p>
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback>JW</AvatarFallback>
                      </Avatar>
                      <div className="ml-4">
                        <p className="font-semibold">James Wilson</p>
                        <p className="text-sm text-gray-500">Orthopedic Patient</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 relative bg-blue-100 flex items-center justify-center p-4">
                    <div className="text-blue-800 font-bold text-center">Dr. Patel & Patient</div>
                  </div>
                  <div className="p-8 md:w-2/3">
                    <Badge className="mb-2 bg-green-100 text-green-800">Provider Connection</Badge>
                    <h3 className="text-xl font-bold mb-4">
                      "Dr. Patel Became My Guardian Angel Through Cancer Treatment"
                    </h3>
                    <p className="text-gray-600 mb-6">
                      "When my mammogram detected early-stage breast cancer, I was terrified. Dr. Patel didn't just
                      treat my cancer – she held my hand through every step. She gave me her personal cell number,
                      connected me with support groups, and even attended my final chemo session to celebrate with me.
                      She's more than my doctor; she's family now."
                    </p>
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback>MR</AvatarFallback>
                      </Avatar>
                      <div className="ml-4">
                        <p className="font-semibold">Maria Rodriguez</p>
                        <p className="text-sm text-gray-500">Breast Cancer Survivor</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Share Your Story */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Share Your DirectPayDr Story</h2>
            <p className="text-xl mb-8">
              Has DirectPayDr made a difference in your life? We'd love to hear about your experience and the
              connections you've made with healthcare providers.
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              Share Your Story
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted By Thousands</h2>
              <p className="text-xl text-gray-600">DirectPayDr is rated excellent by patients across the country</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="flex justify-center mb-4 h-8">
                  <div className="text-green-600 font-bold">Trustpilot</div>
                </div>
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-5 w-5 fill-green-500 text-green-500" />
                  <Star className="h-5 w-5 fill-green-500 text-green-500" />
                  <Star className="h-5 w-5 fill-green-500 text-green-500" />
                  <Star className="h-5 w-5 fill-green-500 text-green-500" />
                  <Star className="h-5 w-5 fill-green-500 text-green-500" />
                </div>
                <p className="font-bold">4.8/5</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="flex justify-center mb-4 h-8">
                  <div className="text-blue-600 font-bold">Google Reviews</div>
                </div>
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                  <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                  <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                  <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                  <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                </div>
                <p className="font-bold">4.9/5</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="flex justify-center mb-4 h-8">
                  <div className="text-blue-800 font-bold">Better Business Bureau</div>
                </div>
                <div className="flex items-center justify-center mb-2">
                  <p className="text-xl font-bold text-blue-800">A+</p>
                </div>
                <p className="font-bold">Accredited</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="flex justify-center mb-4 h-8">
                  <div className="text-blue-600 font-bold">Healthgrades</div>
                </div>
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                  <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                  <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                  <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                  <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                </div>
                <p className="font-bold">4.7/5</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Quality Care You Can Afford?</h2>
            <p className="text-xl mb-8">
              Join thousands of patients who have found affordable healthcare and formed meaningful connections with
              providers through DirectPayDr.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
                Find Care Now
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

// Replace the TestimonialCard component with this simplified version that doesn't use images
function TestimonialCard({ testimonial }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          {testimonial.tag && <Badge className="ml-2 bg-blue-100 text-blue-700 text-xs">{testimonial.tag}</Badge>}
        </div>
        <p className="text-gray-600 mb-6">"{testimonial.quote}"</p>
        <div className="flex items-center">
          <Avatar className="h-10 w-10">
            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="ml-3">
            <p className="font-semibold">{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.procedure}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Sample Testimonial Data
const imagingTestimonials = [
  {
    name: "Jennifer Adams",
    procedure: "MRI Scan",
    quote:
      "I was amazed by how easy it was to schedule my MRI. The radiologist, Dr. Chen, took extra time to explain my results in detail. He even called me personally when he noticed something that needed follow-up. That level of care is priceless.",
    tag: "Exceptional Care",
  },
  {
    name: "David Thompson",
    procedure: "CT Scan",
    quote:
      "The imaging center staff made me feel so comfortable during my CT scan. They knew I was nervous and went above and beyond to ease my anxiety. The technician, Lisa, held my hand and talked me through the whole process.",
    tag: "Compassionate",
  },
  {
    name: "Michelle Garcia",
    procedure: "Ultrasound",
    quote:
      "As a first-time mom, my prenatal ultrasound was a special moment. The sonographer took extra time to point out all the baby's features and even gave us additional pictures to take home. It was such a personal experience despite the significant savings.",
    tag: "Life Moment",
  },
]

const surgeryTestimonials = [
  {
    name: "Thomas Wilson",
    procedure: "Hernia Repair",
    quote:
      "Dr. Patel didn't just fix my hernia; he took the time to understand my concerns about recovery time since I'm self-employed. He designed a custom recovery plan that got me back to work faster. I saved $4,500 and gained a doctor who truly cared about my livelihood.",
    tag: "Life-Changing",
  },
  {
    name: "Lisa Johnson",
    procedure: "Cataract Surgery",
    quote:
      "After years of declining vision, I can finally see clearly again. Dr. Rivera was so gentle and patient with me. She called me the evening after surgery just to check on me. I've never had a surgeon who was so personally invested in my outcome.",
    tag: "Vision Restored",
  },
  {
    name: "Carlos Mendez",
    procedure: "Knee Arthroscopy",
    quote:
      "As a former athlete, my knee issues were affecting my quality of life. Dr. Johnson not only performed a perfect surgery but connected me with a physical therapist who understood athletes. Six months later, I completed my first 5K in years. I'm forever grateful.",
    tag: "Back in Action",
  },
]

const preventiveTestimonials = [
  {
    name: "Eleanor Smith",
    procedure: "Annual Physical",
    quote:
      "Dr. Williams spent over an hour with me during my physical, discussing not just my health but my life goals and stressors. She created a holistic wellness plan that addressed everything from nutrition to sleep. I've never felt so seen by a healthcare provider.",
    tag: "Whole Person Care",
  },
  {
    name: "Marcus Johnson",
    procedure: "Colonoscopy",
    quote:
      "I'd been putting off my colonoscopy for years due to cost. Dr. Gupta not only made the procedure comfortable but found and removed precancerous polyps. He likely saved my life, and I paid less than my insurance deductible would have been.",
    tag: "Early Detection",
  },
  {
    name: "Patricia Lee",
    procedure: "Mammogram",
    quote:
      "The mammography technician, Sarah, was so compassionate and gentle. When they found a suspicious area, the radiologist came in immediately to speak with me. She explained everything clearly and arranged follow-up testing that same week. It turned out to be benign, but their quick action and personal attention made a scary situation much easier to handle.",
    tag: "Peace of Mind",
  },
]

const specialtyTestimonials = [
  {
    name: "Gregory Williams",
    procedure: "Cardiology Consultation",
    quote:
      "After my heart attack scare, I needed to see a cardiologist but couldn't afford it. Through DirectPayDr, I met Dr. Sharma who not only provided excellent care but gave me his personal email for questions. He's checked in on me multiple times and truly cares about my recovery.",
    tag: "Ongoing Support",
  },
  {
    name: "Sophia Martinez",
    procedure: "Dermatology Treatment",
    quote:
      "I've struggled with severe psoriasis for years. Dr. Klein spent over an hour with me on my first visit, really listening to how it affected my life. She created a personalized treatment plan that has given me 90% clearance - the best results I've ever had. She changed my life.",
    tag: "Life-Changing",
  },
  {
    name: "Kevin Park",
    procedure: "Neurology Evaluation",
    quote:
      "After suffering from migraines for years, I finally found Dr. Patel through DirectPayDr. She didn't just prescribe medication; she worked with me to identify triggers and develop a comprehensive management plan. For the first time in a decade, I've gone three months without a severe migraine.",
    tag: "Pain Relief",
  },
]

const labsTestimonials = [
  {
    name: "Rachel Cohen",
    procedure: "Comprehensive Blood Panel",
    quote:
      "The lab technician, Mark, noticed I was anxious about blood draws and took extra time to make me comfortable. He used a smaller needle and distraction techniques that made it painless. The lab director even called me personally when my vitamin levels came back low to discuss supplements.",
    tag: "Personal Touch",
  },
  {
    name: "Daniel Washington",
    procedure: "Allergy Testing",
    quote:
      "After years of unexplained symptoms, my allergy testing through DirectPayDr identified several triggers I never suspected. The allergist, Dr. Nguyen, created a detailed management plan and has followed up with me multiple times. I'm finally living without constant discomfort.",
    tag: "Mystery Solved",
  },
  {
    name: "Olivia Bennett",
    procedure: "Genetic Testing",
    quote:
      "When I decided to get genetic testing due to my family history of breast cancer, I was nervous about both the results and the cost. The genetic counselor, Jessica, spent hours explaining my results and options. She's remained available for questions and has been an incredible support.",
    tag: "Ongoing Support",
  },
]
