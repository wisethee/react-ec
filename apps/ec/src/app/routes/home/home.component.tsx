import { Fragment } from 'react';

// Layout
import AppContainer from '../../core/layout/container/container.component';
import AppHero from '../../core/layout/hero/hero.component';

// Components
import AppDirectory from '../../core/components/directory/directory.component';

// Types
import { Category } from '../../core/types/category.type';

// @Component
const AppHome = () => {
  const categoryList: Category[] = [
    { id: '01', title: 'jackets', imageUrl: '' },
    { id: '02', title: 'sneakers', imageUrl: '' },
    { id: '03', title: 'womans', imageUrl: '' },
    { id: '04', title: 'mens', imageUrl: '' },
  ];

  return (
    <Fragment>
      <AppHero />
      <AppContainer fluid={false}>
        <AppDirectory categoryList={categoryList} />
      </AppContainer>
    </Fragment>
  );
};

export default AppHome;
