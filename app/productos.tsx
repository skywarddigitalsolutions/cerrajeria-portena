"use client"

import { useState } from "react";
import { BiLock, BiKey, BiSave } from "react-icons/bi"; // Use BiSave instead of BiSafe

export default function Products() {
  const [activeProduct, setActiveProduct] = useState<string | null>(null); // Specify the type for useState

  const toggleProduct = (product: string) => { // Specify the type for the parameter
    setActiveProduct(activeProduct === product ? null : product);
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-azul text-center mb-8">Nuestros Productos</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Producto 1: Venta de cerraduras */}
          <div className="relative border rounded-lg shadow-md overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: "url('/Aperturas.jpg')" }} />
            <div className="relative z-10 p-6">
              <div className="flex items-center justify-center mb-4">
                <BiLock className="text-celeste text-5xl" />
              </div>
              <h3 className="text-xl font-semibold text-azul text-center mb-4">Venta de Cerraduras</h3>
              <button
                className="text-sm text-rojo font-semibold hover:underline"
                onClick={() => toggleProduct("cerraduras")}
              >
                {activeProduct === "cerraduras" ? "Cerrar detalles" : "Ver más"}
              </button>
              {activeProduct === "cerraduras" && (
                <div className="mt-4 text-gray-700 text-sm">
                  <ul className="list-disc pl-4">
                    <li>Cerraduras de alta seguridad</li>
                    <li>Cerraduras multipunto</li>
                    <li>Asesoramiento personalizado</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Producto 2: Copia de llaves */}
          <div className="relative border rounded-lg shadow-md overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: "url('/Aperturas.jpg')" }} />
            <div className="relative z-10 p-6">
              <div className="flex items-center justify-center mb-4">
                <BiKey className="text-celeste text-5xl" />
              </div>
              <h3 className="text-xl font-semibold text-azul text-center mb-4">Copia de Llaves</h3>
              <button
                className="text-sm text-rojo font-semibold hover:underline"
                onClick={() => toggleProduct("llaves")}
              >
                {activeProduct === "llaves" ? "Cerrar detalles" : "Ver más"}
              </button>
              {activeProduct === "llaves" && (
                <div className="mt-4 text-gray-700 text-sm">
                  <ul className="list-disc pl-4">
                    <li>Copia de todo tipo de llaves</li>
                    <li>Llaves codificadas</li>
                    <li>Duplicado de llaves de seguridad</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Producto 3: Cajas fuertes */}
          <div className="relative border rounded-lg shadow-md overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: "url('/Aperturas.jpg')" }} />
            <div className="relative z-10 p-6">
              <div className="flex items-center justify-center mb-4">
                <BiSave className="text-celeste text-5xl" /> {/* Use BiSave instead of BiSafe */}
              </div>
              <h3 className="text-xl font-semibold text-azul text-center mb-4">Cajas Fuertes</h3>
              <button
                className="text-sm text-rojo font-semibold hover:underline"
                onClick={() => toggleProduct("cajas")}
              >
                {activeProduct === "cajas" ? "Cerrar detalles" : "Ver más"}
              </button>
              {activeProduct === "cajas" && (
                <div className="mt-4 text-gray-700 text-sm">
                  <ul className="list-disc pl-4">
                    <li>Cajas fuertes de alta seguridad</li>
                    <li>Instalación y mantenimiento</li>
                    <li>Modelos antirrobo</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
