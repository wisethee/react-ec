import { CategoriesMap } from '../../types/category-map.type';
import { Theme } from '../../types/theme.type';
import AppProduct from '../product/product.component';
import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';

type CategoryPreviewProps = {
  title: string;
  products: CategoriesMap[];
};

const useShopStyles = createUseStyles(
  ({ spacing, colors, typography }: Theme) => ({
    category: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      marginBottom: spacing[16],
    },
    categoryInner: {
      display: 'flex',
      width: '100%',
      flexWrap: 'wrap',
    },
    categoryTitle: {
      fontSize: typography.fontSize.displaySmall,
      lineHeight: typography.leading.displaySmall,
      marginBottom: spacing[2],
      textTransform: 'capitalize',
      textAlign: 'start',
      paddingLeft: spacing[3],
      '& a': {
        textDecoration: 'none',
        color: colors.grey[700],
      },
      '& a:hover': {
        color: colors.grey[500],
      },
    },
  })
);

const AppCategoryPreview = ({ title, products }: CategoryPreviewProps) => {
  const { category, categoryInner, categoryTitle } = useShopStyles();
  return (
    <div className={category}>
      <h2 className={categoryTitle}>
        <Link to={title}>
          <span>{title}</span>
        </Link>
      </h2>
      <div className={categoryInner}>
        {products
          .filter((val, idx) => idx < 5)
          .map((product) => (
            <AppProduct key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default AppCategoryPreview;
