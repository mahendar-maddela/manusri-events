import Head from "next/head"
import { type SEOData, defaultSEO } from "@/lib/seo"

interface SEOHeadProps {
  seo?: Partial<SEOData>
  path?: string
}

export function SEOHead({ seo, path }: SEOHeadProps) {
  const finalSEO = { ...defaultSEO, ...seo }
  const canonical = finalSEO.canonical || (path ? `https://manusrievents.com${path}` : "https://manusrievents.com")

  return (
    <Head>
      <title>{finalSEO.title}</title>
      <meta name="description" content={finalSEO.description} />
      <meta name="keywords" content={finalSEO.keywords} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={finalSEO.title} />
      <meta property="og:description" content={finalSEO.description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={finalSEO.ogImage || "/og-image.png"} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:site_name" content="Manusri Events" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalSEO.title} />
      <meta name="twitter:description" content={finalSEO.description} />
      <meta name="twitter:image" content={finalSEO.ogImage || "/og-image.png"} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="A. Ramesh - Manusri Events" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Language" content="en-IN" />

      {/* Local Business */}
      <meta name="geo.region" content="IN-TG" />
      <meta name="geo.placename" content="Hyderabad" />
      <meta name="geo.position" content="17.3850;78.4867" />
      <meta name="ICBM" content="17.3850, 78.4867" />

      {/* Structured Data */}
      {finalSEO.structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(finalSEO.structuredData),
          }}
        />
      )}
    </Head>
  )
}
