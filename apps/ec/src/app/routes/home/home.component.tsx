import { Fragment } from 'react';

// Layout
import AppContainer from '../../core/layout/container/container.component';
import AppHero from '../../core/layout/hero/hero.component';

// Components
import AppDirectory from '../../core/components/directory/directory.component';

// Types
import { ProductCategory } from '../../core/types/product-category.type';

// @Component
const AppHome = () => {
  const productCategories: ProductCategory[] = [
    { id: '01', title: 'jackets', imageUrl: '' },
    { id: '02', title: 'sneakers', imageUrl: '' },
    { id: '03', title: 'womans', imageUrl: '' },
    { id: '04', title: 'mens', imageUrl: '' },
  ];

  return (
    <Fragment>
      <AppHero />
      <AppContainer fluid={false}>
        <AppDirectory productCategories={productCategories} />
      </AppContainer>
    </Fragment>
  );
};

export default AppHome;
