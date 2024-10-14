import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full sm:w-1/2 bg-celeste shadow-md rounded-b-lg z-50 p-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gris">
          <img src="/Logo-cerrajeria-porteña.png" alt="Logo" className="h-16 w-auto" />
        </Link>
        
        {/* Links de Navegación */}
        <div className="space-x-4">
          <Link href="/" className="text-gris hover:text-azul">Inicio</Link>
          <Link href="/servicios" className="text-gris hover:text-azul">Servicios</Link>
          <Link href="/productos" className="text-gris hover:text-azul">Productos</Link>
          <Link href="/contacto" className="text-gris hover:text-azul">Contacto</Link>
        </div>
      </div>
    </nav>
  );
}
