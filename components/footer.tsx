import Link from "next/link"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, MessageCircle, Youtube, Instagram, Facebook } from "lucide-react"

export function Footer() {
  const primaryPhone = "+91 9666286965"
  const secondaryPhone = "+91 6305558755"
  const email = "medhamanusri@gmail.com"
  const whatsappUrl = `https://wa.me/919666286965?text=Hi%20Manusri%20Events%2C%20I%20want%20to%20book%20a%20magic%20show`

  const quickLinks = [
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Packages", href: "/packages" },
    // { name: "Testimonials", href: "/testimonials" },
    { name: "FAQ", href: "/faq" },
    { name: "Blog", href: "/blog" },
  ]

  const services = [
    "Magic Shows",
    "Birthday Parties",
    "Wedding Entertainment",
    "School Shows",
    "Corporate Events",
    "Game Shows",
  ]

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Contact */}
          <div className="space-y-4">
            <Logo variant="full" />
            <p className="text-sm text-muted-foreground">
              Professional magic shows and event entertainment across Telangana and Andhra Pradesh.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <a href={`tel:${primaryPhone}`} className="hover:text-primary transition-colors">
                  {primaryPhone}
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <a href={`tel:${secondaryPhone}`} className="hover:text-primary transition-colors">
                  {secondaryPhone}
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <a href={`mailto:${email}`} className="hover:text-primary transition-colors">
                  {email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Hyderabad & Vijayawada Service Area</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-foreground">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-sm text-muted-foreground">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA & Social */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-foreground">Get In Touch</h3>
            <p className="text-sm text-muted-foreground">Ready to make your event magical? Contact us today!</p>
            <div className="space-y-2">
              <Button className="w-full bg-magical-gradient hover:opacity-90" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Now
                </a>
              </Button>
              <Button variant="outline" className="w-full bg-transparent" asChild>
                <a href={`tel:${primaryPhone}`} className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 pt-2">
              <Button variant="ghost" size="sm" className="p-2">
                <Youtube className="h-4 w-4" />
                <span className="sr-only">YouTube</span>
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2024 Manusri Events. All rights reserved.</p>
          <div className="flex space-x-4 text-sm">
            <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
