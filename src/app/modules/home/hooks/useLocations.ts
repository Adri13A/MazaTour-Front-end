import { useFetch } from '../../../hooks/useFetch';
import { IListLocation } from '@/app/interfaces/utils';

export function useLocations() {
  const { data, isLoading, isError } = useFetch<IListLocation[]>('/api/locations');
  return { locations: data, isLoading, isError };
}
