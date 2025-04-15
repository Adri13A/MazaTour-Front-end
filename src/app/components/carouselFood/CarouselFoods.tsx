import React from 'react';
import CardFoods from './CardFoods';
import { foods } from '../../data/foods.js'; 
import CarouselWrapper from './CarouselWrapper';

const CarouselFoods = () => {
  return (
    <div>
      {/* Encabezado fijo */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          UN PEDACITO DE LO NUESTRO
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          Gastronomía, Tradición y Costumbres
        </p>
        <p className="max-w-3xl mx-auto text-gray-500">
          El aguachile verde de Mazatlán es un platillo fresco y picante a base de camarones crudos marinados en
          jugo de limón, chiles serranos, cilantro, pepino y cebolla morada. Es un platillo emblemático de la
          gastronomía sinaloense, ideal para climas cálidos y conocido por su sabor cítrico y picante.
        </p>
      </div>

      {/* Carrusel existente (sin cambios) */}
      <CarouselWrapper>
        {foods.map((food) => (
          <CardFoods
            key={food.id}
            imagen={food.imagen}
            nombre={food.nombre}
          />
        ))}
      </CarouselWrapper>
    </div>
  );
};

export default CarouselFoods;