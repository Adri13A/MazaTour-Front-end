import React, { useState } from 'react';
import { places } from '../../data/places.js'; 
import CarouselWrapper from './CarouselWrapper';
import CardPlaces from '../cards/CardPlaces';
import NavCategories from '../navs/NavCategories';
import { Categoria } from '../../enums/categories';

const CarouselPlaces = () => {
  const [selectedCategory, setSelectedCategory] = useState<Categoria>(Categoria.HISTORIA_CULTURA);

  const filteredPlaces = selectedCategory === Categoria.TODAS 
    ? places 
    : places.filter(place => place.idCategoria === selectedCategory);

  return (
    <div>
      {/* Encabezado */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-2">
        {/* Columna izquierda */}
        <div className="w-full md:w-2/3 order-1 md:order-1">
          {/* Título */}
          <div className="flex flex-col text-center md:text-left mb-4">
            <p className="font-semibold text-sm sm:text-xl md:text-base lg:text-lg text-gray-500 mb-1">
              Conoce Maztlán
            </p>
            <h2 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase text-black text-center md:text-left">
              Todo lo que tenemos para ti
            </h2>
          </div>
        </div>

        {/* Columna derecha */}
        <div className="w-full md:w-2/3 order-2 md:order-2">
          {/* Texto */}
          <div className="text-justify md:text-right flex flex-col items-center md:items-end mb-4">
            <p className="leading-relaxed max-w-3xl text-gray-500 text-sm md:text-base text-center md:text-right">
              Descubre los lugares que Mazatlán tiene para ti. 
              Desde su riqueza histórica y cultural hasta sus impresionantes playas y deliciosa gastronomía, 
              explora todos los rincones que hacen de esta ciudad un destino único.
            </p>
          </div>
          
          <div className="">
            <NavCategories onCategoryChange={setSelectedCategory} />
          </div>
        </div>
      </div>      

      {/* Carrusel con lugares filtrados */}
      <CarouselWrapper>
        {filteredPlaces.map((place) => (
          <CardPlaces
            key={place.id}
            imagen={place.imagen}
            nombre={place.nombre}
            descripcion={place.descripcion}
            nombreCategoria={place.nombreCategoria}
          />
        ))}
      </CarouselWrapper>
      <div className='pt-5 text-center'>
              {/* <button className="relative inline-flex items-center justify-center mx-auto group p-0.5">
          <span className="absolute inset-0 bg-gradient-to-r from-lime-400 via-green-400 to-lime-500 rounded-lg p-[4px]" />
          <span className="relative flex items-center justify-center w-full h-full bg-gray-50 text-lime-500 font-semibold rounded-lg group-hover:bg-transparent group-hover:text-white transition-all duration-300 px-6 py-2">
            Explorar
            <ArrowUpRightIcon className="w-5 h-5 ml-3" />
          </span>
        </button> */}

        {/* <button className="relative inline-flex items-center justify-center mx-auto group p-0.5">
          <span className="absolute inset-0 bg-gradient-to-r from-lime-400 via-lime-500 to-lime-600 rounded-lg p-[4px]" />
          <span className="relative flex items-center justify-center w-full h-full bg-gray-100 text-lime-600 font-semibold rounded-lg group-hover:bg-transparent group-hover:text-white transition-all duration-300 px-6 py-2">
            Explorar
            <ArrowUpRightIcon className="w-5 h-5 ml-3" />
          </span>
        </button> */}


      </div>
    </div>
  );
};

export default CarouselPlaces;