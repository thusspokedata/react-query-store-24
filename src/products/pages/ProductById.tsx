import { useParams } from 'react-router-dom';
import { ProductCard, useProduct } from '..';

export const ProductById = () => {
  const { id } = useParams();

  const { isLoading, product } = useProduct({ id: +id! });

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Producto:</h1>
      {isLoading && <div>Cargando...</div>}
      {product && <ProductCard product={product} fullDescription />}
    </div>
  );
};
