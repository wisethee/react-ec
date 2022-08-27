// JSS
import { createUseStyles } from 'react-jss';
import { Theme } from '../../types/theme.type';

// Components
import AppCategory from '../category/category.component';

// Types
import { Category } from '../../types/category.type';

type AppDirectoryProps = {
  categoryList: Category[];
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
const AppDirectory = ({ categoryList }: AppDirectoryProps) => {
  const { directory } = useDirectoryStyles();

  return (
    <div className={directory}>
      {categoryList.map((categoryListItem) => (
        <AppCategory
          key={categoryListItem.id}
          categoryItem={categoryListItem}
        />
      ))}
    </div>
  );
};

export default AppDirectory;
