"use client"
import { useState } from 'react';
import { FaWhatsapp, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Contacto() {
  const [isHoveredWhatsApp, setIsHoveredWhatsApp] = useState(false);

  return (
    <section className="py-16 bg-gradient-to-b from-gris to-white" id='contacto'>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl text-azul font-bold text-center mb-8">Contáctanos</h2>
        <p className="text-center mb-12 text-celeste max-w-2xl mx-auto">
          Estamos aquí para ayudarte con cualquier emergencia de cerrajería. ¡Contáctanos ahora mismo!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div 
            className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div 
              className="relative mb-6"
              animate={{ rotate: isHoveredWhatsApp ? 360 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <FaWhatsapp className="text-7xl text-celeste" />
              <motion.div 
                className="absolute -top-2 -right-2 bg-red-500 rounded-full w-5 h-5"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
              />
            </motion.div>
            <h3 className="text-2xl font-bold text-azul mb-4">WhatsApp</h3>
            <p className="text-gray-600 text-center mb-6">
              Respuesta inmediata a través de WhatsApp. ¡Escríbenos ahora!
            </p>
            <motion.a
              href="https://wa.me/1234567890" // Reemplaza con tu número de WhatsApp
              target="_blank"
              rel="noopener noreferrer"
              className="bg-celeste hover:bg-celeste/80 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setIsHoveredWhatsApp(true)}
              onHoverEnd={() => setIsHoveredWhatsApp(false)}
            >
              <FaWhatsapp className="mr-2" />
              Chatear ahora
            </motion.a>
          </motion.div>

          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-azul mb-6 text-center">Otras formas de contacto</h3>
            <div className="space-y-6">
              <motion.div 
                className="flex items-center"
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <FaPhone className="text-3xl text-celeste mr-4" />
                <div>
                  <h4 className="font-semibold text-azul">Teléfono</h4>
                  <p className="text-gray-600">+54 11 1234-5678</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-center"
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <FaMapMarkerAlt className="text-3xl text-celeste mr-4" />
                <div>
                  <h4 className="font-semibold text-azul">Dirección</h4>
                  <p className="text-gray-600">Av. Boedo 1234, CABA</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}