import { useFetch } from '../../../hooks/useFetch';
import { IListCategory } from '@/app/interfaces/utils';

export function useCategories() {
  const { data, isLoading, isError } = useFetch<IListCategory[]>('/api/categories');
  return { categories: data, isLoading, isError };
}
