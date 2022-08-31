import { useContext } from 'react';
import { createUseStyles } from 'react-jss';
import AppProduct from '../../core/components/product/product.component';
import { AppCategoriesContext } from '../../core/contexts/categories.context';
import AppContainer from '../../core/layout/container/container.component';
import { CategoriesMap } from '../../core/types/category-map.type';
import { Theme } from '../../core/types/theme.type';

const useShopStyles = createUseStyles(
  ({ spacing, colors, typography }: Theme) => ({
    inner: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      padding: [spacing[16], spacing[0]],
    },
    h2: {
      fontSize: typography.fontSize.displaySmall,
      lineHeight: typography.leading.displaySmall,
      color: colors.grey[700],
      marginBottom: spacing[2],
      textAlign: 'center',
    },
    shop: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
    },
    category: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      marginBottom: spacing[16],
    },
    categoryInner: {
      display: 'flex',
      width: '100%',
      flexWrap: 'wrap',
    },
    categoryTitle: {
      fontSize: typography.fontSize.displaySmall,
      lineHeight: typography.leading.displaySmall,
      color: colors.grey[700],
      marginBottom: spacing[2],
      textTransform: 'capitalize',
      textAlign: 'start',
      paddingLeft: spacing[3],
    },
    span: {
      display: 'flex',
      maxWidth: '480px',
      fontSize: typography.fontSize.bodyMedium,
      color: colors.grey[500],
      marginBottom: spacing[12],
      textAlign: 'center',
    },
  })
);

const AppShop = () => {
  const { categoriesMap } = useContext(AppCategoriesContext);
  const { shop, inner, span, category, categoryInner, categoryTitle, h2 } =
    useShopStyles();

  console.log(categoriesMap);

  return (
    <AppContainer>
      <div className={inner}>
        <h2 className={h2}>Shop</h2>
        <span className={span}>
          Nam liber tempor cum soluta nobis eleifend option congue nihil
          imperdiet doming id quod mazim placerat facer possim assum.
        </span>
        <div className={shop}>
          {Object.keys(categoriesMap).map((title) => (
            <div key={title} className={category}>
              <h2 className={categoryTitle}>{title}</h2>
              <div className={categoryInner}>
                {categoriesMap[title].map((product: CategoriesMap) => (
                  <AppProduct key={product.id} product={product}></AppProduct>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppContainer>
  );
};

export default AppShop;
