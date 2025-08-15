"use client"
import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Hyderabad",
    event: "Birthday Party",
    rating: 5,
    text: "A. Ramesh made my daughter's 1th birthday absolutely magical! The kids were completely mesmerized by his tricks, and even the adults were amazed. Professional, punctual, and truly entertaining.",
    date: "2024",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Vijayawada",
    event: "Wedding Reception",
    rating: 5,
    text: "Manusri Events provided excellent entertainment for our wedding reception. The magic show was a hit with all age groups, and the anchoring kept everyone engaged throughout the evening.",
    date: "2024",
  },
  {
    id: 3,
    name: "Dr. Sunitha Reddy",
    location: "Warangal",
    event: "School Annual Day",
    rating: 5,
    text: "Outstanding performance at our school's annual day function. The children were thrilled, and the educational magic tricks were both fun and informative. Highly recommended!",
    date: "2024",
  },
  {
    id: 4,
    name: "Venkat Rao",
    location: "Guntur",
    event: "Corporate Event",
    rating: 5,
    text: "Perfect entertainment for our company's family day. The magic show was engaging for both employees and their children. Very professional service and great value for money.",
    date: "2024",
  },
  {
    id: 5,
    name: "Lakshmi Devi",
    location: "Karimnagar",
    event: "Get-together Party",
    rating: 5,
    text: "Amazing experience! The talking doll show was a huge hit with the kids, and the game activities kept everyone entertained. Will definitely book again for future events.",
    date: "2024",
  },
  {
    id: 6,
    name: "Suresh",
    location: "Nalgonda",
    event: "Housewarming",
    rating: 5,
    text: "Manusri Events brought such a unique touch to our housewarming. The magician's performance was flawless, and everyone was talking about it for days. Highly recommended for any occasion.",
    date: "2024",
  },
  {
    id: 7,
    name: "Arvind Kumar",
    location: "Bangalore",
    event: "Corporate Gala",
    rating: 5,
    text: "Fantastic show for our corporate gala. The performance was engaging, and the interactive magic tricks were a highlight. Truly added a wow factor to our event.",
    date: "2024",
  },
  {
    id: 8,
    name: "Sreelatha ",
    location: "Kerala",
    event: "Wedding Anniversary",
    rating: 5,
    text: "The magic performance at our wedding anniversary was incredible. It was not just entertaining but also heartwarming. Every guest had a memorable experience. Thank you for making our day special!",
    date: "2024",
  },
  {
    id: 9,
    name: "Ravi ",
    location: "Hyderabad",
    event: "Children's Day Celebration",
    rating: 5,
    text: "The magic show at our Children’s Day celebration was an absolute hit. The kids were totally engaged, and even the adults had a great time. Highly professional and creative.",
    date: "2024",
  },
]

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it – hear from families and organizations who've experienced the magic
          </p>
          <p className="text-base font-medium text-accent" lang="te">
            మా కస్టమర్ల అభిప్రాయాలు
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <Card className="bg-gradient-to-br from-card to-muted/20 border-0 shadow-lg">
            <CardContent className="p-8 md:p-12 text-center">
              <Quote className="h-12 w-12 text-primary/20 mx-auto mb-6" />

              <div className="space-y-6">
                <p className="text-lg md:text-xl leading-relaxed text-foreground italic">
                  "{testimonials[currentIndex].text}"
                </p>

                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>

                <div className="space-y-2">
                  <h4 className="font-heading font-semibold text-lg text-foreground">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-muted-foreground">
                    {testimonials[currentIndex].event} • {testimonials[currentIndex].location}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={goToPrevious}
              className="rounded-full w-10 h-10 p-0 bg-transparent"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous testimonial</span>
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-primary w-8" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={goToNext}
              className="rounded-full w-10 h-10 p-0 bg-transparent"
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
