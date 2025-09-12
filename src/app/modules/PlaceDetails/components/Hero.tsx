'use client'

import React, { useState } from "react";
import Image from "next/image";
import { Globe, MapPin, List, Landmark } from 'lucide-react';

import heroFaro from '../../../../../public/images/hero/heroFaro.jpg';

import '@/styles/hero_transporte.css';

type Section = 'descubre' | 'ubicacion' | 'historia' | 'recorre' | 'rutas';

type CardContent = {
    title: string;
    img: string; // La ruta a la imagen, puede ser vacía
    description: string;
    blur: string;
};

// Objeto con el contenido de las tarjetas
// Revisa y reemplaza las rutas vacías ('') con las correctas
const cardsContent: Record<Section, CardContent[]> = {
    descubre: [
        {
            title: 'Datos Interesantes',
            img: '/images/placeDetails/lighthouse_info.jpg', // RUTA SUGERIDA, CAMBIAR SI ES NECESARIO
            description: 'Conoce curiosidades y hechos poco conocidos sobre el faro y su entorno.',
            blur: 'backdrop-blur-md'
        },
        {
            title: 'Avistamientos y Vida Silvestre',
            img:'/images/placeDetails/whale.jpg',
            description: 'Descubre la rica fauna marina y las aves que habitan en los alrededores del faro.',
            blur: 'backdrop-blur-md'
        },
        {
            title: 'Recomendaciones para tu Visita',
            img: '/images/placeDetails/recommendations.jpg', // RUTA SUGERIDA, CAMBIAR SI ES NECESARIO
            description: 'Usa calzado cómodo y adecuado, Sube acompañado y con precaución, No te salgas del camino ni cruces zonas restringidas.',
              blur: 'backdrop-blur-md'
        },
        {
            title: 'Atardeceres Inolvidables',
            img: '/images/placeDetails/beach.webp',
            description: 'Disfruta de vistas espectaculares y puestas de sol que te dejarán sin aliento.',
            blur: "backdrop-blur-md"
        },
        {
            title: 'Entorno Natural y Acantilados',
            img: '/images/placeDetails/coast.jpg',
            description: 'Explora los impresionantes acantilados y la belleza natural que rodea al faro.',
            blur: "backdrop-blur-md"
        },
    ],
    ubicacion: [
        {
            title: 'Ubicación del Faro',
            img: '/images/cards/mapa1.jpg',
            description: 'Descubre exactamente dónde se encuentra el faro dentro de Mazatlán.',
            blur: "backdrop-blur-md"
        },
        {
            title: 'Punto de Inicio',
            img: '/images/cards/mapa2.jpg',
            description: 'El mejor lugar para comenzar tu recorrido y planear tu visita.',
            blur: "backdrop-blur-md"
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
            blur: "backdrop-blur-md"
        },
        {
            title: 'Evolución del Faro',
            img: '/images/cards/history2.jpg',
            description: 'Los cambios arquitectónicos y tecnológicos a lo largo de los años.',
            blur: "backdrop-blur-md"
        },
        {
            title: 'Eventos Históricos',
            img: '/images/cards/history3.jpg',
            description: 'Momentos clave y acontecimientos relacionados con el faro.',
            blur: "backdrop-blur-md"
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
            blur: "backdrop-blur-md"
        },
        {
            title: 'Puntos Panorámicos',
            img: '/images/cards/view1.jpg',
            description: 'Lugares ideales para admirar vistas panorámicas del océano y la ciudad.',
            blur: "backdrop-blur-md"
        },
        {
            title: 'Miradores',
            img: '/images/cards/view2.jpg',
            description: 'Plataformas desde donde puedes tomar fotos y disfrutar del paisaje.',
            blur: "backdrop-blur-md"
        },
        {
            title: 'Zonas de Descanso',
            img: '/images/cards/view3.jpg',
            description: 'Áreas habilitadas para relajarte durante tu caminata.',
            blur: "backdrop-blur-md"
        },
        {
            title: 'Fotografía y Naturaleza',
            img: '/images/cards/view4.jpg',
            description: 'Consejos para capturar la belleza natural del lugar.',
            blur: "backdrop-blur-md"
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

        // --- INICIO DEL CAMBIO ---
        // Esta función ahora renderiza la imagen solo si card.img no está vacía
        const renderCard = (card: CardContent, index: number, className: string) => (
            <div
                key={index}
                className={`relative flex items-center rounded-3xl overflow-hidden cursor-pointer bg-black/30 ${className}`} // Añadido un fondo por si no hay imagen
            >
                {/* Texto */}
                <div className="flex-1 p-4">
                    {card.title && (
                        <h3 className="text-lg font-semibold text-white mb-2">
                            {card.title}
                        </h3>
                    )}
                    {card.description && (
                        <p className="text-sm text-white">
                            {card.description}
                        </p>
                    )}
                </div>

                {/* Imagen (se muestra solo si card.img tiene una ruta) */}
                {card.img && (
                    <div className="flex-1 relative h-full">
                        <Image
                            src={card.img}
                            alt={card.title}
                            fill
                            className="object-cover rounded-r-3xl"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />
                    </div>
                )}
            </div>
        );
        // --- FIN DEL CAMBIO ---

        switch (activeSection) {
            case 'ubicacion': // 2 cards
               return cards.slice(0, 3).map((card, index) => {
                    const classMap = [
                        'h-72 col-span-4', // Card 1
                        'h-72 col-span-3', // Card 2
                        
                    ];
                    return renderCard(card, index, classMap[index]);
                });

            case 'historia': // 3 cards
                return cards.slice(0, 3).map((card, index) => {
                    const classMap = [
                        'h-72 col-span-4', // Card 1
                        'h-72 col-span-2', // Card 2
                        'h-72 col-span-2', // Card 3
                    ];
                    return renderCard(card, index, classMap[index]);
                });

            case 'recorre': // 4 cards
                return cards.slice(0, 4).map((card, index) =>
                    renderCard(card, index, 'h-72 col-span-2')
                );

            case 'rutas':
            case 'descubre': // 5 cards (default)
            default:
                return cards.map((card, index) => {
                    let heightClass = 'h-40 sm:h-48';
                    let colSpanClass = 'col-span-1';

                    if (index === 0 || index === 1 || index === 2) {
                        heightClass = index === 0 ? 'h-40 md:h-72' : (index === 1 ? 'h-40 sm:h-72' : 'h-40 md:h-48');
                        colSpanClass = 'col-span-2';
                    }
                    return renderCard(card, index, `${heightClass} ${colSpanClass}`);
                });
        }
    };

    return (
        <section className="relative w-full h-screen bg-black text-white overflow-hidden">
            <Image src={heroFaro} alt="Faro de Mazatlán" fill className="absolute inset-0 w-full h-full object-cover opacity-90 z-0" priority />

            <div className="absolute left-0 top-0 h-full w-full sm:w-[50%] md:w-[35%] bg-black/5 backdrop-blur-md z-0 transition-all duration-300" />

            <div className="relative z-10 flex flex-col h-full px-4 sm:px-8 md:px-20 justify-center">
                <div className="w-full sm:w-[80%] md:w-[35%] relative z-10">
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