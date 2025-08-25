'use client'

import React, { useState } from "react";
import Image from "next/image";
import { Globe, MapPin, List, Landmark, Info } from 'lucide-react';

import heroFaro from '@/public/images/hero/heroFaro.jpg';

import '@/styles/hero_transporte.css';
import { div } from "framer-motion/client";

type Section = 'descubre' | 'ubicacion' | 'historia' | 'recorre' | 'rutas';

type CardContent = {
    title: string;
    img: string;
    description: string;
    blur: string;
};

const cardsContent: Record<Section, CardContent[]> = {
    descubre: [
        {
            title: 'Datos Interesantes',
            img: '',
            description: 'Conoce curiosidades y hechos poco conocidos sobre el faro y su entorno.',
            blur: 'backdrop-blur-md'
        },
        {
            title: 'Avistamientos y Vida Silvestre',
            img:'/images/placeDetails/whale.jpg',
            description: '',
              blur: ''
        },
        {
            title: 'Recomendaciones para tu Visita',
            img: '',
            description: 'Usa calzado cómodo y adecuado, Sube acompañado y con precaución, No te salgas del camino ni cruces zonas restringidas.',
              blur: 'backdrop-blur-md'
        },
        {
            title: 'Atardeceres Inolvidables',
            img: '/images/placeDetails/beach.webp',
            description: '',
            blur: ""
        },
        {
            title: 'Entorno Natural y Acantilados',
            img: '/images/placeDetails/coast.jpg',
            description: '',
            blur: ""
        },
    ],
    ubicacion: [
        {
            title: 'Ubicación del Faro',
            img: '/images/cards/mapa1.jpg',
            description: 'Descubre exactamente dónde se encuentra el faro dentro de Mazatlán.',
            blur: ""
        },
        {
            title: 'Punto de Inicio',
            img: '/images/cards/mapa2.jpg',
            description: 'El mejor lugar para comenzar tu recorrido y planear tu visita.',
            blur: ""
        },
        {
            title: 'Cómo Llegar',
            img: '/images/cards/mapa3.jpg',
            description: 'Opciones de transporte y caminos para llegar al faro fácilmente.',
            blur: ""
        },
        {
            title: 'Estacionamientos Cercanos',
            img: '/images/cards/mapa4.jpg',
            description: 'Lugares disponibles para estacionar tu vehículo sin complicaciones.',
            blur: ""
        },
        {
            title: 'Puntos de Referencia',
            img: '/images/cards/mapa5.jpg',
            description: 'Marcas y ubicaciones que te ayudarán a orientarte durante tu visita.',
            blur: ""
        },
    ],
    historia: [
        {
            title: 'Desde 1879',
            img: '/images/cards/history1.jpg',
            description: 'Conoce los orígenes y la construcción del faro en el siglo XIX.',
            blur: ""
        },
        {
            title: 'Evolución del Faro',
            img: '/images/cards/history2.jpg',
            description: 'Los cambios arquitectónicos y tecnológicos a lo largo de los años.',
            blur: ""
        },
        {
            title: 'Eventos Históricos',
            img: '/images/cards/history3.jpg',
            description: 'Momentos clave y acontecimientos relacionados con el faro.',
            blur: ""
        },
        {
            title: 'Legado Cultural',
            img: '/images/cards/history4.jpg',
            description: 'El impacto del faro en la cultura local y su significado para Mazatlán.',
            blur: ""
        },
        {
            title: 'Transformaciones Modernas',
            img: '/images/cards/history5.jpg',
            description: 'Las renovaciones y el uso actual del faro en la comunidad.',
            blur: ""
        },
    ],
    recorre: [
        {
            title: 'Sendero del Faro',
            img: '/images/cards/path1.jpg',
            description: 'Un recorrido a pie que te lleva por los mejores paisajes y puntos clave.',
            blur: ""
        },
        {
            title: 'Puntos Panorámicos',
            img: '/images/cards/view1.jpg',
            description: 'Lugares ideales para admirar vistas panorámicas del océano y la ciudad.',
            blur: ""
        },
        {
            title: 'Miradores',
            img: '/images/cards/view2.jpg',
            description: 'Plataformas desde donde puedes tomar fotos y disfrutar del paisaje.',
            blur: ""
        },
        {
            title: 'Zonas de Descanso',
            img: '/images/cards/view3.jpg',
            description: 'Áreas habilitadas para relajarte durante tu caminata.',
            blur: ""
        },
        {
            title: 'Fotografía y Naturaleza',
            img: '/images/cards/view4.jpg',
            description: 'Consejos para capturar la belleza natural del lugar.',
            blur: ""
        },
    ],
    rutas: [
        {
            title: 'Ruta 1: Entrada Principal',
            img: '/images/cards/route1.jpg',
            description: 'Recorrido básico desde la entrada principal hacia el faro.',
            blur: ""
        },
        {
            title: 'Ruta 2: Vista Costera',
            img: '/images/cards/route2.jpg',
            description: 'Ruta que bordea la costa para disfrutar de paisajes marinos.',
            blur: ""
        },
        {
            title: 'Ruta 3: Tour Completo',
            img: '/images/cards/route3.jpg',
            description: 'Camino completo que incluye todos los puntos de interés.',
            blur: ""
        },
        {
            title: 'Ruta Alternativa: Senderismo',
            img: '/images/cards/route4.jpg',
            description: 'Una opción para los amantes del senderismo y la aventura.',
            blur: ""
        },
        {
            title: 'Ruta Exprés para Familias',
            img: '/images/cards/route5.jpg',
            description: 'Recorrido corto y sencillo ideal para niños y adultos mayores.',
            blur: ""
        },
    ]
};


export default function Hero() {
    const [activeSection, setActiveSection] = useState<Section>('descubre');

    const renderCards = () => {
    const cards = cardsContent[activeSection];

    return (
        <>
            {cards.map((card, index) => {
                let heightClass = 'h-40 sm:h-48';
                let colSpanClass = 'col-span-1';

                if (index === 0 || index === 1 || index === 2) {
                    heightClass = index === 0 ? 'h-40 md:h-72' : (index === 1 ? 'h-40 sm:h-72' : 'h-40 md:h-48');
                    colSpanClass = 'col-span-2';
                }

                return (
                    <div
                        key={index}
                        className={`relative rounded-3xl overflow-hidden cursor-pointer ${heightClass} ${colSpanClass}`}
                    >
                        {/* Imagen como fondo */}
                        <Image
                            src={card.img}
                            alt={card.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 33vw"
                            priority
                        />

                        {/* Capa oscura encima */}
                        <div className={`absolute inset-0 bg-black bg-opacity-35 ${card.blur}`} />

                        {/* Título */}
                        {card.title && (
                            <h3 className="absolute top-3 left-3 text-sm sm:text-base font-semibold text-white z-20 ">
                                {card.title}
                            </h3>
                        )}

                        {/* Descripción */}
                        {card.description && (
                            <div className="absolute  bottom-3 left-3 right-3  backdrop-blur-md bg-opacity-20 bg-white px-2 py-1 rounded-2xl">
                                <p className="text-xs sm:text-sm text-white z-20">
                                {card.description}
                            </p>
                            </div>
                        )}
                    </div>
                );
            })}
        </>
    );
};



    return (
        <section className="relative w-full h-screen bg-black text-white overflow-hidden">
            <Image src={heroFaro} alt="Australian Forest" fill className="absolute inset-0 w-full h-full object-cover opacity-90 z-0" priority />

            <div className="absolute left-0 top-0 h-full w-full sm:w-[50%] md:w-[35%] bg-/5 backdrop-blur-md z-0 transition-all duration-300 border-2 border-orange-600" />

            <div className="relative z-10 flex flex-col h-full px-4 sm:px-8 md:px-20 justify-center border-2 border-yellow-600">
                <div className="w-full sm:w-[80%] md:w-[20%] relative z-10 border-2 border-cyan-600">
                    <p className="text-xs sm:text-sm text-gray-200 uppercase tracking-widest mb-2 sm:mb-4">Aventuras Increíbles</p>
                    <h1 className="flex flex-wrap items-center text-[2.5rem] sm:text-[4rem] md:text-[7rem] font-bold leading-none">
                        <span className="text-transparent stroke-text">EL</span>
                        <span className="ml-0 sm:ml-0 text-white drop-shadow font-bold">FARO</span>
                    </h1>
                    <p className="mt-4 sm:mt-6 max-w-xs sm:max-w-md text-gray-300 text-xs sm:text-base">
                        El faro de Mazatlán es un ícono histórico y cultural de la ciudad, que ofrece vistas panorámicas impresionantes del océano Pacífico y la costa.
                    </p>
                    <button className="mt-4 sm:mt-6 text-xs sm:text-sm font-medium">DESDE 1879</button>
                </div>
            </div>

            {/* TARJETAS */}
            <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-10 grid grid-cols-4 grid-areas-cards gap-4 w-[380px] sm:w-[700px] md:w-[950px]">
                {renderCards()}
            </div>

            {/* BOTONES DE SECCIONES */}
            <div className="absolute bottom-8 right-8 flex flex-wrap gap-4 z-10">
                {/*
                <button onClick={() => setActiveSection('descubre')} className="flex items-center px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-xs sm:text-sm text-white hover:bg-white/30 transition">
                    <Globe className="w-4 h-4 mr-2" /> Descubre más
                </button>
                <button onClick={() => setActiveSection('ubicacion')} className="flex items-center px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-xs sm:text-sm text-white hover:bg-white/30 transition">
                    <MapPin className="w-4 h-4 mr-2" /> Ubicación
                </button>
                <button onClick={() => setActiveSection('historia')} className="flex items-center px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-xs sm:text-sm text-white hover:bg-white/30 transition">
                    <Landmark className="w-4 h-4 mr-2" /> Historia
                </button>
                <button onClick={() => setActiveSection('recorre')} className="flex items-center px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-xs sm:text-sm text-white hover:bg-white/30 transition">
                    <Globe className="w-4 h-4 mr-2" /> Recorre Mazatlán
                </button>
                <button onClick={() => setActiveSection('rutas')} className="flex items-center px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-xs sm:text-sm text-white hover:bg-white/30 transition">
                    <List className="w-4 h-4 mr-2" /> Lista rutas
                </button>
                */}
                {[
                    { key: 'descubre', label: 'Descubre más', Icon: Globe },
                    { key: 'ubicacion', label: 'Ubicación', Icon: MapPin },
                    { key: 'historia', label: 'Historia', Icon: Landmark },
                    { key: 'recorre', label: 'Recorre Mazatlán', Icon: Globe },
                    { key: 'rutas', label: 'Lista rutas', Icon: List }
                ].map(({ key, label, Icon }) => (
                    <button
                        key={key}
                        onClick={() => setActiveSection(key as Section)}
                        className={[
                            "flex items-center px-4 py-2 rounded-full text-xs sm:text-sm backdrop-blur-md text-white transition",
                            activeSection === key
                                ? "bg-white/30 ring-2 ring-white ring-opacity-50"
                                : "bg-white/10 hover:bg-white/30"
                        ].join(" ")}
                    >
                        <Icon className="w-4 h-4 mr-2" />
                        {label}
                    </button>
                ))}
            </div>
        </section>
    );
}
