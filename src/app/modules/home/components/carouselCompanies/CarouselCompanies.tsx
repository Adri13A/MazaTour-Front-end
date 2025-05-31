import React from 'react';
import CarouselWrapper from './CarouselWrapper';
import CardCompanies from '../../../../components/cards/CardCompanies';
import { companies } from '../../../../data/companies.js'; 
import FadeInView from '@/app/components/FadeInView';

const CarouselCompanies = () => {
  return (
    <FadeInView direction="down" duration={2}>
      <CarouselWrapper>
        {companies.map((company) => (
          <CardCompanies
            key={company.id}
            imagen={company.imagen}
            nombre={company.nombre}
            descripcion={company.descripcion}
            ubicacion={company.ubicacion}
          />
        ))}
      </CarouselWrapper>
    </FadeInView>
  );
};

export default CarouselCompanies;