// Styles
import { useCartItemStyles } from './cart-item.styles';

// Types
import { CartItem } from '../../types/cart-item.type';

// Component Types
type CartItemProps = {
  cartItem: CartItem;
};

// @Component
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
