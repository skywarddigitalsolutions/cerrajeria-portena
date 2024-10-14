export default function Contacto() {
    return (
      <section className="py-16 bg-gris">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-azul font-bold text-center mb-8">Contáctanos</h2>
          <p className="text-center mb-12 text-gray-600">
            Si tienes alguna pregunta o inquietud, ¡no dudes en ponerte en contacto con nosotros!
          </p>
          
          <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8">
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  placeholder="Tu nombre"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Tu correo electrónico"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mensaje">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  placeholder="Tu mensaje"
                  rows={4}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-celeste hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
  