import {
  business,
  services,
  remoteControls,
  faqItems,
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
    description: `Cerrajería de hogar en ${business.address.text}. Aperturas 24 hs, copia de llaves, cambio de cerraduras y venta de controles remotos.`,
    url: business.domain,
    telephone: `+${business.whatsapp.number}`,
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
      telephone: `+${business.whatsapp.number}`,
      contactType: "customer service",
      availableLanguage: "Spanish",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de cerrajería",
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
    description: "Cerrajería en Boedo, CABA. Aperturas 24 hs, copia de llaves, cambio de cerraduras y controles remotos.",
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
