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
export const slides = [
  {
    id: 0,
    heroImg: heroOcean,
    title: 'MAZATLÁN',
    subtitle: 'Descubre la perla del pacífico',
    link: '',
    verticalText: 'OCEANO PACIFICO',
    card: {
      title: 'CULTURA',
      text: 'Sumergete en las tradiciones, cosumbres e historia...',
      img: cardOcean
    }
  },
  {
    id: 1,
    heroImg: heroCarnaval ,
    title: 'CULTURA',
    subtitle: 'Sumergete en las tradiciones, cosumbres e historia',
    link: 'https://mazatlan.travel/',
    verticalText: 'CARNAVAL MAZATLÁN 2024',
    card: {
      title: 'RUTAS',
      text: 'Conoce las diferentes rutas que recorren el puerto...',
      img: cardRuta 
    }
  },
  {
    id: 2,
    heroImg: heroRuta,
    title: 'RUTAS',
    subtitle: 'Conoce las diferentes rutas que recorren el puerto...',
    link: 'https://mazatlan.travel/',
    verticalText: 'RUTA SABALO',
    card: {
      title: 'ATRACCIONES',
      text: 'Descubre los lugares más emblemáticos de Mazatlán...',
      img: cardAcuario 
    }
  },
  {
    id: 3,
    heroImg: heroAcuario,
    title: 'DESTINOS',
    subtitle: 'Descubre los lugares más emblemáticos de Mazatlán',
    link: 'https://mazatlan.travel/',
    verticalText: 'ACUARIO MAR DE CORTES',
    card: {
      title: 'MAZATLÁN',
      text: 'Descubre la perla del pacífico...',
      img: cardCarnaval 
    }
  },

];
