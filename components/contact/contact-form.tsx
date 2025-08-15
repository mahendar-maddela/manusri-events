"use client"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { Send, MessageCircle, Loader2 } from "lucide-react"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[+]?[0-9\s-()]+$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email").optional().or(z.literal("")),
  city: z.string().min(2, "Please enter your city"),
  eventType: z.string().min(1, "Please select an event type"),
  eventDate: z.string().min(1, "Please select your event date"),
  audienceSize: z.string().min(1, "Please enter approximate audience size"),
  message: z.string().min(10, "Please provide more details about your event"),
})

type ContactFormData = z.infer<typeof contactSchema>

const eventTypes = [
  "Birthday Party",
  "Wedding Reception",
  "Sangeet Ceremony",
  "School Annual Day",
  "College Fest",
  "Corporate Event",
  "Community Gathering",
  "Religious Festival",
  "Other",
]

const cities = [
  "Hyderabad",
  "Vijayawada",
  "Warangal",
  "Guntur",
  "Karimnagar",
  "Nizamabad",
  "Khammam",
  "Vizag",
  "Tirupati",
  "Kurnool",
  "Nellore",
  "Other",
]

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const watchedValues = watch()

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Create WhatsApp message with form details
      const whatsappMessage = `Hi Manusri Events! I'm interested in booking for my event.

Details:
- Name: ${data.name}
- Phone: ${data.phone}
- Email: ${data.email || "Not provided"}
- City: ${data.city}
- Event Type: ${data.eventType}
- Event Date: ${data.eventDate}
- Audience Size: ${data.audienceSize}
- Message: ${data.message}`

      const whatsappUrl = `https://wa.me/919666286965?text=${encodeURIComponent(whatsappMessage)}`

      // Show success toast
      toast({
        title: "Form submitted successfully!",
        description: "We'll contact you within 2 hours. You can also WhatsApp us directly.",
      })

      // Open WhatsApp
      window.open(whatsappUrl, "_blank")

      // Reset form
      reset()

      // Track event (placeholder for Google Analytics)
      if (typeof window !== "undefined" && (window as any).gtag) {
        ;(window as any).gtag("event", "contact_form_submit", {
          event_category: "engagement",
          event_label: data.eventType,
        })
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly via WhatsApp.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const generateWhatsAppLink = () => {
    if (!watchedValues.name || !watchedValues.phone) return "#"

    const message = `Hi Manusri Events! I'm ${watchedValues.name} from ${watchedValues.city || "[City]"}. I want to book ${watchedValues.eventType || "[Event Type]"} for ${watchedValues.eventDate || "[Date]"}. Please contact me at ${watchedValues.phone}.`

    return `https://wa.me/919666286965?text=${encodeURIComponent(message)}`
  }

  return (
    <section className="py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto lg:mx-0">
          <CardHeader>
            <CardTitle className="text-2xl font-heading">Book Your Event</CardTitle>
            <CardDescription>
              Fill out the form below and we'll get back to you with a personalized quote within 2 hours.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name *</label>
                  <Input {...register("name")} placeholder="Your full name" />
                  {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone Number *</label>
                  <Input {...register("phone")} placeholder="+91 9876543210" type="tel" />
                  {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
                </div>
              </div>

              {/* Email and City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email (Optional)</label>
                  <Input {...register("email")} placeholder="your.email@example.com" type="email" />
                  {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">City *</label>
                  <Select onValueChange={(value) => setValue("city", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your city" />
                    </SelectTrigger>
                    <SelectContent>
                      {cities.map((city) => (
                        <SelectItem key={city} value={city}>
                          {city}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.city && <p className="text-sm text-destructive">{errors.city.message}</p>}
                </div>
              </div>

              {/* Event Type and Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Event Type *</label>
                  <Select onValueChange={(value) => setValue("eventType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select event type" />
                    </SelectTrigger>
                    <SelectContent>
                      {eventTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.eventType && <p className="text-sm text-destructive">{errors.eventType.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Event Date *</label>
                  <Input {...register("eventDate")} type="date" />
                  {errors.eventDate && <p className="text-sm text-destructive">{errors.eventDate.message}</p>}
                </div>
              </div>

              {/* Audience Size */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Approximate Audience Size *</label>
                <Input {...register("audienceSize")} placeholder="e.g., 50 guests, 100 children, 200 people" />
                {errors.audienceSize && <p className="text-sm text-destructive">{errors.audienceSize.message}</p>}
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Event Details & Requirements *</label>
                <Textarea
                  {...register("message")}
                  placeholder="Tell us about your event - venue details, specific requirements, budget range, any special requests..."
                  rows={4}
                />
                {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
              </div>

              {/* Submit Buttons */}
              <div className="space-y-3">
                <Button type="submit" className="w-full bg-magical-gradient hover:opacity-90" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Submit & Get Quote
                    </>
                  )}
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  className="w-full bg-transparent"
                  asChild
                  disabled={!watchedValues.name || !watchedValues.phone}
                >
                  <a href={generateWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Send via WhatsApp
                  </a>
                </Button>
              </div>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to be contacted by Manusri Events regarding your event requirements.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
