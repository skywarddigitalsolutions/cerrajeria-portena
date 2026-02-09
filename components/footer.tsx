import Image from "next/image";
import { business } from "@/config/business";
import { getWhatsAppUrl } from "@/lib/whatsapp";

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
        <p className="text-sm">
          {business.name} &middot; {business.address.text} &middot;{" "}
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-primary-foreground"
          >
            WhatsApp
          </a>
        </p>
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
