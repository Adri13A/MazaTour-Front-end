import { useFetch } from '../../../hooks/useFetch';
import { ICardPlacesRoute } from '@/app/interfaces/utils';

export function usePlacesRoute(routeId: string) {
  // --- Para usar endpoint real (descomenta esta línea) ---
  // const { data, isLoading, isError } = useFetch<ICardPlacesRoute[]>(`/api/routes/${routeId}/places`);

  // --- Para usar datos simulados (descomenta esta línea) ---
  const { data, isLoading, isError } = useFetch<ICardPlacesRoute[]>('/api/placesroute');

  // Si usas el simulado, filtras por routeId:
  const filteredPlaces = data?.filter(place => place.routeId.toString() === routeId) ?? [];

  return {
    placesroute: filteredPlaces,
    isLoading,
    isError,
  };
}
