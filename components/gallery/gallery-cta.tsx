import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Phone, Camera, Calendar } from "lucide-react"

export function GalleryCTA() {
  const primaryPhone = "+91 9666286965"
  const whatsappUrl = `https://wa.me/919666286965?text=Hi%20Manusri%20Events%2C%20I%20saw%20your%20gallery%20and%20want%20to%20book%20for%20my%20event`

  return (
    <section className="py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto bg-gradient-to-br from-card to-muted/20 border-0 shadow-lg">
          <CardContent className="p-8 md:p-12 text-center space-y-8">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2 text-primary mb-4">
                <Camera className="h-8 w-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Ready to Create Your Own Magical Moments?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Let us capture the joy and wonder at your next event. Every celebration deserves to be memorable and
                magical.
              </p>
              <p className="text-base font-medium text-accent" lang="te">
                మీ స్వంత మాయా క్షణాలను సృష్టించడానికి సిద్ధంగా ఉన్నారా?
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="flex items-center gap-2 justify-center">
                <Calendar className="h-5 w-5 text-primary" />
                <span>Professional event photography included</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Camera className="h-5 w-5 text-primary" />
                <span>High-quality photos & videos delivered</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
              <Button size="lg" className="w-full sm:w-auto bg-magical-gradient hover:opacity-90 text-lg px-8" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Book Your Event
                </a>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 bg-transparent" asChild>
                <a href={`tel:${primaryPhone}`} className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
