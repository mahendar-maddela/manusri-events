"use client"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"

export function PhoneCTA() {
  const primaryPhone = "+91 9666286965"
  const whatsappUrl = `https://wa.me/919666286965?text=Hi%20Manusri%20Events%2C%20I%20want%20to%20book%20a%20magic%20show`

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur border-t p-4 md:hidden">
      <div className="flex gap-3">
        <Button variant="outline" className="flex-1 bg-transparent" asChild>
          <a href={`tel:${primaryPhone}`} className="flex items-center justify-center gap-2">
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </Button>
        <Button className="flex-1 bg-magical-gradient hover:opacity-90" asChild>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </Button>
      </div>
    </div>
  )
}
