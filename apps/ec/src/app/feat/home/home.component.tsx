import { Fragment } from 'react';

// Layout
import AppContainer from '../../core/layout/container/container.component';
import AppHero from '../../core/layout/hero/hero.component';

// Components
import AppCategories from '../../core/components/categories/categories.component';

// @Component
const AppHome = () => {
  return (
    <Fragment>
      <AppHero />
      <AppContainer fluid={false}>
        <AppCategories />
      </AppContainer>
    </Fragment>
  );
};

export default AppHome;
