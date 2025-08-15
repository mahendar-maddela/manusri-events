import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { PhoneCTA } from "@/components/phone-cta"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Manusri Events | Magician & Event Organiser | Telangana & Andhra Pradesh",
  description:
    "Professional magic shows, birthday parties, weddings, and event entertainment across Telangana and Andhra Pradesh. A. Ramesh - Expert magician and event organizer.",
  keywords:
    "magician hyderabad, birthday party magician, wedding entertainment telangana, event organizer andhra pradesh, magic show, game show",
  authors: [{ name: "A. Ramesh", url: "https://manusrievents.com" }],
  creator: "Manusri Events",
  publisher: "Manusri Events",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://manusrievents.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/en",
      "te-IN": "/te",
    },
  },
  openGraph: {
    title: "Manusri Events | Magician & Event Organiser",
    description: "Professional magic shows and event entertainment across Telangana and Andhra Pradesh",
    url: "https://manusrievents.com",
    siteName: "Manusri Events",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manusri Events | Magician & Event Organiser",
    description: "Professional magic shows and event entertainment across Telangana and Andhra Pradesh",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-IN" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <head>
        <style>{`
          html {
            --font-sans: ${dmSans.style.fontFamily};
            --font-heading: ${spaceGrotesk.style.fontFamily};
          }
        `}</style>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <PhoneCTA />
      </body>
    </html>
  )
}
