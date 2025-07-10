// src/app/components/pages/Inicio/Hero.tsx
'use client'

import React, { useState } from "react";
import Image from "next/image";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import MiniCard from "./MiniCard";

import '@/styles/hero_transporte.css';

import { datas } from "../../../data/hero_transporte"; // Importa los datos de los slides


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


export default function Hero() {
    const [index] = useState(0);
    const data = datas[index];

    return (
        <section className="section-container">

            {/* Background image with subtle zoom */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={`bg-${data.id}`}
                    className="bg-image"
                    variants={bgVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                >

                    <Image
                        src={data.heroImg}
                        alt={data.title}
                        fill
                        className="object-cover"
                        priority
                    />

                    <motion.div
                        className="layer-image"
                        variants={container}
                        initial="hidden"
                        animate="show" />
                </motion.div>
            </AnimatePresence>

            {/*Titulo Principal*/}
            <motion.div
                className="title-container"
                variants={container}
                initial="hidden"
                animate="show">

                 {/*Titulo*/}
                <motion.h1
                    key={`title-${data.id}`}
                    className="Hero-title"
                    variants={textVariants}
                    initial="hidden"
                    animate="show">
                    {data.title}
                </motion.h1>

                 {/*Subtitulo*/}
                <motion.p
                    key={`subtitle-${data.id}`}
                    className="Hero-subtitle"
                    variants={textVariants}
                    initial="hidden"
                    animate="show">
                    {data.subtitle}
                </motion.p>

                {/* MiniCards con información*/}
                <motion.div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-20 md:mt-24"
                variants={textVariants}
                initial="hidden"
                animate="show">
                    <MiniCard title="Atracciones" description="Planifica tu visita a las atracciones imperdibles de Mazatlán" />
                    <MiniCard title="Rutas" description="Conoce las diferentes rutas que recorren el puerto" />
                    <MiniCard
                        className="col-span-2 md:col-span-1"
                        title="Cultura"
                        description="Descubre la rica cultura de nuestro puerto, desde su historia hasta sus tradiciones"
                        />
                </motion.div>
            </motion.div>


            {/* Mobile scroll indicator */}
            <motion.div
                className="mobileScroll"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.8 }}>
                <DotLottieReact
                    src="https://lottie.host/ddfde135-4ad3-4b4f-8451-80b755cb78d4/oj9EqEIwC9.lottie"
                    loop
                    autoplay
                    className="w-38 h-20 md:w-48 md:h-24"
                />
            </motion.div>

            {/* Desktop scroll indicator */}
            <motion.div
                className="deskScroll"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.8 }}>
                <DotLottieReact
                    src="https://lottie.host/3a71fb50-9180-4867-b69d-d025cd08f307/C5b1Q1srz7.lottie"
                    loop
                    autoplay
                    className="w-48 h-24"
                />
            </motion.div>

        </section>
    );
}