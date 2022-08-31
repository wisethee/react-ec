// JSS
import { createUseStyles } from 'react-jss';
import { Theme } from '../../types/theme.type';

// Components
import AppCategory from '../category/category.component';

// Types
import { ProductCategory } from '../../types/product-category.type';

const productCategories: ProductCategory[] = [
  {
    id: 1,
    title: 'jackets',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    route: 'shop/jackets',
  },
  {
    id: 2,
    title: 'sneakers',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    route: 'shop/sneakers',
  },
  {
    id: 3,
    title: 'womens',
    imageUrl:
      'https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1530&q=80',
    route: 'shop/womens',
  },
  {
    id: 4,
    title: 'mens',
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    route: 'shop/mens',
  },
];

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
const AppDirectory = () => {
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
