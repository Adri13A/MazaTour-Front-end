'use client'
//import imagenMain from '@/public/images/Mazatlan-Malecon.jpg';
import Hero from "./components/pages/inicio/hero";
//import Footer from "./components/layout/footer";
//import CarouselCompanies from "./components/bannerCompanies/CarouselCompanies";
import GalleryVillages from "./components/gallery/GalleryVillage";

export default function Home() {
  return (
    <div>
    <Hero/> 
       {/* Gallery Villages */}
      <section>
        <div className="p-5 md:p-20 bg-gray-100">
          <GalleryVillages />
        </div>
      </section>

      {/* Banner Companies Definidos en el componente pare tener el efecto */}
     <section>
        <div className="bg-gray-100">
         { /*<CarouselCompanies />*/}
        </div>
      </section>
    </div>
  );
}
