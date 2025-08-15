"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Logo } from "@/components/logo"
import { Menu, Phone, MessageCircle } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Packages", href: "/packages" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const primaryPhone = "+91 9666286965"
  const whatsappUrl = `https://wa.me/919666286965?text=Hi%20Manusri%20Events%2C%20I%20want%20to%20book%20a%20magic%20show`

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Logo variant="compact" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" size="sm" asChild>
              <a href={`tel:${primaryPhone}`} className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </Button>
            <Button size="sm" className="bg-magical-gradient hover:opacity-90" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[300px] sm:w-[400px] px-4 py-6">
              <div className="flex flex-col space-y-6 mt-4">
                {/* Logo */}
                <div className="flex justify-center mb-6">
                  <Logo variant="full" />
                </div>

                {/* Navigation */}
                <nav className="flex flex-col space-y-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                {/* Contact Buttons */}
                <div className="flex flex-col space-y-4 pt-6 p-3 border-t border-muted-foreground">
                  <Button variant="outline" asChild>
                    <a href={`tel:${primaryPhone}`} className="flex items-center gap-2 text-lg">
                      <Phone className="h-4 w-4" />
                      Call {primaryPhone}
                    </a>
                  </Button>
                  <Button className="bg-magical-gradient hover:opacity-90" asChild>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg">
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp Now
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>

        </div>
      </div>
    </header>
  )
}
