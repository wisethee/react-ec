// JSS
import { createUseStyles } from 'react-jss';
import { Theme } from '../../types/theme.type';
import classNames from '../../utils/class-names/class-names.utils';

// Types
import { ProductCategory } from '../../types/product-category.type';

// Component Styles
const useCategoryStyles = createUseStyles(({ colors }: Theme) => ({
  category: {
    width: '100%',
    height: '100%',
    minHeight: '240px',
    backgroundColor: colors.grey[50],
  },
  id3: {
    gridRow: 'span 2/span 2',
  },
  id4: {
    gridColumn: 'span 2/span 2',
  },
}));

// Component Types
type AppCategoryProps = { productCategory: ProductCategory };

// @Component
const AppCategory = ({ productCategory }: AppCategoryProps) => {
  const { id, title } = productCategory;
  const { category, id3, id4 } = useCategoryStyles();

  return (
    <div
      className={classNames(category, id === '03' && id3, id === '04' && id4)}
    >
      {title}
    </div>
  );
};

export default AppCategory;
