import React from 'react';
import Title from '@/app/components/letters/Title';
import Subtitle from '@/app/components/letters/Subtitle';
import SearchRoute from '../searchRoutesFilters/SearchRoute';

const SearchRoutes = () => {
  return (
    <div>
        <div className="text-center mb-10">
            <Subtitle className='text-accent2 mb-2'>
                Elige tu destino
            </Subtitle>     
            <Title className="text-black">
                Recorre tu <span className="text-stroke-black">proxima</span> parada
            </Title>
        </div>
          <div className="md:flex gap-2">
        <div className="flex-grow flex-col w-full">
          <SearchRoute/>
          {/* <ListRoutes /> */}
        </div>
      </div>
    </div>
  );
};

export default SearchRoutes;