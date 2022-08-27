import { Fragment } from 'react';

// Layout
import AppContainer from '../../core/layout/container/container.component';
import AppHero from '../../core/layout/hero/hero.component';

const AppHome = () => {
  return (
    <Fragment>
      <AppHero />
      <AppContainer>AppHome works!</AppContainer>
    </Fragment>
  );
};

export default AppHome;
