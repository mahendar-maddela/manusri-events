import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, MessageCircle, FileText, Star, Users, Calendar, Shield } from "lucide-react"

export function Hero() {
  const primaryPhone = "+91 9666286965"
  const whatsappUrl = `https://wa.me/919666286965?text=Hi%20Manusri%20Events%2C%20I%20want%20to%20book%20a%20magic%20show`

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Background Sparkles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-secondary rounded-full sparkle-animation"></div>
        <div
          className="absolute top-32 right-20 w-1.5 h-1.5 bg-accent rounded-full sparkle-animation"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-40 left-1/3 w-1 h-1 bg-primary rounded-full sparkle-animation"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 right-10 w-2 h-2 bg-secondary rounded-full sparkle-animation"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-accent rounded-full sparkle-animation"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Headlines */}
          <div className="space-y-4">
     <div>
     <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-magical-gradient leading-tight">
              Make Every Occasion Magical
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional magician & event organizer serving Telangana, Andhra Pradesh & All India
            </p>
            <p className="text-base md:text-lg font-medium text-accent" lang="te">
              ప్రతి వేడుకను మంత్రికలుగా మార్చండి
            </p>
     </div>
            {/* <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 rounded-full blur-2xl opacity-30 animate-pulse"></div>

             
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/30 backdrop-blur-sm shadow-2xl">
                    <img
                      src="/magician-ramesh.png"
                      alt="A. Ramesh - Professional Magician"
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10"></div>
                  </div>


                </div> */}
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <Badge variant="secondary" className="flex items-center gap-1 px-3 py-1">
              <Star className="h-3 w-3" />
              15+ Services
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-1 px-3 py-1">
              <Users className="h-3 w-3" />
              Family-Friendly
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-1 px-3 py-1">
              <Calendar className="h-3 w-3" />
              School/College/Corporate
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-1 px-3 py-1">
              <Shield className="h-3 w-3" />
              Since 2010
            </Badge>
          </div>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <Button size="lg" className="w-full sm:w-auto bg-magical-gradient hover:opacity-90 text-lg px-8" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                WhatsApp Now
              </a>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 bg-transparent" asChild>
              <a href={`tel:${primaryPhone}`} className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call 96662 86965
              </a>
            </Button>
          </div>

          {/* Secondary CTA */}
          <div className="pt-4">
            <Button variant="ghost" size="lg" className="text-primary hover:text-primary/80" asChild>
              <a href="#contact" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Get Free Quote
              </a>
            </Button>
            
          </div>

          {/* Hero Image Placeholder */}
          {/* <div className="pt-8">
            <div className="relative max-w-2xl mx-auto">
              <img
                src="/magician-show.png"
                alt="A. Ramesh performing magic show with audience"
                className="w-full h-auto rounded-lg shadow-2xl"
                loading="eager"
              />
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-secondary rounded-full sparkle-animation"></div>
              <div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full sparkle-animation"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div> */}
        </div>
      </div>  
    </section>
  )
}
