import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Phone, Settings, CheckCircle, Clock, Star } from "lucide-react"

export function PackagesCTA() {
  const primaryPhone = "+91 9666286965"
  const whatsappUrl = `https://wa.me/919666286965?text=Hi%20Manusri%20Events%2C%20I%20want%20to%20discuss%20a%20custom%20package%20for%20my%20event`

  return (
    <section className="py-16 md:py-24 bg-magical-gradient relative overflow-hidden">
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
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <div className="flex items-center justify-center gap-2 text-white/90 mb-4">
              <Settings className="h-8 w-8" />
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white leading-tight">
              Need a Custom Package?
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Every event is unique. Let us create a personalized package that perfectly matches your vision, audience,
              and budget.
            </p>
            <p className="text-base md:text-lg font-medium text-white/80" lang="te">
              కస్టమ్ ప్యాకేజీ అవసరమా?
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Custom Package Benefits */}
            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-bold text-white mb-6">Why Choose Custom?</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3 text-white/90">
                  <CheckCircle className="h-6 w-6 text-white mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Tailored to Your Event</h4>
                    <p className="text-sm text-white/80">
                      Mix and match services to create the perfect entertainment lineup for your specific occasion
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-white/90">
                  <Star className="h-6 w-6 text-white mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Budget Flexibility</h4>
                    <p className="text-sm text-white/80">
                      Work within your budget while maximizing entertainment value and guest satisfaction
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-white/90">
                  <Clock className="h-6 w-6 text-white mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Flexible Timing</h4>
                    <p className="text-sm text-white/80">
                      Adjust duration and scheduling to fit your event timeline perfectly
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <Card className="bg-white/95 backdrop-blur">
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-6 text-center">
                  Let's Plan Together
                </h3>

                <div className="space-y-4 mb-6">
                  <p className="text-muted-foreground text-center">
                    Share your event details and we'll create a custom package proposal within 24 hours
                  </p>
                </div>

                <div className="space-y-4">
                  <Button
                    size="lg"
                    className="w-full bg-magical-gradient hover:opacity-90 text-lg font-semibold"
                    asChild
                  >
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                      <MessageCircle className="h-5 w-5" />
                      WhatsApp for Custom Quote
                    </a>
                  </Button>

                  <Button size="lg" variant="outline" className="w-full text-lg font-semibold bg-transparent" asChild>
                    <a href={`tel:${primaryPhone}`} className="flex items-center gap-3">
                      <Phone className="h-5 w-5" />
                      Call: +91 9666286965
                    </a>
                  </Button>
                </div>

                <div className="text-center mt-6 text-sm text-muted-foreground">
                  <p>Free consultation • Quick response • No obligation</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
