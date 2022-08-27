import { Fragment } from 'react';

// Layout
import AppContainer from '../../core/layout/container/container.component';
import AppHero from '../../core/layout/hero/hero.component';

// Components
import AppDirectory from '../../core/components/directory/directory.component';

// @Component
const AppHome = () => {
  return (
    <Fragment>
      <AppHero />
      <AppContainer fluid={false}>
        <AppDirectory />
      </AppContainer>
    </Fragment>
  );
};

export default AppHome;
