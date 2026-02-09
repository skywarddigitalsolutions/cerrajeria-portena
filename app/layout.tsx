import React from "react"
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import {
  localBusinessJsonLd,
  productsJsonLd,
  faqPageJsonLd,
  websiteJsonLd,
} from "@/lib/seo/json-ld";
import { LoadingAnimation } from "@/components/loading-animation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const DOMAIN = "https://cerrajeriaporteña.com.ar";

export const metadata: Metadata = {
  title:
    "Cerrajería Porteña | Cerrajero en Boedo, CABA — Aperturas 24 hs",
  description:
    "Cerrajería en Boedo, Almagro y Villa Crespo (CABA). Aperturas 24 hs, copia de llaves, cambio de cerraduras y controles remotos. Consultá por WhatsApp.",
  keywords: [
    "cerrajero",
    "cerrajería",
    "cerrajería Boedo",
    "cerrajería Almagro",
    "cerrajería Villa Crespo",
    "cerrajería CABA",
    "aperturas 24 hs",
    "copia de llaves",
    "cambio de cerradura",
    "cambio de combinación",
    "controles remotos",
    "clonar frecuencia"
  ],
  metadataBase: new URL(DOMAIN),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Cerrajería Porteña — Cerrajero en Boedo, CABA",
    description:
      "Aperturas 24 hs, copia de llaves, cambio de cerraduras y controles remotos en Boedo, Almagro y Villa Crespo.",
    url: DOMAIN,
    siteName: "Cerrajería Porteña",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cerrajería Porteña — Cerrajero en Boedo, CABA",
    description:
      "Aperturas 24 hs, copia de llaves, cambio de cerraduras y controles remotos en CABA.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/Logo-cerrajeria-portena.png",
    shortcut: "/Logo-cerrajeria-portena.png",
    apple: "/Logo-cerrajeria-portena.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#1a5fb4",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR" className={inter.variable}>
      <head>
        {/* LocalBusiness JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd()),
          }}
        />
        {/* Products JSON-LD */}
        {productsJsonLd().map((product, i) => (
          <script
            key={`product-${i}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(product),
            }}
          />
        ))}
        {/* FAQPage JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqPageJsonLd()),
          }}
        />
        {/* WebSite JSON-LD (for sitelinks) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd()),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <LoadingAnimation />
        {children}
      </body>
    </html>
  );
}
