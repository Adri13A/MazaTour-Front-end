'use client';

import { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import { Map as LeafletMap, Polyline, Marker } from 'leaflet';
import { decodePolyline } from '../utils/decodePolyline';
import { getTruckIcon } from '../utils/iTruck';
import { getStopIcon } from '../utils/iStop';
import { getDestinationIcon, getOriginIcon } from '../utils/iOriginDest';

type TruckAnimationType = 'origin' | 'destination' | null;

interface Stop {
  stopId: number;
  name: string;
  coordinates: string;
}

interface MapSectionProps {
  readonly id: string;
  readonly polylineOrigin?: string;
  readonly polylineDestination?: string;
  readonly truckAnimationType?: TruckAnimationType;
}

interface MapSectionProps {
  readonly id: string;
  readonly polylineOrigin?: string;
  readonly polylineDestination?: string;
  readonly truckAnimationType?: TruckAnimationType;
  readonly animationKey?: number; 
  readonly stops?: Stop[];
}

const MapSection = ({
  id,
  polylineOrigin,
  polylineDestination,
  truckAnimationType = null,
  animationKey = 0,
   stops = [],
}: MapSectionProps) => {

  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMapRef = useRef<LeafletMap | null>(null);

  const originPolylineRef = useRef<Polyline | null>(null);
  const destPolylineRef = useRef<Polyline | null>(null);
  const truckMarkerRef = useRef<Marker | null>(null);
  const animationRef = useRef<number | null>(null);

  const flattenLatLngs = (latlngs: any[]): any[] => {
    const result: any[] = [];
    const flatten = (arr: any[]) => {
      for (const item of arr) {
        if (Array.isArray(item)) {
          flatten(item);
        } else {
          result.push(item);
        }
      }
    };
    flatten(latlngs);
    return result;
  };

  //Polilineas y paradas
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

      const allCoords: any[] = [];

      if (polylineOrigin) {
        const originCoords = decodePolyline(polylineOrigin);
        originPolylineRef.current = L.polyline(originCoords, { color: '#A6A6A6', weight: 5 }).addTo(map);
        allCoords.push(...originCoords);

        // Icono y marcador en la primera coordenada de origen
        if (originCoords.length > 0) {
          const originIcon = await getOriginIcon();
          const firstOriginCoord = originCoords[0];
          L.marker(firstOriginCoord, {
            icon: originIcon,
            title: 'Base',
          }).addTo(map).bindPopup('<strong>Base</strong>');
        }
      }

      if (polylineDestination) {
        const destCoords = decodePolyline(polylineDestination);
        destPolylineRef.current = L.polyline(destCoords, { color: '#111111', weight: 5 }).addTo(map);
        allCoords.push(...destCoords);

        // Icono y marcador en la primera coordenada de destino
        if (destCoords.length > 0) {
          const destinationIcon = await getDestinationIcon();
          const firstDestCoord = destCoords[0];
          L.marker(firstDestCoord, {
            icon: destinationIcon,
            title: 'Salida',
          }).addTo(map).bindPopup('<strong>Salida</strong>');
        }
      }

      if (stops && stops.length > 0) {
        const stopIcon = await getStopIcon();

        stops.forEach(stop => {
          const [lat, lng] = stop.coordinates.split(',').map(c => Number(c.trim()));
          if (!isNaN(lat) && !isNaN(lng)) {
            const marker = L.marker([lat, lng], {
              icon: stopIcon,
              title: stop.name,
            }).bindPopup(`<strong>${stop.name}</strong>`);

            marker.addTo(map);
            allCoords.push([lat, lng]);
          }
        });
      }

      if (allCoords.length > 0) {
        map.fitBounds(L.latLngBounds(allCoords), { padding: [20, 20] });
      }
    }
  };

  initMap();
}, [id, polylineOrigin, polylineDestination, stops]);

 //Animación de recorrido
  useEffect(() => {
  if (!leafletMapRef.current || !truckAnimationType) return;

  const map = leafletMapRef.current;
  const polylineToUse =
    truckAnimationType === 'origin'
      ? originPolylineRef.current
      : destPolylineRef.current;

  if (!polylineToUse) return;

  const coords = flattenLatLngs(polylineToUse.getLatLngs());
  if (coords.length === 0) return;

  let currentIndex = 0;
  let fadeOutTimeout: ReturnType<typeof setTimeout> | null = null;

  if (truckMarkerRef.current) {
    map.removeLayer(truckMarkerRef.current);
    truckMarkerRef.current = null;
  }

  const setupTruck = async () => {
    const L = await import('leaflet');
    const truckIcon = await getTruckIcon();

    truckMarkerRef.current = L.marker(coords[0], { icon: truckIcon }).addTo(map);

    const animate = () => {
      currentIndex++;
      if (currentIndex >= coords.length) {
        // Inicio fade out después de 5 segundos
        fadeOutTimeout = setTimeout(() => {
          if (truckMarkerRef.current) {
            const markerElem = truckMarkerRef.current.getElement();
            if (markerElem) {
              markerElem.classList.add('fade-out');
              // Remover marcador después de la transición (1.5s)
              setTimeout(() => {
                if (truckMarkerRef.current) {
                  map.removeLayer(truckMarkerRef.current);
                  truckMarkerRef.current = null;
                }
              }, 1500);
            } else {
              // Si no se puede obtener el elemento, remueve inmediatamente
              map.removeLayer(truckMarkerRef.current);
              truckMarkerRef.current = null;
            }
          }
        }, 3000);
        return;
      }

      truckMarkerRef.current?.setLatLng(coords[currentIndex]);
      animationRef.current = requestAnimationFrame(animate);
    };

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    animationRef.current = requestAnimationFrame(animate);
  };

  setupTruck();

  return () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    if (fadeOutTimeout) {
      clearTimeout(fadeOutTimeout);
    }
    if (truckMarkerRef.current) {
      map.removeLayer(truckMarkerRef.current);
      truckMarkerRef.current = null;
    }
  };
}, [truckAnimationType, animationKey]);


  return <div ref={mapRef} className="h-full w-full z-30" />;
};

export default MapSection;
