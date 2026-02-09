import { business } from "@/config/business";

export function getWhatsAppUrl(message?: string): string {
  const msg = encodeURIComponent(
    message ?? business.whatsapp.defaultMessage,
  );
  return `https://wa.me/${business.whatsapp.number}?text=${msg}`;
}
