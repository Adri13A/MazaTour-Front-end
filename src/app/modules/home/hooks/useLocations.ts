import { useFetch } from '../../../hooks/useFetch';
import { Location } from '@/app/interfaces/utils';

export function useLocations() {
  const { data, isLoading, isError } = useFetch<Location[]>('/api/locations');
  return { locations: data, isLoading, isError };
}
