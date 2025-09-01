'use client';

import React, { useRef } from 'react';
import Title from '@/app/components/letters/Title';
import Subtitle from '@/app/components/letters/Subtitle';
import Breadcrumb from '@/app/components/Breadcrumb';
import { useDetailRoute } from './hooks/useDetailRoute';

interface HeroDetailProps {
  routeId: string;
}

const HeroDetail = ({ routeId  }: HeroDetailProps) => {
    const { detailroute, isLoading } = useDetailRoute(routeId);
    const leftPanelRef = useRef<HTMLDivElement>(null);

    if (isLoading || !detailroute) {
        return
    }

     return (
      <div
        className="relative h-[460px] bg-cover bg-center"
        style={{ backgroundImage: `url('/images/MAPA3.png')` }}
      >
        {/* Degradado blanco arriba de la imagen */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/100 to-white/90"></div>
        <div className="relative z-10 h-full flex items-center p-5 md:pl-40 md:pr-40">
          <div className="flex w-full h-full">
            <div
              ref={leftPanelRef}
              className="relative h-full overflow-hidden text-black flex flex-col justify-start"
            >
              <div className="pointer-events-none absolute w-full to-transparent"></div>

              <div className="pt-12">
                <Title className="whitespace-nowrap">
                  {detailroute.name}
                </Title>
                <Subtitle>{detailroute.originDestination}</Subtitle>

                <div className="md:text-left">
                  <Breadcrumb routeName={detailroute.name}/>
                </div>
              </div>
            </div>            
          </div>
        </div>
      </div>
    );
};

export default HeroDetail;
