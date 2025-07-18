import React from 'react';
import CardFoods from '../../../../components/cards/CardFoods';
import { foods } from '../../../../data/foods'; 
import CarouselWrapper from './CarouselWrapper';

const CarouselFoods = () => {
  return (
    <div>
        <div className="text-center mb-10">
            <h2 className="title">
                UN PEDACITO DE LO NUESTRO
            </h2>
            <p className="subtitle mb-3">
                Gastronomía, Tradición y Costumbres
            </p>
            <p className="text-body">
                El aguachile verde de Mazatlán es un platillo fresco y picante a base de camarones crudos marinados en
                jugo de limón, chiles serranos, cilantro, pepino y cebolla morada. Es un platillo emblemático de la
                gastronomía sinaloense, ideal para climas cálidos y conocido por su sabor cítrico y picante.
            </p>       
        </div>
       
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