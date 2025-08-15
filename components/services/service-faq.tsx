import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { ServiceData } from "@/lib/service-data"

interface ServiceFAQProps {
  service: ServiceData
}

export function ServiceFAQ({ service }: ServiceFAQProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Common questions about our {service.title.toLowerCase()} service
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {service.faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-heading font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
