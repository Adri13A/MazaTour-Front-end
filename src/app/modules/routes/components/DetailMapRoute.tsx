'use client';

import MapSection from '@/app/components/MapSection';
import CardIcon from '@/app/components/cards/CardIcon';
import { useHorizontalDragScroll } from '@/app/hooks/useHorizontalDragScroll';
import { useState } from 'react';
import {  Clock,CalendarClock,Route,Ruler,DollarSign,Snowflake,Flag,Navigation, Repeat2, Navigation2, Truck, X, ChevronLeft} from 'lucide-react';
import Subtitle from '@/app/components/letters/Subtitle';
import Title from '@/app/components/letters/Title';
import { useDetailRoute } from '../hooks/useDetailRoute';
import Breadcrumb from '@/app/components/Breadcrumb';

const iconList = [Clock, CalendarClock, Route, Ruler, DollarSign, DollarSign, Snowflake, Flag];

interface DetailMapRouteProps {
  routeId: string;
}

type AnimationType = 'origin' | 'destination' | null;

  const DetailMapRoute = ({ routeId }: DetailMapRouteProps) => {
    const { detailroute, isLoading  } = useDetailRoute(routeId);
    const [showDetalles, setShowDetalles] = useState(true);
  const [animationConfig, setAnimationConfig] = useState<{ type: AnimationType; key: number }>({
    type: null,
    key: 0,
  });
  const startAnimation = (type: AnimationType) => {
    setAnimationConfig(prev => ({
      type,
      key: prev.key + 1, // incrementa siempre, incluso si el tipo es igual
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
    return <div className='text-teal-950'>Cargando detalles...</div>;
  }

  const paradas = detailroute.stopRoutes.map((stop) => stop.name);

  const infoRuta = [
    { titulo: "Frecuencia", valor: detailroute.frequency ?? "N/A"},
    { titulo: "Horario", valor: detailroute.schedule ?? "N/A"},
    { titulo: "Origen - Destino", valor: detailroute.originDestination ?? "N/A"},
    { titulo: "Distancia", valor: detailroute.distance ?? "N/A"},
    {
      titulo: `Tarifa ${detailroute.costRoutes[0]?.name ?? "N/A"}`,
      valor: `$${detailroute.costRoutes[0]?.cost ?? "-"}`,
    },
    {
      titulo: `Tarifa ${detailroute.costRoutes[1]?.name ?? "N/A"}`,
      valor: `$${detailroute.costRoutes[1]?.cost ?? "-"}`,
    },
    { titulo: "Unidad Con A/c", valor: detailroute.climatizacion ?? "N/A"},
    { titulo: "Compañía", valor: detailroute.companyRoute?.companyName  ?? "N/A"},
  ];

  return (
    <>
      <div className="pb-5 pt-5 md:pb-10 md:pt-10 bg-white">
        <Title className="pt-4">
          {detailroute.name.split('-')[0]} -
          <span className="text-stroke-black"> {detailroute.name.split('-')[1]}</span>
        </Title>
        <Subtitle>{detailroute.originDestination}</Subtitle>

        <div className="md:text-left">
          {/* <span
            className="inline-flex items-center gap-2 text-white py-1 px-5 rounded-2xl font-semibold justify-center md:justify-start cursor-pointer"
            style={{ background: 'var(--color-accent2)' }}
          >
            <button className="focus:outline-none">
              <ChevronLeft className="w-4 h-4 text-white hover:fill-white transition-all duration-200 hover:scale-110 hover:animate-pulse cursor-pointer" />
            </button>
            Regresar
          </span> */}
            <Breadcrumb routeName={detailroute.name} />
        </div>
      </div>

    <div className="relative w-full h-[510px] rounded-lg overflow-hidden shadow-lg border">

      {/* Panel Detalles */}
      <div
        id="panel-detalles"
        className={`
          absolute top-0
          left-1/2 -translate-x-1/2
          md:left-4 md:translate-x-0
          z-40 p-4 flex flex-col gap-2 max-h-[80vh] overflow-y-auto
          transition-opacity duration-400 ease-in-out
          ${showDetalles ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        aria-hidden={!showDetalles}
      >
        {/* Título - solo escritorio */}
        <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-2 text-center hidden md:block">
          <h2 className="font-bold text-white text-xs uppercase">Detalles</h2>
        </div>

        {/* Icon Cards - solo escritorio */}
        <div className="flex justify-center gap-3 hidden md:flex">
        <CardIcon
          icon={<Navigation className="w-6 h-6 mb-1 cursor-pointer" />}
          label="Salida"
        onClick={() => startAnimation('origin')}
        />

        <CardIcon
          icon={<Repeat2 className="w-6 h-6 mb-1 cursor-pointer" />}
          label="Temporal"
        />

        <CardIcon
          icon={<Navigation2 className="w-6 h-6 mb-1 rotate-180 cursor-pointer" />}
          label="Regreso"
          onClick={() => startAnimation('destination')}
        />
        </div>

      {/* Sección Paradas */}
      <div
        className={`
          transition-opacity duration-400 ease-in-out
          ${showDetalles ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      >
        <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-2 text-center">
          <h2 className="font-bold text-white text-xs uppercase">Paradas</h2>
        </div>

        <div className="bg-black/40 backdrop-blur-sm rounded-3xl pb-2 text-white">
          <div
            className="container max-w-full md:max-w-5xl px-6 py-6 mx-auto mt-2"
          >
            <div className="grid gap-4 mx-4">
              <div className="relative col-span-4 px-4 space-y-8">
                <div className="col-span-4 space-y-3 relative px-4 before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:bg-gray-300">
                  {paradas.map((parada, index) => (
                  <div
                    key={index}
                    className="flex items-center relative before:absolute before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:rounded-full before:left-[-33px] before:z-[1] before:bg-white"
                  >
                    <p className="text-xs semi-light tracking-wide whitespace-nowrap overflow-hidden text-ellipsis">
                      {parada}
                    </p>
                  </div>
                ))}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


      {/* Botón único para mostrar/ocultar (solo escritorio) */}
      <div className="hidden md:block absolute top-4 left-4 z-40">
        <button
          onClick={() => setShowDetalles(!showDetalles)}
          aria-label={showDetalles ? "Ocultar detalles" : "Mostrar detalles"}
          className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md text-white shadow-md flex items-center justify-center hover:scale-105 transition-transform"
        >
          {showDetalles ? <X className="w-5 h-5" /> : <Truck className="w-6 h-6" />}
        </button>
      </div>

      {/* Carrusel horizontal de infoRuta */}
      <div className="absolute bottom-6 left-4 right-4 z-40 px-4 cursor-pointer">
        <div
          ref={containerRef}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          className="flex gap-3 overflow-x-auto scroll-smooth whitespace-nowrap px-2 py-1 hide-scrollbar cursor-grab select-none"
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

      {/* Mapa */}
      <MapSection
        id={routeId}
        polylineOrigin={detailroute.polylineOrigin}
        polylineDestination={detailroute.polylineDestination}
        truckAnimationType={animationConfig.type}
        animationKey={animationConfig.key}
        stops={detailroute.stopRoutes}
      />

      {/* Botones móviles (sin cambios) */}
      <div className="md:hidden absolute top-4 left-2 z-40 flex flex-col gap-2">
        <button
          onClick={() => setShowDetalles(!showDetalles)}
          aria-label={showDetalles ? "Ocultar paradas" : "Mostrar paradas"}
          className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md text-white shadow-md flex items-center justify-center hover:scale-105 transition-transform"
        >
          {showDetalles ? <X className="w-5 h-5" /> : <Truck className="w-6 h-6" />}
        </button>

        <button aria-label="Salida" className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md text-white shadow-md flex items-center justify-center" 
            onClick={() => startAnimation('origin')}>
          <Navigation className="w-5 h-5" />
        </button>
        <button aria-label="Temporal" className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md text-white shadow-md flex items-center justify-center">
          <Repeat2 className="w-5 h-5" />
        </button>
        <button aria-label="Regreso" className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md text-white shadow-md flex items-center justify-center"  
               onClick={() => startAnimation('destination')}>
          <Navigation2 className="w-5 h-5 rotate-180" />
        </button>
      </div>
    </div>
    </>
  );
};

export default DetailMapRoute;
