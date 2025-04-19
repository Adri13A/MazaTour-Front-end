import React from 'react';

const CarouselPlaces = () => {
  return (
    <div className="w-full space-y-4">
    {/* Título que ocupa todo el ancho */}
    <div className="bg-gray-200 rounded-lg p-4 text-center font-bold">
      DIV TÍTULO
    </div>
  
    {/* Cuerpo: izquierda dividida + derecha */}
    <div className="flex gap-4 w-full h-64">
      {/* Columna izquierda con dos divs verticales */}
      <div className="flex flex-col gap-4 w-1/2">
        <div className="bg-blue-300 rounded-lg p-4 flex-1">Izquierda Arriba</div>
        <div className="bg-blue-400 rounded-lg p-4 flex-1">Izquierda Abajo</div>
      </div>
  
      {/* Columna derecha */}
      <div className="bg-purple-300 rounded-lg p-4 w-1/2">
        Derecha (ocupa todo)
      </div>
    </div>
  
    {/* Nuevo div solo en el lado derecho */}
    <div className="flex justify-end w-full">
      <div className="bg-purple-400 rounded-lg p-4 w-1/2">
        Nuevo Div Derecho Inferior
      </div>
    </div>
  </div>
  
  

  
  );
};

export default CarouselPlaces;