// JSS
import { createUseStyles } from 'react-jss';
import { Theme } from '../../types/theme.type';
import classNames from '../../utils/class-names/class-names.utils';

// Types
import { ProductCategory } from '../../types/product-category.type';

// Component Styles
const useCategoryStyles = createUseStyles(
  ({ colors, spacing, typography }: Theme) => ({
    category: {
      width: '100%',
      height: '100%',
      minHeight: '240px',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      padding: spacing[6],
    },
    id3: {
      gridRow: 'span 2/span 2',
    },
    id4: {
      gridColumn: 'span 2/span 2',
    },
    heading: {
      fontSize: typography.fontSize.headlineSmall,
      fontWeight: typography.fontWeight.medium,
      color: colors.white,
      textTransform: 'capitalize',
    },
  })
);

// Component Types
type AppCategoryProps = { productCategory: ProductCategory };

// @Component
const AppCategory = ({ productCategory }: AppCategoryProps) => {
  const { id, title, imageUrl } = productCategory;
  const { category, id3, id4, heading } = useCategoryStyles();

  return (
    <div
      className={classNames(category, id === 3 && id3, id === 4 && id4)}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <span className={heading}>{title}</span>
    </div>
  );
};

export default AppCategory;
