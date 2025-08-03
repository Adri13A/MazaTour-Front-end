import { renderToStaticMarkup } from 'react-dom/server';
import { Truck } from 'lucide-react';

export async function getTruckIcon() {
  const L = await import('leaflet');

  const iconHtml = renderToStaticMarkup(
    <div style={{
      width: '32px',
      height: '32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Truck color="#111" size={24} />
    </div>
  );

  return L.divIcon({
    html: iconHtml,
    className: '',
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  });
}
