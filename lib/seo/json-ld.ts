import {
  business,
  services,
  remoteControls,
  faqItems,
  testimonials,
} from "@/config/business";

/* ── helpers ──────────────────────────────────────────────── */
function waLink(msg?: string) {
  const m = encodeURIComponent(msg ?? business.whatsapp.defaultMessage);
  return `https://wa.me/${business.whatsapp.number}?text=${m}`;
}

/* ── LocalBusiness + Locksmith ────────────────────────────── */
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "LocksmithService"],
    name: business.name,
    description: `Cerrajería de hogar en ${business.address.text}. Aperturas de emergencia 24 hs, copia de llaves, cambio de cerraduras y venta de controles remotos.`,
    url: business.domain,
    telephone: "+5411158698816",
    priceRange: "$$",
    image: [
      `${business.domain}/img-cerrajeria-1.jpg`,
      `${business.domain}/img-cerrajeria-2.jpg`,
      `${business.domain}/img-cerrajeria-3.jpg`,
      `${business.domain}/img-cerrajeria-4.jpg`,
    ],
    logo: `${business.domain}/Logo-cerrajeria-portena.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Boedo",
      addressLocality: business.address.city,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    areaServed: business.coverageAreas.map((area) => ({
      "@type": "City",
      name: `${area}, CABA`,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
        description: "Aperturas de emergencia 24 hs",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:00",
        closes: "19:00",
        description: "Atención general",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+5411158698816",
      contactType: "customer service",
      availableLanguage: "Spanish",
      contactOption: "TollFree",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: testimonials.length.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    review: testimonials.map((t) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: t.name,
      },
      reviewBody: t.text,
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de cerrajería en Boedo, CABA",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.description,
        },
      })),
    },
    sameAs: [waLink()],
  };
}

/* ── Products (remote controls) ───────────────────────────── */
export function productsJsonLd() {
  return remoteControls.map((ctrl) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: ctrl.name,
    description: ctrl.description,
    brand: {
      "@type": "Brand",
      name: business.name,
    },
    offers: {
      "@type": "Offer",
      url: waLink(
        `Hola! Quiero comprar el control ${ctrl.name}. ¿Qué necesitás para copiar la frecuencia?`,
      ),
      availability: "https://schema.org/InStock",
      priceCurrency: "ARS",
      seller: {
        "@type": "Organization",
        name: business.name,
      },
    },
  }));
}

/* ── FAQPage ──────────────────────────────────────────────── */
export function faqPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/* ── WebSite (for sitelinks) ──────────────────────────────── */
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: business.name,
    url: business.domain,
    description:
      "Cerrajero 24 hs en Boedo, CABA. Aperturas de emergencia, copia de llaves, cambio de cerraduras y controles remotos.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${business.domain}/#servicios?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}
