import React, { useState, useEffect } from "react";
import { categories } from '../../data/categories.js';
import { Heart } from 'lucide-react';

interface Categories {
    nombre: string;
    imagen?: string;
}

const GalleryCategories = () => {
    
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const [categoriesList, setCategoriesList] = useState<Categories[]>([]);

    useEffect(() => {
        setCategoriesList(categories); 
    }, []); 

    const puzzleLayout = [
        'md:col-span-1 md:row-span-2', 
        'md:col-span-2 md:row-span-1', 
        'md:col-span-1 md:row-span-1', 
        'md:col-span-1 md:row-span-1', 
        'md:col-span-1 md:row-span-1', 
        'md:col-span-2 md:row-span-2', 
        'md:col-span-1 md:row-span-1', 
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
            <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-2">
                {/* Título - Primero en mobile y desktop */}
                <div className="w-full md:w-2/3 flex justify-center md:justify-start order-1 md:order-1">
                    <h2 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase text-black text-center md:text-left">
                        EXPLORA Y CONOCE TODO LO QUE DEASEAS VISITAR
                    </h2>
                </div>

                {/* Texto - Segundo en mobile y desktop */}
                <div className="w-full md:w-2/3 text-justify md:text-right order-2 md:order-2 flex flex-col items-center md:items-end">
                    <span className="inline-flex items-center gap-2 text-black py-1 px-5 rounded-2xl bg-gray-200 font-semibold mb-2 justify-center md:justify-start">
                        Descubre
                        <Heart 
                        className="w-4 h-4 text-black hover:fill-black transition-all duration-200 cursor-pointer hover:scale-110 hover:animate-pulse"
                        />
                    </span>

                    <p className="leading-relaxed max-w-3xl text-gray-500 text-sm md:text-base text-center md:text-right">
                        Conoce y explora las localidades del puerto de Mazatlán.
                        Descubre su historia, tradiciones, cultura y gastronomía,
                        entre paisajes de la zona serrana a las playas del Pacífico.
                    </p>
                </div>
            </div>

            {/* Galería tipo puzle */}
            <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[minmax(180px,auto)] gap-4 md:gap-4 w-full">
                {categoriesList.map((categoria, index) => (
                    <article
                        key={index}
                        className={getCardClass(index)}
                        onMouseEnter={() => setHoveredCard(index)}
                        onMouseLeave={() => setHoveredCard(null)}
                        onFocus={() => setHoveredCard(index)}
                        onBlur={() => setHoveredCard(null)}
                        tabIndex={0}
                        aria-label={`Card de ${categoria.nombre}`}
                    >
                        {/* Imagen */}
                        <div className="absolute inset-0 bg-gray-200">
                            {categoria.imagen ? (
                                <img
                                src={categoria.imagen}
                                alt={categoria.nombre}
                                className="w-full h-full object-cover"
                                loading="lazy"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-black text-white text-2xl">
                                </div>
                            )}
                            <div className={`absolute inset-0 transition-all duration-300 ${hoveredCard === index ? 'bg-black/50' : 'bg-gradient-to-t from-black/60 via-black/30 to-transparent'}`}></div>
                        </div>

                        {/* Título */}
                        <div className={`absolute bottom-4 left-4 transition-all duration-300`}>
                            <h2 className="text-white font-bold text-lg md:text-2xl drop-shadow-2xl">
                                {categoria.nombre}
                            </h2>
                            <p className="text-white/90 max-w-3xl mx-auto mt-1 drop-shadow-md">
                                Haz clic para explorar
                            </p>
                        </div>
                    </article>
                ))}
            </div>

        </div>
    );
};

export default GalleryCategories;
