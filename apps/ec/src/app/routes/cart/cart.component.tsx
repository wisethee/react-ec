import { useContext } from 'react';
import { AppCartContext } from '../../core/contexts/cart.context';

const AppCart = () => {
  const { cartItems, addItemToCart, removeItemFromCart } =
    useContext(AppCartContext);

  return (
    <div>
      {cartItems.map((cartItem) => {
        const { id, imageUrl, name, price, quantity } = cartItem;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <span>{quantity}</span>
            <br />
            <span onClick={() => addItemToCart(cartItem)}>+</span>
            <br />
            <span onClick={() => removeItemFromCart(cartItem)}>-</span>
          </div>
        );
      })}
    </div>
  );
};

export default AppCart;
