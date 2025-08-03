// src/app/components/pages/Inicio/Hero.tsx
'use client'

import React, { useState } from "react";
import Image from "next/image";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

import '@/styles/hero.css';

import { slides } from "../../../../data/slides"; // Importa los datos de los slides
import HeroButton from "@/app/components/buttons/herobutton";
import BadgeVertical from "@/app/components/badge/badgevertical";
import CardHero from "../cardhero/cardhero";


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

        <AnimatePresence mode="wait">
          <motion.div
            key={`button-${slide.id}`}
            variants={textVariants}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <HeroButton link={slide.link} label="Explorar" />
          </motion.div>
        </AnimatePresence>


      </motion.div>

      {/*Texto vertical izquierda */}
      <motion.div
        key={`badge-${slide.id}`}
        className="badge"
        variants={badgeAnim}
        initial="hidden"
        animate="show"
      >
        <BadgeVertical text={slide.verticalText} />
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