import { useContext } from 'react';
import AppProduct from '../../core/components/product/product.component';
import { AppProductsContext } from '../../core/contexts/products.context';
import { Product } from '../../core/types/product.type';

const AppShop = () => {
  const { products } = useContext(AppProductsContext);

  return (
    <div>
      {products.map((product: Product) => (
        <AppProduct key={product.id} product={product}></AppProduct>
      ))}
    </div>
  );
};

export default AppShop;
