import React, { ReactNode, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Importa las flechas

type CarouselWrapperProps = {
  children: ReactNode;
};

const CarouselWrapper = ({ children }: CarouselWrapperProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = React.Children.toArray(children);

  // Cambiar al siguiente slide
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  // Cambiar al slide anterior
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  // Cambiar el slide cada 5 segundos
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    
    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, []); 

  return (
    <div className="relative w-full overflow-hidden">
      {/* Contenedor del slide con transición de deslizamiento */}
      <div
        className="flex w-full transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {items.map((item, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {item}
          </div>
        ))}
      </div>

      {/* Controles de navegación */}
      <div className="flex justify-center mt-6 space-x-3">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'w-8 bg-gray-500' : 'w-3 bg-gray-200'
            }`}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Flechas (lucide-react), solo visibles en pantallas medianas o grandes */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-10 sm:block hidden"
        aria-label="Slide anterior"
      >
        <ChevronLeft size={24} /> {/* Usando la flecha izquierda */}
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-10 sm:block hidden"
        aria-label="Slide siguiente"
      >
        <ChevronRight size={24} /> {/* Usando la flecha derecha */}
      </button>
    </div>
  );
};

export default CarouselWrapper;
