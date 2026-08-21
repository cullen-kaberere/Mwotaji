import "./globals.css"
import { CartProvider } from "@/context/CartContext"
import Footer from "@/components/Footer"

const siteUrl = "https://mwotajiofficial.vercel.app"

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mwotaji Official | Premium Sportswear & Streetwear in Kenya",
    template: "%s | Mwotaji Official",
  },
  description:
    "Performance wear for dreamers in motion. Born in Kenya, engineered for community, sport, and the discipline of the African dreamer. Shop hoodies, tees, vests & essentials.",
  keywords: [
    "Mwotaji",
    "Mwotaji Official",
    "Mwotaji Kenya",
    "Mwotaji clothing",
    "Kenyan sportswear brand",
    "streetwear Kenya",
    "local clothing brands Nairobi",
    "African lifestyle apparel",
    "The Dreamers Essential",
    "buy streetwear Nairobi",
    "East Africa gym wear",
    "oversized tees Kenya",
  ],
  authors: [{ name: "Mwotaji" }],
  creator: "Mwotaji",
  publisher: "Mwotaji",
  icons: {
    icon: "/Mwotaji-favicon2.png",
    apple: "/Mwotaji-favicon2.png",
  },
  verification: {
    google: "etG45kuAvz0ACPgFV7aExkvJWUvx8-_XtQHnaTlpDEk",
  },
  openGraph: {
    title: "Mwotaji Official | Wear Your Purpose",
    description:
      "Performance wear for dreamers in motion. Born in Kenya, inspired by community, sport, and the discipline of the African dreamer.",
    url: siteUrl,
    siteName: "Mwotaji Official",
    images: [
      {
        url: "/Mwotaji-favicon2.png",
        width: 1200,
        height: 630,
        alt: "Mwotaji Official Logo & Collection",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mwotaji Official | Premium Sportswear & Streetwear Kenya",
    description:
      "Performance wear for dreamers in motion. Born in Kenya, engineered for community and sport.",
    images: ["/Mwotaji-favicon2.png"],
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
  alternates: {
    canonical: siteUrl,
  },
}

export default function RootLayout({ children }) {
  // JSON-LD structured schema for Google Knowledge Graph & AI Crawlers
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Brand",
        "@id": `${siteUrl}/#brand`,
        "name": "Mwotaji",
        "alternateName": ["Mwotaji Official", "Mwotaji Kenya"],
        "url": siteUrl,
        "logo": `${siteUrl}/Mwotaji-favicon2.png`,
        "description":
          "African sportswear and lifestyle apparel brand based in Nairobi, Kenya, crafted for visionaries and dreamers."
      },
      {
        "@type": "ClothingStore",
        "@id": `${siteUrl}/#store`,
        "name": "Mwotaji Official",
        "url": siteUrl,
        "logo": `${siteUrl}/Mwotaji-favicon2.png`,
        "priceRange": "KES 2600 - KES 4800",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Nairobi",
          "addressCountry": "KE"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -1.286389,
          "longitude": 36.817223
        },
        "areaServed": ["Kenya", "East Africa", "Africa"]
      }
    ]
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="dark">
        <CartProvider>
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}