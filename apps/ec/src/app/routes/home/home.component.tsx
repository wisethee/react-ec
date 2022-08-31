import { Fragment } from 'react';

// JSS
import { createUseStyles } from 'react-jss';
import { Theme } from '../../core/types/theme.type';

// Layout
import AppContainer from '../../core/layout/container/container.component';
// import AppHero from '../../core/layout/hero/hero.component';

// Components
import AppDirectory from '../../core/components/directory/directory.component';

// Types
import { ProductCategory } from '../../core/types/product-category.type';

// Component Styles
const useHomeStyles = createUseStyles(
  ({ colors, typography, spacing }: Theme) => ({
    inner: {
      width: '100%',
      margin: [spacing[16], spacing[0], spacing[24]],
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& h2': {
        fontSize: typography.fontSize.displaySmall,
        lineHeight: typography.leading.displaySmall,
        color: colors.grey[700],
        marginBottom: spacing[2],
        textAlign: 'center',
      },
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

// @Component
const AppHome = () => {
  const { inner, span } = useHomeStyles();

  return (
    <Fragment>
      {/* <AppHero /> */}
      <AppContainer fluid={true}>
        <div className={inner}>
          <h2>Top Categories</h2>
          <span className={span}>
            Nam liber tempor cum soluta nobis eleifend option congue nihil
            imperdiet doming id quod mazim placerat facer possim assum.
          </span>
          <AppDirectory />
        </div>
      </AppContainer>
    </Fragment>
  );
};

export default AppHome;
