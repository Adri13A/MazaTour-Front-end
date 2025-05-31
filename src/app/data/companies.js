import panamaImage from '@/public/images/companies/panama.webp';
import cafeMarinoImage from '@/public/images/companies/cafemarino.webp';
import pacificoImage from '@/public/images/companies/pacifico.webp';

export const companies = [
    
    {
    id: 1,
    imagen: panamaImage.src,
    nombre: 'Panamá',
    descripcion: 'Repostería, panadería y restaurante desde 1974.',
    ubicacion: 'Centro Histórico'
    },
    {
      id: 2,
      imagen: cafeMarinoImage.src,
      nombre: 'Cafe Marino',
      descripcion: 'Cafe, sabores e Historia desde 1950 ',
      ubicacion: 'Puente Juarez'
    },
    {
      id: 3,
      imagen: pacificoImage.src,
      nombre: 'Cerveceria Pacifico',
      descripcion: 'Cerveza, tradicion y cultura desde 1900',
      ubicacion: 'Centro'
    }
  ];
  