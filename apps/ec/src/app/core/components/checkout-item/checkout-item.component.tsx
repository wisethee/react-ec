import { useContext } from 'react';
import { createUseStyles } from 'react-jss';
import { AppCartContext } from '../../contexts/cart.context';
import { CartItem } from '../../types/cart-item.type';
import { Theme } from '../../types/theme.type';

import { ReactComponent as IconLeft } from '../../../../assets/icons/icon-angle-left.svg';
import { ReactComponent as IconRight } from '../../../../assets/icons/icon-angle-right.svg';
import { ReactComponent as IconClose } from '../../../../assets/icons/icon-window-close.svg';

type CheckoutItemProps = {
  cartItem: CartItem;
};

const useCheckoutItemStyles = createUseStyles(
  ({ spacing, typography, colors }: Theme) => ({
    checkoutItemContainer: {
      display: 'flex',
    },
    checkoutItemBlock: {
      display: 'flex',
      alignItems: 'center',
      width: '20%',
      fontSize: typography.fontSize.labelLarge,
      color: colors.grey[700],
      marginBottom: spacing[8],
    },
    checkoutItemImage: {
      width: '72px',
      height: 'auto',
      marginRight: spacing[4],
    },
    checkoutItemIcon: {
      fill: colors.grey[700],
      cursor: 'pointer',
      width: '16px',
      height: '16px',
    },
  })
);

const AppCheckoutItem = ({ cartItem }: CheckoutItemProps) => {
  const { imageUrl, name, price, quantity } = cartItem;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(AppCartContext);
  const {
    checkoutItemContainer,
    checkoutItemImage,
    checkoutItemBlock,
    checkoutItemIcon,
  } = useCheckoutItemStyles();

  return (
    <div className={checkoutItemContainer}>
      <div className={checkoutItemBlock}>
        <img src={imageUrl} alt={`${name}`} className={checkoutItemImage} />
      </div>
      <div className={checkoutItemBlock}>
        <span>{name}</span>
      </div>
      <div className={checkoutItemBlock}>
        <IconLeft
          className={checkoutItemIcon}
          onClick={() => removeItemFromCart(cartItem)}
        />
        <span style={{ minWidth: '24px', textAlign: 'center' }}>
          {quantity}
        </span>
        <IconRight
          className={checkoutItemIcon}
          onClick={() => addItemToCart(cartItem)}
        />
      </div>
      <div className={checkoutItemBlock}>
        <span>${price}</span>
      </div>
      <div className={checkoutItemBlock}>
        <IconClose
          className={checkoutItemIcon}
          onClick={() => {
            clearItemFromCart(cartItem);
          }}
        />
      </div>
    </div>
  );
};

export default AppCheckoutItem;
