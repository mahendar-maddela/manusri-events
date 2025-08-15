import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone } from "lucide-react"

export default function FAQPage() {
  const primaryPhone = "+91 9666286965"
  const whatsappUrl = `https://wa.me/919666286965?text=Hi%20Manusri%20Events%2C%20I%20have%20a%20question%20about%20your%20services`

  const faqs = [
    {
      category: "General",
      questions: [
        {
          question: "What areas do you serve?",
          answer:
            "We provide entertainment services across Telangana and Andhra Pradesh, including Hyderabad, Warangal, Karimnagar, Vijayawada, Guntur, Visakhapatnam, and surrounding areas. We can also travel for special events.",
        },
        {
          question: "How far in advance should I book?",
          answer:
            "We recommend booking at least 2-3 weeks in advance, especially during festival seasons and wedding months. However, we can accommodate last-minute bookings based on availability.",
        },
        {
          question: "Do you provide services in multiple languages?",
          answer:
            "Yes! Our performances are available in Telugu, Hindi, and English. We adapt our language based on your audience to ensure everyone enjoys the show.",
        },
        {
          question: "What is your cancellation policy?",
          answer:
            "We understand that plans can change. Cancellations made 48 hours before the event receive a full refund. For cancellations within 48 hours, 50% of the booking amount is retained.",
        },
      ],
    },
    {
      category: "Booking & Pricing",
      questions: [
        {
          question: "How do I get a quote for my event?",
          answer:
            "Contact us via WhatsApp or phone with your event details: date, location, type of event, expected audience size, and preferred services. We'll provide a customized quote within 24 hours.",
        },
        {
          question: "What factors affect the pricing?",
          answer:
            "Pricing depends on the type of service, duration, audience size, location, date, and any additional requirements like sound systems or special props.",
        },
        {
          question: "Do you require advance payment?",
          answer:
            "We typically require 30% advance payment to confirm the booking, with the balance due on the event day. Payment can be made via cash, bank transfer, or UPI.",
        },
        {
          question: "Are there any hidden charges?",
          answer:
            "No hidden charges! Our quotes include all mentioned services. Additional costs may apply for travel beyond 50km, extra equipment, or last-minute changes.",
        },
      ],
    },
    {
      category: "Event Logistics",
      questions: [
        {
          question: "What space requirements do you have?",
          answer:
            "For magic shows, we need a minimum 8x6 feet performance area. Game shows require more space depending on activities. We can adapt to most venues and provide specific requirements after discussing your event.",
        },
        {
          question: "Do you provide sound equipment?",
          answer:
            "Yes, we provide professional sound equipment suitable for audiences up to 200 people. For larger venues, we can arrange additional equipment at a nominal cost.",
        },
        {
          question: "What if it rains during an outdoor event?",
          answer:
            "We always have backup plans for outdoor events. We can quickly adapt to covered areas or reschedule if necessary. We recommend having a covered backup location for outdoor bookings.",
        },
        {
          question: "How early do you arrive for setup?",
          answer:
            "We typically arrive 30-60 minutes before the performance time for setup and sound checks. This ensures everything is ready for a smooth start to your event.",
        },
      ],
    },
    {
      category: "Services",
      questions: [
        {
          question: "Can you customize performances for specific themes?",
          answer:
            "We love creating themed performances. Whether it's a superhero birthday party, corporate team-building event, or traditional wedding celebration, we can customize our act accordingly.",
        },
        {
          question: "Are your performances suitable for all ages?",
          answer:
            "Yes, all our performances are family-friendly and suitable for all ages. We adapt our content and interaction style based on the audience composition.",
        },
        {
          question: "Can you combine multiple services for one event?",
          answer:
            "Definitely! Many clients book combinations like magic show + game show, or anchoring + entertainment. We offer package deals for multiple services at the same event.",
        },
        {
          question: "Do you provide certificates or prizes for games?",
          answer:
            "Yes, we provide age-appropriate prizes for game shows and can arrange certificates for special occasions like school events or corporate team-building activities.",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="bg-magical-gradient-light py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-primary">Frequently Asked Questions</h1>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about Manusri Events and our magical entertainment services
            </p>
            <p className="text-base text-primary/80 font-medium">సాధారణంగా అడిగే ప్రశ్నలు</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqs.map((category) => (
              <div key={category.category} className="space-y-6">
                <h2 className="text-2xl font-bold text-primary border-b border-border pb-2">{category.category}</h2>

                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`${category.category}-${index}`}
                      className="bg-muted/30 rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left font-medium hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold font-serif text-primary">Still Have Questions?</h2>
            <p className="text-lg text-muted-foreground">
              Can't find the answer you're looking for? We're here to help! Contact us directly and we'll get back to
              you quickly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Ask via WhatsApp
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={`tel:${primaryPhone}`} className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call {primaryPhone}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  )
}
