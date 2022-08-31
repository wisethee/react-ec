import { useContext } from 'react';
import { createUseStyles } from 'react-jss';
import AppCheckoutItem from '../../core/components/checkout-item/checkout-item.component';
import { AppCartContext } from '../../core/contexts/cart.context';
import AppContainer from '../../core/layout/container/container.component';
import { Theme } from '../../core/types/theme.type';

const useCartStyles = createUseStyles(
  ({ spacing, colors, typography }: Theme) => ({
    cartInner: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      padding: [spacing[16], spacing[0]],
    },
    cartHeader: {
      display: 'flex',
      width: '100%',
      marginBottom: spacing[8],
    },
    cartHeaderBlock: {
      width: '20%',
      fontSize: typography.fontSize.labelLarge,
      fontWeight: typography.fontWeight.medium,
      color: colors.grey[700],
    },
    cartTotalPrice: {
      display: 'flex',
      justifyContent: 'end',
      fontSize: typography.fontSize.titleLarge,
      fontWeight: typography.fontWeight.medium,
      color: colors.grey[700],
    },
  })
);

const AppCart = () => {
  const { cartInner, cartHeader, cartHeaderBlock, cartTotalPrice } =
    useCartStyles();
  const { cartItems, cartTotal } = useContext(AppCartContext);

  return (
    <AppContainer fluid={false}>
      <div className={cartInner}>
        <div className={cartHeader}>
          <div className={cartHeaderBlock}>
            <span>Product</span>
          </div>
          <div className={cartHeaderBlock}>
            <span>Description</span>
          </div>
          <div className={cartHeaderBlock}>
            <span>Quantity</span>
          </div>
          <div className={cartHeaderBlock}>
            <span>Price</span>
          </div>
          <div className={cartHeaderBlock}>
            <span>Remove</span>
          </div>
        </div>
        {cartItems.map((cartItem) => {
          return (
            <div key={cartItem.id}>
              <AppCheckoutItem cartItem={cartItem} />
            </div>
          );
        })}
        <div className={cartTotalPrice}>
          <span>Total: {cartTotal}</span>
        </div>
      </div>
    </AppContainer>
  );
};

export default AppCart;
