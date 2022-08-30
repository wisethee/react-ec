import { createContext, useState } from 'react';

// Types
import { Product } from '../types/product.type';

// Dummy data
import PRODUCTS from '../../shop-data.json';

type ProductsContext = {
  products: Product[];
};

type AppProductsProviderProps = {
  children: React.ReactNode;
};

// @Context
export const AppProductsContext = createContext<ProductsContext>({
  products: [],
});

// @Provider
export const AppProductsProvider = ({ children }: AppProductsProviderProps) => {
  const [products, useProducts] = useState(PRODUCTS);
  const value = { products };

  return (
    <AppProductsContext.Provider value={value}>
      {children}
    </AppProductsContext.Provider>
  );
};
