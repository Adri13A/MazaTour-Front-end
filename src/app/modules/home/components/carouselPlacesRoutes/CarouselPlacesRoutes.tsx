import React from 'react';
import { Camera, MapPin } from "lucide-react";
import CountUp from "react-countup";
import CarouselWrapper from './CarouselWrapper';
import CardPlaceRoute from '../../../../components/cards/CardPlaceRoute';
import Title from '@/app/components/letters/Title';
import Subtitle from '@/app/components/letters/Subtitle';
import TextBody from '@/app/components/letters/Text';
import { ICardPlaceRoute } from '@/app/interfaces/utils';

interface CarouselPlacesRouteProps{
  placesRoutes: ICardPlaceRoute[];
}


const CarouselPlacesRoute = ({ placesRoutes }: Readonly<CarouselPlacesRouteProps>) => {
  return (
    <div className="w-full space-y-4 md:space-y-0">
        <div className="text-center md:text-left">
          <Subtitle className='text-accent2'>Recorre Mazatlán</Subtitle>
          <Title className="text-black">Conoce cómo llegar a tu destino</Title>
        </div>
      
        <div className="flex flex-col lg:flex-row gap-6 w-full md:px-0">
            <div className="flex flex-col gap-4 w-full lg:w-1/4">
                <div className="md:flex-1">
                  <TextBody className="text-justify md:pt-5">
                      Explora los distintos puntos de interés turístico y cultural
                      a los que puedes llegar fácilmente a través de las variadas
                      rutas que conectan el puerto.
                    </TextBody>
                                        
                    <div className="flex flex-row lg:flex-col gap-4 mt-4 md:mt-6">
                        {/* Visita */}
                        <div className="w-1/2 lg:w-full lg:pt-4">
                            <div className="flex flex-col items-center lg:items-start gap-3 pb-3">
                                <div className="flex items-center gap-2">
                                    <span className="p-1.5 rounded-md hover:scale-110 hover:bg-gray-300 transition-all duration-300 ease-in-out" style={{ background: "var(--color-accent2)" }} >
                                      <Camera className="h-5 w-5 text-white" />
                                    </span>
                                    <h2 className="font-semibold text-black text-sm md:text-base">Visita</h2>
                                </div>
                            </div>
                          <TextBody className="text-center md:text-left">Puedo contener máximo estos <br/> Caracteres no más</TextBody>
                        </div>

                        {/* Recorre */}
                        <div className="w-1/2 lg:w-full lg:pt-4">
                            <div className="flex flex-col items-center lg:items-start gap-3 pb-3">
                                <div className="flex items-center gap-2">
                                    <span className="p-1.5 rounded-md hover:scale-110 hover:bg-gray-300 transition-all duration-300 ease-in-out" style={{ background: "var(--color-accent2)" }} >
                                        <MapPin className="h-5 w-5 text-white" />
                                      </span>
                                      <h2 className="font-semibold text-black text-sm md:text-base">Recorre</h2>
                                </div>
                            </div>
                          <TextBody className="text-body text-center md:text-left">Puedo contener máximo estos <br/> Caracteres no más</TextBody>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rounded-lg w-full lg:w-3/4">
                <CarouselWrapper>
                    {placesRoutes.map((placeRoute) => (
                        <CardPlaceRoute
                            key={placeRoute.id}
                            image={placeRoute.image}
                            routeName={placeRoute.routeName}
                            placeName={placeRoute.placeName}
                        />
                    ))}
                  </CarouselWrapper>
            </div>
        </div>
            
        <div className="flex flex-col lg:flex-row gap-4 w-full px-4 md:px-0">
          <div className="hidden lg:block lg:w-1/4" />
          <div className="pt-4 md:pt-5 w-full lg:w-3/4 border-t border-gray-200" >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 text-center text-black">
                  {[
                    { label: "Lugares a Visitar", value: "+ 100" },
                    { label: "Playas", value: "+ 10" },
                    { label: "Museos", value: "+ 5" },
                    { label: "Parques", value: "+ 15" },
                  ].map((item, i) => (
                      <div key={i}>
                          <p className="font-semibold text-xs md:text-sm lg:text-base">{item.label}</p>
                           <Title className="text-black">
                            <CountUp end={parseInt(item.value.replace(/\D/g, ""))} duration={4} />+
                          </Title>
                      </div>
                  ))}
              </div>
          </div>
        </div>
    </div>
  );
};

export default CarouselPlacesRoute;