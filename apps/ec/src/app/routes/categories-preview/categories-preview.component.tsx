import { useContext } from 'react';
import { createUseStyles } from 'react-jss';
import AppCategoryPreview from '../../core/components/category-preview/category-preview.component';
import { AppCategoriesContext } from '../../core/contexts/categories.context';
import { Theme } from '../../core/types/theme.type';

const useCategoriesPreviewStyles = createUseStyles((theme: Theme) => ({
  shop: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
}));

const AppCategoriesPreview = () => {
  const { categoriesMap } = useContext(AppCategoriesContext);
  const { shop } = useCategoriesPreviewStyles();

  return (
    <div className={shop}>
      {Object.keys(categoriesMap).map((title) => (
        <AppCategoryPreview
          key={title}
          title={title}
          products={categoriesMap[title]}
        />
      ))}
    </div>
  );
};

export default AppCategoriesPreview;
