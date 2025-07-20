'use client';

import React from 'react';
import SearchRoute from './SearchRoute';
import StatusRoutePanel from './StatusRoutePanel';
import ListRoutes from './ListRoutes';
import PaginationRoute from './PaginationRoute';
import FilterRoutes from './FilterRoutes';
import Title from '@/app/components/letters/Title';
import Subtitle from '@/app/components/letters/Subtitle';

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
        <Subtitle className="text-center md:text-left">
          Locales, Suspendidas y Desplazadas
        </Subtitle>
        <Title className="text-center md:text-left">Lista de Rutas</Title>
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