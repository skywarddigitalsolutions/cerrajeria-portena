import { MapPin } from "lucide-react";
import { business } from "@/config/business";

export function CoverageSection() {
  return (
    <section className="bg-background pb-10 md:pb-24 md:pt-10" aria-labelledby="coverage-heading">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <h2
            id="coverage-heading"
            className="text-3xl font-bold tracking-tight text-foreground md:text-4xl"
          >
            Zonas de cobertura en CABA
          </h2>
          <p className="mt-3 text-muted-foreground">
            Brindamos servicios de cerrajería y venta de controles remotos en
            los siguientes barrios de la Ciudad Autónoma de Buenos Aires.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {business.coverageAreas.map((area) => (
            <div
              key={area}
              className="flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 shadow-sm"
            >
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-card-foreground">
                {area}
              </span>
            </div>
          ))}
          <div className="flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-5 py-2.5">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">
              Y alrededores de CABA
            </span>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Cerrajero en <strong>Boedo</strong>, <strong>Almagro</strong>,{" "}
          <strong>Villa Crespo</strong>, Caballito, Parque Patricios y San
          Cristóbal. Servicio de cerrajería de hogar,{" "}
          <strong>aperturas 24 hs</strong>, copia de llaves, cambio de
          cerradura y <strong>controles remotos</strong> en la{" "}
          <strong>Ciudad Autónoma de Buenos Aires (CABA)</strong>.
        </p>
      </div>
    </section>
  );
}
