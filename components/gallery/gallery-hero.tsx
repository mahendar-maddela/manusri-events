import { Badge } from "@/components/ui/badge"
import { Camera, Video, Star, Calendar } from "lucide-react"

export function GalleryHero() {
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
              Our Event Gallery
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Witness the magic and joy we bring to every celebration. Browse through photos and videos from our recent
              events across Telangana and Andhra Pradesh.
            </p>
            <p className="text-base md:text-lg font-medium text-accent" lang="te">
              మా ఈవెంట్ గ్యాలరీ
            </p>
          </div>

          {/* Gallery Stats */}
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2">
              <Camera className="h-4 w-4" />
              500+ Event Photos
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2">
              <Video className="h-4 w-4" />
              Video Highlights
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2">
              <Star className="h-4 w-4" />
              Happy Moments
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2">
              <Calendar className="h-4 w-4" />
              Recent Events
            </Badge>
          </div>

          <div className="pt-8">
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Every event is unique, and every moment is precious. Our gallery showcases the genuine smiles, surprised
              faces, and magical moments that make each celebration special. From intimate birthday parties to grand
              wedding receptions, see how we create unforgettable experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
