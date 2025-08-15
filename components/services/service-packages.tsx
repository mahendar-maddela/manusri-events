import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star } from "lucide-react"
import type { ServiceData } from "@/lib/service-data"

interface ServicePackagesProps {
  service: ServiceData
}

export function ServicePackages({ service }: ServicePackagesProps) {
  const whatsappUrl = `https://wa.me/919666286965?text=Hi%20Manusri%20Events%2C%20I%20want%20to%20know%20about%20${service.title}%20packages`

  return (
    <section className="py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">{service.title} Packages</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect package for your event. All packages can be customized to meet your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.packages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  index === 1 ? "ring-2 ring-primary/20" : ""
                }`}
              >
                {index === 1 && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-magical-gradient text-white px-4 py-1">
                    Most Popular
                  </Badge>
                )}

                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-magical-gradient group-hover:text-white transition-all duration-300">
                    <Star className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-heading">{pkg.name}</CardTitle>
                  <CardDescription className="text-sm">{pkg.duration}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm">
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
                      className={`w-full ${index === 1 ? "bg-magical-gradient hover:opacity-90" : ""}`}
                      variant={index === 1 ? "default" : "outline"}
                      asChild
                    >
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        Get Quote
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
  )
}
