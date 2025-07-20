'use client'

import { ArrowUpRight, X } from "lucide-react";
import { useState } from "react";

interface CardPlaceProps {
  readonly imagen: string;
  readonly nombre: string;
  readonly descripcion: string;
  readonly nombreCategoria: string;
}

const CardPlace = ({ imagen, nombre, descripcion, nombreCategoria }: CardPlaceProps) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="relative aspect-[3/5] min-w-[120px] max-w-[20rem] w-full h-auto rounded-2xl overflow-hidden transition-transform duration-300 transform bg-white hover:-translate-y-1 hover:scale-[1.02]">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-300"
        style={{ backgroundImage: `url(${imagen})` }}
      />

      {/* Sombra/gradiente */}
      <div className={`absolute inset-0 transition-all duration-300 ${showDetails ? 'bg-black/50' : 'bg-gradient-to-t from-black/60 via-black/0 to-transparent'}`} />

      {/* Ícono superior */}
      <div className="absolute top-2 right-2 w-8 h-8 rounded-full faded-transparant cursor-pointer">
        <ArrowUpRight className="w-4 h-4" />
      </div>

      {/* Contenido principal */}
      {!showDetails && (
        <div className="absolute bottom-4 left-4 transition-all duration-300">
          <h3 className="card-title">{nombre}</h3>
          <p className="card-subtitle">{nombreCategoria}</p>
          <button
            onClick={() => setShowDetails(true)}
            className="inline-block mt-4 px-2 py-1 max-w-2xl mx-auto drop-shadow-md rounded-lg backdrop-blur-sm bg-gradient-to-br from-white/10 via-white/5 to-transparent hover:scale-105 transition text-white cursor-pointer"
          >
            Ver más
          </button>
        </div>
      )}

      {/* Panel de detalles */}
      {showDetails && (
        <div className="absolute inset-3 bottom-3 bg-white/10 backdrop-blur-md rounded-2xl p-4 transition-all duration-500 ease-in-out overflow-y-auto 
        [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">
          {/* Botón cerrar */}
          <button
            onClick={() => setShowDetails(false)}
            className="absolute top-2 right-2 text-white hover:text-red-300 transition"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="h-full flex flex-col">
            <h3 className="card-title">{nombre}</h3>
            <div className="card-text">{descripcion}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardPlace;
