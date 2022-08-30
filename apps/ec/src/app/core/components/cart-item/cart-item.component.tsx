import { createUseStyles } from 'react-jss';
import { CartItem } from '../../types/cart-item.type';
import { Theme } from '../../types/theme.type';

const useCartItemStyles = createUseStyles(
  ({ spacing, typography, colors }: Theme) => ({
    cartItemContainer: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: spacing[4],
    },
    cartItemInner: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
    },
    cartItemImage: {
      width: '72px',
      height: 'auto',
      marginRight: spacing[4],
    },
    cartItemName: {
      fontSize: typography.fontSize.titleLarge,
      fontWeight: typography.fontWeight.medium,
      color: colors.grey[700],
    },
    cartItemText: {
      fontSize: typography.fontSize.bodyLarge,
      color: colors.grey[500],
    },
  })
);

type CartItemProps = {
  cartItem: CartItem;
};

const AppCartItem = ({ cartItem }: CartItemProps) => {
  const { name, quantity, imageUrl, price } = cartItem;
  const {
    cartItemContainer,
    cartItemImage,
    cartItemName,
    cartItemText,
    cartItemInner,
  } = useCartItemStyles();

  return (
    <div className={cartItemContainer}>
      <img src={imageUrl} alt={`${name}`} className={cartItemImage} />
      <div className={cartItemInner}>
        <span className={cartItemName}>{name}</span>
        <span className={cartItemText}>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default AppCartItem;
