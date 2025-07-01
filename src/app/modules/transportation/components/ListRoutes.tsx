'use client'


import React from 'react';
import CardRutas from './CardRoutes';


export default function EstadoRutas() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-5">
            <CardRutas
                title="El Conchi - Centro"
                subtitle="El Conchi - Centro"
                labels={['15 Minutos', 'Alianza de Camiones']}
            />
             <CardRutas
                title="20 de Noviembre - Juárez"
                subtitle="Huerta Grande - Centro"
                labels={['15 Minutos', 'Alianza de Camiones']}
            /> <CardRutas
                title="20 de Noviembre - Juárez"
                subtitle="Huerta Grande - Centro"
                labels={['15 Minutos', 'Alianza de Camiones']}
            /> <CardRutas
                title="20 de Noviembre - Juárez"
                subtitle="Huerta Grande - Centro"
                labels={['15 Minutos', 'Alianza de Camiones']}
            /> <CardRutas
                title="20 de Noviembre - Juárez"
                subtitle="Huerta Grande - Centro"
                labels={['15 Minutos', 'Alianza de Camiones']}
            /> <CardRutas
                title="20 de Noviembre - Juárez"
                subtitle="Huerta Grande - Centro"
                labels={['15 Minutos', 'Alianza de Camiones']}
            /> <CardRutas
                title="20 de Noviembre - Juárez"
                subtitle="Huerta Grande - Centro"
                labels={['15 Minutos', 'Alianza de Camiones']}
            />
            <CardRutas
                title="20 de Noviembre - Juárez"
                subtitle="Huerta Grande - Centro"
                labels={['15 Minutos', 'Alianza de Camiones']}
            />

        </div>
    );
}