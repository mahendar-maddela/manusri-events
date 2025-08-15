import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { PhoneCTA } from "@/components/phone-cta"
import { Hero } from "@/components/sections/hero"
import { ServicesGrid } from "@/components/sections/services-grid"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { FeaturedPackages } from "@/components/sections/featured-packages"
import { TestimonialSlider } from "@/components/sections/testimonial-slider"
import { CTABand } from "@/components/sections/cta-band"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <ServicesGrid />
        <WhyChooseUs />
        <FeaturedPackages />
        <TestimonialSlider />
        <CTABand />
      </main>
      <WhatsAppFloat />
      <PhoneCTA />
    </div>
  )
}
