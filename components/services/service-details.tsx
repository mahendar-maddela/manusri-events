import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, ImageIcon } from "lucide-react"
import type { ServiceData } from "@/lib/service-data"

interface ServiceDetailsProps {
  service: ServiceData
}

export function ServiceDetails({ service }: ServiceDetailsProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Add-ons Section */}
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Available Add-ons</h2>
              <p className="text-muted-foreground">Enhance your experience with these additional services</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {service.addOns.map((addon, index) => (
                <Card key={index} className="text-center group hover:shadow-md transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-magical-gradient group-hover:text-white transition-all duration-300">
                      <Plus className="h-6 w-6" />
                    </div>
                    <p className="text-sm font-medium">{addon}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Gallery Section */}
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Gallery</h2>
              <p className="text-muted-foreground">See our {service.title.toLowerCase()} in action</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.gallery.map((image, index) => (
                <Card key={index} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                  <div className="aspect-square bg-muted/20 flex items-center justify-center group-hover:bg-muted/30 transition-colors duration-300">
                    <ImageIcon className="h-12 w-12 text-muted-foreground" />
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Perfect For Section */}
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Perfect For</h2>
              <p className="text-muted-foreground">This service is ideal for various occasions</p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {service.idealFor.map((occasion, index) => (
                <Badge key={index} variant="outline" className="text-base px-4 py-2">
                  {occasion}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
