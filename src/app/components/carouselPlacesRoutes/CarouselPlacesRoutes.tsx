import React from 'react';
import { Camera, MapPin } from "lucide-react";
import CarouselWrapper from './CarouselWrapper';
import CardPlacesRoutes from '../cards/CardPlacesRoutes';
import { placesRoutes } from '../../data/placesRoutes.js'; 

const CarouselPlacesRoutes = () => {
  return (
    <div className="w-full space-y-4 md:space-y-6">
      {/* Título (optimizado para tablets) */}
      <div className="text-center md:text-left md:px-0">
        <p className="font-semibold text-sm sm:text-base md:text-lg text-gray-500">
          Recorre Mazatlán
        </p>
        <h2 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase text-black leading-tight">
          Conoce cómo llegar a tu destino
        </h2>
      </div>
    
      {/* Cuerpo principal (reorganizado para tablets) */}
      <div className="flex flex-col lg:flex-row gap-6 w-full md:px-0">
        {/* Columna izquierda (optimizada para tablets) */}
        <div className="flex flex-col gap-4 w-full lg:w-1/4">
          <div className="md:flex-1">
            <p className="text-justify md:text-justify text-gray-500 text-sm md:text-base leading-relaxed md:leading-normal">
              Explora los distintos puntos de interés turístico y cultural
              a los que puedes llegar fácilmente a través de las variadas
              rutas que conectan el puerto.
            </p>
            
            <div className="flex flex-row lg:flex-col gap-4 mt-4 md:mt-6">
              {/* Visita */}
              <div className="w-1/2 lg:w-full lg:pt-4">
                <div className="flex flex-col items-center lg:items-start gap-3 pb-3">
                  <div className="flex items-center gap-2">
                  <span className="bg-gray-200 p-1.5 rounded-md hover:scale-110 hover:bg-gray-300 transition-all duration-300 ease-in-out">
                    <Camera className="h-5 w-5 text-black" />
                  </span>
                    <h2 className="font-semibold text-black text-sm md:text-base">Visita</h2>
                  </div>
                </div>
                <p className="text-gray-500 text-sm md:text-base text-center lg:text-left">Puedo contener máximo estos</p>
                <p className="text-gray-500 text-sm md:text-base text-center lg:text-left">Caracteres no más</p>
              </div>

              {/* Recorre */}
              <div className="w-1/2 lg:w-full lg:pt-4">
                <div className="flex flex-col items-center lg:items-start gap-3 pb-3">
                  <div className="flex items-center gap-2">
                  <span className="bg-gray-200 p-1.5 rounded-md hover:scale-110 hover:bg-gray-300 transition-all duration-300 ease-in-out">
                      <MapPin className="h-5 w-5 text-black" />
                    </span>
                    <h2 className="font-semibold text-black text-sm md:text-base">Recorre</h2>
                  </div>
                </div>
                <p className="text-gray-500 text-sm md:text-base text-center lg:text-left">Puedo contener máximo estos</p>
                <p className="text-gray-500 text-sm md:text-base text-center lg:text-left">Caracteres no más</p>
              </div>
            </div>
          </div>
        </div>
    
        {/* Columna derecha (carrusel optimizado) */}
        <div className="rounded-lg w-full lg:w-3/4">
          <CarouselWrapper>
            {placesRoutes.map((placeRoute) => (
              <CardPlacesRoutes
                key={placeRoute.id}
                imagen={placeRoute.imagen}
                nombreRuta={placeRoute.nombreRuta}
                nombreLugar={placeRoute.nombreLugar}
              />
            ))}
          </CarouselWrapper>
        </div>
      </div>
    
      {/* Estadísticas (optimizadas) */}
      <div className="flex flex-col lg:flex-row gap-4 w-full px-4 md:px-0">
        <div className="hidden lg:block lg:w-1/4" />
        <div className="pt-4 md:pt-5 w-full lg:w-3/4 border-t border-gray-300">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 text-center text-black">
            {[
              { label: "Lugares a Visitar", value: "+ 100" },
              { label: "Playas", value: "+ 10" },
              { label: "Museos", value: "+ 5" },
              { label: "Parques", value: "+ 15" },
            ].map((item, i) => (
              <div key={i}>
                <p className="font-semibold text-xs md:text-sm lg:text-base">{item.label}</p>
                <h2 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase leading-tight">
                  {item.value}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default CarouselPlacesRoutes;