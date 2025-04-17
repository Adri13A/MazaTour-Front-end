'use client'
import Hero from "./components/pages/inicio/hero";
import CarouselCompanies from "./components/carouselCompanies/CarouselCompanies";
import GalleryVillages from "./components/gallery/GalleryVillage";
import CarouselFoods from './components/carouselFood/CarouselFoods';

export default function Home() {
  return (
    
    
    <div> 

      <Hero/>


      {/* Carousel Foods Definidos en el componente pare tener el efecto */}
      <section>
      <div className="p-5 md:pl-20 md:pr-20 bg-gray-100">
        <CarouselFoods />
        </div>
      </section>


       {/* Gallery Villages */}
       <section>
        <div className="p-5 md:p-20 bg-gray-100">
          <GalleryVillages />
        </div>
      </section>

      
      {/* Carousel Companies Definidos en el componente pare tener el efecto */}
      <section>
        <div className="bg-gray-100">
          <CarouselCompanies />
        </div>
      </section>

    </div>
  );
}
