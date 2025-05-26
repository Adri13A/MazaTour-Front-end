import { HeartIcon, Heart } from "lucide-react";
import panama from '@/public/images/companies/panama.webp';
import Image from "next/image";
import FadeInView from "@/app/components/FadeInView";

export default function HistorySection() {
  return (
    <div className="mx-auto flex flex-col lg:flex-row lg:items-start lg:gap-12">
      {/* Columna izquierda: contenido principal */}

      <div className="w-full lg:w-1/2 flex flex-col">
        <FadeInView direction="left" duration={2}>
          {/* Subtítulo */}
          <p className="subtitle text-center md:text-left">
            Descubre Historia y Tradiciones
          </p>

          {/* Título principal */}
          <h2 className="title text-black text-center md:text-left">
            MAZATLÁN DESCONOCIDO
          </h2>

          {/* Texto de introducción */}
          <p className="text-body text-justify mt-6 mb-6">
            Explora los distintos puntos de interés turístico y cultural a los que puedes
            llegar fácilmente a través de las variadas rutas que conectan el puerto.
            Agrega más información sobre la historia y las tradiciones locales.
            Descubre cómo cada rincón de Mazatlán guarda relatos únicos que han marcado generaciones.
          </p>

        {/* Íconos con títulos y descripciones - Siempre en una fila */}
          <div className="flex flex-row flex-wrap justify-between gap-4 mb-8">
            <div className="flex-1 min-w-[120px] flex flex-col items-center text-center">
              <HeartIcon className="w-6 h-6 mb-2"style={{ color: "var(--color-accent2)" }} />
              <p className="text-sm text-black font-semibold">Título Uno</p>
              <p className="text-gray-500 text-sm md:text-base">Descripción Uno</p>
            </div>
            <div className="flex-1 min-w-[120px] flex flex-col items-center text-center">
              <HeartIcon className="w-6 h-6 mb-2"style={{ color: "var(--color-accent2)" }} />
              <p className="text-sm text-black font-semibold">Título Dos</p>
              <p className="text-gray-500 text-sm md:text-base">Descripción Dos</p>
            </div>
            <div className="flex-1 min-w-[120px] flex flex-col items-center text-center">
              <HeartIcon className="w-6 h-6 mb-2"style={{ color: "var(--color-accent2)" }} />
              <p className="text-sm text-black font-semibold">Título Tres</p>
              <p className="text-gray-500 text-sm md:text-base">Descripción Tres</p>
            </div>
          </div>
          {/* Texto final */}
          <p className="text-body mb-6 text-center md:text-left">
            Explora los distintos puntos de interés turístico y cultural a los que puedes
            llegar fácilmente.
          </p>

          {/* Botón "Descubre" responsivo */}
          <div className="text-center md:text-left">
            <span className="inline-flex items-center gap-2 text-white py-1 px-5 rounded-2xl font-semibold justify-center md:justify-start" style={{ background: "var(--color-accent2)" }}>
              Descubre
              <button className="focus:outline-none">
                <Heart 
                  className="w-4 h-4 text-white hover:fill-white transition-all duration-200 hover:scale-110 hover:animate-pulse cursor-pointer"
                />
              </button>
            </span>
          </div>
        </FadeInView>

      </div>

      {/* Columna derecha: Imagen */}
      <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:sticky lg:top-4">
              <FadeInView direction="right" duration={2}>
        <div className="relative w-full h-full min-h-[300px] lg:min-h-[450px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            fill 
            src={panama.src} 
            alt="Mazatlán histórico y cultural" 
            className="w-full h-full object-cover absolute inset-0"
          />

          <div className="absolute inset-0 faded-black"></div>
          
          <div className="absolute bottom-0 left-0 p-6 text-white z-10">
            <h2 className="font-bold text-lg md:text-2xl drop-shadow-2xl">Mazatlán Tradicional</h2>
            <p className=" max-w-3xl mx-auto drop-shadow-md">Descubre nuestra rica historia</p>
          </div>
          
        </div>
                </FadeInView>

      </div>
    </div>
  );
}