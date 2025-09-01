'use client'

import { ArrowUpRight, X } from "lucide-react";
import { useState } from "react";

interface CardPlaceListRouteProps {
  readonly image: string; 
  readonly name: string;
  readonly categoryName: string;
}

const CardPlaceListRoute = ({ image, name, categoryName }: CardPlaceListRouteProps) => {

  return (
        <div className="
        relative 
        aspect-[5/8]              /* default: móviles */
        min-w-[107px] max-w-[20rem] 
        w-full h-auto 
        rounded-2xl 
        overflow-hidden 
        transition-transform 
        duration-300 
        transform 
        bg-white 
        hover:-translate-y-1 
        hover:scale-[1.02]
        lg:aspect-[9/6]           /* en escritorio (lg en adelante) */
        lg:min-w-[145px] lg:max-w-[22rem]
        ">
      {/* Image de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-300"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Sombra/gradiente */}
      <div className={`absolute inset-0 transition-all duration-300  bg-black/20  bg-gradient-to-t from-black/30 via-black/0 to-transparent`} />

      {/* Ícono superior */}
      <div className="absolute top-2 right-2 w-8 h-8 rounded-full faded-transparant cursor-pointer">
        <ArrowUpRight className="w-4 h-4" />
      </div>

      {/* Contenido principal */}
        <div className="absolute bottom-4 left-4 transition-all duration-300">
          <h3 className="card-title">{name}</h3>
          <p className="card-subtitle">{categoryName} </p>
         
        </div>
    

     
    </div>
  );
};

export default CardPlaceListRoute;
