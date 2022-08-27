// JSS
import { createUseStyles } from 'react-jss';
import { Theme } from '../../types/theme.type';

// Components
import AppCategory from '../category/category.component';

// Types
import { ProductCategory } from '../../types/product-category.type';

// Component Types
type AppDirectoryProps = {
  productCategories: ProductCategory[];
};

// Component Styles
const useDirectoryStyles = createUseStyles(({ spacing }: Theme) => ({
  directory: {
    display: 'grid',
    gridTemplateRows: 'repeat(2,minmax(0,1fr))',
    gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
    width: '100%',
    gap: spacing[6],
  },
}));

// @Component
const AppDirectory = ({ productCategories }: AppDirectoryProps) => {
  const { directory } = useDirectoryStyles();

  return (
    <div className={directory}>
      {productCategories.map((productCategory) => (
        <AppCategory
          key={productCategory.id}
          productCategory={productCategory}
        />
      ))}
    </div>
  );
};

export default AppDirectory;
