import { useFetch } from '../../../hooks/useFetch';
import { ICardRoute } from '@/app/interfaces/utils';

export function useRoutes() {
  const { data, isLoading, isError } = useFetch<ICardRoute[]>('/api/routes');
  return { routes: data, isLoading, isError };
}
