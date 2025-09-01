'use client';

import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, CloudOff } from 'lucide-react';
import { Category } from '@/app/modules/home/utils/enums/categories';
import Subtitle from '@/app/components/letters/Subtitle';
import Title from '@/app/components/letters/Title';
import { usePlaces } from '@/app/modules/home/hooks/usePlaces';
import CarouselPlaces from './CarouselPlaces';
import { Trees, Globe, Activity, Heart, Sun, Building } from 'lucide-react';

// Definimos las categorías que sí queremos usar
type CategoryWithIcon =
  | Category.PLAYAS
  | Category.PARQUES
  | Category.HISTORIA_CULTURA
  | Category.NATURALEZA
  | Category.AREAS_RECREATIVAS
  | Category.MUSEOS
  | Category.OTRAS;

// Mapeamos cada categoría a su icono
const categoryIcons: Record<CategoryWithIcon, React.ElementType> = {
  [Category.PLAYAS]: Sun,
  [Category.PARQUES]: Trees,
  [Category.HISTORIA_CULTURA]: Globe,
  [Category.NATURALEZA]: Trees,
  [Category.AREAS_RECREATIVAS]: Activity,
  [Category.MUSEOS]: Building,
  [Category.OTRAS]: Heart,
};

// Categorías a mostrar
const categoriesToShow: { id: Category; title: string }[] = [
  { id: Category.PLAYAS, title: "Playas" },
  { id: Category.PARQUES, title: "Parques" },
  { id: Category.HISTORIA_CULTURA, title: "Histórica & Cultura" },
  { id: Category.NATURALEZA, title: "Naturaleza" },
  { id: Category.AREAS_RECREATIVAS, title: "Áreas Recreativas" },
  { id: Category.MUSEOS, title: "Museos" },
  { id: Category.OTRAS, title: "Otros" },
];

const PlacesWhithMenu = () => {
  const { places = [] } = usePlaces();
  const [activeCategory, setActiveCategory] = useState<string>("");

  // Refs para secciones
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>(
    categoriesToShow.reduce((acc, cat) => {
      acc[cat.id] = null;
      return acc;
    }, {} as Record<string, HTMLDivElement | null>)
  );

  // Refs para navegación del carrusel
  const navRefs = useRef(
    categoriesToShow.reduce((acc, cat) => {
      acc[cat.id] = {
        prevRef: React.createRef<HTMLDivElement>() as React.RefObject<HTMLDivElement>,
        nextRef: React.createRef<HTMLDivElement>() as React.RefObject<HTMLDivElement>,
      };
      return acc;
    }, {} as Record<string, { prevRef: React.RefObject<HTMLDivElement>; nextRef: React.RefObject<HTMLDivElement> }>)
  );

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      for (const cat of categoriesToShow) {
        const ref = sectionRefs.current[cat.id];
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveCategory(cat.id.toString());
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const ref = sectionRefs.current[id];
    if (ref) {
      ref.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveCategory(id);
    }
  };

  return (
    <div className="flex gap-6 relative">
      {/* Contenido */}
      <div className="flex-1 overflow-y-auto">
        {categoriesToShow.map((cat) => {
          const filteredPlaces = places.filter((p) => p.categoryId === cat.id);
          const { prevRef, nextRef } = navRefs.current[cat.id];

          return (
           <div
  key={cat.id}
  ref={(el) => {
    sectionRefs.current[cat.id] = el; // Asignamos el ref
  }}
  className="mb-10 scroll-mt-24"
>

              <div className="flex items-center justify-between mb-4">
                <div className="flex flex-col text-left md:text-left">
                  <Subtitle className="text-dark">
                    Conoce Los Lugares Acerca De
                  </Subtitle>
                  <Title className="text-dark">{cat.title}</Title>
                </div>

                {/* Botones de navegación */}
                <div className="flex gap-2">
                  <div
                    ref={prevRef}
                    className="cursor-pointer p-2 bg-white rounded-xl border-2 border-black hover:bg-gray-100 flex items-center justify-center"
                  >
                    <ChevronLeft size={20} className="text-black" />
                  </div>
                  <div
                    ref={nextRef}
                    className="cursor-pointer p-2 bg-white rounded-xl border-2 border-black hover:bg-gray-100 flex items-center justify-center"
                  >
                    <ChevronRight size={20} className="text-black" />
                  </div>
                </div>
              </div>

              {filteredPlaces.length > 0 ? (
                <CarouselPlaces
                  places={filteredPlaces}
                  navigationPrevRef={prevRef}
                  navigationNextRef={nextRef}
                />
              ) : (
                <p className="flex flex-col items-center justify-center gap-2 text-center text-black/20">
                  <CloudOff size={48} className="text-black/20" />
                  <span className="text-lg uppercase font-bold md:text-3xl">
                    No se encontraron resultados
                  </span>
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* Menú lateral */}
      <div className="hidden md:block bg-white p-0 text-black sticky top-1/4 self-start">
        <h3 className="font-bold text-lg mb-4">Menú</h3>
        <ul className="flex flex-col gap-2">
          {categoriesToShow.map((catMenu) => {
            const Icon = categoryIcons[catMenu.id as CategoryWithIcon];
            return (
              <li key={catMenu.id}>
                <button
                  onClick={() => handleScrollTo(catMenu.id.toString())}
                  className={`w-full flex items-center gap-2 p-2 rounded transition ${
                    activeCategory === catMenu.id.toString() ? "font-bold" : ""
                  }`}
                >
                  <Icon size={20} className="text-black/70" />
                  {catMenu.title}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default PlacesWhithMenu;
