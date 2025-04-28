// components/CardHero.tsx
'use client'

import React from 'react';
import { motion, Variants } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { MoveRight } from 'lucide-react';

// Animaciones locales del Card
const cardAnim: Variants = {
  hidden: { x: 80, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { delay: 1.4, duration: 0.8 } },
};

const pulse: Variants = {
  pulse: { scale: [1, 1.05, 1], transition: { duration: 2, ease: 'easeInOut', repeat: Infinity } }
};

// Define props para recibir lo que necesita
interface CardHeroProps {
  title: string;
  text: string;
  img: StaticImageData;
  handleNext: () => void;
}

export default function CardHero({ title, text, img, handleNext }: CardHeroProps) {
  return (
    <motion.div
      className="Card-container"
      variants={cardAnim}
      initial="hidden"
      animate="show"
      whileHover={{ scale: 1.05 }}
      onClick={handleNext}
    >
      {/* Tarjeta de texto */}
      <div className="textCard-container">
        <div className="textCard-TwoContainer">
          <div className="titleCard">
            <h2 className="titleCardText">{title}</h2>
            <MoveRight size={23} className="text-white" />
          </div>
          <p className="textCard">{text}</p>
        </div>
      </div>

      {/* Imagen */}
      <motion.div
        className="imgCard-container"
        variants={pulse}
        animate="pulse"
      >
        <Image
          src={img}
          alt={title}
          width={100}
          height={120}
          unoptimized
          className="imgCard"
        />
      </motion.div>
    </motion.div>
  );
}
