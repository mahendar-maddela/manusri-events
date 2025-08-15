import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Users, Star, MessageCircle, Phone } from "lucide-react"
import type { ServiceData } from "@/lib/service-data"

interface ServiceHeroProps {
  service: ServiceData
}

export function ServiceHero({ service }: ServiceHeroProps) {
  const IconComponent = service.icon
  const primaryPhone = "+91 9666286965"
  const whatsappUrl = `https://wa.me/919666286965?text=Hi%20Manusri%20Events%2C%20I%20want%20to%20book%20${service.title}`

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Background Sparkles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-secondary rounded-full sparkle-animation"></div>
        <div
          className="absolute top-32 right-20 w-1.5 h-1.5 bg-accent rounded-full sparkle-animation"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute bottom-40 right-10 w-2 h-2 bg-primary rounded-full sparkle-animation"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Service Header */}
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-4">
              <div className="p-4 rounded-full bg-magical-gradient text-white">
                <IconComponent className="h-8 w-8" />
              </div>
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-magical-gradient">{service.title}</h1>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">{service.pitch}</p>
          </div>

          {/* Service Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Duration Options */}
            <div className="text-center space-y-3">
              <div className="flex items-center justify-center gap-2 text-primary">
                <Clock className="h-5 w-5" />
                <h3 className="font-heading font-semibold">Duration Options</h3>
              </div>
              <div className="space-y-2">
                {service.durations.map((duration, index) => (
                  <Badge key={index} variant="secondary" className="block w-fit mx-auto">
                    {duration}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Audience Sizes */}
            <div className="text-center space-y-3">
              <div className="flex items-center justify-center gap-2 text-primary">
                <Users className="h-5 w-5" />
                <h3 className="font-heading font-semibold">Audience Size</h3>
              </div>
              <div className="space-y-2">
                {service.audienceSizes.map((size, index) => (
                  <Badge key={index} variant="secondary" className="block w-fit mx-auto">
                    {size}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Ideal For */}
            <div className="text-center space-y-3">
              <div className="flex items-center justify-center gap-2 text-primary">
                <Star className="h-5 w-5" />
                <h3 className="font-heading font-semibold">Ideal For</h3>
              </div>
              <div className="space-y-2">
                {service.idealFor.slice(0, 3).map((occasion, index) => (
                  <Badge key={index} variant="secondary" className="block w-fit mx-auto">
                    {occasion}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Quick CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <Button size="lg" className="w-full sm:w-auto bg-magical-gradient hover:opacity-90" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Book Now
              </a>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent" asChild>
              <a href={`tel:${primaryPhone}`} className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
