import React, { useState } from "react";
import { Heart } from "lucide-react";
import Image from "next/image";
import TextBody from "@/app/components/letters/Text";
import Title from "@/app/components/letters/Title";
import { Location } from '@/app/interfaces/utils';

interface GalleryVillageProps {
  locations: Location[];
}

const GalleryVillages = ({ locations }: Readonly<GalleryVillageProps>) => {
    
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const puzzleLayout = [
      'md:col-span-2 md:row-span-2', // El Habal
      'md:col-span-1 md:row-span-1', // El Quelite
      'md:col-span-1 md:row-span-1', // Marmol
      'md:col-span-1 md:row-span-2', // Siqueros
      'md:col-span-2 md:row-span-1', // La Noria
      'md:col-span-1 md:row-span-1', // El Recodo
      'md:col-span-1 md:row-span-1', // Villa Union
    ];

    const getCardClass = (index: number) => {
      const base = 'relative rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:z-10 hover:scale-[1.02]';
      const mobile = index === 6 ? 'col-span-2' : 'col-span-1';
      const aspect = 'min-h-[120px] md:min-h-[120px]';
      return `${base} ${mobile} ${aspect} ${puzzleLayout[index]}`;
    };

    return (
        <>
          <div className="flex flex-col md:flex-row justify-between mb-12 gap-2">
              <div className="w-full md:w-2/3 flex items-center justify-center md:self-start  order-1 md:order-2">
                  <Title className="text-center md:text-right">
                    Descubre las localidades que nos rodean
                  </Title>
              </div>
            
              <div className="w-full md:w-2/3 text-justify md:text-left order-2 md:order-1 flex flex-col items-center md:items-start">
                  <span className="inline-flex items-center gap-2 text-white py-1 px-5 rounded-2xl font-semibold justify-center md:justify-start cursor-pointer bg-black transition-transform duration-300 transform hover:-translate-y-1 hover:scale-[1.02]">
                      Descubre
                      <button className="focus:outline-none">
                        <Heart 
                            className="w-4 h-4 text-white hover:fill-white transition-all duration-200 hover:scale-110 hover:animate-pulse cursor-pointer"/>
                      </button>
                  </span>
                  <TextBody className="text-center md:text-left mt-2">
                    Conoce y explora las localidades del puerto de Mazatlán.
                    Descubre su historia, tradiciones, cultura y gastronomía,
                    entre paisajes de la zona serrana a las playas del Pacífico.
                  </TextBody>    
              </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[minmax(100px,auto)] gap-4 md:gap-4 w-full">
              {locations.map((village, index) => (
                  <article
                      key={index}
                      className={getCardClass(index)}
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                      onFocus={() => setHoveredCard(index)}
                      onBlur={() => setHoveredCard(null)}
                      tabIndex={0}
                      aria-label={`Card de ${village.name}`}
                  >

                      <div className="absolute inset-0 bg-gray-200">
                          <Image
                            fill
                            src={village.image}
                            alt={village.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                          <div className={`absolute inset-0 transition-all duration-300 ${hoveredCard === index ? 'bg-black/50' : 'bg-gradient-to-t from-black/60 via-black/30 to-transparent'}`}></div>
                      </div>

                      <div className={`absolute bottom-4 left-4 transition-all duration-300 ${hoveredCard === index ? 'opacity-0' : 'opacity-100'}`}>
                          <h2 className="text-white font-bold text-lg md:text-2xl drop-shadow-2xl">
                            {village.name}
                          </h2>
                          <p className="text-white/90 max-w-3xl mx-auto mt-1 drop-shadow-md">
                            Haz clic para explorar
                          </p>
                      </div>

                      <div className={`absolute inset-x-3 bottom-3 bg-black-900/80 backdrop-blur-sm rounded-2xl p-4 transition-all duration-500 ease-in-out ${hoveredCard === index ? 'translate-y-0 opacity-100 h-auto' : 'translate-y-full opacity-0 h-0'}`}>
                          <div className="text-white">
                              <h2 className="text-white font-bold text-lg md:text-2xl drop-shadow-2xl mb-2">
                                {village.name}
                              </h2>
                              <p className="max-w-3xl mx-auto text-white/80 line-clamp-3">
                              {village.description}
                              </p>
                          </div>
                      </div>
                  </article>
              ))}
          </div>
        </>
    );
};

export default GalleryVillages;
