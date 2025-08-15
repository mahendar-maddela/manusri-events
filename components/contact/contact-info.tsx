import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react"

export function ContactInfo() {
  const primaryPhone = "+91 9666286965"
  const secondaryPhone = "+91 6305558755"
  const email = "medhamanusri@gmail.com"
  const whatsappUrl = `https://wa.me/919666286965?text=Hi%20Manusri%20Events%2C%20I%20want%20to%20discuss%20my%20event%20requirements`

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto lg:mx-0 space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-heading font-bold text-foreground">Get In Touch Directly</h2>
            <p className="text-muted-foreground">
              Prefer to talk directly? We're available through multiple channels to make booking convenient for you.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="space-y-4">
            {/* Primary Phone */}
            <Card className="group hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-magical-gradient group-hover:text-white transition-all duration-300">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-lg">Primary Phone</h3>
                    <p className="text-muted-foreground">Available 24/7 for bookings</p>
                    <Button variant="link" className="p-0 h-auto text-primary font-semibold" asChild>
                      <a href={`tel:${primaryPhone}`}>{primaryPhone}</a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp */}
            <Card className="group hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-lg">WhatsApp</h3>
                    <p className="text-muted-foreground">Quick responses & easy booking</p>
                    <Button variant="link" className="p-0 h-auto text-green-600 font-semibold" asChild>
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        Chat on WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="group hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-lg">Email</h3>
                    <p className="text-muted-foreground">Detailed inquiries & quotes</p>
                    <Button variant="link" className="p-0 h-auto text-blue-600 font-semibold" asChild>
                      <a href={`mailto:${email}`}>{email}</a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Secondary Phone */}
            <Card className="group hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-lg">Secondary Phone</h3>
                    <p className="text-muted-foreground">Alternative contact number</p>
                    <Button variant="link" className="p-0 h-auto text-primary font-semibold" asChild>
                      <a href={`tel:${secondaryPhone}`}>{secondaryPhone}</a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Service Area */}
          <Card className="bg-gradient-to-br from-card to-muted/20 border-0">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-magical-gradient text-white flex items-center justify-center">
                  <MapPin className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-semibold text-lg mb-2">Service Areas</h3>
                  <p className="text-muted-foreground mb-3">We provide entertainment services across:</p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>• Hyderabad</div>
                    <div>• Vijayawada</div>
                    <div>• Warangal</div>
                    <div>• Guntur</div>
                    <div>• Karimnagar</div>
                    <div>• Nizamabad</div>
                    <div>• Khammam</div>
                    <div>• Vizag</div>
                    <div>• Tirupati</div>
                    <div>• Kurnool</div>
                    <div>• Nellore</div>
                    <div>• Other cities in Telugu states</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Response Time */}
          <Card className="bg-accent/5 border-accent/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-semibold text-lg">Quick Response Guarantee</h3>
                  <p className="text-muted-foreground">
                    We typically respond within 2 hours during business hours. For urgent bookings, call or WhatsApp for
                    immediate assistance.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
