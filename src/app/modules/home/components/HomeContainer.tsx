'use client'

import Hero from "../components/Hero/Hero";
import CarouselCompanies from "../components/carouselCompanies/CarouselCompanies";
import GalleryVillages from "../components/galleries/GalleryVillage";
import CarouselFoods from '../components/carouselFoods/CarouselFoods';
import GalleryCategories from "../components/galleries/GalleryCategories";
import CarouselPlaces from "../components/carouselPlaces/CarouselPlaces";
import HistorySection from "../components/histories/HistorySection";
import CarouselPlacesRoutes from "../components/carouselPlacesRoutes/CarouselPlacesRoutes";

export default function HomeContainer() {
  return (
    <div>
      {/* Imagen de Fondo */}
      <Hero />

      {/* Carousel PlacesRoutes */}
      <section>
        <div className="p-5 md:pl-40 md:pr-40 md:pb-10 md:pt-10 bg-white">
          <CarouselPlacesRoutes />
        </div>
      </section>

      {/* Carousel Places */}
      <section>
        <div className="p-5 md:pl-40 md:pr-40 md:pb-10 md:pt-10 bg-white">
          <CarouselPlaces />
        </div>
      </section>

      {/* History Section */}
      <section>
        <div className="p-5 md:pl-40 md:pr-40 md:pb-10 md:pt-10 bg-white">
          <HistorySection />
        </div>
      </section>

      {/* Gallery Categories */}
      <section>
        <div className="p-5 md:pl-40 md:pr-40 md:pb-10 md:pt-10 bg-white">
          <GalleryCategories />
        </div>
      </section>

      {/* Carousel Foods */}
      <section>
        <div className="p-5 md:pl-40 md:pr-40 md:pb-10 md:pt-10 bg-white">
          <CarouselFoods />
        </div>
      </section>

      {/* Gallery Villages */}
      <section>
        <div className="p-5 md:pl-40 md:pr-40 md:pb-10 md:pt-10 bg-white">
          <GalleryVillages />
        </div>
      </section>

      {/* Carousel Companies */}
      <section>
        <div className="md:pb-10 md:pt-10 md:pl-20 md:pr-20 bg-white">
          <CarouselCompanies />
        </div>
      </section>
    </div>
  );
}
