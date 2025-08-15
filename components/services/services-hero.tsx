import { Badge } from "@/components/ui/badge"
import { Star, Users, Calendar, MapPin } from "lucide-react"

export function ServicesHero() {
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
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-magical-gradient leading-tight">
              Our Magical Services
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              From intimate birthday celebrations to grand weddings, we bring wonder and joy to every occasion across
              Telangana and Andhra Pradesh
            </p>
            <p className="text-base md:text-lg font-medium text-accent" lang="te">
              మా అద్భుతమైన సేవలు
            </p>
          </div>

          {/* Service Stats */}
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2">
              <Star className="h-4 w-4" />
              15+ Entertainment Services
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2">
              <Users className="h-4 w-4" />
              All Age Groups
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2">
              <Calendar className="h-4 w-4" />
              Any Occasion
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2">
              <MapPin className="h-4 w-4" />
              Telugu States Coverage
            </Badge>
          </div>

          <div className="pt-8">
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A. Ramesh and the Manusri Events team specialize in creating unforgettable experiences through
              professional entertainment. Whether you're planning an intimate family gathering or a large corporate
              event, we have the perfect combination of services to make your celebration truly special.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
