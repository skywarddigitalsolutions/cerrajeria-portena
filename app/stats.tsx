import { BiTimeFive, BiSmile, BiKey } from "react-icons/bi";

export default function Stats() {
  return (
    <section className="py-12 bg-gris">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-4 text-center">

          {/* Aperturas 24/7 */}
          <div className="flex flex-col items-center">
            <BiTimeFive className="text-celeste text-5xl mb-2" />
            <h3 className="text-xl font-semibold text-azul">Aperturas 24/7</h3>
            <p className="text-azul text-xs">
              Siempre disponibles para emergencias.
            </p>
          </div>

          {/* La mejor atención */}
          <div className="flex flex-col items-center">
            <BiSmile className="text-celeste text-5xl mb-2" />
            <h3 className="text-xl font-semibold text-azul">Mejor Atención</h3>
            <p className="text-azul text-xs">
              Atención amigable y profesional.
            </p>
          </div>

          {/* Copias de llaves */}
          <div className="flex flex-col items-center">
            <BiKey className="text-celeste text-5xl mb-2" />
            <h3 className="text-xl font-semibold text-azul">Copias de Llaves</h3>
            <p className="text-azul text-xs">
              Copias rápidas y precisas.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
