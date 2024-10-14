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
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Testimonios</h2>
        <div className="space-y-6">
          {testimonios.map((testimonio) => (
            <div key={testimonio.id} className="p-4 bg-white rounded-lg shadow-md">
              <p className="text-lg italic text-gray-600 mb-4">
                {testimonio.texto}
              </p>
              <h3 className="font-semibold text-gray-800">
                {testimonio.autor}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
