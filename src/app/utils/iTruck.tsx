import { renderToStaticMarkup } from 'react-dom/server';
import { BusFront } from 'lucide-react';

export async function getTruckIcon() {
  const L = await import('leaflet');

  const iconHtml = renderToStaticMarkup(
    <div
      style={{
        width: '30px',
        height: '30px',
        borderRadius: '9999px', // círculo completo
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // fondo oscuro translúcido
        backdropFilter: 'blur(4px)', // efecto de blur
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <BusFront color="white" size={20} />
    </div>
  );
  return L.divIcon({
    html: iconHtml,
    className: '', // evitar estilos de Leaflet por defecto
    iconSize: [30, 30],
    iconAnchor: [20, 20], // centrado exacto
  });
}
