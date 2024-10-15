import { BiWrench, BiLock, BiHome } from "react-icons/bi";

export default function Servicios() {
  return (
    <section id="servicios" className="py-16 bg-gris">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-azul mb-12">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Tarjeta de Servicio 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <BiWrench className="text-celeste text-6xl mb-4" />
            <h3 className="text-2xl font-semibold text-azul text-center mb-4">Reparación de Cerraduras</h3>
            <p className="text-gray-700 text-center mb-8">
              Solucionamos cualquier problema con tus cerraduras. Servicio rápido y eficiente.
            </p>
            <button className="mt-auto bg-azul text-white py-2 px-4 rounded-full font-semibold hover:bg-azul/90 transition-all duration-300">
              Ver más
            </button>
          </div>

          {/* Tarjeta de Servicio 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <BiLock className="text-celeste text-6xl mb-4" />
            <h3 className="text-2xl font-semibold text-azul text-center mb-4">Instalación de Cerraduras</h3>
            <p className="text-gray-700 text-center mb-8">
              Instalamos cerraduras seguras para hogares y negocios. Confía en nuestra experiencia.
            </p>
            <button className="mt-auto bg-azul text-white py-2 px-4 rounded-full font-semibold hover:bg-azul/90 transition-all duration-300">
              Ver más
            </button>
          </div>

          {/* Tarjeta de Servicio 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <BiHome className="text-celeste text-6xl mb-4" />
            <h3 className="text-2xl font-semibold text-azul text-center mb-4">Apertura de Puertas</h3>
            <p className="text-gray-700 text-center mb-8">
              ¿Te has quedado fuera? Abrimos cualquier tipo de puerta sin causar daños.
            </p>
            <button className="mt-auto bg-azul text-white py-2 px-4 rounded-full font-semibold hover:bg-azul/90 transition-all duration-300">
              Ver más
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
