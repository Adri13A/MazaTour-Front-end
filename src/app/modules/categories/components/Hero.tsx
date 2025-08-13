'use client';  
import { useSwipeable } from 'react-swipeable';
import { Trees, Sun, Leaf, Mountain, Thermometer, Droplet, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

import React, { useState, useRef, useEffect } from 'react';

const categories = [
  { id: 1, title: 'Naturaleza', subtitle: 'Duis congue augue' },
  { id: 2, title: 'Aventura', subtitle: 'Vivamus fermentum' },
  { id: 3, title: 'Cultura', subtitle: 'Sed ut perspiciatis' },
  { id: 4, title: 'Gastronomía', subtitle: 'Quis nostrud exerci' },
  { id: 5, title: 'Historia', subtitle: 'Tempor incididunt' },
];

const backgrounds = [
  "/images/wall.jpg",
  "/images/wall2.jpg",
  "/images/wall3.jpg",
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [bgIndex, setBgIndex] = useState(0);
  const scrollTimeout = useRef(false);
  const leftPanelRef = useRef<HTMLDivElement>(null);

  const handlers = useSwipeable({
    onSwipedUp: () => {
      if (activeIndex < categories.length - 1) setActiveIndex(activeIndex + 1);
    },
    onSwipedDown: () => {
      if (activeIndex > 0) setActiveIndex(activeIndex - 1);
    },
    preventScrollOnSwipe: true,
    trackTouch: true,
    trackMouse: false,
  });

  useEffect(() => {
    const panel = leftPanelRef.current;
    if (!panel) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (scrollTimeout.current) return;
      scrollTimeout.current = true;
      setTimeout(() => {
        scrollTimeout.current = false;
      }, 400);

      if (e.deltaY > 0 && activeIndex < categories.length - 1) {
        setActiveIndex((prev) => prev + 1);
      } else if (e.deltaY < 0 && activeIndex > 0) {
        setActiveIndex((prev) => prev - 1);
      }
    };

    panel.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      panel.removeEventListener('wheel', handleWheel);
    };
  }, [activeIndex]);

  // Cambiar imagen fondo anterior
  const prevBackground = () => {
    setBgIndex((prev) => (prev === 0 ? backgrounds.length - 1 : prev - 1));
  };

  // Cambiar imagen fondo siguiente
  const nextBackground = () => {
    setBgIndex((prev) => (prev === backgrounds.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
        className="relative h-[620px] bg-cover bg-center transition-background duration-700 "
        style={{ backgroundImage: `url('${backgrounds[bgIndex]}')` }}
    >
            {/* <div className="absolute inset-0 bg-blue-900 bg-opacity-30 bg-gradient-to-l from-black/20 via-black/20 to-transparent backdrop-blur-sm"></div> */}

        <div className="absolute inset-0 bg-blue-900 bg-opacity-30 bg-gradient-to-l from-black/20 via-black/20 to-transparent "></div>

        <div className="relative z-10 h-full flex items-center p-5 md:pl-20 md:pr-20">
            <div className="flex w-full h-full">
                
                    {/* Panel izquierdo */}
                <div
                        {...handlers}
                        ref={leftPanelRef}
                        className="relative w-1/3 h-full overflow-hidden text-white flex items-center justify-center"
                    >
                        <div className="pointer-events-none absolute top-0 left-0 w-full h-24 to-transparent z-10"></div>
                        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-24 to-transparent z-10"></div>
                        <div
                            className="flex flex-col items-center transition-transform duration-500"
                            style={{
                            transform: `translateY(calc(45% - ${activeIndex * 150}px))`,
                            }}
                        >
                            {categories.map((cat, i) => {
                            const distance = Math.abs(i - activeIndex);

                            let scale = 'scale-50';
                            let opacity = 'opacity-0';
                            let pointerEvents = 'pointer-events-none';

                            if (distance === 0) {
                                scale = 'scale-100';
                                opacity = 'opacity-100';
                                pointerEvents = 'pointer-events-auto';
                            } else if (distance === 1) {
                                scale = 'scale-75';
                                opacity = 'opacity-50';
                                pointerEvents = 'pointer-events-auto';
                            }

                            return (
                                <div
                                key={cat.id}
                                className={`flex items-start space-x-4 py-6 transition-all duration-500 ${scale} ${opacity} ${pointerEvents}`}
                                >
                                <span className="text-8xl font-bold leading-none">
                                    {cat.id.toString().padStart(2, '0')}.
                                </span>
                                <div className="flex flex-col">
                                    <span className="text-5xl font-thin">{cat.title}</span>
                                    <p className="text-xs opacity-90">{cat.subtitle}</p>
                                </div>
                                </div>
                            );
                            })}
                        </div>
                </div>
                    {/* Panel derecho */}
                <div className="w-2/3 relative flex flex-col justify-center pr-28 items-end text-right text-white h-full">
                        <div className="mb-8">
                            <p className="text-2xl mb-1">Sinaloa</p>
                            <h3 className="text-9xl font-semibold leading-none">Mazatlán</h3>
                        </div>

                        <form className="flex items-center border-b-2 border-white border-opacity-70 pb-3 max-w-md w-full justify-end">
                            <svg
                            className="w-5 h-5 text-white opacity-70 mr-3"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <circle cx="11" cy="11" r="7" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg>
                            <input
                            type="text"
                            placeholder="Find a tour"
                            className="bg-transparent focus:outline-none placeholder-white placeholder-opacity-90 text-white w-full"
                            />
                        </form>

                        {/* Nueva sección info debajo del buscador */}
                        <div className="mt-8 flex justify-end space-x-16 text-white text-sm font-light select-none">
                            <div className="flex flex-col items-center space-y-1">
                            <span className="text-lg font-semibold tracking-wide">Altura</span>
                                <div className="flex items-center space-x-2">
                                    <Mountain size={25} />
                                    <span>454 m</span>
                                </div>
                            </div>
                            <div className="flex flex-col items-center space-y-1">
                            <span className="text-lg font-semibold tracking-wide">Temperatura</span>
                                <div className="flex items-center space-x-2">
                                    <Thermometer size={25} />
                                    <span>10°C</span>
                                </div>
                            </div>
                            <div className="flex flex-col items-center space-y-1">
                            <span className="text-lg font-semibold tracking-wide">Humedad</span>
                                <div className="flex items-center space-x-2">
                                    <Droplet size={25} />
                                    <span>72%</span>
                                </div>
                            </div>
                            <div className="flex flex-col items-center space-y-1">
                            <span className="text-lg font-semibold tracking-wide">Horario</span>
                                <div className="flex items-center space-x-2">
                                    <Clock size={25} />
                                    <span>15:30</span>
                                </div>
                            </div>
                        </div>

                        {/* Íconos Naturaleza vertical al lado */}
                        <div className="absolute top-1/2 right-6 -translate-y-1/2 flex flex-col space-y-6">
                            {[Trees, Sun, Leaf].map((Icon, idx) => (
                            <div
                                key={idx}
                                className="w-10 h-10 rounded-full bg-gradient-to-tr from-white/20 to-white/5 flex items-center justify-center cursor-pointer hover:from-white/40 hover:to-white/10 transition-colors"
                            >
                                <Icon size={24} className="text-white" />
                            </div>
                            ))}
                        </div>

                        {/* Botones circulares para cambiar imagen (absoluto abajo derecha) */}
                        <div className="absolute bottom-6 right-6 flex space-x-4">
                            <button
                            onClick={prevBackground}
                            className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors"
                            aria-label="Imagen anterior"
                            >
                            <ChevronLeft size={28} className="text-white" />
                            </button>
                            <button
                            onClick={nextBackground}
                            className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors"
                            aria-label="Imagen siguiente"
                            >
                            <ChevronRight size={28} className="text-white" />
                            </button>
                        </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Hero;
