'use client';

import { Navigation, Repeat2, Navigation2, ChevronDownIcon } from 'lucide-react';
import { infoRuta } from '@/app/data/aditionalData';
import { JSX } from 'react';
import MapComponent from '@/app/components/MapComponent';

const paradas = [
  "20 de Noviembre",
  "Av. Gabriel Leyva",
  "Huerta Grande",
  "Jabalíes",
  "Juárez",
  "Plaza Acaya",
  "Venadillo",
  "Villa Galaxia",
];

export default function DetailMapTransportation({ idRuta }: { idRuta: string }) {
  return (
    <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-lg border">
      
      {/* Cards flotantes encima del mapa */}
      <div className="absolute top-2 left-4 z-[1000] p-4 w-[270px] flex flex-col gap-2 overflow-y-auto max-h-[460px] hide-scrollbar">
        
        {/* Título */}
        <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-2 text-center">
          <h2 className="font-bold text-white text-sm uppercase">Detalles</h2>
        </div>

        {/* Icon Cards */}
        <div className="flex justify-center gap-3">
          <CardIcon icon={<Navigation className="w-6 h-6 mb-1" />} label="Salida" />
          <CardIcon icon={<Repeat2 className="w-6 h-6 mb-1" />} label="Temporal" />
          <CardIcon icon={<Navigation2 className="w-6 h-6 mb-1 rotate-180" />} label="Regreso" />
        </div>

        {/* Paradas */}
        <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-2 text-center">
          <h2 className="font-bold text-white text-xs uppercase">Paradas</h2>
        </div>

            {/* Bloque 4: Paradas (Descripción) */}
        <div className="bg-black/40 backdrop-blur-sm rounded-3xl pb-2 text-white">
            <div className="container max-w-5xl px-3 py-4 mx-auto">
                <div className="grid gap-4 mx-4">
                    <div className="relative col-span-4 px-4 space-y-6">
                    <div className="col-span-4 space-y-4 relative px-4 before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:bg-gray-300">
                        {[ 
                        "20 de Noviembre", "Av. Gabriel Leyva", "Huerta Grande", "Jabalíes", 
                        "Juárez", "Plaza Acaya", "Venadillo", "Villa Galaxia",
                        ].map((paradas, index) => (
                        <div
                            key={index}
                            className="flex items-center relative before:absolute before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:rounded-full before:left-[-33px] before:z-[1] before:bg-white"
                        >
                            <p className="text-xs font-light tracking-wide whitespace-normal break-words">
                            {paradas}
                            </p>
                        </div>
                        ))}
                    </div>
                    </div>
                </div>
            </div>
        </div>

       {/* Información adicional */}
        <div className="flex flex-col gap-2">
          {infoRuta.map((item, index) => (
            <div key={index} className="bg-black/40 backdrop-blur-sm rounded-3xl px-3 py-1 flex items-center gap-3">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shrink-0">
                <item.icon className="w-4 h-4 text-black" />
              </div>
              <div className="flex flex-col leading-tight">
                <h3 className="text-white text-sm font-bold">{item.titulo}</h3>
                <h4 className="text-white text-xs font-light uppercase">{item.valor}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      <MapComponent idRuta={idRuta} />
    </div>
  );
}

function CardIcon({ icon, label }: { icon: JSX.Element; label: string }) {
  return (
    <div className="w-16 h-16 bg-black/40 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center text-white text-xs">
      {icon}
      <span>{label}</span>
    </div>
  );
}
