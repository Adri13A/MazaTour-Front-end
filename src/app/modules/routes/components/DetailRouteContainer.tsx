'use client';

import DetailMapRoute from './DetailMapRoute';
import CarouselPlacesRoute from './carouselPlacesRoute.tsx/CarouselPlacesRoute';
import SearchRoutes from './searchRoutes/SearchRoutes';
import { usePlacesRoute } from '../hooks/usePlacesRoute';

interface DetailRouteContainerProps {
  routeId: string;
}

const DetailRouteContainer = ({ routeId  }: DetailRouteContainerProps) => {
  
  const { placesroute } = usePlacesRoute(routeId);
  
  return (
    <>
    
      <div className="p-5 md:pl-40 md:pr-40 md:pb-10 md:pt-0 bg-white">
        <DetailMapRoute routeId={routeId} />
      </div>
      <div className="p-5 md:pl-40 md:pr-40 md:pb-10 md:pt-10 bg-white">
        <CarouselPlacesRoute placesroute={placesroute ?? []}/>
      </div>
      <div className="p-5 md:pl-40 md:pr-40 md:pb-20 md:pt-10 bg-white">
        <SearchRoutes />
      </div>
    </>
  );
};

export default DetailRouteContainer;
