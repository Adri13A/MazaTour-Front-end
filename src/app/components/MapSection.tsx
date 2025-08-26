'use client';
import { useRouter } from "next/navigation";

import { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import { Map as LeafletMap, Polyline, Marker } from 'leaflet';
import { decodePolyline } from '../utils/decodePolyline';
import { getTruckIcon } from '../utils/iTruck';
import { getStopIcon } from '../utils/iStop';
import { getDestinationIcon, getOriginIcon } from '../utils/iOriginDest';
import { getTerminalsIcon } from '../utils/iTerminals';

type TruckAnimationType = 'origin' | 'destination' | null;

interface Stop {
  stopId: number;
  name: string;
  coordinates: string;
}

interface Terminal {
  id: string | number; 
  name: string;
  coordinate: string;
  terminalRoutes?: { routeId: number; name: string }[];
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
  readonly terminals?: Terminal[];
  readonly selectedTerminal?: number | string | null;

}

const MapSection = ({
  id,
  polylineOrigin,
  polylineDestination,
  truckAnimationType = null,
  animationKey = 0,
  stops = [],
  terminals=[],
  selectedTerminal
}: MapSectionProps) => {

  const router = useRouter();

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

        // L.control.zoom({ position: 'topright' }).addTo(map);
        L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/"></a>'
        }).addTo(map);


        // L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
        //   attribution: 'Tiles &copy; Esri &mdash; And the GIS User Community'
        // }).addTo(map);

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
            const originMarker = L.marker(firstOriginCoord, {
              icon: originIcon,
              title: 'Destino',
            }).addTo(map);

            const popup = L.popup({
              className: "custom-terminal-popup",
              closeButton: true,
              autoClose: true,
              closeOnClick: true,
            }).setContent('<strong>Destino</strong>');

            originMarker.bindPopup(popup);

            originMarker.on("click", () => {
              map.setView(firstOriginCoord, 15, { animate: true });
            });
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
            const destMarker = L.marker(firstDestCoord, {
              icon: destinationIcon,
              title: 'Salida',
              }).addTo(map);

              const popup = L.popup({
                className: "custom-terminal-popup",
                closeButton: true,
                autoClose: true,
                closeOnClick: true,
              }).setContent('<strong>Salida</strong>');

              destMarker.bindPopup(popup);

            destMarker.on("click", () => {
              map.setView(firstDestCoord, 15, { animate: true });
            });
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
            });

            const popup = L.popup({
              className: "custom-terminal-popup",
              closeButton: true,
              autoClose: true,
              closeOnClick: true,
            }).setContent(`<strong>${stop.name}</strong>`);

            marker.bindPopup(popup);

              marker.addTo(map);
              allCoords.push([lat, lng]);

              marker.on("click", () => {
                map.setView([lat, lng], 15, { animate: true });
              });
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

useEffect(() => {
  const drawTerminals = async () => {
    if (!leafletMapRef.current) return;
    const L = await import("leaflet");

    // Limpiar terminales anteriores
    leafletMapRef.current.eachLayer(layer => {
      if (layer instanceof L.Marker && (layer as any).options.title === "Terminal") {
        leafletMapRef.current?.removeLayer(layer);
      }
    });

    if (!selectedTerminal) return;

    const terminalIcon = getTerminalsIcon(L);

    const addMarker = (terminal: Terminal) => {
      const [lat, lng] = terminal.coordinate.split(",").map(c => Number(c.trim()));
      if (isNaN(lat) || isNaN(lng)) return;

      const marker = L.marker([lat, lng], {
        icon: terminalIcon,
        title: "Terminal",
      }).addTo(leafletMapRef.current!);

      marker.on("click", () => {
        leafletMapRef.current?.setView([lat, lng], 15, { animate: true });
      });

      // Crear contenido HTML del popup
      const popupContent = document.createElement("div");

      // Encabezado de la terminal
      const header = document.createElement("h3");
      header.textContent = terminal.name;
      header.className = "font-bold text-sm text-gray-800 mb-2";
      popupContent.appendChild(header);

      // Contenedor de las cards
      const cardsWrapper = document.createElement("div");
      cardsWrapper.className = "space-y-1";
      cardsWrapper.style.display = "flex";
      cardsWrapper.style.flexDirection = "column";
      cardsWrapper.style.overflowY = "auto";
      cardsWrapper.style.scrollbarWidth = "none"; // Firefox
            cardsWrapper.style.maxHeight = "calc(2 * 2.5rem + 0.25rem)"; 
      // cardsWrapper.style.maxHeight = "calc(3 * 2.6rem + 0.25rem)"; 
      cardsWrapper.style.cssText += "::-webkit-scrollbar { display: none; }"; // Chrome, Safari, Edge

      terminal.terminalRoutes?.forEach((route) => {
        const routeEl = document.createElement("div");

        routeEl.innerHTML = `
          <div 
            class="flex items-center justify-between rounded-lg transition shadow-md bg-white flex-shrink-0 w-full snap-center cursor-pointer hover:shadow-lg h-10 px-2"
            role="listitem"
          >
            <div class="flex items-center gap-2">
              <div class="w-6 h-6 flex items-center justify-center rounded-lg bg-[#fafafa] text-black font-medium">
                  ${route.name.charAt(0)}
              </div>
              <p class="text-[#4B4B4B] text-xs leading-none">${route.name}</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" 
                fill="none" viewBox="0 0 22 22" 
                stroke="currentColor" 
                class="w-4 h-4 text-black mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M9 5l7 7-7 7" />
            </svg>
          </div>
        `;

        routeEl.onclick = () => router.push(`/routing/routes/${route.routeId}`);

        cardsWrapper.appendChild(routeEl);
      });

      popupContent.appendChild(cardsWrapper);

      const popup = L.popup({
        className: "custom-terminal-popup",
        closeButton: false,
        autoClose: true,
        closeOnClick: true,
      }).setContent(popupContent);

      marker.bindPopup(popup);
    };

    if (selectedTerminal === "all") {
      terminals?.forEach(addMarker);

      const coords: [number, number][] = terminals
        .map(t => t.coordinate.split(",").map(c => Number(c.trim())))
        .filter((arr): arr is [number, number] => arr.length === 2 && !arr.some(isNaN));

      if (coords.length > 0) {
        leafletMapRef.current.fitBounds(coords, { padding: [20, 20] });
      }
    } else {
      const terminal = terminals?.find(t => t.id === selectedTerminal);
      if (!terminal) return;
      addMarker(terminal);
      const [lat, lng] = terminal.coordinate.split(",").map(c => Number(c.trim()));
      leafletMapRef.current.setView([lat, lng], 15);
    }
  };

  drawTerminals();
}, [selectedTerminal, terminals]);


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

        map.setView(coords[currentIndex], 14, { animate: true });

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

  return <div ref={mapRef} className="h-full w-full z-30 rounded- xl" />;
};

export default MapSection;
