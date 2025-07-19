import React from 'react';
import { costs } from '@/app/data/cost.js';
import CarouselWrapper from './CarouselWrapper';
import CardCostRoute from '@/app/components/cards/CardCostRoute';

const CarouselCostRoutes = () => {
    return (
      <div className="w-full space-y-4 md:space-y-6">
          <div className="flex flex-col lg:flex-row gap-6 w-full md:px-0">
              <div className="flex flex-col gap-4 w-full lg:w-1/4">
                  <div className="text-center md:text-left md:px-0">
                      <p className="subtitle">
                          Lista de Precios
                      </p>
                      <h2 className="title">
                          Costos del Transporte Publico
                      </h2>
                  </div>
                  
                  <div className="md:flex-1">
                      <p className="text-body md:pt-4">
                          Informate sobre la lista de precios y metodos de pago disponibles
                          que existen, que osilan entre los $ 11.00 a los $ 13.00
                      </p>
                      <div className="flex flex-row lg:flex-col gap-4 mt-4 md:mt-6">
                          <div className="w-full lg:w-full lg:pt-4">
                              <div className="flex flex-col items-center lg:items-start gap-3 pb-3 mx-auto">
                                  <div className="flex items-center gap-2 border-t border-gray-300 pt-3">
                                      <h2 className="font-semibold text-body">
                                      Revisa términos y condiciones
                                      </h2>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="rounded-lg w-full lg:w-3/4">
                  <CarouselWrapper>
                      {costs.map((cost) => (
                          <CardCostRoute
                              key={cost.id}
                              imagen={cost.imagen}
                              tipoUnidad={cost.tipoUnidad}
                              tipoPago={cost.tipoPago}
                              tipoPasaje={cost.tipoPasaje}
                              costo={cost.costo}
                          />
                      ))}
                  </CarouselWrapper>
              </div>
          </div>
      </div>
    );
};

export default CarouselCostRoutes;