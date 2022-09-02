import { useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AppContainer from '../../core/layout/container/container.component';
import { categoriesAction } from '../../core/store/reducers/categories/categories.reducer';
import { Theme } from '../../core/types/theme.type';
import { getCategoriesAndDocument } from '../../core/utils/firebase/firebase.utils';
import AppCategoriesPreview from '../categories-preview/categories-preview.component';
import AppSingleCategory from '../single-category/single-category.component';

const useShopStyles = createUseStyles(
  ({ spacing, colors, typography }: Theme) => ({
    inner: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      padding: [spacing[16], spacing[0]],
    },
    h2: {
      fontSize: typography.fontSize.displaySmall,
      lineHeight: typography.leading.displaySmall,
      color: colors.grey[700],
      marginBottom: spacing[2],
      textAlign: 'center',
    },
    span: {
      display: 'flex',
      maxWidth: '480px',
      fontSize: typography.fontSize.bodyMedium,
      color: colors.grey[500],
      marginBottom: spacing[12],
      textAlign: 'center',
    },
  })
);

const AppShop = () => {
  const dispatch = useDispatch();
  const { inner, span, h2 } = useShopStyles();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocument();
      dispatch(categoriesAction.setCategoriesMap(categoryMap));
    };

    getCategoriesMap();
  }, [dispatch]);

  return (
    <AppContainer>
      <div className={inner}>
        <h2 className={h2}>Shop</h2>
        <span className={span}>
          Nam liber tempor cum soluta nobis eleifend option congue nihil
          imperdiet doming id quod mazim placerat facer possim assum.
        </span>
        <Routes>
          <Route index element={<AppCategoriesPreview />} />
          <Route path=":category" element={<AppSingleCategory />} />
        </Routes>
      </div>
    </AppContainer>
  );
};

export default AppShop;
