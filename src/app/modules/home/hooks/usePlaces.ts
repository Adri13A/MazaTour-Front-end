import { useFetch } from '../../../hooks/useFetch';
import { Place } from '@/app/interfaces/utils';

export function usePlaces() {
  const { data, isLoading, isError } = useFetch<Place[]>('/api/places');
  return { places: data, isLoading, isError };
}
