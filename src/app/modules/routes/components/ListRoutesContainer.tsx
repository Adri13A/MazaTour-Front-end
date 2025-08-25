'use client';

import React, { useState } from 'react';
import CarouselCostRoutes from "../components/carouselCosts/CarouselCostRoutes";
import Hero from '../components/Hero';
import SearchRoutesFilters from '../components/searchRoutesFilters/SearchRoutesFilters';
import { useCostsRoutes } from '../hooks/useCostsRoutes';
import { useRoutes } from '../hooks/useRoutes';

const ListRoutesContainer = () => {
  const { costsRoutes } = useCostsRoutes();
  const { routes } = useRoutes();


  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Hero />

      <div className="p-5 md:pl-40 md:pr-40 md:pb-10 md:pt-10 bg-white">
        <SearchRoutesFilters
          totalPages={totalPages}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
          routes={routes ?? []}
        />
      </div>

      <div className="p-5 md:pl-40 md:pr-40 md:pb-10 md:pt-10 bg-white">
        <CarouselCostRoutes costsRoutes={costsRoutes ?? []} />
      </div>
    </>
  );
};

export default ListRoutesContainer;
