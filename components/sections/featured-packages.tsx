import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Crown, Briefcase, GraduationCap } from "lucide-react"

const packages = [
  {
    id: "birthday-basic",
    title: "Birthday Basic",
    subtitle: "Perfect for intimate celebrations",
    icon: Star,
    duration: "2 hours",
    audience: "Up to 30 guests",
    price: "₹ on request",
    popular: false,
    features: ["45-minute magic show", "Game activities", "Balloon twisting", "Basic sound system"],
  },
  {
    id: "birthday-pro",
    title: "Birthday Pro",
    subtitle: "Complete birthday entertainment",
    icon: Crown,
    duration: "3 hours",
    audience: "Up to 60 guests",
    price: "₹ on request",
    popular: true,
    features: [
      "60-minute magic show",
      "Talking doll performance",
      "Game show with prizes",
      "Tattoo booth",
      "Professional anchoring",
      "Premium sound system",
    ],
  },
  {
    id: "wedding-entertainment",
    title: "Wedding Entertainment",
    subtitle: "Magical moments for your special day",
    icon: Crown,
    duration: "4-6 hours",
    audience: "100+ guests",
    price: "₹ on request",
    popular: true,
    features: [
      "Grand magic show",
      "Orchestra/Track singing",
      "Professional anchoring",
      "Comedy acts by cine artists",
      "Interactive games",
      "Full sound & lighting setup",
    ],
  },
  {
    id: "college-fest",
    title: "College Fest",
    subtitle: "High-energy campus entertainment",
    icon: GraduationCap,
    duration: "3-4 hours",
    audience: "200+ students",
    price: "₹ on request",
    popular: false,
    features: [
      "Interactive magic show",
      "Game competitions",
      "Comedy performances",
      "Student participation activities",
      "Professional sound system",
    ],
  },
  {
    id: "corporate-fun-day",
    title: "Corporate Fun Day",
    subtitle: "Team building through entertainment",
    icon: Briefcase,
    duration: "4 hours",
    audience: "50-150 employees",
    price: "₹ on request",
    popular: false,
    features: [
      "Corporate-friendly magic show",
      "Team building games",
      "Professional anchoring",
      "Award ceremony support",
      "Premium AV setup",
    ],
  },
]

export function FeaturedPackages() {
  const whatsappUrl = `https://wa.me/919666286965?text=Hi%20Manusri%20Events%2C%20I%20want%20to%20know%20about%20your%20packages`

  return (
    <section className="py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Featured Packages</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready-to-book entertainment packages designed for different occasions and budgets
          </p>
          <p className="text-base font-medium text-accent" lang="te">
            ప్రత్యేక ప్యాకేజీలు
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => {
            const IconComponent = pkg.icon
            return (
              <Card
                key={pkg.id}
                className={`relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${pkg.popular ? "ring-2 ring-primary/20" : ""}`}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-magical-gradient text-white px-4 py-1">
                    Most Popular
                  </Badge>
                )}

                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-magical-gradient group-hover:text-white transition-all duration-300">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-heading">{pkg.title}</CardTitle>
                  <CardDescription className="text-sm">{pkg.subtitle}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Duration: {pkg.duration}</span>
                    <span>{pkg.audience}</span>
                  </div>

                  <div className="space-y-2">
                    {pkg.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t">
                    <div className="text-center mb-4">
                      <span className="text-2xl font-bold text-primary">{pkg.price}</span>
                    </div>
                    <Button
                      className={`w-full ${pkg.popular ? "bg-magical-gradient hover:opacity-90" : ""}`}
                      variant={pkg.popular ? "default" : "outline"}
                      asChild
                    >
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        Get Quote
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent" asChild>
            <a href="/packages">View All Packages</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
