import { createUseStyles } from 'react-jss';
import { Product } from '../../types/product.type';
import { Theme } from '../../types/theme.type';
import AppButton from '../button/button.component';

const useProductStyles = createUseStyles((theme: Theme) => ({
  cardContainer: {},
  cardFooter: {},
  cardName: {},
  cardPrice: {},
}));

const AppProduct = ({ product }: { product: Product }) => {
  const { cardContainer, cardFooter, cardName, cardPrice } = useProductStyles();
  const { name, price, imageUrl } = product;

  return (
    <div className={cardContainer}>
      <img src={imageUrl} alt={`${name}`} />
      <div className={cardFooter}>
        <span className={cardName}>{name}</span>
        <span className={cardPrice}>{price}</span>
      </div>
      <AppButton>Add to cart</AppButton>
    </div>
  );
};

export default AppProduct;
