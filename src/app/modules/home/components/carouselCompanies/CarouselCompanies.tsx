'use client';

import CarouselWrapper from './CarouselWrapper';
import CardCompany from '@/app/components/cards/CardCompany';
import { ICardCompany } from '@/app/interfaces/utils';

interface CarouselCompaniesProps {
  companies: ICardCompany[];
}

export default function CarouselCompanies({ companies }: Readonly<CarouselCompaniesProps>) {
  return (
    <CarouselWrapper>
      {companies?.map(company => (
        <CardCompany
          key={company.id}
          image={company.image}
          name={company.name}
          description={company.description}
          location={company.location}
        />
      ))}
    </CarouselWrapper>
  );
}
