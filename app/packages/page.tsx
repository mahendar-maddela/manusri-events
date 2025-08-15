"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Star,
  Sparkles,
  Users,
  Phone,
  MessageCircle,
  ArrowRight,
  Globe,
  MapPin,
  Zap,
  Crown,
  Gem,
  Award,
} from "lucide-react"
import { useState, useEffect } from "react"
import { PackagesHero } from "@/components/packages/packages-hero"
import { PackagesCTA } from "@/components/packages/packages-cta"
import { PackagesComparison } from "@/components/packages/packages-comparison"

export default function ServiceSolutionsPage() {
  const primaryPhone = "+91 9666286965"
  const whatsappUrl = `https://wa.me/919666286965?text=Hi%20Manusri%20Events%2C%20I%20want%20to%20discuss%20your%20premium%20entertainment%20solutions`

  const [currentRevision, setCurrentRevision] = useState(0)
  const revisions = [
    {
      title: "Concept Development",
      description: "Initial creative brainstorming and theme conceptualization",
      icon: Sparkles,
    },
    {
      title: "Script Refinement",
      description: "Perfecting dialogue, timing, and audience engagement elements",
      icon: Star,
    },
    {
      title: "Performance Enhancement",
      description: "Fine-tuning magical sequences and interactive segments",
      icon: Zap,
    },
    { title: "Technical Optimization", description: "Sound, lighting, and stage setup improvements", icon: Crown },
    {
      title: "Audience Customization",
      description: "Tailoring content for specific age groups and preferences",
      icon: Users,
    },
    { title: "Cultural Integration", description: "Incorporating local traditions and Telugu elements", icon: Gem },
    {
      title: "Interactive Elements",
      description: "Adding games, participation, and engagement activities",
      icon: Award,
    },
    { title: "Visual Enhancements", description: "Costume, prop, and presentation improvements", icon: Sparkles },
    { title: "Flow Optimization", description: "Seamless transitions and pacing adjustments", icon: ArrowRight },
    { title: "Final Perfection", description: "Last-minute polish and quality assurance", icon: Star },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRevision((prev) => (prev + 1) % revisions.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const serviceSolutions = [
    {
      category: "Birthday Celebrations",
      description: "Magical birthday experiences that create lifelong memories",
      gradient: "from-pink-500 via-purple-500 to-indigo-600",
      solutions: [
        {
          name: "Enchanted Birthday",
          subtitle: "Perfect for intimate celebrations",
          audience: "10-50 guests",
          popular: false,
          features: [
            "Personalized Magic Show Performance",
            "Interactive Game Sessions with Prizes",
            "Professional Balloon Art & Modeling",
            "Premium Sound System Setup",
            "Birthday Song Performance in Telugu & English",
            "Memorable Photo Opportunities",
            "Surprise Elements for Birthday Child",
            "Professional Event Coordination",
          ],
          premium: ["Custom Magic Tricks", "Personalized Props", "Special Birthday Surprise"],
        },
        {
          name: "Grand Birthday Spectacular",
          subtitle: "The ultimate birthday celebration",
          audience: "50-150 guests",
          popular: true,
          features: [
            "Extended Grand Magic Show Experience",
            "Complete Game Show with Professional Hosting",
            "Talking Doll & Puppet Show Performance",
            "Advanced Balloon Workshop for Kids",
            "Temporary Tattoo Art Station",
            "Track Singing in Multiple Languages",
            "Premium Prize Distribution",
            "Professional Photography Coverage",
            "Event Management & Coordination",
          ],
          premium: ["Live Orchestra Performance", "Celebrity Guest Appearance", "Custom Decoration Themes"],
        },
      ],
    },
    {
      category: "Wedding Celebrations",
      description: "Traditional and contemporary wedding entertainment solutions",
      gradient: "from-rose-400 via-pink-500 to-red-500",
      solutions: [
        {
          name: "Wedding Elegance",
          subtitle: "Sophisticated wedding entertainment",
          audience: "100-400 guests",
          popular: false,
          features: [
            "Bilingual Professional Anchoring",
            "Family-Friendly Magic Show",
            "Traditional & Modern Game Sessions",
            "Track Singing in Telugu, Hindi & English",
            "Professional Sound & Microphone Setup",
            "Crowd Management & Flow Control",
            "Cultural Integration & Customs",
            "Guest Interaction & Engagement",
          ],
          premium: ["Live Traditional Orchestra", "Comedy Show by Cinema Artists", "Extended Coverage"],
        },
        {
          name: "Royal Wedding Experience",
          subtitle: "Premium wedding entertainment solution",
          audience: "400-1000 guests",
          popular: true,
          features: [
            "Master of Ceremonies for Complete Event",
            "Grand Stage Magic Show Performance",
            "Interactive Entertainment for All Ages",
            "Live Orchestra with Traditional Instruments",
            "Multi-Language Track Singing",
            "Professional Comedy Show",
            "Advanced Sound & Lighting Systems",
            "Complete Event Management",
            "Photography & Videography Coordination",
          ],
          premium: ["Celebrity Performers", "Special Effects & Pyrotechnics", "Custom Branding Integration"],
        },
      ],
    },
    {
      category: "Corporate Events",
      description: "Professional entertainment solutions for business gatherings",
      gradient: "from-blue-500 via-indigo-500 to-purple-600",
      solutions: [
        {
          name: "Corporate Excellence",
          subtitle: "Professional team engagement",
          audience: "50-200 professionals",
          popular: false,
          features: [
            "Team Building Magic & Games",
            "Professional Presentation Skills",
            "Award Ceremony Hosting",
            "Corporate-Appropriate Entertainment",
            "Professional Sound System",
            "Custom Branding Integration",
            "Employee Engagement Activities",
            "Networking Facilitation",
          ],
          premium: ["Executive Magic Show", "Custom Corporate Games", "Professional Photography"],
        },
        {
          name: "Corporate Gala Premium",
          subtitle: "Elite corporate entertainment",
          audience: "200-800 professionals",
          popular: true,
          features: [
            "Complete Corporate Event Management",
            "Executive-Level Magic Performance",
            "Professional Comedy Entertainment",
            "Advanced AV & Technical Setup",
            "Custom Branding Throughout Event",
            "VIP Guest Management",
            "Professional Photography & Coverage",
            "Post-Event Content Creation",
            "Networking & Engagement Facilitation",
          ],
          premium: ["Celebrity Guest Speakers", "Live Band Performance", "Luxury Experience Add-ons"],
        },
      ],
    },
    {
      category: "Educational Institutions",
      description: "Inspiring and educational entertainment for schools and colleges",
      gradient: "from-green-500 via-teal-500 to-blue-500",
      solutions: [
        {
          name: "School Magic Experience",
          subtitle: "Educational entertainment for students",
          audience: "200-1000 students",
          popular: false,
          features: [
            "Educational Magic Show with Learning",
            "Interactive Science & Math Integration",
            "Motivational Content for Students",
            "Student Participation & Engagement",
            "Professional Sound System",
            "Achievement Certificates",
            "Teacher Coordination & Support",
            "Age-Appropriate Content",
          ],
          premium: ["Workshop Sessions", "Extended Learning Modules", "Custom Educational Content"],
        },
        {
          name: "College Fest Spectacular",
          subtitle: "Grand entertainment for college events",
          audience: "500-3000 students",
          popular: true,
          features: [
            "Grand Stage Magic Show",
            "College-Level Interactive Games",
            "Professional Comedy Performance",
            "Student Talent Integration",
            "Advanced Sound & Lighting",
            "Social Media Content Creation",
            "Prize Distribution Ceremony",
            "Complete Event Photography",
            "Crowd Management & Safety",
          ],
          premium: ["Celebrity Guest Appearances", "Live Band Performances", "Special Effects Show"],
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* <Header /> */}
<PackagesHero />

      {/* <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <Badge className="bg-white/20 text-white border-white/30 text-sm px-4 py-2">
                Premium Entertainment Solutions
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold font-serif text-white leading-tight">
                Magical Entertainment
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                  Solutions
                </span>
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Professional entertainment experiences crafted with precision, creativity, and cultural authenticity
              </p>
              <p className="text-lg text-yellow-300 font-medium">మీ ప్రత్యేక కార్యక్రమాలకు అద్భుతమైన వినోదం</p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 pt-8">
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-6 py-3">
                <MapPin className="h-5 w-5 text-yellow-400" />
                <span className="text-white font-medium">Hyderabd & Surrounding Districts</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-6 py-3">
                <Globe className="h-5 w-5 text-yellow-400" />
                <span className="text-white font-medium">All India Service Available</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-semibold px-8 py-4 text-lg"
                asChild
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Discuss Your Vision
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-4 text-lg"
                asChild
              >
                <a href={`tel:${primaryPhone}`} className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Instant Consultation
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-4xl font-bold font-serif text-gray-900">10-Stage Perfection Process</h2>
              <p className="text-xl text-gray-600">Every performance undergoes our comprehensive refinement process</p>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 rounded-full p-3">
                      {(() => {
                        const IconComponent = revisions[currentRevision].icon
                        return <IconComponent className="h-8 w-8" />
                      })()}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{revisions[currentRevision].title}</h3>
                      <p className="text-white/90">{revisions[currentRevision].description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold">{String(currentRevision + 1).padStart(2, "0")}</div>
                    <div className="text-white/70">of 10</div>
                  </div>
                </div>

                <div className="flex gap-2">
                  {revisions.map((_, index) => (
                    <div
                      key={index}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentRevision ? "bg-white flex-1" : "bg-white/30 w-8"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     
      {serviceSolutions.map((category, categoryIndex) => (
        <section key={category.category} className={`py-20 ${categoryIndex % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center space-y-6 mb-16">
                <div className={`inline-block bg-gradient-to-r ${category.gradient} text-transparent bg-clip-text`}>
                  <h2 className="text-4xl font-bold font-serif">{category.category}</h2>
                </div>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {category.solutions.map((solution) => (
                  <Card
                    key={solution.name}
                    className={`relative overflow-hidden border-0 shadow-2xl ${solution.popular ? "ring-2 ring-yellow-400" : ""}`}
                  >
                    {solution.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                        <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold flex items-center gap-1 px-4 py-2">
                          <Zap className="h-4 w-4" />
                          Most Preferred
                        </Badge>
                      </div>
                    )}

                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-5`}></div>

                    <CardHeader className="relative text-center pb-6">
                      <CardTitle className="text-3xl font-bold text-gray-900">{solution.name}</CardTitle>
                      <p className="text-lg text-gray-600 font-medium">{solution.subtitle}</p>
                      <div className="flex items-center justify-center gap-2 mt-4">
                        <Users className="h-5 w-5 text-gray-500" />
                        <span className="text-gray-700 font-medium">{solution.audience}</span>
                      </div>
                    </CardHeader>

                    <CardContent className="relative space-y-8">
                      <div>
                        <h4 className="font-bold text-lg mb-4 text-gray-900">Core Experience Includes:</h4>
                        <div className="grid grid-cols-1 gap-3">
                          {solution.features.map((feature) => (
                            <div key={feature} className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className={`bg-gradient-to-r ${category.gradient} p-6 rounded-xl text-white`}>
                        <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                          <Gem className="h-5 w-5" />
                          Premium Enhancements Available:
                        </h4>
                        <div className="space-y-2">
                          {solution.premium.map((premium) => (
                            <div key={premium} className="flex items-center gap-2">
                              <Star className="h-4 w-4 text-yellow-300" />
                              <span className="text-white/90">{premium}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3 pt-4">
                        <Button
                          className={`w-full bg-gradient-to-r ${category.gradient} hover:opacity-90 text-white font-semibold py-3`}
                          asChild
                        >
                          <a
                            href={`${whatsappUrl}%20-%20${solution.name}%20Solution`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2"
                          >
                            <MessageCircle className="h-5 w-5" />
                            Explore {solution.name}
                          </a>
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full border-2 hover:bg-gray-50 py-3 bg-transparent"
                          asChild
                        >
                          <a href={`tel:${primaryPhone}`} className="flex items-center justify-center gap-2">
                            <Phone className="h-5 w-5" />
                            Discuss Requirements
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
 <PackagesCTA />
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold font-serif text-white">Bespoke Entertainment Solutions</h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Every celebration is unique. We craft personalized entertainment experiences that reflect your vision,
                culture, and audience preferences with meticulous attention to detail.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full p-4 w-16 h-16 mx-auto mb-6">
                  <Sparkles className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Creative Customization</h3>
                <p className="text-white/80">
                  Tailored performances that align perfectly with your event theme, audience, and cultural preferences
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-full p-4 w-16 h-16 mx-auto mb-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Premium Quality</h3>
                <p className="text-white/80">
                  Professional-grade equipment, experienced performers, and seamless execution for memorable experiences
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="bg-gradient-to-br from-green-400 to-teal-500 rounded-full p-4 w-16 h-16 mx-auto mb-6">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Pan-India Service</h3>
                <p className="text-white/80">
                  From Nalgonda to major cities across India, we bring our magical entertainment wherever you need it
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold px-10 py-4 text-lg"
                asChild
              >
                <a
                  href={`${whatsappUrl}%20-%20Custom%20Entertainment%20Solution`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-6 w-6" />
                  Create Your Experience
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-10 py-4 text-lg"
                asChild
              >
                <a href={`tel:${primaryPhone}`} className="flex items-center gap-2">
                  <Phone className="h-6 w-6" />
                  Expert Consultation
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  )
}
