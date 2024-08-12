import { useQuery } from '@tanstack/react-query';
import { productActions } from '..';

interface UseProductsProps {
  filterKey?: string;
}

export const useProducts = ({ filterKey }: UseProductsProps) => {
  const {
    isLoading,
    isError,
    error,
    data: products = [],
    isFetching,
  } = useQuery({
    queryKey: ['products', { filterKey }],
    queryFn: () => productActions.getProducts({ filterKey }),
    staleTime: 1000 * 60 * 5,
  });

  return { isLoading, isError, error, products, isFetching };
};
