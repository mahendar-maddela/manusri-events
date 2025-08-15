"use client"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function WhatsAppFloat() {
  const whatsappUrl = `https://wa.me/919666286965?text=Hi%20Manusri%20Events%2C%20I%20want%20to%20book%20a%20magic%20show`

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        size="lg"
        className="rounded-full h-14 w-14 bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
        asChild
      >
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
          <MessageCircle className="h-6 w-6" />
          <span className="sr-only">WhatsApp</span>
        </a>
      </Button>
    </div>
  )
}
