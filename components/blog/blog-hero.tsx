import { Badge } from "@/components/ui/badge"
import { BookOpen, Star, Users, MapPin } from "lucide-react"

export function BlogHero() {
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
              Event Planning Blog
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert tips, ideas, and guides for planning unforgettable events across Telangana and Andhra Pradesh. From
              birthday parties to grand weddings, we share our experience to help you create magical moments.
            </p>
            <p className="text-base md:text-lg font-medium text-accent" lang="te">
              ఈవెంట్ ప్లానింగ్ బ్లాగ్
            </p>
          </div>

          {/* Blog Stats */}
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2">
              <BookOpen className="h-4 w-4" />
              Expert Guides
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2">
              <Star className="h-4 w-4" />
              Local Insights
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2">
              <Users className="h-4 w-4" />
              Real Experiences
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2">
              <MapPin className="h-4 w-4" />
              Telugu States Focus
            </Badge>
          </div>

          <div className="pt-8">
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Drawing from over a decade of experience in event entertainment across Hyderabad, Vijayawada, and beyond,
              our blog offers practical advice, creative ideas, and insider tips to make your celebrations truly
              special.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
