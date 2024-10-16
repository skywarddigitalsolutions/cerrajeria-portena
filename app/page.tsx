"use client";

import Hero from "./hero";
import Servicios from "./servicios";
import Stats from "./stats";
import Productos from "./productos";
import Testimonios from "./testimonios";
import Navbar from "./NavBar";
import Contacto from "./contacto";
import Nosotros from "./nosotros";
import Footer from "./footer";
import { useEffect, useState } from "react";
import Loader from "./loader";
import { motion } from "framer-motion";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 500); 
  }, []);

  return (
    <>
      {!loaded && <Loader />}
      {loaded && (
        <motion.div
          initial={{ opacity: 0.2 }}         // Empieza invisible
          animate={{ opacity: 1 }}         // Aparece gradualmente
          exit={{ opacity: 0 }}            // Si se remueve, desaparece suavemente
          transition={{ duration: 1 }}   // Duración de la transición
        >
          <Navbar />
          <Hero />
          <Servicios />
          <Stats />
          <Productos />
          <Testimonios />
          <Nosotros />
          <Contacto />
          <Footer />
        </motion.div>
      )}
    </>
  );
}
