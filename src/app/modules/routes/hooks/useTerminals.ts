import { useFetch } from '../../../hooks/useFetch';
import { ITerminal } from '@/app/interfaces/utils';

export function useTerminals() {
  const { data, isLoading, isError } = useFetch<ITerminal[]>('/api/terminals');
  return { terminals: data, isLoading, isError };
}
