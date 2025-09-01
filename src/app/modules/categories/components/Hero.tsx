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
      className="relative h-[620px] bg-cover bg-center transition-background duration-700"
      style={{ backgroundImage: `url('${backgrounds[bgIndex]}')` }}
    >
    <div className="absolute inset-0 bg-blue-900 bg-opacity-30 bg-gradient-to-l from-black/20 via-black/20 to-transparent"></div>
    <div className="relative z-10 h-full flex flex-col lg:flex-row items-center p-5 lg:pl-20 lg:pr-20">
      
{/* Panel izquierdo - categorías */}
<div
  {...handlers}
  ref={leftPanelRef}
  className="relative w-full lg:w-1/3 h-64 lg:h-full overflow-y-auto lg:overflow-visible text-white flex flex-col items-start lg:items-center justify-start lg:justify-center"
>
  {/* MÓVILES / TABLETS: lista vertical scrollable */}
<div className="hide-scrollbar flex flex-col space-y-1 pt-20 overflow-y-auto" style={{ height: '300px' }}>
    {categories.map((cat, i) => (
      <div
        key={cat.id}
        className="flex items-center space-x-4 min-h-[60px] px-2"
      >
        <span className="text-3xl font-bold">{cat.id.toString().padStart(2, '0')}.</span>
        <span className="text-sm font-thin">{cat.title}</span>
      </div>
    ))}
  </div>

  {/* ESCRITORIO: animación vertical */}
  <div className="hidden lg:flex flex-col items-center transition-transform duration-500 "
       style={{ transform: `translateY(calc(45% - ${activeIndex * 150}px))` }}>
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
            {cat.id.toString().padStart(2, '0')}.</span>
          <div className="flex flex-col">
            <span className="text-5xl font-thin">{cat.title}</span>
            <p className="text-xs opacity-90">{cat.subtitle}</p>
          </div>
        </div>
      );
    })}
  </div>
</div>


      {/* Panel derecho - info y buscador */}
      <div className="w-full lg:w-2/3 relative flex flex-col items-end lg:items-end text-right text-white h-auto lg:h-full lg:pt-20">
        {/* Íconos Naturaleza - siempre horizontales */}
        <div className="flex flex-row space-x-4 mb-4 lg:mb-8">
          {[Trees, Sun, Leaf].map((Icon, idx) => (
            <div
              key={idx}
              className="w-8 h-8 lg:h-10 lg:w-10 rounded-full bg-gradient-to-tr from-white/20 to-white/5 flex items-center justify-center cursor-pointer hover:from-white/40 hover:to-white/10 transition-colors"
            >
              <Icon className="w-4 h-4 lg:h-6 lg:w-6 text-white" />
            </div>
          ))}
        </div>

        {/* Títulos Sinaloa y Mazatlán */}
        <div className="mb-4 lg:mb-8">
          <p className="text-lg sm:text-xl lg:text-2xl mb-1">Sinaloa</p>
          <h3 className="text-3xl sm:text-5xl lg:text-9xl font-semibold leading-none">Mazatlán</h3>
        </div>

        {/* Buscador */}
        <form className="flex items-center border-b-2 border-white border-opacity-70 pb-3 max-w-md w-full justify-end mb-6">
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

        {/* Información de Altura, Temperatura, Humedad, Horario - scroll horizontal si no caben */}
        <div className="flex gap-4 text-white text-sm sm:text-base font-light select-none mb-6 overflow-x-auto w-[calc(80px*3+16px*2)] lg:w-auto flex-nowrap hide-scrollbar">
          {[
            { label: 'Altura', value: '454 m', Icon: Mountain },
            { label: 'Temperatura', value: '10°C', Icon: Thermometer },
            { label: 'Humedad', value: '72%', Icon: Droplet },
            { label: 'Horario', value: '15:30', Icon: Clock },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center space-y-1 min-w-[80px]">
              <span className="text-sm sm:text-base lg:text-lg font-semibold tracking-wide">{item.label}</span>
              <div className="flex items-center space-x-2">
                <item.Icon size={20} className="sm:size-25 lg:size-25" />
                <span>{item.value}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Botones circulares para cambiar imagen - abajo derecha */}
        <div className="flex justify-end space-x-2 lg:space-x-4">
          <button
            onClick={prevBackground}
            className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors"
            aria-label="Imagen anterior"
          >
            <ChevronLeft size={28} className="text-white" />
          </button>
          <button
            onClick={nextBackground}
            className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors"
            aria-label="Imagen siguiente"
          >
            <ChevronRight size={28} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  </div>

  );
};    

export default Hero;
