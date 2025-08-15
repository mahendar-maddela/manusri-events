import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Wand2,
  Gamepad2,
  Mic,
  Heart,
  Music,
  Users,
  GraduationCap,
  Building2,
  Palette,
  Laugh,
  Baby,
  PartyPopper,
} from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      id: "magic-show",
      icon: Wand2,
      title: "Magic Shows",
      corrected: "Magic Shows",
      description: "Mind-blowing illusions, interactive magic tricks, and captivating performances for all ages",
      duration: "30-60 minutes",
      audience: "10-500 people",
      idealFor: ["Birthday Parties", "School Events", "Corporate Functions", "Apartment Communities"],
      price: "₹ On Request",
    },
    {
      id: "game-show",
      icon: Gamepad2,
      title: "Game Show",
      corrected: "Game Shows",
      description: "Engaging interactive games, quizzes, and fun activities with exciting prizes",
      duration: "45-90 minutes",
      audience: "20-200 people",
      idealFor: ["Corporate Events", "School Functions", "Community Gatherings", "Team Building"],
      price: "₹ On Request",
    },
    {
      id: "talking-doll",
      icon: Baby,
      title: "Talking Doll",
      corrected: "Talking Doll Shows",
      description: "Adorable puppet shows and talking doll performances that delight children",
      duration: "20-45 minutes",
      audience: "10-100 people",
      idealFor: ["Birthday Parties", "School Events", "Children's Gatherings", "Daycare Centers"],
      price: "₹ On Request",
    },
    {
      id: "anchoring",
      icon: Mic,
      title: "Anchoring",
      corrected: "Professional Anchoring",
      description: "Expert event hosting, MC services, and program coordination in multiple languages",
      duration: "2-8 hours",
      audience: "50-1000+ people",
      idealFor: ["Weddings", "Corporate Events", "Cultural Programs", "Award Ceremonies"],
      price: "₹ On Request",
    },
    {
      id: "tattoos",
      icon: Palette,
      title: "Tattoos",
      corrected: "Temporary Tattoo Stalls",
      description: "Safe, colorful temporary tattoos and body art for kids and adults",
      duration: "2-4 hours",
      audience: "Unlimited",
      idealFor: ["Birthday Parties", "Festivals", "Corporate Events", "School Fairs"],
      price: "₹ On Request",
    },
    {
      id: "comedy-shows",
      icon: Laugh,
      title: "Comedy Shows by Cine Artists",
      corrected: "Comedy Shows by Cinema Artists",
      description: "Professional comedy performances by experienced cinema and theater artists",
      duration: "45-90 minutes",
      audience: "100-1000+ people",
      idealFor: ["Corporate Events", "Cultural Programs", "Festivals", "Private Parties"],
      price: "₹ On Request",
    },
    {
      id: "birthday-parties",
      icon: Heart,
      title: "Birthday Partys",
      corrected: "Birthday Parties",
      description: "Complete birthday celebration packages with entertainment, games, and magical moments",
      duration: "2-4 hours",
      audience: "10-100 people",
      idealFor: ["Kids Birthdays", "Adult Celebrations", "Milestone Birthdays", "Theme Parties"],
      price: "₹ On Request",
    },
    {
      id: "get-together-parties",
      icon: PartyPopper,
      title: "Get together Partys",
      corrected: "Get-together Parties",
      description: "Fun-filled entertainment for family reunions, friend gatherings, and social events",
      duration: "3-6 hours",
      audience: "20-200 people",
      idealFor: ["Family Reunions", "Friend Gatherings", "Alumni Meets", "Community Events"],
      price: "₹ On Request",
    },
    {
      id: "marriages",
      icon: Users,
      title: "Marriages",
      corrected: "Wedding Entertainment",
      description: "Traditional and modern entertainment for wedding ceremonies and celebrations",
      duration: "4-8 hours",
      audience: "100-1000+ people",
      idealFor: ["Wedding Ceremonies", "Sangeet Functions", "Reception Parties", "Mehendi Events"],
      price: "₹ On Request",
    },
    {
      id: "track-singing",
      icon: Music,
      title: "Track Singing",
      corrected: "Track Singing Performances",
      description: "Live singing performances with track music in Telugu, Hindi, and English",
      duration: "1-3 hours",
      audience: "50-500 people",
      idealFor: ["Weddings", "Cultural Events", "Corporate Functions", "Private Parties"],
      price: "₹ On Request",
    },
    {
      id: "orchestra",
      icon: Music,
      title: "Arcestra",
      corrected: "Orchestra / Musical Band",
      description: "Live musical performances with traditional and modern instruments",
      duration: "2-4 hours",
      audience: "100-1000+ people",
      idealFor: ["Weddings", "Cultural Programs", "Festivals", "Corporate Events"],
      price: "₹ On Request",
    },
    {
      id: "school-college-shows",
      icon: GraduationCap,
      title: "School and College Shows",
      corrected: "Educational Institution Shows",
      description: "Age-appropriate entertainment for schools, colleges, and educational institutions",
      duration: "1-2 hours",
      audience: "100-2000+ people",
      idealFor: ["Annual Days", "Cultural Fests", "Graduation Events", "Sports Days"],
      price: "₹ On Request",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* <Header /> */}

      {/* Hero Section */}
      <section className="bg-magical-gradient-light py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-primary">Our Magical Services</h1>
            <p className="text-lg text-muted-foreground">
              Professional entertainment services for every occasion across Telangana and Andhra Pradesh
            </p>
            <p className="text-base text-primary/80 font-medium">అన్ని రకాల వేడుకలకు వినోద సేవలు</p>
            <div className="flex flex-wrap justify-center gap-2 pt-4">
              <Badge variant="secondary">15+ Services</Badge>
              <Badge variant="secondary">Family-Friendly</Badge>
              <Badge variant="secondary">Professional Team</Badge>
              <Badge variant="secondary">Custom Packages</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.corrected}</CardTitle>
                  {service.title !== service.corrected && (
                    <p className="text-xs text-muted-foreground">({service.title})</p>
                  )}
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription>{service.description}</CardDescription>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="font-medium">Duration:</span>
                      <span className="text-muted-foreground">{service.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Audience:</span>
                      <span className="text-muted-foreground">{service.audience}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Price:</span>
                      <span className="text-primary font-semibold">{service.price}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium">Ideal For:</p>
                    <div className="flex flex-wrap gap-1">
                      {service.idealFor.map((item) => (
                        <Badge key={item} variant="outline" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button asChild className="w-full">
                    <Link href={`/services/${service.id}`}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Occasions Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary">All Kinds of Occasions</h2>
            <p className="text-lg text-muted-foreground">
              We cater to every type of celebration and event, making each one memorable and magical
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              {[
                { icon: Heart, name: "Birthdays" },
                { icon: Users, name: "Weddings" },
                { icon: Building2, name: "Corporate" },
                { icon: GraduationCap, name: "Educational" },
              ].map((occasion) => (
                <div key={occasion.name} className="flex flex-col items-center gap-2 p-4 bg-background rounded-lg">
                  <occasion.icon className="h-8 w-8 text-primary" />
                  <span className="font-medium text-sm">{occasion.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  )
}
