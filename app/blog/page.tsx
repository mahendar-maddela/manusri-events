import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { PhoneCTA } from "@/components/phone-cta"
import { BlogHero } from "@/components/blog/blog-hero"
import { BlogGrid } from "@/components/blog/blog-grid"

export const metadata = {
  title: "Blog | Event Planning Tips & Magic Show Ideas | Manusri Events",
  description:
    "Expert tips for planning birthday parties, weddings, and events in Telangana & Andhra Pradesh. Magic show ideas, entertainment guides, and local event planning advice.",
  keywords:
    "event planning blog, birthday party ideas telangana, wedding entertainment tips, magic show planning, hyderabad event tips",
}

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* <Header /> */}
      <main>
        <BlogHero />
        <BlogGrid />
      </main>
      {/* <Footer /> */}
      <WhatsAppFloat />
      <PhoneCTA />
    </div>
  )
}
