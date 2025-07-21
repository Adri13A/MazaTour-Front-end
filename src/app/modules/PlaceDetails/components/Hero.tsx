// src/app/components/pages/Inicio/Hero.tsx
'use client'

import React from "react";
import Image from "next/image";
import { Globe, MapPin, List } from 'lucide-react';

import heroFaro from '@/public/images/hero/heroFaro.jpg';

import '@/styles/hero_transporte.css';

export default function Hero() {
    const cards = [
        { title: 'Avistamientos y Vida Silvestre', img: '/images/cards/whale.jpg' },
        { title: 'Datos Interesantes', img: '/images/cards/ship.jpg' },
        { title: 'Recomendaciones para tu Visita', img: '/images/cards/sunset.jpg' },
        { title: '', img: null },
    ];

    return (
        <section className="relative w-full h-screen bg-black text-white overflow-hidden">
            {/* Imagen de fondo */}
            <Image
                src={heroFaro}
                alt="Australian Forest"
                fill
                className="absolute inset-0 w-full h-full object-cover opacity-90 z-0"
                priority
            />

            {/* Blur panel SOLO para el contenido izquierdo */}
            <div className="absolute left-0 top-0 h-full w-full sm:w-[50%] md:w-[35%] bg-/5 backdrop-blur-md z-0 transition-all duration-300 border-2 border-orange-600" />

            {/* Contenido principal hero */}
            <div className="relative z-10 flex flex-col h-full px-4 sm:px-8 md:px-20 justify-center border-2 border-yellow-600">
                <div className="w-full sm:w-[80%] md:w-[20%] relative z-10 border-2 border-cyan-600">
                    <p className="text-xs sm:text-sm text-gray-200 uppercase tracking-widest mb-2 sm:mb-4">
                        Aventuras Increíbles
                    </p>
                    <h1 className="flex flex-wrap items-center text-[2.5rem] sm:text-[4rem] md:text-[7rem] font-bold leading-none">
                        <span className="text-transparent stroke-text">EL</span>
                        <span className="ml-0 sm:ml-0 text-white drop-shadow font-bold">FARO</span>
                    </h1>
                    <p className="mt-4 sm:mt-6 max-w-xs sm:max-w-md text-gray-300 text-xs sm:text-base">
                        El faro de Mazatlán es un ícono histórico y cultural de la ciudad, que ofrece vistas panorámicas impresionantes del océano Pacífico y la costa.
                    </p>
                    <button className="mt-4 sm:mt-6 text-xs sm:text-sm font-medium ">
                        DESDE 1879
                    </button>
                </div>
            </div>

            {/* Tarjetas al lado derecho */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 grid grid-cols-4 grid-areas-cards gap-4 w-[380px] sm:w-[600px] md:w-[650px]">
                {/* Tarjeta 1: Grande (ballena) */}
                <div
                    className="relative rounded-3xl overflow-hidden cursor-pointer h-40 md:h-64 col-span-2 border-2 "
                    style={{
                        backgroundImage: `url('/images/cards/whale.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-25 backdrop-blur-sm transition-all hover:bg-opacity-40" />
                    <h3 className="absolute top-3 left-3 text-sm sm:text-base font-semibold text-white">
                        Avistamientos y Vida Silvestre
                    </h3>
                    <div className="absolute bottom-3 left-3 w-12 h-1 bg-gray-300 rounded-full" />
                </div>

                {/* Tarjeta 2: Mediana (barco) */}
                <div
                    className="relative rounded-3xl overflow-hidden cursor-pointer h-40 sm:h-64  col-span-2 row-span-1 border-2"
                    style={{
                        backgroundImage: `url('/images/cards/ship.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-25 backdrop-blur-sm transition-all hover:bg-opacity-40" />
                    <h3 className="absolute top-3 left-3 text-sm sm:text-base font-semibold text-white">
                        Datos Interesantes
                    </h3>
                    <div className="absolute bottom-3 left-3 w-12 h-1 bg-gray-300 rounded-full" />
                </div>

                {/* Tarjeta 3: Mediana (puesta de sol) */}
                <div
                    className="relative rounded-3xl overflow-hidden cursor-pointer h-40 md:h-40 col-span-2"
                    style={{
                        backgroundImage: `url('/images/cards/sunset.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-25 backdrop-blur-sm transition-all hover:bg-opacity-40" />
                    <h3 className="absolute top-3 left-3 text-sm sm:text-base font-semibold text-white">
                        Recomendaciones para tu Visita
                    </h3>
                    <div className="absolute bottom-3 left-3 w-12 h-1 bg-gray-300 rounded-full" />
                </div>

                {/* Tarjeta 4: Chica (playa aérea) */}
                <div
                    className="relative rounded-3xl overflow-hidden cursor-pointer h-32 sm:h-40"
                    style={{
                        backgroundImage: `url('/images/cards/beach.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-25 backdrop-blur-sm transition-all hover:bg-opacity-40" />
                </div>

                {/* Tarjeta 5: Chica (atardecer desde arriba) */}
                <div
                    className="relative rounded-3xl overflow-hidden cursor-pointer h-32 sm:h-40"
                    style={{
                        backgroundImage: `url('/images/cards/coast.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-25 backdrop-blur-sm transition-all hover:bg-opacity-40" />
                </div>
            </div>




            {/* Flechas */}
            <div className="absolute bottom-8 right-8 flex gap-4 z-10 border-2 border-indigo-600">
                <button className="flex items-center text-left px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-xs sm:text-sm text-white hover:bg-white/30 transition">
                    <Globe className="w-4 h-4 mr-2" />
                    Descubre más
                </button>
                <button className="flex items-center text-left px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-xs sm:text-sm text-white hover:bg-white/30 transition">
                    <MapPin className="w-4 h-4 mr-2" />
                    Recorre Mazatlán
                </button>
                <button className="flex items-center text-left px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-xs sm:text-sm text-white hover:bg-white/30 transition">
                    <List className="w-4 h-4 mr-2" />
                    Lista rutas
                </button>
            </div>
        </section>
    );
}