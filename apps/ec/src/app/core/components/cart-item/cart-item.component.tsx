import { CartItem } from '../../types/cart-item.type';

type CartItemProps = {
  cartItem: CartItem;
};

const AppCartItem = ({ cartItem }: CartItemProps) => {
  const { name, quantity } = cartItem;
  return (
    <div>
      <span>{name}</span>
      <span>{quantity}</span>
    </div>
  );
};

export default AppCartItem;
