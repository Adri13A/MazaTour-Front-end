import { useFetch } from '../../../hooks/useFetch';
import { ICardCostRoute } from '@/app/interfaces/utils';

export function useCostsRoutes() {
  const { data, isLoading, isError } = useFetch<ICardCostRoute[]>('/api/costsroutes');
  return { costsRoutes: data, isLoading, isError };
}
