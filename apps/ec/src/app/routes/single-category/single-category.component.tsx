import { useContext, useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useParams } from 'react-router-dom';
import AppProduct from '../../core/components/product/product.component';
import { AppCategoriesContext } from '../../core/contexts/categories.context';
import { CategoriesMap } from '../../core/types/category-map.type';
import { Theme } from '../../core/types/theme.type';

const useSingleCategoryStyles = createUseStyles((theme: Theme) => ({
  singleCategoryContainer: {
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap',
  },
}));

const AppSingleCategory = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(AppCategoriesContext);
  const [products, setProducts] = useState(categoriesMap);
  const { singleCategoryContainer } = useSingleCategoryStyles();

  useEffect(() => {
    category && setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className={singleCategoryContainer}>
      {products &&
        products.map((product: CategoriesMap) => (
          <AppProduct key={product.id} product={product} />
        ))}
    </div>
  );
};

export default AppSingleCategory;
