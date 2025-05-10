'use client'
import Hero from "./components/pages/inicio/hero";
import CarouselCompanies from "./modules/home/components/carouselCompanies/CarouselCompanies";
import GalleryVillages from "./modules/home/components/galleries/GalleryVillage";
import CarouselFoods from './modules/home/components/carouselFood/CarouselFoods';
import GalleryCategories from "./modules/home/components/galleries/GalleryCategories";
import CarouselPlaces from "./modules/home/components/carouselPlaces/CarouselPlaces";
import CarouselPlacesRoutes from "./modules/home/components/carouselPlacesRoutes/CarouselPlacesRoutes";
import HistorySection from "./modules/home/components/histories/HistorySection";

export default function Home() {
  return (
    
    
    <div> 

    {/* Imagen de Fondo */}
      <section>
        <Hero/>
      </section>

      {/* Carousel PlacesRoutes */}
      <section>
        <div className="p-5 md:pl-20 md:pr-20 md:pb-10 md:pt-10 bg-white">
          <CarouselPlacesRoutes/> 
        </div>
      </section>

      {/* Carousel Places */}
      <section>
        <div className="p-5 md:pl-20 md:pr-20 md:pb-10 md:pt-10 bg-white">
          <CarouselPlaces />
        </div>
      </section>

      {/* History Section */}
       <section>
        <div className="p-5 md:pl-20 md:pr-20 md:pb-10 md:pt-10 bg-white">
          <HistorySection />
        </div>
      </section>

       {/* Gallery Categories */}
      <section>
        <div className="p-5 md:pl-20 md:pr-20 md:pb-10 md:pt-10 bg-white">
          <GalleryCategories />
        </div>
      </section>

      {/* Carousel Foods Definidos en el componente pare tener el efecto */}
      <section>
      <div className="p-5 md:pl-20 md:pr-20 md:pb-10 md:pt-10 bg-white">
        <CarouselFoods />
        </div>
      </section>


       {/* Gallery Villages */}
      <section>
        <div className="p-5 md:pl-20 md:pr-20 md:pb-10 md:pt-10 bg-white">
          <GalleryVillages />
        </div>
      </section>

      
      {/* Carousel Companies Definidos en el componente pare tener el efecto */}
      <section>
        <div className="md:pb-10 md:pt-10 bg-white">
          <CarouselCompanies />
        </div>
      </section>
    </div>
  );
}
