'use client'

import React from 'react';
import CarouselWrapper from './CarouselWrapper';
import Title from '@/app/components/letters/Title';
import Subtitle from '@/app/components/letters/Subtitle';
import TextBody from '@/app/components/letters/Text';
import CardPlace from '@/app/components/cards/CardPlace';
import { places } from '../../../../data/places'; 


const CarouselPlacesRoutes = () => {
  return (
    <div className="w-full space-y-4 md:space-y-0">
        <div className="flex flex-col lg:flex-row gap-6 w-full md:px-0">
            <div className="flex flex-col gap-4 w-full lg:w-1/4">
                  <div className="text-center md:text-left md:px-0">
                      <Subtitle>
                          Lugares Sugeridos
                      </Subtitle>
                      <Title>
                          Lista de lugares que recorre
                      </Title>
                  </div>
                  
                  <div className="md:flex-1">
                      <TextBody className="md:pt-4">
                          Informate y conoce algunos de los lugares que reocorre la ruta [20 de Novienbre]
                      </TextBody>
                      <div className="flex flex-row lg:flex-col gap-4 mt-4 md:mt-6">
                          <div className="w-full lg:w-full lg:pt-4">
                              <div className="flex flex-col items-center lg:items-start gap-3 pb-3 mx-auto">
                                  <div className="flex items-center gap-2 border-t border-gray-300 pt-3">
                                      <TextBody className="font-semibold">
                                        Conoce Su Recorrido
                                      </TextBody>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
            </div>

            <div className="rounded-lg w-full lg:w-3/4">
                <CarouselWrapper>
                    {places.map((place) => (
                        <CardPlace
                          key={place.id}
                          imagen={place.imagen}
                          nombre={place.nombre}
                          descripcion={place.descripcion}
                          nombreCategoria={place.nombreCategoria}
                      />
                    ))}
                  </CarouselWrapper>
            </div>
        </div>
    </div>
  );
};

export default CarouselPlacesRoutes;