import Image from "next/image";
import { Clock, MapPin } from "lucide-react";
import { business } from "@/config/business";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./whatsapp-icon";

export function AboutSection() {
  return (
    <section id="nosotros" className="bg-secondary py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Sobre {business.name}
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left: text */}
          <div className="flex flex-col justify-center gap-6">
            <p className="text-base leading-relaxed text-muted-foreground">
              Somos una cerrajería de hogar con{" "}
              <strong className="text-foreground">más de 5 años de experiencia</strong>{" "}
              en el barrio de Boedo y alrededores de CABA. Nos especializamos
              en aperturas de emergencia, copia de llaves, cambio e
              instalación de cerraduras, y venta de controles remotos
              clonados.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Trabajamos con compromiso, rapidez y transparencia.
              No hacemos cerrajería de autos: nos enfocamos al 100% en la
              seguridad de tu hogar.
            </p>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm text-foreground">
                <Clock className="h-5 w-5 text-primary" />
                <span>
                  Aperturas: <strong>{business.hours.aperturas}</strong> — Resto de
                  servicios: <strong>{business.hours.resto}</strong>
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground">
                <MapPin className="h-7 w-7 text-primary" />
                <span>
                  {business.address.text} — Zonas:{" "}
                  {business.coverageAreas.join(", ")}
                </span>
              </div>
            </div>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Contactar
            </a>
          </div>

          {/* Right: map */}
          <div className="overflow-hidden rounded-xl border border-border shadow-sm">
            <iframe
              title="Ubicación de Cerrajería Porteña en Google Maps"
              src={business.googleMapsEmbed}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        {/* Images Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mt-16">
          {business.images.map((img, idx) => (
            <div
              key={idx}
              className="group relative aspect-square overflow-hidden rounded-xl border border-border bg-muted shadow-sm"
            >
              <Image
                src={img}
                alt={[
                  "Cerrajero en Boedo — herramientas y trabajo en el local",
                  "Copia de llaves y cambio de cerraduras en Boedo, CABA",
                  "Apertura de puertas de emergencia — Cerrajería Porteña",
                  "Controles remotos y cerraduras — local de Cerrajería Porteña en Boedo",
                ][idx]}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
