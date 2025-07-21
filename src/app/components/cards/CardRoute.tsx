'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CardRutasProps {
  nombreRuta: string;
  origenDestino: string;
  organizacion: string;
  frecuencia: string;
  onClick?: () => void
}

export default function CardRoutes({
  nombreRuta,
  origenDestino,
  organizacion,
  frecuencia,
  onClick,
}: CardRutasProps) {
  
  return (
    <div className="group font-gantari border relative bg-white 
      rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-200 overflow-hidden w-100"
      onClick={onClick}>
      <div
        className="absolute rounded-2xl opacity-25 bg-gray-500"
        style={{
          width: '70px',
          height: '125px',
          bottom: '-10px',
          right: '-25px',
          transform: 'rotate(35deg)',
        }}
      />
      <div className="relative z-10 p-4">
        <h3 className="text-lg md:text-xl font-bold text-black mb-1 text-left">{nombreRuta}</h3>
        <p className="text-sm md:text-base text-gray-600 mb-2 text-left">{origenDestino}</p>

        <div className="mt-1 flex flex-wrap gap-1">
          {[organizacion, frecuencia].map((label, index) => (
            <span
              key={index}
              className="px-2 py-0.5 text-xs md:text-sm font-semibold bg-gray-200 rounded-full text-gray-700 inline-block"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
      <div className="absolute bottom-2 right-2">
        <ArrowRight className="text-gray-500 group-hover:text-gray-700 group-hover:translate-x-1 transition-all duration-300 ease-in-out" size={23} />
      </div>
    </div>
  );
}
