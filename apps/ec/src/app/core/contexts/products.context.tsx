import { createContext, useState } from 'react';
import PRODUCTS from '../../shop-data.json';
import { Product } from '../types/product.type';

type AppProductsProviderProps = {
  children: React.ReactNode;
};

type ProductsContext = {
  products: Product[];
};

export const AppProductsContext = createContext<ProductsContext>({
  products: [],
});

export const AppProductsProvider = ({ children }: AppProductsProviderProps) => {
  const [products, useProducts] = useState(PRODUCTS);

  const value = { products };

  return (
    <AppProductsContext.Provider value={value}>
      {children}
    </AppProductsContext.Provider>
  );
};
