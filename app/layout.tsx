import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "Cerrajería Porteña - Aperturas 24 horas",
  description: "",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
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
            <link rel="icon" href="/favicon.png" />
          </head>
            <body className={poppins.className}>{children}</body>
    </html>
  );
}