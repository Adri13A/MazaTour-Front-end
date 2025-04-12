import React, { useState } from "react";
import footerBg from '@/public/images/footer.webp';

interface Localidad {
  nombre: string;
}

const localidades: Localidad[] = [
  { nombre: "El Habal" },
  { nombre: "El Quelite" },
  { nombre: "Marmol" },
  { nombre: "Siqueros" },
  { nombre: "La Noria" },
  { nombre: "El Recodo" },
  { nombre: "Villa Union" }
];

const GalleryVillages = () => {
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
    const aspect = 'min-h-[160px] md:min-h-[160px]';
    return `${base} ${mobile} ${aspect} ${puzzleLayout[index]}`;
  };
  

  return (
    <div className="">
      {/* Encabezado */}
      <div className="flex flex-col md:flex-row justify-between mb-12 gap-6">
        <div className="w-full md:w-2/3 text-center md:text-left self-center md:self-start">
          <p className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto md:mx-0">
            Conoce y explora las localidades del puerto de Mazatlán.
            Descubre su historia, tradiciones, cultura y gastronomía,
            entre paisajes de la zona serrana a las playas del Pacífico.
          </p>
        </div>
        <div className="w-full md:w-2/3 flex items-center justify-center md:justify-end">
          <h2 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase text-black text-center md:text-right">
            DESCUBRE LAS LOCALIDADES QUE NOS RODEAN
          </h2>
        </div>
      </div>

      {/* Galería tipo puzle */}
      <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[minmax(180px,auto)] gap-4 md:gap-4 w-full">
      {localidades.map((localidad, index) => (
          <article
            key={index}
            className={getCardClass(index)}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            onFocus={() => setHoveredCard(index)}
            onBlur={() => setHoveredCard(null)}
            tabIndex={0}
            role="article"
            aria-label={`Card de ${localidad.nombre}`}
          >
            {/* Imagen */}
            <div className="absolute inset-0 bg-gray-200">
              <img
                src={footerBg.src}
                alt={localidad.nombre}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className={`absolute inset-0 transition-all duration-300 ${hoveredCard === index ? 'bg-black/50' : 'bg-gradient-to-t from-black/60 via-black/30 to-transparent'}`}></div>
            </div>

            {/* Título */}
            <div className={`absolute bottom-4 left-4 transition-all duration-300 ${hoveredCard === index ? 'opacity-0' : 'opacity-100'}`}>
              <h3 className="text-white font-bold text-lg md:text-2xl drop-shadow-2xl">
                {localidad.nombre}
              </h3>
              <p className="text-white/90 text-sm mt-1 drop-shadow-md">
                Haz clic para explorar
              </p>
            </div>

            {/* Info hover */}
            <div className={`absolute inset-x-3 bottom-3 bg-black-900/80 backdrop-blur-sm rounded-2xl p-4 transition-all duration-500 ease-in-out ${hoveredCard === index ? 'translate-y-0 opacity-100 h-auto' : 'translate-y-full opacity-0 h-0'}`}>
              <div className="text-white">
                <h3 className="text-white font-bold text-lg md:text-2xl drop-shadow-2xl mb-2">
                  {localidad.nombre}
                </h3>
                <p className="text-sm text-white/80 line-clamp-3">
                  Descripción detallada sobre esta localidad...
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default GalleryVillages;
