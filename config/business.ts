/** ============================================================
 *  Central configuration for "Cerrajería Porteña".
 *  Every component reads from here — edit once, update everywhere.
 *  ============================================================ */

export const business = {
  name: "Cerrajería Porteña",
  slug: "cerrajeria-portena",
  /** wa.me requires only digits. For AR mobiles try 549… if 5411… doesn't work. */
  whatsapp: {
    number: "541158698816",
    defaultMessage: "Hola! Quisiera hacer una consulta.",
  },
  address: {
    text: "Boedo, CABA, Argentina",
    city: "Buenos Aires",
    region: "CABA",
    country: "AR",
    postalCode: "1239",
  },
  geo: {
    latitude: -34.6163508,
    longitude: -58.4170922,
  },
  coverageAreas: ["Boedo", "Almagro", "Villa Crespo", "Caballito", "Parque Patricios", "San Cristóbal"] as const,
  hours: {
    aperturas: "24 hs",
    resto: "10:00 a 19:00",
  },
  differentiators: [
    "Atención rápida",
    "Más de 5 años en el rubro",
    "Cerrajería de hogar",
  ],
  googleMapsPlaceUrl:
    "https://www.google.com/maps/place/Cerrajeria+Porte%C3%B1a/@-34.6163508,-58.4196671,17z/data=!3m1!4b1!4m6!3m5!1s0x95bccb08765de5e3:0x220f9f3fd4f98d0d!8m2!3d-34.6163508!4d-58.4170922!16s%2Fg%2F11ssyp4ws9?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.3!2d-58.4196671!3d-34.6163508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb08765de5e3%3A0x220f9f3fd4f98d0d!2sCerrajeria%20Porte%C3%B1a!5e0!3m2!1ses-419!2sar!4v1",
  logo: "/Logo-cerrajeria-portena.png",
  images: [
    "/img-cerrajeria-1.jpg",
    "/img-cerrajeria-2.jpg",
    "/img-cerrajeria-3.jpg",
    "/img-cerrajeria-4.jpg",
  ],
  domain: "https://cerrajeriaporteña.com.ar",
} as const;

/* ── Services ─────────────────────────────────────────────── */
export type Service = {
  title: string;
  description: string;
  icon: string; // lucide-react icon name
};

export const services: Service[] = [
  {
    title: "Copia de llaves",
    description:
      "Duplicamos todo tipo de llaves para el hogar: comunes, paleta doble, multipunto y más.",
    icon: "Key",
  },
  {
    title: "Aperturas 24 hs",
    description:
      "¿Te quedaste afuera? Servicio de aperturas de emergencia disponible las 24 horas, los 365 días.",
    icon: "DoorOpen",
  },
  {
    title: "Cambio de cerradura",
    description:
      "Instalamos cerraduras nuevas de las mejores marcas para reforzar la seguridad de tu hogar.",
    icon: "Lock",
  },
  {
    title: "Cambio de combinación",
    description:
      "Actualizá la combinación de tu cerradura sin necesidad de reemplazarla por completo.",
    icon: "Settings",
  },
  {
    title: "Colocación de pasadores",
    description:
      "Instalamos pasadores de seguridad para reforzar tu puerta y brindar mayor protección.",
    icon: "Shield",
  },
  {
    title: "Asesoramiento de seguridad",
    description:
      "Te asesoramos para mejorar la seguridad de tu hogar con las mejores cerraduras y herrajes.",
    icon: "ShieldCheck",
  },
];

/* ── Remote controls ──────────────────────────────────────── */
export type RemoteControl = {
  id: string;
  name: string;
  description: string;
  frequency: string;
  tags: string[];
};

export type RemoteControlCategory = {
  id: string;
  name: string;
  description: string;
  tags: string[];
};

export const remoteControls: RemoteControlCategory[] = [
  {
    id: "controls-gate",
    name: "Controles de portón",
    description:
      "Duplicado, programación y reemplazo de controles para portones y cocheras. Consultá compatibilidad.",
    tags: ["Portón", "Cochera", "Duplicado", "Programación"],
  },
  {
    id: "controls-tv",
    name: "Controles de TV",
    description:
      "Reposición y configuración de controles para TV y Smart TV. Te lo entregamos listo para usar.",
    tags: ["TV", "Smart TV", "Configuración"],
  },
  {
    id: "controls-ac",
    name: "Controles de aire acondicionado",
    description:
      "Venta y configuración de controles para aire acondicionado. Consultá modelo y marca para compatibilidad.",
    tags: ["Aire acondicionado", "Climatización", "Compatibilidad"],
  },
];


/* ── FAQ ──────────────────────────────────────────────────── */
export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "¿Hacen aperturas de emergencia las 24 horas?",
    answer:
      "Sí. Nuestro servicio de aperturas está disponible las 24 hs, los 365 días del año, en Boedo, Almagro, Villa Crespo y alrededores de CABA.",
  },
  {
    question: "¿Trabajan con cerrajería de autos?",
    answer:
      "No. Nos especializamos exclusivamente en cerrajería de hogar: casas, departamentos, edificios y cocheras.",
  },
  {
    question: "¿Cómo funciona la clonación de controles remotos?",
    answer:
      "Copiamos la frecuencia de tu control original y te entregamos uno nuevo listo para usar. El proceso es rápido y no requiere reprogramar tu portón o cochera.",
  },
  {
    question: "¿Qué zonas cubren?",
    answer:
      "Atendemos en Boedo, Almagro, Villa Crespo, Caballito, Parque Patricios, San Cristóbal y alrededores dentro de CABA.",
  },
  {
    question: "¿Cuáles son los horarios de atención?",
    answer:
      "Las aperturas de emergencia están disponibles las 24 hs. El resto de los servicios (copia de llaves, cambio de cerraduras, controles remotos) se atienden de 10:00 a 19:00 hs.",
  },
  {
    question: "¿Puedo consultar presupuesto por WhatsApp?",
    answer:
      "¡Por supuesto! Escribinos por WhatsApp y te respondemos al instante con un presupuesto sin compromiso.",
  },
];

/* ── Testimonials ─────────────────────────────────────────── */
export type Testimonial = {
  initial: string;
  name: string;
  neighborhood: string;
  text: string;
};

export const testimonials: Testimonial[] = [
  {
    initial: "N",
    name: "Nicolas Marchese",
    neighborhood: "Boedo",
    text: "Me salvo 2 veces, tiene precios acordes y muy buena predisposición para ayudarte.",
  },
  {
    initial: "J",
    name: "Jorge Gusa",
    neighborhood: "Almagro",
    text: "Un capo total!! Me salvo mil veces!! Super profesional y con los mejores precios de Almagro- Boedo!! Super recomendado!!!",
  },
  {
    initial: "A",
    name: "Agustin Q.",
    neighborhood: "Villa Crespo",
    text: "Excelente servicio, muy copado Maxi.",
  },
];
