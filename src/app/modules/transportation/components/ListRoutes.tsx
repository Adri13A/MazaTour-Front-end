'use client'

import React from 'react';
import CardRutas from '../../../components/cards/CardRoutes';
import transportationDetail from '../../../data/tranportationDetail';


export default function ListRoutes() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-5">
            {transportationDetail.map((detail) => (

                <CardRutas
                    key={detail.id}
                    idRuta={detail.idRuta}
                    nombreRuta={detail.nombreRuta}
                    origenDestino={detail.origenDestino}
                    organizacion={detail.organizacion}
                    frecuencia={detail.frecuencia}
                />
         
          ))}

        </div>
    );
}