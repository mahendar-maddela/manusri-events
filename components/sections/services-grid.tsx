import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Wand2,
  Gamepad2,
  Baby,
  Mic,
  Palette,
  Laugh,
  Cake,
  Users,
  Heart,
  Music,
  Music2,
  GraduationCap,
  Calendar,
} from "lucide-react"

const services = [
  {
    id: "magic-show",
    title: "Magic Show",
    description: "Mind-blowing illusions and interactive magic that captivates audiences of all ages",
    icon: Wand2,
    popular: true,
  },
  {
    id: "game-show",
    title: "Game Show",
    description: "Engaging games and competitions with exciting prizes for participants",
    icon: Gamepad2,
    popular: true,
  },
  {
    id: "talking-doll",
    title: "Talking Doll",
    description: "Interactive puppet shows that delight children with storytelling and humor",
    icon: Baby,
    popular: false,
  },
  {
    id: "anchoring",
    title: "Anchoring",
    description: "Professional MC services to keep your event flowing smoothly and entertainingly",
    icon: Mic,
    popular: true,
  },
  {
    id: "tattoos",
    title: "Tattoos",
    description: "Temporary tattoo stalls with safe, colorful designs for kids and adults",
    icon: Palette,
    popular: false,
  },
  {
    id: "comedy-shows",
    title: "Comedy Shows by Cine Artists",
    description: "Professional comedians and cinema artists bringing laughter to your event",
    icon: Laugh,
    popular: false,
  },
  {
    id: "birthday-parties",
    title: "Birthday Parties",
    description: "Complete birthday celebration packages with entertainment and decorations",
    icon: Cake,
    popular: true,
  },
  {
    id: "get-together-parties",
    title: "Get-together Parties",
    description: "Fun-filled reunion and social gathering entertainment for all age groups",
    icon: Users,
    popular: false,
  },
  {
    id: "weddings",
    title: "Weddings",
    description: "Traditional and modern wedding entertainment including sangeet and reception shows",
    icon: Heart,
    popular: true,
  },
  {
    id: "track-singing",
    title: "Track Singing",
    description: "Live singing performances with backing tracks for various occasions",
    icon: Music,
    popular: false,
  },
  {
    id: "orchestra",
    title: "Orchestra / Musical Band",
    description: "Live musical performances with full band setup for grand celebrations",
    icon: Music2,
    popular: false,
  },
  {
    id: "school-college-shows",
    title: "School and College Shows",
    description: "Educational and entertaining programs designed for academic institutions",
    icon: GraduationCap,
    popular: true,
  },
  // {
  //   id: "all-occasions",
  //   title: "All Kinds of Occasions",
  //   description: "Custom entertainment solutions for corporate events, festivals, and special celebrations",
  //   icon: Calendar,
  //   popular: false,
  // },
]

export function ServicesGrid() {
  return (
    <section className="py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Our Magical Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From intimate birthday parties to grand weddings, we bring joy and wonder to every celebration
          </p>
          <p className="text-base font-medium text-accent" lang="te">
            మీ ప్రతి వేడుకకు ప్రత్యేకమైన వినోదం
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <Card
                key={service.id}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              >
                {service.popular && (
                  <Badge className="absolute top-3 right-3 bg-magical-gradient text-white text-xs">Popular</Badge>
                )}
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-magical-gradient group-hover:text-white transition-all duration-300">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg font-heading">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-sm leading-relaxed">{service.description}</CardDescription>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full text-primary hover:text-primary-foreground hover:bg-primary group-hover:bg-magical-gradient group-hover:text-white transition-all duration-300"
                    asChild
                  >
                    <a href={`/services/${service.id}`}>See Details →</a>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent" asChild>
            <a href="/services">View All Services</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
