import { useFetch } from '../../../hooks/useFetch';
import { IHistorySection } from '@/app/interfaces/utils';

export function useHistoriesSection() {
  const { data, isLoading, isError } = useFetch<IHistorySection[]>('/api/historiessection');
  return { historiessection: data, isLoading, isError };
}
