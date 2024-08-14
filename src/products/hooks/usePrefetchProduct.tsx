import { useQueryClient } from '@tanstack/react-query';
import { productActions } from '..';

export const usePrefetchProduct = () => {
  const queryClient = useQueryClient();

  const prefetchProduct = (id: number) => {
    queryClient.prefetchQuery({
      queryKey: ['product', id], // La clave de la consulta
      queryFn: () => productActions.getProductById(id), // La función de consulta
    });
  };

  return prefetchProduct;
};
