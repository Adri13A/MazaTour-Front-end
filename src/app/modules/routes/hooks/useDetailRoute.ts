import { useFetch } from '../../../hooks/useFetch';
import { IDetailRoute } from '@/app/interfaces/utils';

export function useDetailRoute(routeId: string) {
  // --- Para usar endpoint real (descomenta esta línea) ---
  // const const { data, isLoading, isError } = useFetch<IDetailRoute>(`/api/detailroute/${routeId}`);
  // Para simulación usa el endpoint que devuelve todas las rutas
  const { data, isLoading, isError } = useFetch<IDetailRoute[]>('/api/detailroute');

  // Filtra la ruta que coincide con routeId
  const detailroute = data?.find(route => route.id === Number(routeId)) ?? null;

  return {
    detailroute,
    isLoading,
    isError,
  };
}
