"use client";

import React from "react"
import {
  Key,
  DoorOpen,
  Lock,
  Settings,
  Wrench,
  ShieldCheck,
  Shield,
} from "lucide-react";
import { services } from "@/config/business";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/tracking";

const iconMap: Record<string, React.ElementType> = {
  Key,
  DoorOpen,
  Lock,
  Settings,
  Wrench,
  ShieldCheck,
  Shield,
};

export function ServicesSection() {
  return (
    <section id="servicios" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Nuestros servicios de cerrajería
          </h2>
          <p className="mt-3 text-muted-foreground">
            Cerrajería exclusiva de hogar — no trabajamos con autos.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? Key;
            return (
              <article
                key={service.title}
                className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-card-foreground">
                  {service.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <a
            href={getWhatsAppUrl("Hola! Quisiera consultar por un servicio de cerrajería.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackWhatsAppClick}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Consultar directamente
          </a>
        </div>
      </div>
    </section>
  );
}
