"use client"

import { motion } from 'framer-motion';
import { FaTools, FaUserShield, FaClock, FaAward } from 'react-icons/fa';

const stats = [
  { icon: FaTools, value: 16, label: "Años de experiencia", description: "Brindando soluciones de cerrajería confiables desde 2007" },
  { icon: FaUserShield, value: 1000, label: "Clientes satisfechos", description: "Nuestra prioridad es la satisfacción y seguridad de nuestros clientes" },
  { icon: FaClock, value: 24, label: "Horas de servicio", description: "Disponibles las 24 horas para atender sus emergencias" },
  { icon: FaAward, value: 50, label: "Servicios especializados", description: "Ofrecemos una amplia gama de servicios de cerrajería" },
];

export default function Nosotros() {
  return (
    <section className="py-16 bg-gradient-to-b from-gris to-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl text-azul font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Quiénes Somos
        </motion.h2>
        <motion.p 
          className="text-center mb-12 text-azul max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          En Cerrajería Porteña, nos dedicamos a brindar un servicio de calidad y confianza desde 2007.
          Nuestro compromiso es ofrecer soluciones de cerrajería que superen las expectativas de nuestros clientes,
          garantizando seguridad y tranquilidad en cada trabajo que realizamos.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <motion.div
                className="text-celeste mb-4"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <stat.icon className="text-5xl inline-block" />
              </motion.div>
              <motion.h3 
                className="text-3xl font-bold text-azul mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 + 0.1 * index }}
              >
                {stat.value}
                {typeof stat.value === 'number' && stat.value >= 1000 && '+'}
              </motion.h3>
              <h4 className="text-xl font-semibold text-azul mb-2">{stat.label}</h4>
              <p className="text-celeste text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 bg-celeste text-white p-8 rounded-lg shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-4">Nuestra Misión</h3>
          <p className="mb-4">
            Proporcionar soluciones de cerrajería de alta calidad, garantizando la seguridad y tranquilidad de nuestros clientes
            a través de un servicio profesional, rápido y confiable.
          </p>
          <h3 className="text-2xl font-bold mb-4">Nuestra Visión</h3>
          <p>
            Ser reconocidos como la empresa líder en servicios de cerrajería en Buenos Aires, destacándonos por nuestra
            innovación, excelencia en el servicio y compromiso con la seguridad de la comunidad.
          </p>
        </motion.div>
      </div>
    </section>
  );
}