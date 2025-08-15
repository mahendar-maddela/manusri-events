import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Users, Shield, Languages, Package, Star, Phone, MessageCircle } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Clock,
    title: "Punctual Team",
    description: "We arrive on time and set up efficiently, ensuring your event starts without delays",
  },
  {
    icon: Users,
    title: "Crowd-Engaging Magician",
    description: "A. Ramesh specializes in interactive performances that involve and delight every audience member",
  },
  {
    icon: Shield,
    title: "Safe Props",
    description: "All our equipment and props are child-safe, regularly maintained, and meet safety standards",
  },
  {
    icon: Languages,
    title: "Bilingual Performance",
    description: "Fluent performances in Telugu, Hindi, and English to connect with diverse audiences",
  },
  {
    icon: Package,
    title: "Custom Packages",
    description: "Flexible service combinations tailored to your specific event needs and budget",
  },
  {
    icon: Star,
    title: "Proven Experience",
    description: "Over a decade of successful events across Telangana and Andhra Pradesh",
  },
]

export function WhyChooseUs() {
  const primaryPhone = "+91 9666286965"
  const whatsappUrl = `https://wa.me/919666286965?text=Hi%20Manusri%20Events%2C%20I%20want%20to%20know%20more%20about%20your%20services`

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-primary">About Manusri Events</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're not just entertainers – we're memory makers who ensure every moment of your celebration is special
          </p>
          <p className="text-lg text-muted-foreground">
            Meet A. Ramesh, the magician behind countless magical moments across Telangana and Andhra Pradesh
          </p>
          <p className="text-base font-medium text-accent" lang="te">
            మనుశ్రీ ఈవెంట్స్ ఎందుకు ఎంచుకోవాలి?
          </p>
        </div>
        {/* About A. Ramesh Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary">Meet A. Ramesh</h2>
                    <p className="text-lg text-muted-foreground">Professional Magician & Event Organiser</p>
                  </div>

                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      With over a decade of experience in the entertainment industry, A. Ramesh has been bringing joy and
                      wonder to audiences across Telangana and Andhra Pradesh. His passion for magic began in childhood
                      and has evolved into a professional career dedicated to creating unforgettable experiences.
                    </p>

                    <p>
                      As the founder of Manusri Events, Ramesh has built a reputation for reliability, creativity, and
                      exceptional entertainment value. His multilingual abilities allow him to connect with diverse
                      audiences, making every performance inclusive and engaging.
                    </p>

                    <p>
                      From intimate birthday parties to grand wedding celebrations, corporate events to school functions,
                      Ramesh and his team have successfully entertained thousands of people, creating magical moments that
                      last a lifetime.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button size="lg" asChild>
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <MessageCircle className="h-5 w-5" />
                        Connect with Ramesh
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href={`tel:${primaryPhone}`} className="flex items-center gap-2">
                        <Phone className="h-5 w-5" />
                        Call Directly
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="relative">
                  <div className="aspect-square bg-magical-gradient-light rounded-2xl flex items-center justify-center">
                    <Image
                      src="/magician-ramesh.png"
                      alt="A. Ramesh - Professional Magician"
                      width={400}
                      height={400}
                      className="rounded-2xl object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary">Why Choose Manusri Events?</h2>
          <p className="text-lg text-muted-foreground">
            Our commitment to excellence and customer satisfaction sets us apart
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card
                key={index}
                className="text-center group hover:shadow-lg transition-all duration-300 border-0 bg-card/50"
              >
                <CardHeader className="pb-4">
                  <div className="mx-auto w-16 h-16 rounded-full bg-magical-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-heading">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
