import { Fragment, useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import AppProduct from '../../core/components/product/product.component';
import { categoriesSelector } from '../../core/store/reducers/categories/categories.selector';
import { CategoriesMap } from '../../core/types/category-map.type';
import { Theme } from '../../core/types/theme.type';

const useSingleCategoryStyles = createUseStyles(
  ({ typography, spacing, colors }: Theme) => ({
    inner: {
      display: 'flex',
      width: '100%',
    },
    singleCategoryContainer: {
      display: 'flex',
      width: '100%',
      flexWrap: 'wrap',
    },
    categoryTitle: {
      fontSize: typography.fontSize.displaySmall,
      lineHeight: typography.leading.displaySmall,
      marginBottom: spacing[2],
      textTransform: 'capitalize',
      textAlign: 'start',
      paddingLeft: spacing[3],
      color: colors.grey[700],
    },
  })
);

const AppSingleCategory = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(categoriesSelector);
  const [products, setProducts] = useState([]);
  const { singleCategoryContainer, categoryTitle, inner } =
    useSingleCategoryStyles();

  useEffect(() => {
    if (category) {
      setProducts(categoriesMap[category]);
    }
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <div className={inner}>
        <h2 className={categoryTitle}>
          <span>{category}</span>
        </h2>
      </div>

      <div className={singleCategoryContainer}>
        {products &&
          products.map((product: CategoriesMap) => (
            <AppProduct key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default AppSingleCategory;
