import React from "react"
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

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

const DOMAIN = "https://xn--cerrajeriaportea-lub.com.ar";

export const metadata: Metadata = {
  title:
    "Cerrajero 24 hs en Boedo | Cerrajería Porteña — Aperturas de Emergencia",
  description:
    "¿Te quedaste encerrado? Cerrajero 24 hs en Boedo, Almagro y Villa Crespo (CABA). Aperturas de emergencia, copia de llaves y cambio de cerraduras. Llamá ahora: 11 5869-8816.",
  metadataBase: new URL(DOMAIN),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Cerrajero 24 hs en Boedo — Aperturas de Emergencia | Cerrajería Porteña",
    description:
      "¿Te quedaste encerrado? Aperturas 24 hs en Boedo, Almagro y Villa Crespo. Llamá ahora: 11 5869-8816.",
    url: DOMAIN,
    siteName: "Cerrajería Porteña",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: `${DOMAIN}/img-cerrajeria-1.jpg`,
        width: 1200,
        height: 630,
        alt: "Cerrajero en Boedo — Cerrajería Porteña",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cerrajero 24 hs en Boedo — Aperturas de Emergencia",
    description:
      "¿Te quedaste encerrado? Aperturas 24 hs en Boedo, Almagro y Villa Crespo. Llamá ahora: 11 5869-8816.",
    images: [`${DOMAIN}/img-cerrajeria-1.jpg`],
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

        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-46E0N71DYF"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-46E0N71DYF');
          `}
        </Script>
      </body>
    </html>
  );
}
