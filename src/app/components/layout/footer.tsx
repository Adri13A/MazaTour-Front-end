import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { Facebook, Instagram, Mail } from 'lucide-react';
import footerBg from '@/public/images/footer.webp';
// import "../../../styles/footer.css";


export default function Footer() {
  return (
    <footer className="w-full bg-cover bg-center bg-no-repeat min-h-screen"
    style={{ backgroundImage: `url(${footerBg.src})` }}>
      
      {/* Contenedor Principal */}
      <div className="flex flex-col h-full w-full">
        
        {/* Sección Superior */}
        <div className="flex-1 flex items-center justify-center text-white py-20 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto pt-6 mt-6 pb-6">
            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl uppercase leading-relaxed">
              Descubre la perla del Pacífico,
              <br /> donde cada rincón cuenta una historia
            </h1>
            <p className="pt-4 mt-4 uppercase text-sm sm:text-base">
              Mazatlán, lugar donde se rompen las olas
            </p>
          </div>
        </div>
      
        {/* Sección Inferior con efecto glass */}
        <div className="w-full bg-black bg-opacity-25 backdrop-blur-sm p-6 sm:p-12">
          
          {/* Contenido Principal */}
          <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
            
            {/* Columna 1 - Logo y explorar */}
            <div className="lg:w-1/4">
              <h1 className="text-3xl sm:text-4xl font-bold text-white">
                <span className="block">Maza</span>
                <span className="block">Tour</span>
              </h1>
              <div className="bg-white h-0.5 w-16 rounded-full my-4"></div>
              <a href="#!" className="inline-flex items-center text-white uppercase text-sm sm:text-base border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors">
                Explorar <ArrowUpRightIcon className="w-4 h-4 ml-2" />
              </a>
            </div>

            {/* Divisor (solo en desktop) */}
            <div className="hidden lg:block w-px bg-white bg-opacity-30"></div>

            {/* Columnas de información */}
            <div className="lg:w-3/4 flex flex-col md:flex-row gap-8 md:gap-12">
              
              {/* Acerca de Nosotros */}
              <div className="md:w-1/2">
                <p className="text-white font-semibold text-lg sm:text-xl mb-4 sm:mb-6">Acerca de Nosotros</p>
                <ul className="space-y-3">
                  <li><a href="#!" className="text-white hover:underline block">Quiénes somos</a></li>
                  <li><a href="#!" className="text-white hover:underline block">Nuestra historia</a></li>
                  <li><a href="#!" className="text-white hover:underline block">Misión y visión</a></li>
                  <li><a href="#!" className="text-white hover:underline block">¿Por qué Mazatlán?</a></li>
                </ul>
              </div>

              {/* Contacto */}
              <div className="md:w-1/2">
                <p className="text-white font-semibold text-lg sm:text-xl mb-4 sm:mb-6">Contacto</p>
                <ul className="space-y-3">
                  <li><p className="text-white">#100 Av Miguel Aleman, Mazatlan, Mexico</p></li>
                  <li><p className="text-white">(669) 000-0000</p></li>
                  <li><p className="text-white">TransMaz@gmail.com</p></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer inferior */}
          <div className="border-t border-white border-opacity-20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 max-w-7xl mx-auto">
            
            {/* Redes Sociales */}
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="mailto:example@example.com" className="text-white hover:text-red-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-white text-center text-sm sm:text-base">
              Copyright © 2025. All Rights Reserved. Visita Mazatlan, Conoce Mazatlan
            </div>

            {/* Términos */}
            <div className="text-white hover:underline cursor-pointer text-sm sm:text-base">
              Términos & Condiciones
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}