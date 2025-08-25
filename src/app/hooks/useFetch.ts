import useSWR, { SWRConfiguration } from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export function useFetch<T = unknown>(
  url: string,
  options?: SWRConfiguration
) {
  const { data, error, isLoading } = useSWR<T>(url, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    refreshInterval: 0,
    ...options,
  });

  return {
    data,
    isLoading,
    isError: error,
  };
}
