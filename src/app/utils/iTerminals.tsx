import { renderToStaticMarkup } from 'react-dom/server';
import { OctagonPause } from 'lucide-react';

export function getTerminalsIcon(L: typeof import('leaflet')) {
  const iconHtml = renderToStaticMarkup(
    <div
      style={{
        width: '30px',
        height: '30px',
        borderRadius: '9999px',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)', 

      }}
    >
      <OctagonPause color="yellow" size={16} />
    </div>
  );
  return L.divIcon({
    html: iconHtml,
    className: '',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
  });
}
