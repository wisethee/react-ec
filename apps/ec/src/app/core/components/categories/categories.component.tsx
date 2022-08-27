// JSS
import { createUseStyles } from 'react-jss';
import { Theme } from '../../types/theme.type';

// Types
import { Category } from '../../types/category.type';

// Components
import AppCategoryItem from '../category-item/category-item.component';

// Component Styles
const useCategoriesStyles = createUseStyles(({ spacing }: Theme) => ({
  categories: {
    display: 'grid',
    gridTemplateRows: 'repeat(2,minmax(0,1fr))',
    gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
    width: '100%',
    gap: spacing[6],
  },
}));

// @Component
const AppCategories = () => {
  const categoryList: Category[] = [
    { id: '01', title: 'jackets', imageUrl: '' },
    { id: '02', title: 'sneakers', imageUrl: '' },
    { id: '03', title: 'womans', imageUrl: '' },
    { id: '04', title: 'mens', imageUrl: '' },
  ];

  const { categories } = useCategoriesStyles();

  return (
    <div className={categories}>
      {categoryList.map((category) => (
        <AppCategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default AppCategories;
