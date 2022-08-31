import { useContext } from 'react';
import { createUseStyles } from 'react-jss';
import { AppCartContext } from '../../contexts/cart.context';
import { CategoriesMap } from '../../types/category-map.type';
import { Theme } from '../../types/theme.type';
import AppButton from '../button/button.component';

const useProductStyles = createUseStyles(
  ({ spacing, typography, colors, screens }: Theme) => ({
    cardContainer: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '420px',
      padding: [spacing[0]],
      [`${screens['@sm']}`]: { width: '50%', padding: [spacing[1]] },
      [`${screens['@md']}`]: { width: '33.33%', padding: [spacing[2]] },
      [`${screens['@lg']}`]: { width: '25%', padding: [spacing[3]] },
      [`${screens['@xl']}`]: { width: '20%', padding: [spacing[3]] },
    },
    cardFooter: {
      display: 'flex',
      placeContent: 'space-between',
      padding: [spacing[2], spacing[0]],
    },
    cardText: {
      fontSize: typography.fontSize.titleSmall,
      fontWeight: typography.fontWeight.medium,
      color: colors.grey[700],
    },
    cardButton: {
      position: 'absolute',
      bottom: '90px',
      left: '50%',
      transform: 'translateX(-50%)',
    },
    cardImage: { height: '360px', width: 'auto' },
  })
);

const AppProduct = ({ product }: { product: CategoriesMap }) => {
  const { cardContainer, cardFooter, cardText, cardButton, cardImage } =
    useProductStyles();
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(AppCartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className={cardContainer}>
      <img src={imageUrl} alt={`${name}`} className={cardImage} />
      <div className={cardFooter}>
        <span className={cardText}>{name}</span>
        <span className={cardText}>{`£${price}`}</span>
      </div>
      <AppButton
        modifier={cardButton}
        color="inverted"
        onClick={addProductToCart}
      >
        Add to cart
      </AppButton>
    </div>
  );
};

export default AppProduct;
