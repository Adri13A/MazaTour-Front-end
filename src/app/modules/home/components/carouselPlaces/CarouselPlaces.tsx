import React, { useState } from 'react';
import { places } from '../../../../data/places'; 
import CarouselWrapper from './CarouselWrapper';
import NavCategories from '../navs/NavCategories';
import CardPlace from '@/app/components/cards/CardPlace';
import { Categoria } from '@/app/modules/home/utils/enums/categories';
import Subtitle from '@/app/components/letters/Subtitle';
import Title from '@/app/components/letters/Title';
import TextBody from '@/app/components/letters/Text';

const CarouselPlaces = () => {
  const [selectedCategory, setSelectedCategory] = useState<Categoria>(Categoria.HISTORIA_CULTURA);
  const filteredPlaces = selectedCategory === Categoria.TODAS 
    ? places 
    : places.filter(place => place.idCategoria === selectedCategory);

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
                  <NavCategories onCategoryChange={setSelectedCategory} />
              </div>
          </div>
      </div>      
      
      <CarouselWrapper>
          {filteredPlaces.map((place) => (
              <CardPlace
                  key={place.id}
                  imagen={place.imagen}
                  nombre={place.nombre}
                  descripcion={place.descripcion}
                  nombreCategoria={place.nombreCategoria}
              />
          ))}
      </CarouselWrapper>
    </>
  );
};

export default CarouselPlaces;