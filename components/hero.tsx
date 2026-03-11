import Image from "next/image";
import { Shield, Clock, MapPin, Phone } from "lucide-react";
import { business } from "@/config/business";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const badges = [
  { icon: Clock, label: "Aperturas 24 hs" },
  { icon: MapPin, label: "Boedo / Almagro / Caballito" },
  { icon: Shield, label: "Trabajo confiable" },
] as const;

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-foreground py-20 md:py-28 lg:py-32"
    >
      {/* Background Image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={business.images[0]}
          alt="Cerrajero en Boedo realizando apertura de puerta"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/80 to-foreground" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 text-center">
        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-3">
          {badges.map((b) => (
            <span
              key={b.label}
              className="inline-flex items-center gap-1.5 rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary-foreground"
            >
              <b.icon className="h-3.5 w-3.5" />
              {b.label}
            </span>
          ))}
        </div>

        {/* H1 */}
        <h1 className="max-w-4xl text-balance text-4xl font-extrabold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-7xl">
          Cerrajero 24hs en Boedo
        </h1>

        {/* Highlighted Service */}
        <div className="flex flex-col items-center gap-2">
          <p className="text-xl font-bold uppercase tracking-widest text-accent md:text-2xl">
            ¿Te quedaste encerrado? Llamanos ya
          </p>
          <div className="h-1 w-12 bg-accent rounded-full" />
        </div>

        {/* Subtitle */}
        <p className="max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/80">
          Aperturas de emergencia las 24 hs, los 365 días. Cerrajería exclusiva
          de hogar con más de 5 años en el rubro en{" "}
          {business.coverageAreas.slice(0, 3).join(", ")} y alrededores.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={business.phone.tel}
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-base font-bold text-accent-foreground shadow-lg transition-transform hover:scale-105"
          >
            <Phone className="h-5 w-5" />
            Llamar ahora — {business.phone.display}
          </a>
          <a
            href={getWhatsAppUrl("Hola! Me quedé encerrado/a y necesito una apertura urgente.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/30 px-6 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            WhatsApp
          </a>
        </div>

        {/* Trust line */}
        <p className="text-sm text-primary-foreground/60">
          {business.differentiators.join(" · ")}
        </p>
      </div>
    </section>
  );
}
