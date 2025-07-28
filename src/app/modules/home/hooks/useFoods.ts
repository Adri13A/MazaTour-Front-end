import { useFetch } from '../../../hooks/useFetch';
import { ICardFood } from '@/app/interfaces/utils';

export function useFoods() {
  const { data, isLoading, isError } = useFetch<ICardFood[]>('/api/foods');
  return { foods: data, isLoading, isError };
}
