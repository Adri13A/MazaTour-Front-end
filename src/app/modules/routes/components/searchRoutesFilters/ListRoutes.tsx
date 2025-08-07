'use client'

import React from 'react';
import CardRoute from '../../../../components/cards/CardRoute';
import { useRouter } from 'next/navigation';
import { ICardRoute } from '@/app/interfaces/utils';

interface ListRoutesProps {
  routes: ICardRoute[];
}

const ListRoutes = ({ routes = [] }: Readonly<ListRoutesProps>) => {
    
    const router = useRouter();

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-5">
            {routes.map((route) => (
                <CardRoute
                    key={route.id}
                    name={route.name}
                    originDestination={route.originDestination}
                    companyName={route.companyName}
                    frequency={route.frequency}
                    onClick={() => router.push(`/routing/routes/${route.id}`)}
                />
            ))}
        </div>
    );
};

export default ListRoutes;