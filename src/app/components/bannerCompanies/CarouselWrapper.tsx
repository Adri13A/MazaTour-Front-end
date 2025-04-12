import React, { ReactNode, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselWrapperProps {
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

  // Auto-rotación cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // 5000 milisegundos = 5 segundos

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, [currentIndex]); // Se reinicia cuando currentIndex cambia

  return (
    <div className="relative w-full">
      {/* Contenedor del slide */}
      <div className="">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {items.map((item, index) => (
            <div 
              key={index} 
              className="w-full flex-shrink-0 sm:pl-20 sm:pr-20 pl-5 pr-5 pt-5"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Controles de navegación */}
      <div className="flex justify-center mt-6 space-x-3 pb-5 sm:pb-20">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'w-8 bg-gray-500' : 'w-3 bg-gray-200'
            }`}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Flechas de navegación (opcionales) */}
      {/* <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-10 sm:block hidden"
        aria-label="Slide anterior"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-10 sm:block hidden"
        aria-label="Slide siguiente"
      >
        <ChevronRight size={24} />
      </button> */}
    </div>
  );
};

export default CarouselWrapper;