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
    const initMap = async () => {
      const L = await import('leaflet');
      if (mapRef.current && !leafletMapRef.current) {
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

  return <div ref={mapRef} className="h-full w-full z-30" />;
}
