// JSS
import { createUseStyles } from 'react-jss';
import { Theme } from '../../types/theme.type';

// Types
import { Category } from '../../types/category.type';

// Components
import AppCategory from '../category/category.component';

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
  const categoryList: Category[] = [
    { id: '01', title: 'jackets', imageUrl: '' },
    { id: '02', title: 'sneakers', imageUrl: '' },
    { id: '03', title: 'womans', imageUrl: '' },
    { id: '04', title: 'mens', imageUrl: '' },
  ];

  const { directory } = useDirectoryStyles();

  return (
    <div className={directory}>
      {categoryList.map((categoryItem) => (
        <AppCategory key={categoryItem.id} categoryItem={categoryItem} />
      ))}
    </div>
  );
};

export default AppDirectory;
