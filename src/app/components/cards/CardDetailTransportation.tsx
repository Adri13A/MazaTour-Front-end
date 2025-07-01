'use client';

import { useRouter } from 'next/navigation';

interface CardDetailTransportationProps {
  idRuta: string;
  nombreRuta: string;
  organizacion: string;
  destinoOrigen: string;
}

export default function CardDetailTransportation({
  idRuta,
  nombreRuta,
  organizacion,
  destinoOrigen,
}: CardDetailTransportationProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/routing/transportation/detailTransportation/${idRuta}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white p-4 rounded-lg shadow-md mb-4 cursor-pointer hover:bg-gray-400 transition"
    >
      <h2 className="text-xl font-semibold">{nombreRuta}</h2>
      <p><strong>Organización:</strong> {organizacion}</p>
      <p><strong>Origen/Destino:</strong> {destinoOrigen}</p>
    </div>
  );
}