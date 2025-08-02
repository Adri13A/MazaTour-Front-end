import React from 'react';
import CarouselWrapper from './CarouselWrapper';
import CardCostRoute from '@/app/components/cards/CardCostRoute';
import Subtitle from '@/app/components/letters/Subtitle';
import Title from '@/app/components/letters/Title';
import TextBody from '@/app/components/letters/Text';
import { ICardCostRoute } from '@/app/interfaces/utils';

interface CarouselCostsRouteProps{
  costsRoutes: ICardCostRoute[];
}

const CarouselCostRoutes = ({ costsRoutes }: Readonly<CarouselCostsRouteProps>) => {
    return (
      <div className="w-full space-y-4 md:space-y-6">
          <div className="flex flex-col lg:flex-row gap-6 w-full md:px-0">
              <div className="flex flex-col gap-4 w-full lg:w-1/4">
                  <div className="text-center md:text-left md:px-0">
                      <Subtitle>
                          Lista de Precios
                      </Subtitle>
                      <Title>
                          Costos del Transporte Publico
                      </Title>
                  </div>
                  
                  <div className="md:flex-1">
                      <TextBody className="md:pt-4">
                          Informate sobre la lista de precios y metodos de pago disponibles
                          que existen, que osilan entre los $ 11.00 a los $ 13.00
                      </TextBody>
                      <div className="flex flex-row lg:flex-col gap-4 mt-4 md:mt-6">
                          <div className="w-full lg:w-full lg:pt-4">
                              <div className="flex flex-col items-center lg:items-start gap-3 pb-3 mx-auto">
                                  <div className="flex items-center gap-2 border-t border-gray-300 pt-3">
                                      <TextBody className="font-semibold">
                                        Revisa términos y condiciones
                                      </TextBody>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="rounded-lg w-full lg:w-3/4">
                  <CarouselWrapper>
                      {costsRoutes.map((cost) => (
                          <CardCostRoute
                              key={cost.id}
                              image={cost.image}
                              unitType={cost.unitType}
                              paymentType={cost.paymentType}
                              ticketType={cost.ticketType}
                              cost={cost.cost}
                          />
                      ))}
                  </CarouselWrapper>
              </div>
          </div>
      </div>
    );
};

export default CarouselCostRoutes;