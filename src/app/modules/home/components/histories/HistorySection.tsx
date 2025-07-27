import { HeartIcon, Heart } from "lucide-react";
import Image from "next/image";
import Subtitle from "@/app/components/letters/Subtitle";
import Title from "@/app/components/letters/Title";
import TextBody from "@/app/components/letters/Text";
import { HistorySection } from "@/app/interfaces/utils";

interface HistoriesSectionProps{
  historiessection: HistorySection[];
}

const HistorySections = ({ historiessection }: Readonly<HistoriesSectionProps>) => {
  return (
    <div className="mx-auto flex flex-col lg:flex-row lg:items-start lg:gap-12">
        <div className="w-full lg:w-1/2 flex flex-col">
            <Subtitle className="text-center md:text-left">
              Descubre Historia y Tradiciones
            </Subtitle>

            <Title className="text-black text-center md:text-left">
              Mazatlán Desconocido
            </Title>

            <TextBody className="text-justify mt-6 mb-6">
              Explora los distintos puntos de interés turístico y cultural a los que puedes
              llegar fácilmente a través de las variadas rutas que conectan el puerto.
              Agrega más información sobre la historia y las tradiciones locales.
              Descubre cómo cada rincón de Mazatlán guarda relatos únicos que han marcado generaciones.
            </TextBody>

           <div className="flex flex-row flex-wrap justify-between gap-4 mb-8">
              {historiessection.map((historySection, index) => (
                <div
                  key={index}
                  className="flex-1 min-w-[100px] flex flex-col items-center text-center"
                >
                  <HeartIcon className="w-6 h-6 mb-2 text-black" />
                  <p className="text-sm text-black font-semibold">{historySection.name}</p>
                  <TextBody>{historySection.description}</TextBody>
                </div>
              ))}
            </div>

            <TextBody className="mb-6 text-center md:text-left">
              Explora los distintos puntos de interés turístico y cultural a los que puedes
              llegar fácilmente.
            </TextBody>

            <div className="text-center md:text-left">
                <span className="inline-flex items-center gap-2 text-white py-1 px-5 rounded-2xl font-semibold justify-center md:justify-start cursor-pointer bg-black transition-transform duration-300 transform hover:-translate-y-1 hover:scale-[1.02]">
                  Descubre
                    <button className="focus:outline-none">
                        <Heart 
                          className="w-4 h-4 text-white hover:fill-white transition-all duration-200 hover:scale-110 hover:animate-pulse cursor-pointer"
                        />
                    </button>
                </span>
            </div>
        </div>

        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:sticky lg:top-4 cursor-pointer">
            <div className="relative w-full h-full min-h-[300px] lg:min-h-[450px] rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 transform hover:-translate-y-1 hover:scale-[1.02]">
                <Image
                  fill 
                  src="/images/historiesSection/panama.webp" // ✅ Ruta relativa al public
                  alt="Mazatlán histórico y cultural" 
                  className="w-full h-full object-cover absolute inset-0"
                />
                <div className="absolute inset-0 faded-black"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white z-10">
                    <h2 className="font-bold text-lg md:text-2xl drop-shadow-2xl">Mazatlán Tradicional</h2>
                    <p className=" max-w-3xl mx-auto drop-shadow-md">Descubre nuestra rica historia</p>
                </div>    
            </div>
        </div>
    </div>
  );
};

export default HistorySections;