import { useFetch } from '../../../hooks/useFetch';
import { Company } from '@/app/interfaces/utils';

export function useCompanies() {
  const { data, isLoading, isError } = useFetch<Company[]>('/api/companies');
  return { companies: data, isLoading, isError };
}
