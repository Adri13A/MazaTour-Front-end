'use client';

import MapSection from '@/app/components/MapSection';
import CardIcon from '@/app/components/cards/CardIcon';
import { useHorizontalDragScroll } from '@/app/hooks/useHorizontalDragScroll';
import {
  Clock,
  CalendarClock,
  Route,
  Ruler,
  DollarSign,
  Snowflake,
  Flag,
  Navigation,
  Repeat2,
  Navigation2,
  Truck,
  MapPin,
  TreePine,
  X,
  Mountain,
  Waves,
  Bus,
  Globe,
  Landmark,
  Sun,
  ChevronRight,
  LayoutDashboard,
  BusFront,
  
} from 'lucide-react';
import { useDetailRoute } from '../hooks/useDetailRoute';
import React, {useState} from 'react';
import { useTerminals } from '../hooks/useTerminals';

const iconList = [
  Clock,
  CalendarClock,
  Route,
  Ruler,
  DollarSign,
  DollarSign,
  Snowflake,
  Flag,
];

const icons = [
  MapPin,     // Pin clásico
  TreePine,   // Naturaleza
  Mountain,   // Montañas
  Waves,      // Playa
  Bus,        // Autobús
  Globe,      // Mundo
  Landmark,   // Monumentos / cultura
  Sun,        // Clima / sol
];

interface DetailMapRouteProps {
  routeId: string;
}


type AnimationType = 'origin' | 'destination' | null;

const DetailMapRoute = ({ routeId }: DetailMapRouteProps) => {
  const { detailroute, isLoading } = useDetailRoute(routeId);
  const [showDetalles, setShowDetalles] = useState(true);
  const [animationConfig, setAnimationConfig] = useState<{
    type: AnimationType;
    key: number;
  }>({
    type: null,
    key: 0,
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const { terminals } = useTerminals();
  const [selectedTerminal, setSelectedTerminal] = useState<number | string | "all" | null>(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? paradas.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === paradas.length - 1 ? 0 : prev + 1));
  };

  const startAnimation = (type: AnimationType) => {
    setAnimationConfig((prev) => ({
      type,
      key: prev.key + 1,
    }));
  };

  const {
    containerRef,
    onMouseDown,
    onMouseLeave,
    onMouseUp,
    onMouseMove,
  } = useHorizontalDragScroll<HTMLDivElement>();

  
  if (isLoading || !detailroute) {
    return <div className="text-teal-950">Cargando detalles...</div>;
  }

  
  const paradas = detailroute.stopRoutes.map((stop) => stop.name);

  const infoRuta = [
    { titulo: 'Frecuencia', valor: detailroute.frequency ?? 'N/A' },
    { titulo: 'Horario', valor: detailroute.schedule ?? 'N/A' },
    { titulo: 'Origen - Destino', valor: detailroute.originDestination ?? 'N/A' },
    { titulo: 'Distancia', valor: detailroute.distance ?? 'N/A' },
    {
      titulo: `Tarifa ${detailroute.costRoutes[0]?.name ?? 'N/A'}`,
      valor: `$${detailroute.costRoutes[0]?.cost ?? '-'}`,
    },
    {
      titulo: `Tarifa ${detailroute.costRoutes[1]?.name ?? 'N/A'}`,
      valor: `$${detailroute.costRoutes[1]?.cost ?? '-'}`,
    },
    { titulo: 'Unidad Con A/c', valor: detailroute.climatizacion ?? 'N/A' },
    { titulo: 'Compañía', valor: detailroute.companyRoute?.companyName ?? 'N/A' },
  ];

return (
  <>
    {/* Contenedor general */}
  <div className="relative w-full h-[520px] -mt-80 md:-mt-64 z-20 pointer-events-auto">
    {/* Mapa full width */}
    <MapSection
      id={routeId}
      polylineOrigin={detailroute.polylineOrigin}
      polylineDestination={detailroute.polylineDestination}
      truckAnimationType={animationConfig.type}
      animationKey={animationConfig.key}
      stops={detailroute.stopRoutes}
      terminals={terminals}
      selectedTerminal={selectedTerminal}
    />

    {/* Cards flotando sobre el mapa */}
    <div className="absolute inset-0 flex flex-col md:flex-row gap-4 p-4 pointer-events-none">
      
      {/* Panel izquierdo (carrusel móvil y botones) */}
      <div className="flex-1 flex flex-col justify-end md:justify-start gap-4 relative z-40 pointer-events-none">  
        {/* Carrusel infoRuta móvil */}
        <div className="absolute bottom-6 left-4 right-4 z-50 md:hidden px-4 cursor-pointer pointer-events-none">
          <div
            ref={containerRef}
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
            className="flex gap-3 overflow-x-auto scroll-smooth whitespace-nowrap px-2 py-1 hide-scrollbar cursor-grab select-none pointer-events-auto"
          >
            {infoRuta.map((item, index) => {
              const Icon = iconList[index];
              return (
                <div
                  key={index}
                  className="inline-flex min-w-[160px] bg-black/40 backdrop-blur-sm rounded-3xl px-2 py-1 items-center gap-2 shrink-0"
                >
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                    {Icon && <Icon className="w-4 h-4 text-black" />}
                  </div>
                  <div className="flex flex-col leading-tight">
                    <h3 className="text-white text-xs font-semibold">{item.titulo}</h3>
                    <h4 className="text-white text-[10px] font-light uppercase">{item.valor}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Botones móviles */}
        <div className="md:hidden absolute top-4 left-2 z-50 flex flex-col gap-2">
          <button
            onClick={() => setShowDetalles(!showDetalles)}
            aria-label={showDetalles ? 'Ocultar paradas' : 'Mostrar paradas'}
            className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md text-white shadow-md flex items-center justify-center hover:scale-105 transition-transform"
          >
            {showDetalles ? <X className="w-5 h-5" /> : <Truck className="w-6 h-6" />}
          </button>

          <button
            aria-label="Salida"
            className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md text-white shadow-md flex items-center justify-center"
            onClick={() => startAnimation('origin')}
          >
            <Navigation className="w-5 h-5" />
          </button>
          <button
            aria-label="Temporal"
            className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md text-white shadow-md flex items-center justify-center"
          >
            <Repeat2 className="w-5 h-5" />
          </button>
          <button
            aria-label="Regreso"
            className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md text-white shadow-md flex items-center justify-center"
            onClick={() => startAnimation('destination')}
          >
            <Navigation2 className="w-5 h-5 rotate-180" />
          </button>
        </div>
      </div>

      {/* Carrusel infoRuta escritorio */}
      <div className="hidden md:block absolute top-4 left-4 right-[26%] z-50 px-4 cursor-pointer pointer-events-none">
        <div
          ref={containerRef}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          className="flex gap-3 overflow-x-auto scroll-smooth whitespace-nowrap px-2 py-1 hide-scrollbar cursor-grab select-none pointer-events-auto pb-8"
        >
          {/* Botón Ver todas / Limpiar */}
          <button
            type="button"
            onClick={() =>
              selectedTerminal === "all" ? setSelectedTerminal(null) : setSelectedTerminal("all")
            }
            className={`inline-flex min-w-[160px] backdrop-blur-sm rounded-xl shadow-lg px-2 py-1 items-center gap-2 shrink-0
              ${selectedTerminal === "all" ? "bg-white/20 ring-2 ring-blue-400" : "bg-white/10"}
            `}
          >
            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
              <BusFront className="w-4 h-4 text-black" />
            </div>
            <div className="flex flex-col leading-tight">
              <h3 className="text-black text-xs font-semibold">Terminales</h3>
              <h4 className="text-gray-500 text-[12px] font-light uppercase">
                {selectedTerminal === "all" ? "Limpiar" : "Ver todas"}
              </h4>
            </div>
          </button>

          {/* Botones de cada terminal */}
          {terminals?.map((terminal) => {
            const isSelected = selectedTerminal === terminal.id;
              return (
                <button
                  key={terminal.id}
                  type="button"
                  onClick={() => setSelectedTerminal(terminal.id)}
                  className={`inline-flex min-w-[160px] backdrop-blur-sm rounded-xl shadow-lg px-2 py-1 items-center gap-2 shrink-0
                    ${isSelected ? "bg-white/20 ring-2 ring-blue-400" : " "}
                  `}
                >
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                    <BusFront className="w-4 h-4 text-black" />
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <h3 className="text-black text-xs font-semibold leading-snug">Terminal</h3>
                    <h4 className="text-gray-500 text-xs font-light uppercase leading-snug">
                      {terminal.name}
                    </h4>
                  </div>
                </button>
              );
            })}
        </div>
      </div>
    
     {/* Panel derecho (cards flotando sobre mapa) */}
      <div className="hidden md:flex flex-col gap-4 w-1/4 max-w-sm relative z-40 pointer-events-auto">
        <div className="backdrop-blur-sm bg-white/10 rounded-xl overflow-y-auto pb-6 px-6 hide-scrollbar shadow-lg">
          <div className="flex flex-col gap-2 pt-3">
            <p className="text-black font-medium text-lg">Información</p>
            <div className="flex gap-3">
              <CardIcon
                icon={<Navigation className="w-6 h-6 cursor-pointer text-black" />}
                label="Salida"
                onClick={() => startAnimation('origin')}
              />
              <CardIcon
                icon={<Repeat2 className="w-6 h-6 cursor-pointer text-black" />}
                label="Temporal"
              />
              <CardIcon
                icon={<Navigation2 className="w-6 h-6 rotate-180 cursor-pointer text-black" />}
                label="Regreso"
                onClick={() => startAnimation('destination')}
              />
              <CardIcon
                icon={<MapPin className="w-6 h-6 cursor-pointer text-black" />}
                label="Paradas"
              />
            </div>

            <div className="flex items-center justify-between">
              <p className="text-black font-medium text-lg">Paradas</p>
              <span className="text-xs text-gray-500">
                {currentIndex + 1}/{paradas.length}
              </span>
            </div>

            {/* Carrusel de paradas */}
            <div
              className="flex gap-2 overflow-x-auto snap-x snap-mandatory px-1 py-2 hide-scrollbar cursor-grab active:cursor-grabbing scroll-smooth"
              ref={containerRef}
              role="list"
              onMouseDown={onMouseDown}
              onMouseLeave={onMouseLeave}
              onMouseUp={onMouseUp}
              onMouseMove={(e) => {
                onMouseMove(e);
                if (containerRef.current && containerRef.current.firstChild) {
                  const scrollLeft = containerRef.current.scrollLeft;
                  const cardWidth = (containerRef.current.firstChild as HTMLElement).clientWidth;
                  const gap = 8; // gap entre cards
                  const newIndex = Math.round(scrollLeft / (cardWidth + gap));
                  setCurrentIndex(Math.min(newIndex, paradas.length - 1));
                }
              }}
            >
              {paradas.map((parada, index) => {
                const IconComponent = icons[index % icons.length];
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-lg transition shadow-md bg-white flex-shrink-0 w-full max-w-xs snap-center"
                    role="listitem"
                  >
                    <div className="flex items-center gap-4 p-2">
                      <div className="w-10 h-10 flex items-center justify-center rounded-2xl bg-[#fafafa] text-black">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <p className="text-[color:#4B4B4B] text-sm">{parada}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-black" />
                  </div>
                );
              })}
            </div>

            <p className="text-black font-medium text-lg">Adicional</p>

            {/* Mini cards */}
            <div className="grid grid-cols-4 gap-4">
              {infoRuta.map((item, index) => {
                const Icon = iconList[index];
                return (
                  <div
                    key={index}
                    className="group relative flex items-center justify-center bg-white rounded-2xl shadow-md w-full aspect-square cursor-pointer 
                          transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-xl"
                    onClick={() => setActiveIndex(index)}
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-2xl bg-[#fafafa] transition-transform duration-300 group-hover:scale-110">
                      {Icon && <Icon className="w-5 h-5 text-black" />}
                    </div>
                    <span className="absolute bottom-[-1.4rem] opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-center text-xs w-full text-[color:#4B4B4B]">
                      {item.titulo}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Card largo con info del mini card activo */}
            <div className="flex-shrink-0 rounded-xl shadow-md pl-5 pr-5 pt-2 pb-2 w-full max-w-xs flex justify-between items-center bg-white">
              <div>
                <h2 className="text-gray-900 font-semibold text-l">{infoRuta[activeIndex].titulo}</h2>
                <p className="text-gray-500 text-sm mt-1">{infoRuta[activeIndex].valor}</p>
              </div>

              <div className="bg-[#fafafa] w-10 h-10 rounded-2xl p-2 flex items-center justify-center">
                {iconList[activeIndex] && React.createElement(iconList[activeIndex], {
                  className: 'text-black w-5 h-5',
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

  </>
);

};

export default DetailMapRoute;
