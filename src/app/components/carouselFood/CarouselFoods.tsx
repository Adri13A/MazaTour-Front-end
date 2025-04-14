import React from 'react';
import CardFoods from './CardFoods';
import { foods } from '../../data/foods.js'; 
import CarouselWrapper from './CarouselWrapper';

const CarouselCompanies = () => {
  return (
    <CarouselWrapper>
      {foods.map((food) => (
        <CardFoods
          key={food.id}
          imagen={food.imagen}
          nombre={food.nombre}
        />
      ))}
      
    </CarouselWrapper>
  );
};

export default CarouselCompanies;