import React from 'react';
import { places } from '../../data/places.js'; 
import CarouselWrapper from './CarouselWrapper';
import CardPlaces from '../cards/CardPlaces';

const CarouselPlaces = () => {
  return (
    <div>
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-2">
          {/* Título - Primero en mobile y desktop */}
          <div className="w-full md:w-2/3 flex flex-col text-center md:text-left order-1 md:order-1">
            <p className="font-semibold text-sm sm:text-xl md:text-base lg:text-lg text-gray-500 mb-1 md:mb-2">
              Conoce Maztlán
            </p>
            <h2 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase text-black text-center md:text-left">
              Todo lo que tenemos para ti
            </h2>
          </div>


          {/* Texto - Segundo en mobile y desktop */}
          <div className="w-full md:w-2/3 text-justify md:text-right order-2 md:order-2 flex flex-col items-center md:items-end">
                   
            <p className="leading-relaxed max-w-3xl text-gray-500 text-sm md:text-base text-center md:text-right">
            Descubre los lugares que Mazatlán tiene para ti. 
            Desde su riqueza histórica y cultural hasta sus impresionantes playas y deliciosa gastronomía, 
            explora todos los rincones que hacen de esta ciudad un destino único.
            </p>
          </div>
        </div>      

      {/* Carrusel existente (sin cambios) */}
      <CarouselWrapper>
        {places.map((place) => (
          <CardPlaces
            key={place.id}
            imagen={place.imagen}
            nombre={place.nombre}
            descripcion={place.descripcion}
          />
        ))}
      </CarouselWrapper>
    </div>
  );
};

export default CarouselPlaces;