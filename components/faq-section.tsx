"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqItems } from "@/config/business";
import { cn } from "@/lib/utils";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
            cerrajería en CABA.
          </p>
        </div>

        <div className="divide-y divide-border rounded-xl border border-border bg-card">
          {faqItems.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold text-card-foreground md:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-muted-foreground transition-transform",
                      isOpen && "rotate-180",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-all",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
