import { type NextRequest, NextResponse } from "next/server"
import { z } from "zod"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Please enter a valid Indian phone number"),
  email: z.string().email("Please enter a valid email").optional().or(z.literal("")),
  city: z.string().min(2, "City is required"),
  eventType: z.string().min(1, "Please select an event type"),
  eventDate: z.string().min(1, "Event date is required"),
  audienceSize: z.string().min(1, "Please specify audience size"),
  message: z.string().min(10, "Please provide more details about your event"),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = contactSchema.parse(body)

    // In a real application, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Send SMS confirmation
    // 4. Integrate with CRM

    console.log("Contact form submission:", validatedData)

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // For demo purposes, we'll just return success
    return NextResponse.json({
      success: true,
      message: "Thank you for your inquiry! We will contact you within 2 hours.",
      data: {
        name: validatedData.name,
        phone: validatedData.phone,
        eventType: validatedData.eventType,
      },
    })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Please check your form data",
          errors: error.errors,
        },
        { status: 400 },
      )
    }

    console.error("Contact form error:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again or call us directly.",
      },
      { status: 500 },
    )
  }
}
