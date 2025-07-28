import React, { useState } from "react";
import { Heart } from 'lucide-react';
import Image from "next/image";
import TextBody from "@/app/components/letters/Text";
import Title from "@/app/components/letters/Title";
import { IListCategory } from "@/app/interfaces/utils";

interface GalleryCategoriesProps {
  categories: IListCategory[];
}

const GalleryCategories = ({ categories }: Readonly<GalleryCategoriesProps>) => {
    
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
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
        const aspect = 'min-h-[120px] md:min-h-[120px]';
        return `${base} ${mobile} ${aspect} ${puzzleLayout[index]}`;
    };

    return (
        <div className="">
            <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-2">               
                <div className="w-full md:w-2/3 flex justify-center md:justify-start order-1 md:order-1">
                    <Title className="text-center md:text-left">
                        EXPLORA Y CONOCE TODO LO QUE DEASEAS VISITAR
                    </Title>
                </div>

                <div className="w-full md:w-2/3 text-justify md:text-right order-2 md:order-2 flex flex-col items-center md:items-end">
                    <span className="inline-flex items-center gap-2 text-white py-1 px-5 rounded-2xl font-semibold justify-center md:justify-start cursor-pointer bg-black transition-transform duration-300 transform hover:-translate-y-1 hover:scale-[1.02]">
                        Descubre
                        <button className="focus:outline-none">
                            <Heart 
                                className="w-4 h-4 text-white hover:fill-white transition-all duration-200 hover:scale-110 hover:animate-pulse cursor-pointer"
                                />
                        </button>
                    </span>
                    <TextBody className="text-center md:text-right mt-2">
                        Conoce y explora las localidades del puerto de Mazatlán.
                        Descubre su historia, tradiciones, cultura y gastronomía,
                        entre paisajes de la zona serrana a las playas del Pacífico.
                    </TextBody>            
                </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[minmax(100px,auto)] gap-4 md:gap-4 w-full">
                {categories.map((categoria, index) => (
                    <article
                        key={index}
                        className={getCardClass(index)}
                        onMouseEnter={() => setHoveredCard(index)}
                        onMouseLeave={() => setHoveredCard(null)}
                        onFocus={() => setHoveredCard(index)}
                        onBlur={() => setHoveredCard(null)}
                        tabIndex={0}
                        aria-label={`Card de ${categoria.name}`}
                    >
                        <div className="absolute inset-0 bg-gray-200 cursor-pointer">
                            {categoria.image ? (
                                <Image
                                    fill
                                    src={categoria.image}
                                    alt={categoria.name}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-white text-2xl"  style={{ background: "var(--color-accent2)" }} >
                                    </div>
                                )}
                            <div className={`absolute inset-0 transition-all duration-300 ${hoveredCard === index ? 'bg-black/50' : 'bg-gradient-to-t from-black/60 via-black/30 to-transparent'}`}></div>
                        </div>

                        <div className={`absolute bottom-4 left-4 transition-all duration-300`}>
                            <h2 className="text-white font-bold text-lg md:text-2xl drop-shadow-2xl">
                                {categoria.name}
                            </h2>
                            <p className="text-white max-w-3xl mx-auto mt-1 drop-shadow-md">
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
