'use client';

import React from 'react';
import SearchRoute from './SearchRoute';
import StatusRoutePanel from './StatusRoutePanel';
import ListRoutes from './ListRoutes';
import PaginationRoute from './PaginationRoute';
import FilterRoutes from './FilterRoutes';

interface RoutesDashboardProps {
  totalPages: number;
  currentPage: number;
  handlePageChange: (page: number) => void;
}

const DashboardRoutes = ({
  totalPages,
  currentPage,
  handlePageChange,
}: RoutesDashboardProps) => {
    return (
    <>
      <div className="font-gantari md:max-w-full md:mx-auto">
        <h4 className="text-gray-400 md:text-3xl tracking-wider pb-2 md:pb-5">
          Locales, Suspendidas y Desplazadas
        </h4>
        <h1 className="font-bold text-black text-3xl md:text-5xl">LISTA DE LAS RUTAS</h1>
      </div>

      <div className="md:flex gap-2">
        <div className="flex-grow flex-col w-full">
          <SearchRoute/>
          <StatusRoutePanel />
          <ListRoutes />
          <PaginationRoute
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
            onItemsPerPageChange={() => {}}
          />
        </div>
        <div className="flex-grow flex justify-end">
          <FilterRoutes />
        </div>
      </div>
    </>
  );
};
export default DashboardRoutes;