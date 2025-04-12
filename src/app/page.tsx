'use client'

import Image from "next/image";
import imagenMain from '../public/images/Mazatlan-Malecon.jpg';
import Footer from "./components/layout/footer";
import CarouselCompanies from "./components/bannerCompanies/CarouselCompanies";
import GalleryVillages from "./components/gallery/GalleryVillage";


export default function Home() {
  return (
    <div> 

      <section>
        <div className="">
          <Image
            src={imagenMain}
            width={1920}
            height={1080}
            alt="Mazatlán"
            className=""
          />
           <Image
            src={imagenMain}
            width={1920}
            height={1080}
            alt="Mazatlán"
            className=""
          />
           <Image
            src={imagenMain}
            width={1920}
            height={1080}
            alt="Mazatlán"
            className=""
          />
           <Image
            src={imagenMain}
            width={1920}
            height={1080}
            alt="Mazatlán"
            className=""
          />
          <div className="inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white">
            <h1 className="text-5xl font-bold">Mazatlán</h1>
            <p className="mt-2 text-lg">
              Su voz nahuatl <span className="font-bold">Mazatlan</span> significa Tierra de Venados.
            </p>
          </div>
       </div>
      </section>

       {/* Gallery Villages */}
       <section>
        <div className="p-5 md:p-20 bg-gray-100">
          <GalleryVillages />
        </div>
      </section>

      
      {/* Banner Companies Definidos en el componente pare tener el efecto */}
      <section>
        <div className="bg-gray-100">
          <CarouselCompanies />
        </div>
      </section>

      <Footer />

    </div>
  );
}
