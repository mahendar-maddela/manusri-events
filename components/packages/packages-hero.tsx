import { Badge } from "@/components/ui/badge"
import { Package, Star, Users, Calendar } from "lucide-react"

export function PackagesHero() {
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
              Event Packages
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Carefully crafted entertainment packages for every occasion and budget. From intimate celebrations to
              grand events, we have the perfect combination of services for you.
            </p>
            <p className="text-base md:text-lg font-medium text-accent" lang="te">
              ఈవెంట్ ప్యాకేజీలు
            </p>
          </div>

          {/* Package Benefits */}
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2">
              <Package className="h-4 w-4" />
              All-Inclusive Packages
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2">
              <Star className="h-4 w-4" />
              Customizable Options
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2">
              <Users className="h-4 w-4" />
              Any Group Size
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2">
              <Calendar className="h-4 w-4" />
              Flexible Scheduling
            </Badge>
          </div>

          <div className="pt-8">
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our packages are designed to take the stress out of event planning. Each package includes a carefully
              selected combination of our most popular services, ensuring your guests have an unforgettable experience
              while staying within your budget.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
