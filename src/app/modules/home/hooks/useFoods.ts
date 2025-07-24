import { useFetch } from '../../../hooks/useFetch';
import { Food } from '@/app/interfaces/utils';

export function useFoods() {
  const { data, isLoading, isError } = useFetch<Food[]>('/api/foods');
  return { foods: data, isLoading, isError };
}
