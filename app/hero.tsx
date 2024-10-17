import Image from "next/image";
import {BiPhoneCall } from "react-icons/bi";
import { BsClock } from "react-icons/bs";

export default function Hero() {
  return (
    <section className="relative w-full pt-24 min-h-screen bg-gris overflow-hidden">
      {/* Fondo diagonal */}
      <div className="absolute top-0 right-0 w-1/12 md:w-1/3 lg:w-1/2 h-full hidden lg:block lg:bg-celeste/70 rounded-bl-2xl clip-path-diagonal z-0" />

      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Texto principal */}
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl xl:ml-5 font-bold text-azul leading-tight">
              Cerrajería<br />
              <span className="text-celeste">24/7 en Boedo</span>
            </h1>
            <p className="text-xl text-[#086da5] max-w-lg">
              Expertos en aperturas de cerraduras. Servicio rápido y confiable.
            </p>

            {/* Botones de acción */}
            <div className="flex flex-wrap gap-4">
              <button
                className="bg-rojo text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold flex items-center hover:bg-rojo/90 transition-all duration-300 text-md md:text-base"
                aria-label="Llamar ahora"
              >
                <BiPhoneCall className="mr-2" /> Llamar ahora
              </button>
              <button
                className="bg-azul text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold hover:bg-azul/90 transition-all duration-300 text-md md:text-base"
                aria-label="Ver nuestros servicios"
              >
                Nuestros servicios
              </button>
            </div>
          </div>

          {/* Imagen del cerrajero */}
          <div className="relative mt-8 lg:mt-0 w-full max-w-xs md:max-w-md lg:max-w-lg mx-auto">
            <div className="aspect-square relative w-full h-80 lg:h-[350px] rounded-2xl overflow-hidden border-4 md:border-8 border-[#00b6e7] shadow-2xl transition-transform transform hover:scale-105">
              <Image
                src="/Aperturas.jpg"
                alt="Cerrajero trabajando"
                layout="fill"
                objectFit="cover"
              />
            </div>

            {/* Etiqueta de disponibilidad 24/7 */}
            <div className="absolute -bottom-4 -left-4 bg-white p-3 md:p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2">
                <BsClock className="text-celeste text-xl md:text-2xl" />
                <span className="text-azul font-semibold text-sm md:text-base">Disponible 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
