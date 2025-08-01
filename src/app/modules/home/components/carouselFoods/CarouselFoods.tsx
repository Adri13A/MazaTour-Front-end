import React from 'react';
import CardFood from '../../../../components/cards/CardFood';
import { foods } from '../../../../data/foods'; 
import CarouselWrapper from './CarouselWrapper';
import Title from '@/app/components/letters/Title';
import Subtitle from '@/app/components/letters/Subtitle';
import TextBody from '@/app/components/letters/Text';

const CarouselFoods = () => {
  return (
    <div>
        <div className="text-center mb-10">
            <Title className="text-black">
                Un pedacito de lo nuestro
            </Title>
             <Subtitle className='text-accent2 mb-2'>
                Gastronomía, Tradición y Costumbres
            </Subtitle>
            <TextBody className='text-justify md:text-center'>
                El aguachile verde de Mazatlán es un platillo fresco y picante a base de camarones crudos marinados en
                jugo de limón, chiles serranos, cilantro, pepino y cebolla morada. Es un platillo emblemático de la
                gastronomía sinaloense, ideal para climas cálidos y conocido por su sabor cítrico y picante.
            </TextBody>       
        </div>
       
        <CarouselWrapper>
            {foods.map((food) => (
                <CardFood
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