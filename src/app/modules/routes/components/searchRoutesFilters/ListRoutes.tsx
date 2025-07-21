'use client'

import React from 'react';
import CardRoute from '../../../../components/cards/CardRoute';
import transportationDetail from '../../../../data/tranportationDetail';
import { useRouter } from 'next/navigation';

const ListRoutes = () => {
    
    const router = useRouter();

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-5">
            {transportationDetail.map((detail) => (
                <CardRoute
                    key={detail.id}
                    nombreRuta={detail.nombreRuta}
                    origenDestino={detail.origenDestino}
                    organizacion={detail.organizacion}
                    frecuencia={detail.frecuencia}
                    onClick={() => router.push(`/routing/routes/${detail.idRuta}`)}
                />
            ))}
        </div>
    );
};

export default ListRoutes;