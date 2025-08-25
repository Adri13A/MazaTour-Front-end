import { useFetch } from '../../../hooks/useFetch';
import { ICardPlaceRoute } from '@/app/interfaces/utils';

export function usePlacesRoutes() {
  const { data, isLoading, isError } = useFetch<ICardPlaceRoute[]>('/api/placesroutes');
  return { placesRoutes: data, isLoading, isError };
}
