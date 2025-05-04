// src/app/components/pages/Inicio/Hero.tsx
'use client'

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';;
import { motion, AnimatePresence, Variants } from 'framer-motion';

import '@/styles/hero.css';
import CardHero from '../../ui/cardhero/cardhero';
import {HeroButton}  from "../../ui/buttons/herobutton";
import Badge from "../../ui/badge/badgevertical";

// Importa aquí tus imágenes de hero y mini‑card
import heroOcean from '@/public/images/hero/heroOceano.jpg';
import heroCarnaval from '@/public/images/hero/heroCarnaval.jpg';
import heroRuta from '@/public/images/hero/heroRuta.jpeg';
import heroAcuario from '@/public/images/hero/heroAcuario.jpg';

import cardOcean from '@/public/images/miniCard/cardCarnaval.jpg';
import cardCarnaval from '@/public/images/miniCard/cardOceano.jpg';
import cardRuta from '@/public/images/miniCard/cardRuta.jpeg';
import cardAcuario from '@/public/images/miniCard/cardAcuario.jpg';


// Datos de cada “slide”
const slides = [
  {
    id: 0,
    heroImg: heroOcean as StaticImageData,
    title: 'MAZATLÁN',
    subtitle: 'Descubre la perla del pacífico',
    link: '',
    verticalText: 'OCEANO PACIFICO',
    card: {
      title: 'CULTURA',
      text: 'Sumergete en las tradiciones, cosumbres e historia...',
      img: cardOcean as StaticImageData
    }
  },
  {
    id: 1,
    heroImg: heroCarnaval as StaticImageData,
    title: 'CULTURA',
    subtitle: 'Sumergete en las tradiciones, cosumbres e historia',
    link: 'https://mazatlan.travel/',
    verticalText: 'CARNAVAL MAZATLÁN 2024',
    card: {
      title: 'RUTAS',
      text: 'Conoce las diferentes rutas que recorren el puerto...',
      img: cardRuta as StaticImageData
    }
  },
  {
    id: 2,
    heroImg: heroRuta as StaticImageData,
    title: 'RUTAS',
    subtitle: 'Conoce las diferentes rutas que recorren el puerto...',
    link: 'https://mazatlan.travel/',
    verticalText: 'RUTA SABALO',
    card: {
      title: 'ATRACCIONES',
      text: 'Descubre los lugares más emblemáticos de Mazatlán...',
      img: cardAcuario as StaticImageData
    }
  },
  {
    id: 3,
    heroImg: heroAcuario as StaticImageData,
    title: 'DESTINOS',
    subtitle: 'Descubre los lugares más emblemáticos de Mazatlán',
    link: 'https://mazatlan.travel/',
    verticalText: 'ACUARIO MAR DE CORTES',
    card: {
      title: 'MAZATLÁN',
      text: 'Descubre la perla del pacífico...',
      img: cardCarnaval as StaticImageData
    }
  },

];

// Animations

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2, when: 'beforeChildren' } }
};
const bgVariants: Variants = {
  enter: { scale: 1.1, opacity: 0 },
  center: { scale: 1, opacity: 1, transition: { delay: 0.5, duration: 1.2, ease: 'easeOut' }
  },
  exit: { scale: 1, opacity: 0, transition: { duration: 0.8 }
  }
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.6,       // <— retrasa medio segundo
      duration: 0.8,
      ease: 'easeOut'
    }
  }
};


export default function Hero() {
  const [index, setIndex] = useState(0);
  const slide = slides[index];

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="section-container">

      {/* Background image with subtle zoom */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${slide.id}`}
          className="bg-image"
          variants={bgVariants}
          initial="enter"
          animate="center"
          exit="exit"
          >

          <Image
            src={slide.heroImg}
            alt={slide.title}
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

        <motion.h1
          key={`title-${slide.id}`}
          className="Hero-title"
          variants={textVariants}
          initial="hidden"
          animate="show">
         {slide.title}
        </motion.h1>

        <motion.p
          key={`subtitle-${slide.id}`}
          className="Hero-subtitle"
          variants={textVariants}
          initial="hidden"
          animate="show">
           {slide.subtitle}
        </motion.p>

       <HeroButton link={slide.link} label="Explorar" />

      </motion.div>

      {/*Texto vertical izquierda */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        transition={{ delay: 1.2, duration: 0.8 }}
      >
      <Badge text={slide.verticalText}/>
      </motion.div>

      {/* Card flotante derecha */}
      <CardHero
        title={slide.card.title}
        text={slide.card.text}
        img={slide.card.img}
        handleNext={handleNext}
      />




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