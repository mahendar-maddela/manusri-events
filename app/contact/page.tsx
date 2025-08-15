"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Phone, MessageCircle, Mail, MapPin, Clock, Send } from "lucide-react"
import { ContactInfo } from "@/components/contact/contact-info"
import { ContactMap } from "@/components/contact/contact-map"

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Please enter a valid Indian mobile number"),
  email: z.string().email("Please enter a valid email").optional().or(z.literal("")),
  city: z.string().min(2, "Please enter your city"),
  eventType: z.string().min(1, "Please select an event type"),
  eventDate: z.string().min(1, "Please select an event date"),
  audienceSize: z.string().min(1, "Please select audience size"),
  message: z.string().min(10, "Please provide more details about your event"),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const primaryPhone = "+91 9666286965"
  const secondaryPhone = "+91 6305558755"
  const email = "medhamanusri@gmail.com"
  const whatsappUrl = `https://wa.me/919666286965?text=Hi%20Manusri%20Events%2C%20I%20want%20to%20book%20your%20services`

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const eventTypes = [
    "Birthday Party",
    "Wedding Celebration",
    "Corporate Event",
    "School/College Show",
    "Get-together Party",
    "Community Event",
    "Festival Celebration",
    "Other",
  ]

  const audienceSizes = [
    "10-30 people",
    "30-60 people",
    "60-100 people",
    "100-200 people",
    "200-500 people",
    "500+ people",
  ]

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast({
          title: "Message Sent Successfully!",
          description: "We'll contact you within 24 hours to discuss your event.",
        })

        // Create WhatsApp message with form details
        const whatsappMessage = `Hi Manusri Events! I submitted a booking inquiry:
  Name: ${data.name}
  Phone: ${data.phone}
  Event: ${data.eventType}
  Date: ${data.eventDate}
  City: ${data.city}
  Audience: ${data.audienceSize}
  Details: ${data.message}`

        const whatsappLink = `https://wa.me/919666286965?text=${encodeURIComponent(whatsappMessage)}`

        // Open WhatsApp with prefilled message
        window.open(whatsappLink, "_blank")

        reset()
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try calling us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen">
      {/* <Header /> */}

      {/* Hero Section */}
      <section className="bg-magical-gradient-light py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-primary">Contact & Booking</h1>
            <p className="text-lg text-muted-foreground">
              Ready to make your event magical? Get in touch with us for a free consultation and quote
            </p>
            <p className="text-base text-primary/80 font-medium">మాతో సంప్రదించండి మరియు బుకింగ్ చేయండి</p>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold font-serif text-primary mb-6">Get In Touch</h2>
              <p className="text-muted-foreground mb-8">
                We're here to help make your event unforgettable. Contact us through any of the methods below, and we'll
                respond quickly with a personalized quote.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6 grid sm:grid-cols-1 lg:grid-cols-3 w-full gap-4 max-w-7xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Phone className="text-primary" />
                    Phone Numbers
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <a href={`tel:${primaryPhone}`} className="text-lg font-semibold text-primary hover:underline">
                      {primaryPhone}
                    </a>
                    <p className="text-sm text-muted-foreground">Primary (Available 24/7)</p>
                  </div>
                  <div>
                    <a href={`tel:${secondaryPhone}`} className="text-lg font-semibold text-muted-foreground hover:text-primary hover:underline">
                      {secondaryPhone}
                    </a>
                    <p className="text-sm text-muted-foreground">Secondary</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <MessageCircle className="h-5 w-5 text-green-500" />
                    WhatsApp
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full bg-green-500 hover:bg-green-600">
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <MessageCircle className="h-4 w-4" />
                      Chat on WhatsApp
                    </a>
                  </Button>
                  <p className="text-sm text-muted-foreground mt-2">Fastest response time - Usually within minutes!</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a href={`mailto:${email}`} className="text-lg text-primary hover:underline">
                    {email}
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">We respond within 24 hours</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    Service Areas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium">Telangana & Andhra Pradesh</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Hyderabad, Warangal, Karimnagar, Vijayawada, Guntur, Visakhapatnam, and surrounding areas
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    Response Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm">
                    <li><strong>WhatsApp:</strong> Within minutes</li>
                    <li><strong>Phone:</strong> Immediate (24/7 available)</li>
                    <li><strong>Email:</strong> Within 24 hours</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

          </div>

          {/* Booking Form */}
          {/* <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Book Your Event</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you with a personalized quote within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          {...register("name")}
                          placeholder="Enter your full name"
                          className={errors.name ? "border-red-500" : ""}
                        />
                        {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Mobile Number *</Label>
                        <Input
                          id="phone"
                          {...register("phone")}
                          placeholder="10-digit mobile number"
                          className={errors.phone ? "border-red-500" : ""}
                        />
                        {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email (Optional)</Label>
                        <Input
                          id="email"
                          type="email"
                          {...register("email")}
                          placeholder="your.email@example.com"
                          className={errors.email ? "border-red-500" : ""}
                        />
                        {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          {...register("city")}
                          placeholder="Your city"
                          className={errors.city ? "border-red-500" : ""}
                        />
                        {errors.city && <p className="text-sm text-red-500">{errors.city.message}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="eventType">Event Type *</Label>
                        <Select onValueChange={(value) => setValue("eventType", value)}>
                          <SelectTrigger className={errors.eventType ? "border-red-500" : ""}>
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
                        {errors.eventType && <p className="text-sm text-red-500">{errors.eventType.message}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="eventDate">Event Date *</Label>
                        <Input
                          id="eventDate"
                          type="date"
                          {...register("eventDate")}
                          min={new Date().toISOString().split("T")[0]}
                          className={errors.eventDate ? "border-red-500" : ""}
                        />
                        {errors.eventDate && <p className="text-sm text-red-500">{errors.eventDate.message}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="audienceSize">Expected Audience Size *</Label>
                      <Select onValueChange={(value) => setValue("audienceSize", value)}>
                        <SelectTrigger className={errors.audienceSize ? "border-red-500" : ""}>
                          <SelectValue placeholder="Select audience size" />
                        </SelectTrigger>
                        <SelectContent>
                          {audienceSizes.map((size) => (
                            <SelectItem key={size} value={size}>
                              {size}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.audienceSize && <p className="text-sm text-red-500">{errors.audienceSize.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Event Details & Special Requirements *</Label>
                      <Textarea
                        id="message"
                        {...register("message")}
                        placeholder="Please provide details about your event, venue, specific services needed, budget range, and any special requirements..."
                        rows={4}
                        className={errors.message ? "border-red-500" : ""}
                      />
                      {errors.message && <p className="text-sm text-red-500">{errors.message.message}</p>}
                    </div>

                    <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Booking Inquiry
                        </>
                      )}
                    </Button>

                    <div className="text-center text-sm text-muted-foreground">
                      <p>
                        By submitting this form, you'll also receive a WhatsApp message link to continue the conversation
                        instantly.
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div> */}
        </div>
      </div>

      {/* Quick Contact Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold font-serif text-primary">Need Immediate Assistance?</h2>
            <p className="text-lg text-muted-foreground">For urgent bookings or quick questions, contact us directly</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <Phone className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle>Call Now</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <a href={`tel:${primaryPhone}`}>{primaryPhone}</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <MessageCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <CardTitle>WhatsApp</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full bg-green-500 hover:bg-green-600">
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      Chat Now
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Mail className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle>Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" asChild className="w-full bg-transparent">
                    <a href={`mailto:${email}`}>Send Email</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  )
}
