import { Button } from "@/components/ui/button"
import { MessageCircle, Phone, Calendar, Clock } from "lucide-react"

export function CTABand() {
  const primaryPhone = "+91 9666286965"
  const whatsappUrl = `https://wa.me/919666286965?text=Hi%20Manusri%20Events%2C%20I%20want%20to%20book%20a%20magic%20show`

  return (
    <section className="py-16 md:py-20 bg-magical-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-4 h-4 bg-white rounded-full sparkle-animation"></div>
        <div
          className="absolute top-20 right-20 w-3 h-3 bg-white rounded-full sparkle-animation"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute bottom-20 left-20 w-5 h-5 bg-white rounded-full sparkle-animation"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-10 right-10 w-3 h-3 bg-white rounded-full sparkle-animation"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Urgency Message */}
          <div className="flex items-center justify-center gap-2 text-white/90 text-sm md:text-base">
            <Clock className="h-5 w-5" />
            <span className="font-medium">Dates fill fast in festival season—book now!</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white leading-tight">
              Ready to Make Your Event Magical?
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Don't wait – secure your date today and give your guests an unforgettable experience
            </p>
            <p className="text-base md:text-lg font-medium text-white/80" lang="te">
              మీ ఈవెంట్ ను అద్భుతంగా మార్చడానికి సిద్ధంగా ఉన్నారా?
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 text-lg px-8 font-semibold"
              asChild
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                WhatsApp Now
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary text-lg px-8 font-semibold bg-transparent"
              asChild
            >
              <a href={`tel:${primaryPhone}`} className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call {primaryPhone}
              </a>
            </Button>
          </div>

          {/* Additional Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Free consultation & quote</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-white/40 rounded-full"></div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Quick response within 2 hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
