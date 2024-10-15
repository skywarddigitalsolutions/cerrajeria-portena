"use client";

import { useState } from "react";
import { BiLock, BiKey, BiSave } from "react-icons/bi";
import { motion } from "framer-motion";

const products = [
  {
    id: "cerraduras",
    title: "Venta de Cerraduras",
    icon: BiLock,
    description: "Ofrecemos una amplia gama de cerraduras de alta seguridad para tu hogar o negocio.",
  },
  {
    id: "llaves",
    title: "Copia de Llaves",
    icon: BiKey,
    description: "Servicio rápido y preciso de duplicado de llaves para todo tipo de cerraduras.",
  },
  {
    id: "cajas",
    title: "Cajas Fuertes",
    icon: BiSave,
    description: "Protege tus objetos de valor con nuestras cajas fuertes de última generación.",
  },
];

export default function Products() {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  return (
    <section className="py-16 bg-gradient-to-b from-gris to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-azul text-center mb-12">
          Nuestros Productos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
              onHoverStart={() => setHoveredProduct(product.id)}
              onHoverEnd={() => setHoveredProduct(null)}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: "url('/Aperturas.jpg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-azul via-azul/70 to-transparent opacity-90" />
              <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                <div>
                  <product.icon className="text-gris text-5xl mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                  <p className="text-gris text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {product.description}
                  </p>
                </div>
                <motion.button
                  className="self-start bg-gris text-azul rounded-full px-6 py-2 font-semibold hover:bg-celeste/80 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ver más
                </motion.button>
              </div>
              {hoveredProduct === product.id && (
                <motion.div
                  className="absolute inset-0 border-4 border-celeste rounded-2xl"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}