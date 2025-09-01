'use client';

import React from 'react';
import Hero from './Hero';
import ListCategories from './ListCategories';
import PlacesWhithMenu from './carouselPlaces/PlacesWhiteMenu';

const ListCategoriesContainer = () => {

  return (
    <>
      <Hero />

      <div className="p-5 md:pl-40 md:pr-40 md:pb-10 md:pt-10 bg-white">
        <ListCategories />
      </div>

      <div className="p-5 md:pl-40 md:pr-40 md:pb-10 md:pt-10 bg-white">
        <PlacesWhithMenu/>
      </div>
    </>
  );
};

export default ListCategoriesContainer;
