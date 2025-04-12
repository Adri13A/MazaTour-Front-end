import React, { ReactNode, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselWrapperProps {
  children: ReactNode;
};

const CarouselWrapper = ({ children }: CarouselWrapperProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = React.Children.toArray(children);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  /* si se cambian ramños ajustar  className="w-full flex-shrink-0 sm:pl-20 sm:pr-20 pl-5 pr-5 pt-5" */

  return (
    <div className="relative w-full ">
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

    </div>
  );
};

export default CarouselWrapper;