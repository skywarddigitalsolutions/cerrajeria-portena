import Image from "next/image";
import Hero from "./hero";
import Servicios from "./servicios";
import Stats from "./stats";
import Productos from "./productos";
import Testimonios from "./testimonios";
import Navbar from "./NavBar";
import Contacto from "./contacto";
import Nosotros from "./nosotros";
import Footer from "./footer";

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Servicios />
    <Stats />
    <Productos />
    <Testimonios />
    <Nosotros />
    <Contacto />
    <Footer />
    </>
  );
}
