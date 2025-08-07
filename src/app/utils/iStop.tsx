import { renderToStaticMarkup } from 'react-dom/server';
import { MapPin } from 'lucide-react';

export async function getStopIcon() {
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
      <MapPin color="white" size={16} />
    </div>
  );

  return L.divIcon({
    html: iconHtml,
    className: '',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
  });
}