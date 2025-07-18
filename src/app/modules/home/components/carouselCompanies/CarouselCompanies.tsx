import React from 'react';
import CarouselWrapper from './CarouselWrapper';
import CardCompanies from '../../../../components/cards/CardCompanies';
import { companies } from '../../../../data/companies.js'; 

const CarouselCompanies = () => {
  return (   
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
  );
};

export default CarouselCompanies;