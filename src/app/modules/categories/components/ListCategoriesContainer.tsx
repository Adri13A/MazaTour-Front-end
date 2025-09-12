'use client';

import React from 'react';
import Hero from './Hero';
import PlacesWhithMenu from './carouselPlaces/PlacesWhiteMenu';
import Title from '@/app/components/letters/Title';

const ListCategoriesContainer = () => {

  return (
    <>
      <Hero />

      <div className="p-5 md:pl-40 md:pr-40 md:pb-10 md:pt-10 bg-white">
        <Title className="pt-2 pb-8">Listado de Categorias</Title>
        <PlacesWhithMenu/>
      </div>
    </>
  );
};

export default ListCategoriesContainer;
