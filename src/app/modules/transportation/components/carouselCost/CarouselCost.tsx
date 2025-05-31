import React from 'react';
import { costs } from '../../../../data/cost.js'; 
import FadeInView from "../../../../components/FadeInView";
import CardCostTransportation from '@/app/components/cards/CardCostTransportation';
import CarouselWrapper from './CarouselWrapper';

const CarouselCost = () => {
  return (
    <div className="w-full space-y-4 md:space-y-6">
      <div className="flex flex-col lg:flex-row gap-6 w-full md:px-0">
        {/* Columna izquierda (optimizada para tablets) */}
        <div className="flex flex-col gap-4 w-full lg:w-1/4">
            <FadeInView direction="left" duration={2}>
                <div className="text-center md:text-left md:px-0">
                    <p className="subtitle">
                        Lista de Precios
                    </p>
                    <h2 className="title">
                    Costos del Transporte Publico
                    </h2>
                </div>
            </FadeInView>
            <FadeInView direction="left" duration={2}>
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
            </FadeInView>

        </div>

        {/* Columna derecha (carrusel optimizado) */}
        <div className="rounded-lg w-full lg:w-3/4">
          <FadeInView direction="right" duration={2}>
            <CarouselWrapper>
              {costs.map((cost) => (
                <CardCostTransportation
                  key={cost.id}
                  imagen={cost.imagen}
                  tipoUnidad={cost.tipoUnidad}
                  tipoPago={cost.tipoPago}
                  tipoPasaje={cost.tipoPasaje}
                  costo={cost.costo}
                />
              ))}
            </CarouselWrapper>
          </FadeInView>

        </div>
      </div>
    </div>
  );
};

export default CarouselCost;