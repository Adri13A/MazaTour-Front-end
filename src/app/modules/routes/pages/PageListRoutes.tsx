'use client';

import React, { useState } from 'react';
import CarouselCostRoutes from "../components/carouselCosts/CarouselCostRoutes";
import Hero from '../components/Hero';
import DashboardRoutes from '../components/dashboardRoutes/DashboardRoutes';

const PageListRoutes = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Hero />

      <div className="p-5 md:pl-20 md:pr-20 md:pb-10 md:pt-10 bg-white">
        <DashboardRoutes
          totalPages={totalPages}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </div>

      <div className="p-5 md:pl-20 md:pr-20 md:pb-10 md:pt-10 bg-white">
        <CarouselCostRoutes />
      </div>
    </>
  );
};

export default PageListRoutes;
