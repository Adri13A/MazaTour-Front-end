import React, { useState } from 'react';
import CarouselWrapper from './CarouselWrapper';
import NavTabs from '../navs/NavTabs';
import CardPlace from '@/app/components/cards/CardPlace';
import { Category } from '@/app/modules/home/utils/enums/categories';
import Subtitle from '@/app/components/letters/Subtitle';
import Title from '@/app/components/letters/Title';
import TextBody from '@/app/components/letters/Text';
import { ICardPlace } from '@/app/interfaces/utils';
import { GenericTab } from '@/app/interfaces/tabs';

interface CarouselPlacesProps{
  places: ICardPlace[];
}

const placeTabs: GenericTab<Category>[] = [
  { id: Category.HISTORIA_CULTURA, name: "Historia & Cultura" },
  { id: Category.PARQUES, name: "Parques" },
  { id: Category.MUSEOS, name: "Museos" },
  { id: Category.PLAYAS, name: "Playas" },
  { id: Category.NATURALEZA, name: "Naturaleza" },
  { id: Category.TODAS, name: "Ver Todas" },
];

const CarouselPlaces = ({ places }: Readonly<CarouselPlacesProps>) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>(Category.TODAS);
  const filteredPlaces = selectedCategory === Category.TODAS 
    ? places 
    : places.filter(place => place.categoryId === selectedCategory);

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-2">
          <div className="w-full md:w-2/3 order-1 md:order-1">
              <div className="flex flex-col text-center md:text-left mb-4">
                <Subtitle className="text-dark">
                  Conoce Maztlán
                </Subtitle>
                <Title className="text-dark">
                  Todo lo que tenemos para ti
                </Title>
              </div>
          </div>
        
          <div className="w-full md:w-2/3 order-2 md:order-2">
              <div className="text-justify md:text-right flex flex-col items-center md:items-end mb-4">
                  <TextBody className="text-center md:text-right">
                    Descubre los lugares que Mazatlán tiene para ti. 
                    Desde su riqueza histórica y cultural hasta sus impresionantes playas y deliciosa gastronomía, 
                    explora todos los rincones que hacen de esta ciudad un destino único.
                  </TextBody>
              </div>
              <div>
                  <NavTabs<Category>
                          tabs={placeTabs}
                          defaultTabId={Category.TODAS}
                          onTabChange={setSelectedCategory}
                        />
              </div>
          </div>
      </div>      
      
      <CarouselWrapper>
          {filteredPlaces.map((place) => (
              <CardPlace
                  key={place.id}
                  image={place.image}
                  name={place.name}
                  description={place.description}
                  categoryName={place.categoryName}
              />
          ))}
      </CarouselWrapper>
    </>
  );
};

export default CarouselPlaces;