import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// Styles
import { useCartDropdownStyles } from './cart-dropdown.styles';

// Contexts
import { AppCartContext } from '../../contexts/cart.context';

// Components
import AppButton from '../button/button.component';
import AppCartItem from '../cart-item/cart-item.component';

// @Component
const AppCartDropdown = () => {
  const { cartDropdown, cartInner, cartDropdownFooter } =
    useCartDropdownStyles();
  const { cartItems } = useContext(AppCartContext);

  const navigate = useNavigate();
  const goToCart = () => navigate('/cart');

  return (
    <div className={cartDropdown}>
      <div className={cartInner}>
        {cartItems?.map(
          (cartItem) =>
            cartItem && <AppCartItem key={cartItem.id} cartItem={cartItem} />
        )}
        {cartItems.length === 0 && <span>No items in the cart!</span>}

        <div className={cartDropdownFooter}>
          <AppButton onClick={goToCart}>Go To Cart</AppButton>
        </div>
      </div>
    </div>
  );
};

export default AppCartDropdown;
