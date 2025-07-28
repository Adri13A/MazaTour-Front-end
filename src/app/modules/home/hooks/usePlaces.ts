import { useFetch } from '../../../hooks/useFetch';
import { ICardPlace } from '@/app/interfaces/utils';

export function usePlaces() {
  const { data, isLoading, isError } = useFetch<ICardPlace[]>('/api/places');
  return { places: data, isLoading, isError };
}
