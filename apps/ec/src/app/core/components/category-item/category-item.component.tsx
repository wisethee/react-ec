// JSS
import { Category } from '../../types/category.type';
import { Theme } from '../../types/theme.type';

// Components
import { createUseStyles } from 'react-jss';
import classNames from '../../utils/class-names.utils';

// Component Styles
const useCategoryItem = createUseStyles(({ colors, spacing }: Theme) => ({
  categoryItem: {
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
type AppCategoryItemProps = { category: Category };

// @Component
const AppCategoryItem = ({ category }: AppCategoryItemProps) => {
  const { id, title } = category;
  const { categoryItem, id3, id4 } = useCategoryItem();

  return (
    <div
      className={classNames(
        categoryItem,
        id === '03' && id3,
        id === '04' && id4
      )}
    >
      {title}
    </div>
  );
};

export default AppCategoryItem;
