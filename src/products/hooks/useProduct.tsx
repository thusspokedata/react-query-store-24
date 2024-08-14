import { useQuery } from '@tanstack/react-query';
import { productActions } from '..';

interface UseProductsProps {
  id: number;
}

export const useProduct = ({ id }: UseProductsProps) => {
  const {
    isLoading,
    isError,
    error,
    data: product,
    isFetching,
  } = useQuery({
    queryKey: ['product', id],
    queryFn: () => productActions.getProductById(id),
    staleTime: 1000 * 60 * 5,
  });

  return { isLoading, isError, error, product, isFetching };
};
