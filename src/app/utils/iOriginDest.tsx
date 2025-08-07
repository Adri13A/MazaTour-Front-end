import { renderToStaticMarkup } from 'react-dom/server';
import { Goal, ArrowRightCircle } from 'lucide-react'; // íconos ejemplo

export async function getOriginIcon() {
  const L = await import('leaflet');
  const iconHtml = renderToStaticMarkup(
    <div
      style={{
        width: '30px',
        height: '30px',
        borderRadius: '9999px',
        background: 'radial-gradient(circle, #34d399 0%, #065f46 100%)', // verde degradado
        boxShadow: '0 0 6px rgba(0,0,0,0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Goal color="white" size={22} />
    </div>
  );

  return L.divIcon({
    html: iconHtml,
    className: '',
    iconSize: [40, 40],
    iconAnchor: [25, 25],
  });
}

export async function getDestinationIcon() {
  const L = await import('leaflet');

  const iconHtml = renderToStaticMarkup(
    <div
      style={{
        width: '30px',
        height: '30px',
        borderRadius: '9999px',
        background: 'radial-gradient(circle, #3b82f6 0%, #1e40af 100%)', // azul degradado
        boxShadow: '0 0 6px rgba(0,0,0,0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ArrowRightCircle color="white" size={22} />
    </div>
  );

  return L.divIcon({
    html: iconHtml,
    className: '',
    iconSize: [40, 40],
    iconAnchor: [25, 25],
  });
}
