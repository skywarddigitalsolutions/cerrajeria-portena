import { Radio } from "lucide-react";
import { remoteControls } from "@/config/business";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function ControlsSection() {
  return (
    <section id="controles" className="bg-secondary py-16 md:pt-24 md:pb-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Controles remotos
          </h2>
          <p className="mt-3 text-muted-foreground">
            Copiamos la frecuencia de tu control y te entregamos uno nuevo
            listo para usar.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {remoteControls.map((ctrl) => (
            <article
              key={ctrl.id}
              className="flex flex-col rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/15 text-accent">
                <Radio className="h-6 w-6" />
              </div>

              <h3 className="mb-1 text-lg font-semibold text-card-foreground">
                {ctrl.name}
              </h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {ctrl.description}
              </p>

              {/* Tags */}
              <div className="mb-4 flex flex-wrap gap-2">
                {ctrl.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={getWhatsAppUrl(
                  `Hola! Quiero mas informacion a cerca de los ${ctrl.name}`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Consultar precio
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
