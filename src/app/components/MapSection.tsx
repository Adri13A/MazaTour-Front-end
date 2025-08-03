'use client';

import { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import { Map as LeafletMap, Polyline, Marker } from 'leaflet';
import { decodePolyline } from '../utils/decodePolyline';
import { getTruckIcon } from '../utils/iTruck';

interface MapSectionProps {
  readonly id: string;
  readonly polylineOrigin?: string;
  readonly polylineDestination?: string;
  readonly truckAnimationCount?: number;
}

const MapSection = ({ id, polylineOrigin, polylineDestination, truckAnimationCount = 0 }: MapSectionProps) => {
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

        if (polylineOrigin) {
          const originCoords = decodePolyline(polylineOrigin);
          originPolylineRef.current = L.polyline(originCoords, { color: '#A6A6A6', weight: 5 }).addTo(map);
        }

        if (polylineDestination) {
          const destCoords = decodePolyline(polylineDestination);
          destPolylineRef.current = L.polyline(destCoords, { color: '#111111', weight: 5 }).addTo(map);
        }

        const allCoordsNested = [
          ...(originPolylineRef.current?.getLatLngs() || []),
          ...(destPolylineRef.current?.getLatLngs() || []),
        ];

        const allCoords = flattenLatLngs(allCoordsNested);

        if (allCoords.length > 0) {
          map.fitBounds(L.polyline(allCoords).getBounds(), { padding: [20, 20] });
        }
      }
    };

    initMap();

    return () => {
      if (leafletMapRef.current) {
        leafletMapRef.current.remove();
        leafletMapRef.current = null;
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [id, polylineOrigin, polylineDestination]);

 useEffect(() => {
  if (!leafletMapRef.current) return;

  const map = leafletMapRef.current;

  const polylineToUse =
    truckAnimationCount % 2 === 0
      ? originPolylineRef.current
      : destPolylineRef.current;

  if (!polylineToUse) return;

  const coords = flattenLatLngs(polylineToUse.getLatLngs());
  if (coords.length === 0) return;

  let currentIndex = 0;

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
      if (currentIndex >= coords.length) return;

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
    if (truckMarkerRef.current) {
      map.removeLayer(truckMarkerRef.current);
      truckMarkerRef.current = null;
    }
  };
}, [truckAnimationCount]);


  return <div ref={mapRef} className="h-full w-full z-30" />;
};

export default MapSection;
