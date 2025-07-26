import { useFetch } from '../../../hooks/useFetch';
import { Category } from '@/app/interfaces/utils';

export function useCategories() {
  const { data, isLoading, isError } = useFetch<Category[]>('/api/categories');
  return { categories: data, isLoading, isError };
}
