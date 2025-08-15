import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, Phone, Mail, CheckCircle } from "lucide-react"
import type { ServiceData } from "@/lib/service-data"

interface ServiceCTAProps {
  service: ServiceData
}

export function ServiceCTA({ service }: ServiceCTAProps) {
  const primaryPhone = "+91 9666286965"
  const whatsappUrl = `https://wa.me/919666286965?text=Hi%20Manusri%20Events%2C%20I%20want%20to%20book%20${service.title}%20for%20my%20event`

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
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">Ready to Book {service.title}?</h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Get in touch with us to discuss your requirements and secure your date
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Options */}
            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-bold text-white mb-6">Get In Touch</h3>

              <div className="space-y-4">
                <Button
                  size="lg"
                  className="w-full bg-white text-primary hover:bg-white/90 text-lg font-semibold"
                  asChild
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp: +91 9666286965
                  </a>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-white text-white hover:bg-white hover:text-primary text-lg font-semibold bg-transparent"
                  asChild
                >
                  <a href={`tel:${primaryPhone}`} className="flex items-center gap-3">
                    <Phone className="h-5 w-5" />
                    Call: +91 9666286965
                  </a>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-white text-white hover:bg-white hover:text-primary text-lg font-semibold bg-transparent"
                  asChild
                >
                  <a href="mailto:medhamanusri@gmail.com" className="flex items-center gap-3">
                    <Mail className="h-5 w-5" />
                    Email: medhamanusri@gmail.com
                  </a>
                </Button>
              </div>

              {/* Benefits */}
              <div className="space-y-3 pt-6">
                <div className="flex items-center gap-2 text-white/90">
                  <CheckCircle className="h-5 w-5" />
                  <span>Free consultation & quote</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <CheckCircle className="h-5 w-5" />
                  <span>Quick response within 2 hours</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <CheckCircle className="h-5 w-5" />
                  <span>Flexible scheduling available</span>
                </div>
              </div>
            </div>

            {/* Quick Inquiry Form */}
            <Card className="bg-white/95 backdrop-blur">
              <CardContent className="p-6">
                <h3 className="text-xl font-heading font-bold text-foreground mb-4">Quick Inquiry</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input placeholder="Your Name" required />
                    <Input placeholder="Phone Number" type="tel" required />
                  </div>
                  <Input placeholder="Email (Optional)" type="email" />
                  <Input placeholder="Event Date" type="date" />
                  <Textarea placeholder="Tell us about your event requirements..." rows={3} />
                  <Button type="submit" className="w-full bg-magical-gradient hover:opacity-90">
                    Send Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
