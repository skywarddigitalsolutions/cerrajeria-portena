import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "Cerrajería Porteña - Aperturas 24 horas",
  description: "Cerrajería Porteña ofrece servicios de cerrajería de confianza en Buenos Aires, con atención las 24 horas. Nos especializamos en aperturas de puertas, reparación de cerraduras, y cambio de llaves. Nuestro equipo de expertos garantiza un servicio rápido y eficiente, asegurando la seguridad de tu hogar y negocio. Contáctanos para emergencias o consultas sobre nuestros servicios de cerrajería.",
  keywords: "cerrajería, cerrajería 24 horas, aperturas de puertas, reparación de cerraduras, cambio de llaves, cerrajería Porteña, cerrajeros en Buenos Aires, cerrajería de emergencia, servicio de cerrajería, seguridad del hogar, cerrajería profesional, cerrajería confiable",
  icons: {
    icon: "/Logo-cerrajeria-porteña.png",
    shortcut: "/Logo-cerrajeria-porteña.png",
    apple: "/Logo-cerrajeria-porteña.png",
  },
};
const poppins = Poppins({ subsets: ["latin"], weight:"400" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="robots" content="index, follow" />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="es_ES" />
            <link rel="canonical" href="https://cerrajeriaportena.com.ar" />
            <link rel="icon" href="/Logo-cerrajeria-porteña.png" />
          </head>
            <body className={poppins.className}>{children}</body>
    </html>
  );
}