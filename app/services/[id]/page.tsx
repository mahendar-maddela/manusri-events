import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { PhoneCTA } from "@/components/phone-cta"
import { ServiceHero } from "@/components/services/service-hero"
import { ServiceDetails } from "@/components/services/service-details"
import { ServicePackages } from "@/components/services/service-packages"
import { ServiceFAQ } from "@/components/services/service-faq"
import { ServiceCTA } from "@/components/services/service-cta"
import { servicesData } from "@/lib/service-data"

interface ServicePageProps {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((id) => ({
    id,
  }))
}

export async function generateMetadata({ params }: ServicePageProps) {
  const service = servicesData[params.id]

  if (!service) {
    return {
      title: "Service Not Found | Manusri Events",
    }
  }

  return {
    title: `${service.title} | Manusri Events | Professional Entertainment Services`,
    description: service.description,
    keywords: service.keywords,
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = servicesData[params.id]

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ServiceHero service={service} />
        <ServiceDetails service={service} />
        <ServicePackages service={service} />
        <ServiceFAQ service={service} />
        <ServiceCTA service={service} />
      </main>
      <Footer />
      <WhatsAppFloat />
      <PhoneCTA />
    </div>
  )
}
