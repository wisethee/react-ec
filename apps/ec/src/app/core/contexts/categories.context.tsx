import { createContext, useEffect, useState } from 'react';

// Types
import { getCategoriesAndDocument } from '../utils/firebase/firebase.utils';

type CategoriesContext = {
  categoriesMap: any;
};

type AppProductsProviderProps = {
  children: React.ReactNode;
};

// @Context
export const AppCategoriesContext = createContext<CategoriesContext>({
  categoriesMap: null,
});

// @Provider
export const AppCategoriesProvider = ({
  children,
}: AppProductsProviderProps) => {
  const [categoriesMap, setCategoriesMap] = useState([]);
  const value = { categoriesMap };

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocument();
      setCategoriesMap(categoryMap);
    };

    getCategoriesMap();
  }, []);

  return (
    <AppCategoriesContext.Provider value={value}>
      {children}
    </AppCategoriesContext.Provider>
  );
};
