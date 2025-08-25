'use client'

import Hero from "../components/Hero/Hero";
import CarouselCompanies from "../components/carouselCompanies/CarouselCompanies";
import GalleryVillages from "../components/galleries/GalleryVillage";
import CarouselFoods from '../components/carouselFoods/CarouselFoods';
import GalleryCategories from "../components/galleries/GalleryCategories";
import CarouselPlaces from "../components/carouselPlaces/CarouselPlaces";
import HistorySections from "../components/histories/HistorySection";
import CarouselPlacesRoutes from "../components/carouselPlacesRoutes/CarouselPlacesRoutes";
import { useCompanies } from "../hooks/useCompanies";
import { useLocations } from "../hooks/useLocations";
import { useFoods } from "../hooks/useFoods";
import { useCategories } from "../hooks/useCategories";
import { useHistoriesSection } from "../hooks/useHistoriesSection";
import { usePlaces } from "../hooks/usePlaces";
import { usePlacesRoutes } from "../hooks/usePlacesRoutes";

export default function HomeContainer() {

  const { companies } = useCompanies();
  const { locations } = useLocations();
  const { foods } = useFoods();
  const { categories } = useCategories();
  const { historiessection } = useHistoriesSection();
  const { places } = usePlaces();
  const { placesRoutes } = usePlacesRoutes();

  return (
    <div>
      {/* Imagen de Fondo */}
      <Hero />

      {/* Carousel PlacesRoutes */}
      <section>
        <div className="p-5 md:pl-40 md:pr-40 md:pb-10 md:pt-10 bg-white">
          <CarouselPlacesRoutes placesRoutes={placesRoutes ?? []}/>
        </div>
      </section>

      {/* Carousel Places */}
      <section>
        <div className="p-5 md:pl-40 md:pr-40 md:pb-10 md:pt-10 bg-white">
          <CarouselPlaces places={places ?? []}/>
        </div>
      </section>

      {/* History Section */}
      <section>
        <div className="p-5 md:pl-40 md:pr-40 md:pb-10 md:pt-10 bg-white">
          <HistorySections historiessection={historiessection ?? []} />
        </div>
      </section>

      {/* Gallery Categories */}
      <section>
        <div className="p-5 md:pl-40 md:pr-40 md:pb-10 md:pt-10 bg-white">
          <GalleryCategories categories={categories ?? []} />
        </div>
      </section>

      {/* Carousel Foods */}
      <section>
        <div className="p-5 md:pl-40 md:pr-40 md:pb-10 md:pt-10 bg-white">
          <CarouselFoods foods={foods ?? []} />
        </div>
      </section>

      {/* Gallery Villages */}
      <section>
        <div className="p-5 md:pl-40 md:pr-40 md:pb-10 md:pt-10 bg-white">
          <GalleryVillages locations={locations ?? []} />
        </div>
      </section>

      {/* Carousel Companies */}
      <section>
        <div className="md:pb-10 md:pt-10 md:pl-20 md:pr-20 bg-white">
          <CarouselCompanies companies={companies ?? []} />
        </div>
      </section>
    </div>
  );
}
