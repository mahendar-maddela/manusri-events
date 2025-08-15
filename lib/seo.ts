export interface SEOData {
  title: string
  description: string
  keywords: string
  canonical?: string
  ogImage?: string
  structuredData?: any
}

export const defaultSEO: SEOData = {
  title: "Manusri Events - Professional Magician & Event Entertainment in Hyderabad",
  description:
    "A. Ramesh brings magical entertainment to Hyderabad & Telangana. Birthday parties, weddings, corporate events, school shows. Book Telugu magician services today!",
  keywords:
    "magician hyderabad, birthday party entertainment, wedding magician, corporate events, school magic shows, telugu magician, manusri events",
  ogImage: "/og-image.png",
}

export const seoPages = {
  home: {
    title: "Manusri Events - Professional Magician & Event Entertainment in Hyderabad",
    description:
      "A. Ramesh brings magical entertainment to Hyderabad & Telangana. Birthday parties, weddings, corporate events, school shows. Book Telugu magician services today!",
    keywords:
      "magician hyderabad, birthday party entertainment, wedding magician, corporate events, school magic shows, telugu magician, manusri events",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Manusri Events",
      description: "Professional magician and event entertainment services in Hyderabad",
      url: "https://manusrievents.com",
      telephone: "+91-9848012345",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 17.385,
        longitude: 78.4867,
      },
      openingHours: "Mo-Su 09:00-21:00",
      priceRange: "₹₹",
      servesCuisine: "Entertainment Services",
      founder: {
        "@type": "Person",
        name: "A. Ramesh",
      },
    },
  },
  services: {
    title: "Magic Show Services - Birthday, Wedding, Corporate Events | Manusri Events",
    description:
      "Complete entertainment services in Hyderabad: Birthday magic shows, wedding entertainment, corporate events, school programs. Professional Telugu magician A. Ramesh.",
    keywords:
      "magic show services hyderabad, birthday party magician, wedding entertainment, corporate magic shows, school assembly programs",
  },
  gallery: {
    title: "Photo Gallery - Magic Shows & Events | Manusri Events Hyderabad",
    description:
      "View photos and videos from our magical performances across Hyderabad. Birthday parties, weddings, corporate events, and school shows by magician A. Ramesh.",
    keywords: "magic show photos hyderabad, event gallery, birthday party pictures, wedding entertainment photos",
  },
  packages: {
    title: "Magic Show Packages & Pricing | Manusri Events Hyderabad",
    description:
      "Compare our magic show packages for birthdays, weddings, and corporate events in Hyderabad. Transparent pricing, customizable options. Book your perfect package today!",
    keywords:
      "magic show packages hyderabad, birthday party pricing, wedding entertainment cost, corporate event packages",
  },
  contact: {
    title: "Contact Manusri Events - Book Magic Shows in Hyderabad | A. Ramesh",
    description:
      "Contact professional magician A. Ramesh for bookings in Hyderabad & Telangana. Call +91-9848012345 or fill our form. Quick response guaranteed!",
    keywords: "contact magician hyderabad, book magic show, manusri events booking, magician contact number hyderabad",
  },
  blog: {
    title: "Magic & Entertainment Blog | Tips, Ideas & Guides | Manusri Events",
    description:
      "Expert tips on planning magical events in Hyderabad. Birthday party ideas, wedding entertainment guides, educational magic shows, and festival celebration tips.",
    keywords: "magic show blog, event planning tips hyderabad, birthday party ideas, wedding entertainment guide",
  },
}
