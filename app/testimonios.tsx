"use client"
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonios = [
  {
    id: 1,
    texto: "El mejor servicio de cerrajería que he utilizado. Llegaron en 15 minutos y resolvieron mi problema de forma profesional. ¡Altamente recomendado!",
    autor: "Juan Pérez",
    rating: 5,
    imagen: "/placeholder.svg?height=100&width=100"
  },
  {
    id: 2,
    texto: "Atención rápida y eficiente. Me ayudaron en una emergencia a las 2 de la madrugada. El cerrajero fue muy amable y profesional.",
    autor: "María López",
    rating: 5,
    imagen: "/placeholder.svg?height=100&width=100"
  },
  {
    id: 3,
    texto: "Excelente trato al cliente y muy profesionales. Instalaron un sistema de seguridad en mi negocio y quedé muy satisfecho con el resultado.",
    autor: "Carlos García",
    rating: 4,
    imagen: "/placeholder.svg?height=100&width=100"
  },
];

export default function Testimonios() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonio = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonios.length);
  };

  const prevTestimonio = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonios.length) % testimonios.length);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gris to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl text-azul font-bold text-center mb-12">
          Lo que dicen nuestros clientes
        </h2>
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
            >
              <FaQuoteLeft className="text-5xl text-celeste mb-6" />
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
                {testimonios[activeIndex].texto}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={testimonios[activeIndex].imagen}
                    alt={testimonios[activeIndex].autor}
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-azul">
                      {testimonios[activeIndex].autor}
                    </h3>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`${
                            i < testimonios[activeIndex].rating ? 'text-yellow-400' : 'text-gray-300'
                          } text-xl`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-4">
            <button
              onClick={prevTestimonio}
              className="bg-white rounded-full p-2 shadow-md hover:bg-celeste hover:text-white transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-0 -mr-4">
            <button
              onClick={nextTestimonio}
              className="bg-white rounded-full p-2 shadow-md hover:bg-celeste hover:text-white transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          {testimonios.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full mx-1 ${
                index === activeIndex ? 'bg-celeste' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}