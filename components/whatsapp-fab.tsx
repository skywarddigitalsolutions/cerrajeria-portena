"use client";

import { getWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./whatsapp-icon";
import { trackWhatsAppClick } from "@/lib/tracking";

export function WhatsAppFab() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackWhatsAppClick}
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
    >
      <WhatsAppIcon className="h-7 w-7" />
      <span className="sr-only">Hablar por WhatsApp</span>
    </a>
  );
}
