import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import AppCategoryPreview from '../../core/components/category-preview/category-preview.component';
import { categoriesSelector } from '../../core/store/reducers/categories/categories.selector';
import { Theme } from '../../core/types/theme.type';

const useCategoriesPreviewStyles = createUseStyles((theme: Theme) => ({
  shop: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
}));

const AppCategoriesPreview = () => {
  const categoriesMap = useSelector(categoriesSelector);

  const { shop } = useCategoriesPreviewStyles();

  return (
    <div className={shop}>
      {categoriesMap &&
        Object.keys(categoriesMap).map((title) => (
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
