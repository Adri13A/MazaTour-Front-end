'use client';  

import React from 'react';
import Title from '@/app/components/letters/Title';
import Subtitle from '@/app/components/letters/Subtitle';

const items = [
  { id: 1, title: "Historia & Cultura", img: "https://picsum.photos/800/600?random=1" },
  { id: 2, title: "Parques", img: "https://picsum.photos/800/600?random=2" },
  { id: 3, title: "Museos", img: "https://picsum.photos/800/600?random=3" },
  { id: 4, title: "Playas", img: "https://picsum.photos/800/600?random=5" },
  { id: 5, title: "Naturaleza", img: "https://picsum.photos/800/600?random=6" },
  { id: 6, title: "Areas Recreativas", img: "https://picsum.photos/800/600?random=7" },
  { id: 7, title: "Otros", img: "https://picsum.photos/800/600?random=8" },
];

const ListCategories = () => {
  
    return (
      <div>
        <Title className="whitespace-nowrap">Encuentra Tu categoria</Title>
        <Subtitle className='pt-2'>Listado de Categorias</Subtitle>
        {/* Grid 5 por fila en lg+. Ajustes responsivos abajo */}
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 pt-6">
            {items.map((it, i) => (
            <article
              key={it.id}
              className={[
                "group relative w-full overflow-hidden rounded-xl shadow-sm ring-1 ring-black/5 bg-neutral-100",
                i % 7 === 0 ? "sm:col-span-2 md:col-span-2 lg:col-span-1" : "",
              ].join(" ")}
            >
                {/* Altura fija por relación (semi cuadrado ~10:9) */}
                <div className="relative w-full pt-[90%] cursor-pointer">
                    <img
                    src={it.img}
                    alt={it.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    />

                    {/* Número grande en background */}
                    <span className="absolute inset-0 flex items-center justify-center text-white/30 text-7xl md:text-8xl font-extrabold pointer-events-none select-none">
                    {it.id}
                    </span>

                    {/* Overlay hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Contenido */}
                    <div className="absolute inset-x-3 bottom-3 z-10">
                        <h3 className="text-white text-sm font-medium drop-shadow-md">
                            {it.title}
                        </h3>
                    </div>
                </div>
            </article>
          ))}
        </div>
      </div>
    );
};

export default ListCategories;
