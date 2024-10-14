export default function Nosotros() {
    return (
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Quiénes Somos</h2>
          <p className="text-center mb-12 text-gray-600">
            En Cerrajería Porteña, nos dedicamos a brindar un servicio de calidad y confianza desde [Año de Fundación].
            Nuestro compromiso es ofrecer soluciones de cerrajería que superen las expectativas de nuestros clientes.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold text-celeste">16</h3>
              <p className="text-gray-600">Años de experiencia</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold text-celeste">100+</h3>
              <p className="text-gray-600">Clientes satisfechos</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold text-celeste">50+</h3>
              <p className="text-gray-600">Servicios ofrecidos</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold text-celeste">30</h3>
              <p className="text-gray-600">Proyectos realizados</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  