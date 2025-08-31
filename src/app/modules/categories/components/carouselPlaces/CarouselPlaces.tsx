'use client';

import React from 'react';
import CarouselWrapper from './CarouselWrapper';
import CardPlace from '@/app/components/cards/CardPlace';
import { ICardPlace } from '@/app/interfaces/utils';

interface CarouselPlacesProps {
  places?: ICardPlace[];
  navigationPrevRef?: React.RefObject<HTMLDivElement>;
  navigationNextRef?: React.RefObject<HTMLDivElement>;
}

const CarouselPlaces = ({
  places = [],
  navigationPrevRef,
  navigationNextRef,
}: CarouselPlacesProps) => {
  if (!places || places.length === 0) {
    return <p className="text-gray-500 italic">No se encontraron resultados</p>;
  }

  return (
    <CarouselWrapper
      prevRef={navigationPrevRef}
      nextRef={navigationNextRef}
    >
      {places.map((place) => (
        <CardPlace
          key={place.id}
          image={place.image}
          name={place.name}
          description={place.description}
          categoryName={place.categoryName}
        />
      ))}
    </CarouselWrapper>
  );
};

export default CarouselPlaces;
