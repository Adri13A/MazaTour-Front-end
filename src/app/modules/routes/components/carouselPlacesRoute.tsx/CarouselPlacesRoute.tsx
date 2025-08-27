'use client'

import React, { useState } from 'react';
import Title from '@/app/components/letters/Title';
import Subtitle from '@/app/components/letters/Subtitle';
import TextBody from '@/app/components/letters/Text';
import { ICardPlacesRoute } from '@/app/interfaces/utils';
import CardPlaceListRoute from '@/app/components/cards/CardPlaceListRoute';
import CarouselWrapper from './CarouselWrapper'; // <-- Asegúrate de importar tu carrusel

interface CarouselPlacesRoutesProps {
  placesroute: ICardPlacesRoute[];
}

const CarouselPlacesRoutes = ({ placesroute }: Readonly<CarouselPlacesRoutesProps>) => {
  const [showMore, setShowMore] = useState(false);
  const itemsPerRow = 4;

  const firstRow = placesroute.slice(0, itemsPerRow);
  const secondRow = placesroute.slice(itemsPerRow, itemsPerRow * 2);

  return (
    <div className="w-full space-y-4">
      {/* Textos arriba */}
      <div className="flex flex-col gap-2 text-center lg:text-center">
        <Subtitle>Lugares Sugeridos</Subtitle>
        <Title>Lista de lugares que recorre</Title>
        <TextBody>
          Infórmate y conoce algunos de los lugares que recorre la ruta.
        </TextBody>
      </div>

      {/* Carrusel en móviles/tablets */}
      <div className="block lg:hidden">
        <CarouselWrapper>
          {placesroute.map((place) => (
            <CardPlaceListRoute
              key={place.id}
              image={place.image}
              name={place.name}
              categoryName={place.categoryName}
            />
          ))}
        </CarouselWrapper>
      </div>

      {/* Desktop / Laptop */}
      <div className="hidden lg:block">
        {/* Contenedor de cards */}
        <div className="rounded-xl overflow-hidden relative p-4 transition-all duration-500 ease-in-out">
          {/* Primera fila */}
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-6">
            {firstRow.map((place) => (
              <CardPlaceListRoute
                key={place.id}
                image={place.image}
                name={place.name}
                categoryName={place.categoryName}
              />
            ))}
          </div>

          {/* Segunda fila */}
          {secondRow.length > 0 && (
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out mt-4 ${
                showMore ? 'max-h-[1000px]' : 'max-h-16 relative'
              }`}
            >
              <div
                className={`grid grid-cols-2 xl:grid-cols-4 gap-6 ${
                  !showMore ? 'opacity-60' : 'opacity-100'
                }`}
              >
                {secondRow.map((place) => (
                  <CardPlaceListRoute
                    key={place.id}
                    image={place.image}
                    name={place.name}
                    categoryName={place.categoryName}
                  />
                ))}
              </div>

              {/* Fade overlay solo cuando está contraído */}
              {!showMore && (
                <div className="absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
              )}
            </div>
          )}
        </div>

        {/* Botón Ver más / Ver menos */}
        {secondRow.length > 0 && (
          <div className="mt-0 text-center">
            <button
              onClick={() => setShowMore(!showMore)}
              className="px-10 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
            >
              {showMore ? 'Ver menos' : 'Ver más'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarouselPlacesRoutes;
