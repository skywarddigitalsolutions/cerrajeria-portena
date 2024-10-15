
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'; // Asegúrate de tener react-icons instalado

export default function Footer() {
  return (
    <footer className="bg-azul text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between ">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Cerrajería Porteña</h3>
            <p className="text-gray-300 lg:max-w-xl">
              Ofrecemos soluciones de cerrajería de alta calidad y servicio al cliente excepcional desde [Año de Fundación].
            </p>
          </div>
          
          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Navegación</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-celeste">Inicio</Link>
              </li>
              <li>
                <Link href="/servicios" className="hover:text-celeste">Servicios</Link>
              </li>
              <li>
                <Link href="/productos" className="hover:text-celeste">Productos</Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-celeste">Contacto</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF className="text-gray-300 hover:text-celeste h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="text-gray-300 hover:text-celeste h-6 w-6" />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter className="text-gray-300 hover:text-celeste h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center mt-12'>
            <h5 className='text-celeste text-bold text-md lg:text-xl'>Hecho por Skyward Digital Solutions</h5>
        </div>
    </footer>
    
  );
}
