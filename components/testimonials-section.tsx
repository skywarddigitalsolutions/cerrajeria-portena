import { Star } from "lucide-react";
import { testimonials } from "@/config/business";

export function TestimonialsSection() {
  return (
    <section className="bg-secondary pb-16 md:py-24" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <h2
            id="testimonials-heading"
            className="text-3xl font-bold tracking-tight text-foreground md:text-4xl"
          >
            Lo que dicen nuestros clientes
          </h2>
          <p className="mt-3 text-muted-foreground">
            Confianza respaldada por vecinos de la zona.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="flex flex-col rounded-xl border border-border bg-card p-6"
            >
              {/* Stars */}
              <div className="mb-3 flex gap-0.5 text-accent" aria-label="5 estrellas">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent" />
                ))}
              </div>

              <blockquote className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {t.initial}
                </div>
                <div>
                  <p className="text-sm font-semibold text-card-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.neighborhood}, CABA</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
