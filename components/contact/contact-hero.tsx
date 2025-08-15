import { Badge } from "@/components/ui/badge"
import { Phone, MessageCircle, Mail, Clock } from "lucide-react"

export function ContactHero() {
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
              Contact & Booking
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to make your event magical? Get in touch with us for a free consultation and personalized quote.
            </p>
            <p className="text-base md:text-lg font-medium text-accent" lang="te">
              సంప్రదింపులు మరియు బుకింగ్
            </p>
          </div>

          {/* Quick Contact Options */}
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2">
              <Phone className="h-4 w-4" />
              Quick Response
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2">
              <MessageCircle className="h-4 w-4" />
              WhatsApp Available
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2">
              <Mail className="h-4 w-4" />
              Free Consultation
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2">
              <Clock className="h-4 w-4" />
              24/7 Booking
            </Badge>
          </div>

          <div className="pt-8">
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're here to help you plan the perfect event. Whether you have questions about our services, need a
              custom quote, or want to check availability for your date, don't hesitate to reach out. We typically
              respond within 2 hours!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
