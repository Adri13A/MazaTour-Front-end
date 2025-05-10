// src/app/components/pages/Inicio/Hero.tsx
'use client'

import React, { useState } from "react";
import Image from "next/image";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

import '@/styles/hero.css';
import CardHero from '../../ui/cardhero/cardhero';
import { HeroButton } from "../../ui/buttons/herobutton";
import Badge from "../../ui/badge/badgevertical";

import { slides } from "../../../data/slides"; // Importa los datos de los slides

// Animations
const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2, when: 'beforeChildren' } }
};
const bgVariants: Variants = {
  enter: { scale: 1.1, opacity: 0 },
  center: {
    scale: 1, opacity: 1, transition: { delay: 0.5, duration: 1.2, ease: 'easeOut' }
  },
  exit: {
    scale: 1, opacity: 0, transition: { duration: 0.8 }
  }
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.9,
      duration: 0.8,
      ease: 'easeOut'
    }
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.5
    }
  }
};

const badgeAnim: Variants = {
  hidden: { x: -20, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { delay: 1.4, duration: 0.8 }
  },
  exit: {
    x: 80,
    opacity: 0,
    transition: { duration: 0.5 }
  }
};

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