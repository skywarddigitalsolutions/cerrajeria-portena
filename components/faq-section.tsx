import { faqItems } from "@/config/business";

export function FaqSection() {
  return (
    <section className="bg-background py-16 md:py-24" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-10 text-center">
          <h2
            id="faq-heading"
            className="text-3xl font-bold tracking-tight text-foreground md:text-4xl"
          >
            Preguntas frecuentes
          </h2>
          <p className="mt-3 text-muted-foreground">
            Respondemos las dudas más comunes sobre nuestros servicios de
            cerrajería en Boedo y CABA.
          </p>
        </div>

        <div className="divide-y divide-border rounded-xl border border-border bg-card">
          {faqItems.map((faq) => (
            <details
              key={faq.question}
              className="group px-6 py-5 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-card-foreground md:text-base">
                {faq.question}
                <span className="shrink-0 text-muted-foreground transition-transform group-open:rotate-180">
                  ▾
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
