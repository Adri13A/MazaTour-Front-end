import { useFetch } from '../../../hooks/useFetch';
import { ICardCompany } from '@/app/interfaces/utils';

export function useCompanies() {
  const { data, isLoading, isError } = useFetch<ICardCompany[]>('/api/companies');
  return { companies: data, isLoading, isError };
}
