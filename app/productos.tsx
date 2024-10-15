"use client";

import { useState } from "react";
import { BiLock, BiKey, BiSave } from "react-icons/bi"; // Use BiSave instead of BiSafe

export default function Products() {
  const [activeProduct, setActiveProduct] = useState<string | null>(null); // Specify the type for useState

  const toggleProduct = (product: string) => {
    setActiveProduct(activeProduct === product ? null : product);
  };

  return (
    <section className="py-12 bg-gris">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-azul text-center mb-8">Nuestros Productos</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Producto 1: Venta de cerraduras */}
          <div className="relative border rounded-lg shadow-md overflow-hidden group">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/Aperturas.jpg')" }}>
              <div className="absolute inset-0 bg-black opacity-50 transition-opacity group-hover:opacity-70"></div> {/* Filtro oscuro */}
            </div>
            <div className="relative z-10 p-6 flex flex-col justify-center items-center text-white">
              <div className="mb-4">
                <BiLock className="text-celeste text-5xl" />
              </div>
              <h3 className="text-xl font-semibold text-white text-center mb-4">Venta de Cerraduras</h3>
              <button
                className="text-md bg-celeste rounded-xl px-6 py-2 text-center font-semibold hover:underline"
              >
                Ver más
              </button>
              
            </div>
          </div>

          {/* Producto 2: Copia de llaves */}
          <div className="relative border rounded-lg shadow-md overflow-hidden group">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/Aperturas.jpg')" }}>
              <div className="absolute inset-0 bg-black opacity-50 transition-opacity group-hover:opacity-70"></div> {/* Filtro oscuro */}
            </div>
            <div className="relative z-10 p-6 flex flex-col justify-center items-center text-white">
              <div className="mb-4">
                <BiKey className="text-celeste text-5xl" />
              </div>
              <h3 className="text-xl font-semibold text-white text-center mb-4">Copia de Llaves</h3>
              <button
                className="text-md bg-celeste rounded-xl px-6 py-2 text-center font-semibold hover:underline"
              >
                Ver más
              </button>
            </div>
          </div>

          {/* Producto 3: Cajas fuertes */}
          <div className="relative border rounded-lg shadow-md overflow-hidden group">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/Aperturas.jpg')" }}>
              <div className="absolute inset-0 bg-black opacity-50 transition-opacity group-hover:opacity-70"></div> {/* Filtro oscuro */}
            </div>
            <div className="relative z-10 p-6 flex flex-col justify-center items-center text-white">
              <div className="mb-4">
                <BiSave className="text-celeste text-5xl" />
              </div>
              <h3 className="text-xl font-semibold text-white text-center mb-4">Cajas Fuertes</h3>
              <button
                className="text-md bg-celeste rounded-xl px-6 py-2 text-center font-semibold hover:underline"
              >
                Ver más
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
