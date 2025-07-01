'use client';

import { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';

interface MapComponentProps {
  readonly idRuta: string;
}

export default function MapComponent({ idRuta }: MapComponentProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMapRef = useRef<any>(null); 

  useEffect(() => {
    let mapInstance: any;

    const initMap = async () => {
      const L = await import('leaflet');

      if (mapRef.current && !leafletMapRef.current) {
        // 🔧 Desactiva controles por defecto
        const map = L.map(mapRef.current, {
          center: [23.2329, -106.4202],
          zoom: 13,
          zoomControl: false,
        });

        L.control.zoom({ position: 'topright' }).addTo(map);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors',
        }).addTo(map);

        leafletMapRef.current = map;
        mapInstance = map;
      }
    };

    initMap();

    return () => {
      if (leafletMapRef.current) {
        leafletMapRef.current.remove();
        leafletMapRef.current = null;
      }
    };
  }, [idRuta]);

  return (
    <div className="relative w-full h-[600px] rounded-lg overflow-hidden shadow-lg border">
      <div className="absolute top-4 left-4 z-[1000] bg-black/40 p-2 rounded-3xl shadow-md w-[250px] text-center">
        <h2 className="font-bold text-white mb-2 text-lg uppercase">Detalles</h2>
      </div>
      <div ref={mapRef} className="h-full w-full" />
    </div>

  );
}
