"use client";

import Image from "next/image";
import { Phone } from "lucide-react";
import { business } from "@/config/business";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { trackPhoneClick, trackWhatsAppClick } from "@/lib/tracking";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-foreground py-10 text-primary-foreground/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center">
        <Image
          src={business.logo}
          alt={business.name}
          width={60}
          height={60}
          className="h-12 w-auto brightness-0 invert"
        />

        {/* NAP — Name, Address, Phone */}
        <address className="not-italic text-sm leading-relaxed">
          <strong className="text-primary-foreground">{business.name}</strong>
          <br />
          {business.address.text}
          <br />
          <a
            href={business.phone.tel}
            onClick={trackPhoneClick}
            className="inline-flex items-center gap-1.5 font-semibold text-primary-foreground/90 underline underline-offset-2 hover:text-primary-foreground"
          >
            <Phone className="h-3.5 w-3.5" />
            {business.phone.display}
          </a>
          {" · "}
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackWhatsAppClick}
            className="underline underline-offset-2 hover:text-primary-foreground"
          >
            WhatsApp
          </a>
        </address>

        <p className="text-xs text-primary-foreground/50">
          &copy; {year}{" "}
          <a
            href="https://www.sds.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-primary-foreground/70 transition-colors"
          >
            Skyward Digital Solutions
          </a>
          . Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
