import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, MessageCircle, Award, Users, Calendar, Star, CheckCircle } from "lucide-react"

import { WhyChooseUs } from "@/components/sections/why-choose-us"

export default function AboutPage() {
  const primaryPhone = "+91 9666286965"
  const whatsappUrl = `https://wa.me/919666286965?text=Hi%20Manusri%20Events%2C%20I%20want%20to%20know%20more%20about%20your%20services`

  const achievements = [
    { icon: Calendar, number: "10+", label: "Years of Experience" },
    { icon: Users, number: "1000+", label: "Happy Clients" },
    { icon: Star, number: "500+", label: "Successful Events" },
    { icon: Award, number: "15+", label: "Services Offered" },
  ]

  const values = [
    {
      title: "Punctuality",
      description: "We arrive on time, every time, ensuring your event starts smoothly without delays.",
      icon: CheckCircle,
    },
    {
      title: "Safety First",
      description: "All our props and equipment are kid-safe and regularly maintained for maximum safety.",
      icon: CheckCircle,
    },
    {
      title: "Crowd Engagement",
      description: "Our performances are designed to involve and entertain audiences of all ages and backgrounds.",
      icon: CheckCircle,
    },
    {
      title: "Multilingual",
      description: "We perform in Telugu, Hindi, and English to connect with diverse audiences.",
      icon: CheckCircle,
    },
    {
      title: "Custom Packages",
      description: "Every event is unique, and we create tailored packages to match your specific needs.",
      icon: CheckCircle,
    },
    {
      title: "Professional Team",
      description: "Our experienced team ensures high-quality entertainment and seamless event execution.",
      icon: CheckCircle,
    },
  ]

  const serviceAreas = [
    "Hyderabad",
    "Nalgonda",
    "Warangal",
    "Karimnagar",
    "Nizamabad",
    "Khammam",
    "Vijayawada",
    "Guntur",
    "Visakhapatnam",
    "Tirupati",
    "Kurnool",
    "Nellore",
    "Kerala",
    "Karnataka",
    "India"
  ]

  return (
    <div className="min-h-screen">
        <WhyChooseUs />
      {/* <Header /> */}
      {/* Achievements Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold font-serif text-primary">Our Journey in Numbers</h2>
              <p className="text-lg text-muted-foreground">A decade of magical moments and happy celebrations</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {achievements.map((achievement) => (
                <Card key={achievement.label} className="text-center">
                  <CardHeader className="pb-2">
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                      <achievement.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-3xl font-bold text-primary">{achievement.number}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="font-medium">{achievement.label}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Service Areas Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-4 mb-12">
              <h2 className="text-3xl font-bold font-serif text-primary">Service Areas</h2>
              <p className="text-lg text-muted-foreground">
                We bring magical entertainment across Telangana and Andhra Pradesh
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {serviceAreas.map((area) => (
                <div key={area} className="bg-background rounded-lg p-4 text-center">
                  <span className="font-medium">{area}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-primary/5 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Note:</strong> We also serve surrounding areas and can travel for special events. Contact us to
                discuss your location and requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary">Our Mission</h2>

            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                At Manusri Events, our mission is simple: to create magical moments that bring people together and
                create lasting memories. We believe that every celebration deserves to be special, and every audience
                deserves to experience the wonder of live entertainment.
              </p>

              <p>
                We are committed to providing safe, family-friendly entertainment that transcends age, language, and
                cultural barriers. Our goal is to be the most trusted name in event entertainment across Telangana and
                Andhra Pradesh.
              </p>
            </div>

            <div className="bg-magical-gradient-light p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Promise</h3>
              <p className="text-muted-foreground italic">
                "Every event is a new opportunity to create magic. We promise to bring our best performance,
                professional service, and genuine care to make your celebration truly unforgettable."
              </p>
              <p className="text-primary font-semibold mt-4">- A. Ramesh, Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-magical-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold font-serif">Ready to Create Magic Together?</h2>
            <p className="text-lg opacity-90">
              Let's discuss how we can make your next event truly magical and memorable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" variant="secondary" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Start Planning
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <a href={`tel:${primaryPhone}`} className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call Now
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
