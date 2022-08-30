import { useContext } from 'react';
import { createUseStyles } from 'react-jss';
import AppProduct from '../../core/components/product/product.component';
import { AppProductsContext } from '../../core/contexts/products.context';
import AppContainer from '../../core/layout/container/container.component';
import { Product } from '../../core/types/product.type';
import { Theme } from '../../core/types/theme.type';

const useShopStyles = createUseStyles(
  ({ spacing, colors, typography }: Theme) => ({
    inner: {
      padding: [spacing[16], spacing[0]],
      '& h2': {
        fontSize: typography.fontSize.displaySmall,
        lineHeight: typography.leading.displaySmall,
        color: colors.grey[700],
        marginBottom: spacing[4],
        textAlign: 'center',
      },
    },
    shop: {
      display: 'flex',
      flexWrap: 'wrap',
    },
  })
);

const AppShop = () => {
  const { products } = useContext(AppProductsContext);
  const { shop, inner } = useShopStyles();

  return (
    <AppContainer>
      <div className={inner}>
        <h2>Shop</h2>
        <div className={shop}>
          {products.map((product: Product) => (
            <AppProduct key={product.id} product={product}></AppProduct>
          ))}
        </div>
      </div>
    </AppContainer>
  );
};

export default AppShop;
