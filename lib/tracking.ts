declare global {
  interface Window {
    gtag: (command: string, action: string, params?: Record<string, unknown>) => void;
    dataLayer: unknown[];
  }
}

export function trackPhoneClick() {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion_event_purchase", {
      event_category: "Contact",
      event_label: "Phone Call",
    });
  }
}

export function trackWhatsAppClick() {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion_event_purchase", {
      event_category: "Contact",
      event_label: "WhatsApp",
    });
  }
}
