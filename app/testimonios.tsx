export default function Testimonios() {
  const testimonios = [
    {
      id: 1,
      texto: "El mejor servicio de cerrajería que he utilizado. ¡Altamente recomendado!",
      autor: "Juan Pérez",
    },
    {
      id: 2,
      texto: "Atención rápida y eficiente. Me ayudaron en una emergencia.",
      autor: "María López",
    },
    {
      id: 3,
      texto: "Excelente trato al cliente y muy profesionales.",
      autor: "Carlos García",
    },
  ];

  return (
    <section className="py-16 bg-gris">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-azul font-bold text-center mb-12">Testimonios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonios.map((testimonio) => (
            <div 
              key={testimonio.id} 
              className="p-6 bg-white rounded-xl shadow-lg border-l-4 border-celeste transform hover:-translate-y-2 transition duration-300 ease-in-out"
            >
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                <span className="text-4xl text-celeste font-serif font-bold">“</span>
                {testimonio.texto}
                <span className="text-4xl text-celeste font-serif font-bold">”</span>
              </p>
              <h3 className="text-lg font-semibold text-azul text-right">
                {testimonio.autor}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
