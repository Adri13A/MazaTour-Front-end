// src/app/components/pages/Inicio/Hero.tsx
'use client'

import React from "react";
import Image from "next/image";
import heroImg from '@/public/images/Mazatlan-Malecon.jpg';


export default function Hero() {
    return (
        <section className="relative w-full h-screen overflow-hidden">
            {/*Imagen de fondo */}
            <Image
                src={heroImg}
                alt="Imagen de Mazatlán"
                fill
                className=" object-cover z-0"
                priority
            />

            <div className="absolute inset-0 bg-black/25 z-0"/>

            {/*Titulo Principa*/}
            <div className="relative z-20 h-full flex flex-col justify-center place-items-start text-center px-7 md:px-20 lg:px-40">
                <h1 className="text-6xl md:text-[9rem] font-aboreto">MAZATLÁN</h1>
                <p className="text-xl mt-4 md:text-3xl font-gantari px-2">Descubre la perla del pacífico</p>
            </div>

            {/*Texto vertical izquierda */}
            <div className="absolute left-1 md:left-3 top-[80%]  -translate-y-1/2 md:top-[85%] md:-translate-y-1/2 z-20 h-14 md:h-16 rotate-[-90deg] origin-left text-white tracking-widest text-[0.50rem] md:text-[0.70rem] pt-8 px-2 backdrop-blur-lg rounded-lg bg-black bg-opacity-20">
                
                    <p className="font-gantari">OCEANO PACIFICO</p>
                
            </div>

            {/*Card flotante derecha */}
            <div className="absolute right-4 bottom-[10%] z-20 bg-white/20 backdrop-blur-lg rounded-2xl p-4 flex items-center gap-3 max-w-[300px]">
            <Image
            src={heroImg}
            alt="Explora Mazatlán"
            width={190}
            height={20}
            className="rounded-lg "
            />
            </div>
        </section>
    );
}