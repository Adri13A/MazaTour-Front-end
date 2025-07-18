'use client'
import Hero from "./modules/home/components/Hero/Hero";
import CarouselCompanies from "./modules/home/components/carouselCompanies/CarouselCompanies";
import GalleryVillages from "./modules/home/components/galleries/GalleryVillage";
import CarouselFoods from './modules/home/components/carouselFood/CarouselFoods';
import GalleryCategories from "./modules/home/components/galleries/GalleryCategories";
import CarouselPlaces from "./modules/home/components/carouselPlaces/CarouselPlaces";
import HistorySection from "./modules/home/components/histories/HistorySection";
import CarouselPlacesTransportation from "./modules/home/components/carouselPlacesTransportation/CarouselPlacesTransportation";

export default function Home() {
  return (

    <div>

      {/* Imagen de Fondo */}
      <Hero/>

      {/* Carousel PlacesRoutes */}
      <section>
        <div className="p-5 md:pl-40 md:pr-40 md:pb-10 md:pt-10 bg-white">
          <CarouselPlacesTransportation/>
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

      {/* Carousel Foods Definidos en el componente pare tener el efecto */}
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


      {/* Carousel Companies Definidos en el componente pare tener el efecto */}
      <section>
        <div className="md:pb-10 md:pt-10 md:pl-20 md:pr-20 bg-white">
          <CarouselCompanies />
        </div>
      </section>
    </div>
  );
}
