import normalImage from '@/public/images/costs/normal.jpg';
import sabaloImage from '@/public/images/costs/sabalo.jpeg';
import estudianteImage from '@/public/images/costs/estudiante.webp';
import aireImage from '@/public/images/costs/aire.jpg';

export const costs = [
    
    {
      id: 1,
      imagen: estudianteImage.src,
      tipoUnidad: 'Unidades en general',
      tipoPago: 'Efectivo y Tajerta',
      tipoPasaje:'Estudiante',
      costo: '$ 3.50',
    },
    {
      id: 2,
      imagen: normalImage.src,
      tipoUnidad: 'Unidades sin aire',
      tipoPago: 'Solo Efectivo',
      tipoPasaje:'Normal',
      costo: '$ 11.00',
    },
    {
      id: 3,
      imagen: aireImage.src,
      tipoUnidad: 'Unidades con aire',
      tipoPago: 'Solo Efectivo',
      tipoPasaje:'Con Aire',
      costo: '$ 12.50',
    },
    {
      id: 4,
      imagen: sabaloImage.src,
      tipoUnidad: 'Unidades con aire',
      tipoPago: 'Solo Efectivo',
      tipoPasaje:'Sábalo Centro',
      costo: '$ 13.00',
    }
  ];
  