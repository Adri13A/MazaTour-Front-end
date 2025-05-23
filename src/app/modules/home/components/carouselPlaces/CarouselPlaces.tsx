import React, { useState } from 'react';
import { places } from '../../../../data/places'; 
import CarouselWrapper from './CarouselWrapper';
import CardPlaces from '@/app/components/cards/CardPlaces';
import { Categoria } from '@/app/modules/home/utils/enums/categories';
import NavCategories from '../navs/NavCategories';
import FadeInView from '@/app/components/FadeInView';

const CarouselPlaces = () => {
  const [selectedCategory, setSelectedCategory] = useState<Categoria>(Categoria.HISTORIA_CULTURA);

  const filteredPlaces = selectedCategory === Categoria.TODAS 
    ? places 
    : places.filter(place => place.idCategoria === selectedCategory);

  return (
    <div>
      
      {/* Encabezado */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-2">
          {/* Columna izquierda */}
          <div className="w-full md:w-2/3 order-1 md:order-1">
            {/* Título */}
            <FadeInView direction="left" duration={2}>
              <div className="flex flex-col text-center md:text-left mb-4">
                <p className="subtitle">
                  Conoce Maztlán
                </p>
                <h2 className="title">
                  Todo lo que tenemos para ti
                </h2>
              </div>
            </FadeInView>
          </div>
        
        {/* Columna derecha */}
        <div className="w-full md:w-2/3 order-2 md:order-2">
          {/* Texto */}
          <FadeInView direction="right" duration={2}>
            <div className="text-justify md:text-right flex flex-col items-center md:items-end mb-4">
              <p className="text-body text-center md:text-right">
                Descubre los lugares que Mazatlán tiene para ti. 
                Desde su riqueza histórica y cultural hasta sus impresionantes playas y deliciosa gastronomía, 
                explora todos los rincones que hacen de esta ciudad un destino único.
              </p>
            </div>
            <div className="">
              <NavCategories onCategoryChange={setSelectedCategory} />
            </div>
           </FadeInView>
        </div>
      </div>      

      {/* Carrusel con lugares filtrados */}
      <FadeInView direction="left" duration={2}>
        <CarouselWrapper>
          {filteredPlaces.map((place) => (
            <CardPlaces
              key={place.id}
              imagen={place.imagen}
              nombre={place.nombre}
              descripcion={place.descripcion}
              nombreCategoria={place.nombreCategoria}
            />
          ))}
        </CarouselWrapper>
      </FadeInView>
    </div>
  );
};

export default CarouselPlaces;