'use client'

import React, { useState } from 'react';
import CarouselCost from "../components/carouselCost/CarouselCost";
import Hero from '../../transportation/components/Hero';
import TituloListaRutas from '../../transportation/components/TitleListRoutes';
import BuscadorRuta from '../../transportation/components/SearchRoutes';
import EstadoRutas from '../../transportation/components/StatusRoutes';
import FiltroRutas from '../../transportation/components/FilterRoutes';
import PaginacionRutas from '../../transportation/components/PaginationRoutes';
import ListaRutas from '../../transportation/components/ListRoutes';


const DetailTransportation = () => {
  // Estado para la página actual
  const [currentPage, setCurrentPage] = useState(1);
  // Número total de páginas (puedes obtener este valor de una API)
  const totalPages = 10;

  // Función para cambiar la página actual
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    console.log(`Page changed to: ${page}`);
    // Aquí puedes agregar la lógica para cargar los datos de la nueva página
  };

  return (
    <div>
      <Hero />

      {/* Carousel PlacesRoutes */}
      <section>
        <div className="p-5 md:pl-20 md:pr-20 md:pb-10 md:pt-10 bg-white">
          <TituloListaRutas />
          <div className='md:flex gap-2'>
            <div className="flex-grow flex-col w-full">
              <BuscadorRuta />
              <EstadoRutas />
              <ListaRutas />
              {/* Paginación */}
              <PaginacionRutas
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={handlePageChange}
                onItemsPerPageChange={(itemsPerPage: number) => {
                  // Puedes agregar aquí la lógica para manejar el cambio de items por página
                  console.log(`Items per page changed to: ${itemsPerPage}`);
                }}
              />
            </div>
            <div className="flex-grow flex justify-end">
              <FiltroRutas />
            </div>
          </div>
        </div>

        <div className="p-5 md:pl-20 md:pr-20 md:pb-10 md:pt-10 bg-white">
          <CarouselCost />
        </div>
      </section>
    </div>
  );
};
export default DetailTransportation;
