'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface CardRutasProps {
    nombreRuta: string;
    origenDestino: string;
    organizacion: string;
    idRuta: string;
    frecuencia: string;
}

export default function CardRutas({ idRuta, nombreRuta, origenDestino, organizacion, frecuencia }: CardRutasProps) {
      const router = useRouter();
    
      const handleClick = () => {
        router.push(`/routing/transportation/detailTransportation/${idRuta}`);
      };

    return (
        <div className="group font-gantari border relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-200 overflow-hidden w-100"       onClick={handleClick}>
            {/* Elementos de fondo decorativos */}
            {/*<div className="absolute rounded-2xl opacity-30 bg-gray-400" style={{ width: '40px', height: '60px', top: '-25px', left: '-15px', transform: 'rotate(-30deg)' }} />*/}
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
            {/*<div className="absolute rounded-2xl opacity-30 bg-gray-300" style={{ width: '70px', height: '50px', top: '20%', right: '-5px', transform: 'translateX(50%)' }} />*/}

            {/* Contenido principal de la tarjeta */}
            <div className="relative z-10 p-4">
                {/*titulo*/}
                <h3 className="text-lg md:text-xl font-bold text-black mb-1 text-left">{nombreRuta}</h3>

                {/*subtitulo*/}
                <p className="text-sm md:text-base text-gray-600 mb-2 text-left">{origenDestino}</p>

                {/*badges*/}
                <div className="mt-1 flex flex-wrap gap-2">
                    <span className="px-2 py-0.5 text-xs md:text-sm font-semibold bg-gray-200 rounded-full text-gray-700 inline-block">
                        {frecuencia}
                    </span>
                    <span className="px-2 py-0.5 text-xs md:text-sm font-semibold bg-gray-200 rounded-full text-gray-700 inline-block">
                        {organizacion}
                    </span>
                </div>
            </div>

            {/* Flecha en la esquina inferior derecha */}
            <div className="absolute bottom-2 right-2">
                <ArrowRight className="text-gray-500 group-hover:text-gray-700 group-hover:translate-x-1 transition-all duration-300 ease-in-out" size={23} />
            </div>
        </div>
    );
}