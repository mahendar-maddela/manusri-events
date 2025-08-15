interface StructuredDataProps {
  data: any
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  )
}

// Service-specific structured data
export function ServiceStructuredData({ service }: { service: any }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.pitch,
    provider: {
      "@type": "LocalBusiness",
      name: "Manusri Events",
      telephone: "+91-9848012345",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        addressCountry: "IN",
      },
    },
    areaServed: [
      {
        "@type": "City",
        name: "Hyderabad",
      },
      {
        "@type": "State",
        name: "Telangana",
      },
      {
        "@type": "State",
        name: "Andhra Pradesh",
      },
    ],
    offers: service.packages?.map((pkg: any) => ({
      "@type": "Offer",
      name: pkg.name,
      description: pkg.description,
      price: pkg.price,
      priceCurrency: "INR",
    })),
  }

  return <StructuredData data={structuredData} />
}

// Blog post structured data
export function BlogStructuredData({ post }: { post: any }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Manusri Events",
      logo: {
        "@type": "ImageObject",
        url: "https://manusrievents.com/logo.png",
      },
    },
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://manusrievents.com/blog/${post.id}`,
    },
    keywords: post.keywords,
  }

  return <StructuredData data={structuredData} />
}
