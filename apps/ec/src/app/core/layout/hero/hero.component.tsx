// JSS
import { createUseStyles } from 'react-jss';
import { Theme } from '../../types/theme.type';

// Layout
import AppContainer from '../container/container.component';

// Component Styles
const useHeroStyles = createUseStyles(
  ({ screens, colors, spacing }: Theme) => ({
    hero: {
      display: 'flex',
      width: '100%',
      minHeight: '560px',
      marginBottom: spacing[12],
      [`${screens['@sm']}`]: {
        minHeight: '600px',
      },
      [`${screens['@md']}`]: {
        minHeight: '640px',
      },
      [`${screens['@lg']}`]: {
        minHeight: '680px',
      },
      [`${screens['@xl']}`]: {
        minHeight: '720px',
      },
    },
    inner: {
      display: 'flex',
      width: '100%',
      height: '100%',
      backgroundColor: colors.grey[50],
      padding: spacing[4],
      [`${screens['@sm']}`]: {
        padding: spacing[8],
      },
      [`${screens['@md']}`]: {
        padding: spacing[12],
      },
      [`${screens['@lg']}`]: {
        padding: spacing[16],
      },
      [`${screens['@xl']}`]: {
        padding: spacing[24],
      },
    },
  })
);

// @Component
const AppHero = () => {
  const { hero, inner } = useHeroStyles();

  return (
    <section className={hero}>
      <AppContainer>
        <div className={inner}>AppHero works!</div>
      </AppContainer>
    </section>
  );
};

export default AppHero;
