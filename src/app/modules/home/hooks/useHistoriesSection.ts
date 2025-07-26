import { useFetch } from '../../../hooks/useFetch';
import { HistorySection } from '@/app/interfaces/utils';

export function useHistoriesSection() {
  const { data, isLoading, isError } = useFetch<HistorySection[]>('/api/historiessection');
  return { historiessection: data, isLoading, isError };
}
