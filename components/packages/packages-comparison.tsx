import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, X, Crown, Briefcase, GraduationCap, Cake } from "lucide-react"

const packages = [
  {
    id: "birthday-basic",
    title: "Birthday Basic",
    subtitle: "Perfect for intimate celebrations",
    icon: Cake,
    duration: "2 hours",
    audience: "Up to 30 guests",
    price: "₹8,000 - ₹12,000",
    popular: false,
    features: {
      "Magic Show (45 min)": true,
      "Game Activities": true,
      "Balloon Twisting": true,
      "Basic Sound System": true,
      "Talking Doll Performance": false,
      "Tattoo Booth": false,
      "Professional Anchoring": false,
      "Premium Sound & Lighting": false,
      Photography: false,
      "Return Gifts Arrangement": false,
    },
  },
  {
    id: "birthday-pro",
    title: "Birthday Pro",
    subtitle: "Complete birthday entertainment",
    icon: Crown,
    duration: "3 hours",
    audience: "Up to 60 guests",
    price: "₹15,000 - ₹25,000",
    popular: true,
    features: {
      "Magic Show (60 min)": true,
      "Game Activities": true,
      "Balloon Twisting": true,
      "Basic Sound System": true,
      "Talking Doll Performance": true,
      "Tattoo Booth": true,
      "Professional Anchoring": true,
      "Premium Sound & Lighting": true,
      Photography: false,
      "Return Gifts Arrangement": false,
    },
  },
  {
    id: "wedding-entertainment",
    title: "Wedding Entertainment",
    subtitle: "Magical moments for your special day",
    icon: Crown,
    duration: "4-6 hours",
    audience: "100+ guests",
    price: "₹35,000 - ₹60,000",
    popular: true,
    features: {
      "Grand Magic Show": true,
      "Orchestra/Track Singing": true,
      "Professional Anchoring": true,
      "Comedy Acts by Cine Artists": true,
      "Interactive Games": true,
      "Full Sound & Lighting Setup": true,
      "Stage Setup": true,
      Photography: true,
      Videography: false,
      "Bridal Entry Coordination": false,
    },
  },
  {
    id: "college-fest",
    title: "College Fest",
    subtitle: "High-energy campus entertainment",
    icon: GraduationCap,
    duration: "3-4 hours",
    audience: "200+ students",
    price: "₹25,000 - ₹40,000",
    popular: false,
    features: {
      "Interactive Magic Show": true,
      "Game Competitions": true,
      "Comedy Performances": true,
      "Student Participation Activities": true,
      "Professional Sound System": true,
      "Stage Lighting": true,
      "Prize Distribution Support": true,
      "Social Media Content": false,
      Photography: false,
      Videography: false,
    },
  },
  {
    id: "corporate-fun-day",
    title: "Corporate Fun Day",
    subtitle: "Team building through entertainment",
    icon: Briefcase,
    duration: "4 hours",
    audience: "50-150 employees",
    price: "₹30,000 - ₹50,000",
    popular: false,
    features: {
      "Corporate-friendly Magic Show": true,
      "Team Building Games": true,
      "Professional Anchoring": true,
      "Award Ceremony Support": true,
      "Premium AV Setup": true,
      "Lunch Entertainment": true,
      "Employee Engagement Activities": true,
      Photography: true,
      "Branded Content": false,
      "Executive Interaction": false,
    },
  },
]

const allFeatures = [
  "Magic Show (45 min)",
  "Magic Show (60 min)",
  "Grand Magic Show",
  "Interactive Magic Show",
  "Corporate-friendly Magic Show",
  "Game Activities",
  "Game Competitions",
  "Team Building Games",
  "Interactive Games",
  "Balloon Twisting",
  "Basic Sound System",
  "Professional Sound System",
  "Premium Sound & Lighting",
  "Full Sound & Lighting Setup",
  "Premium AV Setup",
  "Stage Lighting",
  "Talking Doll Performance",
  "Tattoo Booth",
  "Professional Anchoring",
  "Orchestra/Track Singing",
  "Comedy Acts by Cine Artists",
  "Comedy Performances",
  "Student Participation Activities",
  "Employee Engagement Activities",
  "Stage Setup",
  "Photography",
  "Videography",
  "Return Gifts Arrangement",
  "Prize Distribution Support",
  "Award Ceremony Support",
  "Lunch Entertainment",
  "Bridal Entry Coordination",
  "Social Media Content",
  "Branded Content",
  "Executive Interaction",
]

export function PackagesComparison() {
  const whatsappUrl = `https://wa.me/919666286965?text=Hi%20Manusri%20Events%2C%20I%20want%20to%20know%20about%20your%20packages`

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Compare Our Packages</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect package for your event or let us customize one specifically for your needs
            </p>
          </div>

          {/* Package Cards - Mobile View */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:hidden">
            {packages.map((pkg) => {
              const IconComponent = pkg.icon
              return (
                <Card
                  key={pkg.id}
                  className={`relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                    pkg.popular ? "ring-2 ring-primary/20" : ""
                  }`}
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
                    <div className="text-center space-y-1 pt-2">
                      <div className="text-2xl font-bold text-primary">{pkg.price}</div>
                      <div className="text-sm text-muted-foreground">
                        {pkg.duration} • {pkg.audience}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      {Object.entries(pkg.features)
                        .filter(([, included]) => included)
                        .slice(0, 6)
                        .map(([feature], index) => (
                          <div key={index} className="flex items-center gap-2 text-sm">
                            <Check className="h-4 w-4 text-primary flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      {Object.values(pkg.features).filter(Boolean).length > 6 && (
                        <div className="text-sm text-muted-foreground">
                          +{Object.values(pkg.features).filter(Boolean).length - 6} more features
                        </div>
                      )}
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
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Comparison Table - Desktop View */}
          <div className="hidden lg:block overflow-x-auto">
            <div className="min-w-full">
              <div className="grid grid-cols-6 gap-4">
                {/* Header Row */}
                <div className="font-heading font-bold text-lg p-4">Features</div>
                {packages.map((pkg) => {
                  const IconComponent = pkg.icon
                  return (
                    <Card
                      key={pkg.id}
                      className={`relative text-center ${pkg.popular ? "ring-2 ring-primary/20" : ""}`}
                    >
                      {pkg.popular && (
                        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-magical-gradient text-white px-3 py-1 text-xs">
                          Popular
                        </Badge>
                      )}
                      <CardContent className="p-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <h3 className="font-heading font-bold text-lg mb-1">{pkg.title}</h3>
                        <p className="text-xs text-muted-foreground mb-2">{pkg.subtitle}</p>
                        <div className="text-lg font-bold text-primary mb-1">{pkg.price}</div>
                        <div className="text-xs text-muted-foreground">
                          {pkg.duration} • {pkg.audience}
                        </div>
                        <Button
                          className={`w-full mt-3 text-xs ${pkg.popular ? "bg-magical-gradient hover:opacity-90" : ""}`}
                          variant={pkg.popular ? "default" : "outline"}
                          size="sm"
                          asChild
                        >
                          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                            Get Quote
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  )
                })}

                {/* Feature Rows */}
                {allFeatures.map((feature) => (
                  <div key={feature} className="contents">
                    <div className="p-4 border-t text-sm font-medium">{feature}</div>
                    {packages.map((pkg) => (
                      <div key={`${pkg.id}-${feature}`} className="p-4 border-t text-center">
                        {/* {pkg.features[feature] === true ? (
                          <Check className="h-5 w-5 text-primary mx-auto" />
                        ) : pkg.features[feature] === false ? (
                          <X className="h-5 w-5 text-muted-foreground mx-auto" />
                        ) : (
                          <span className="text-xs text-muted-foreground">-</span>
                        )} */}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
