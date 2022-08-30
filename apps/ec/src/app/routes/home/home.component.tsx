import { Fragment } from 'react';

// JSS
import { createUseStyles } from 'react-jss';
import { Theme } from '../../core/types/theme.type';

// Layout
import AppContainer from '../../core/layout/container/container.component';
import AppHero from '../../core/layout/hero/hero.component';

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
      marginBottom: spacing[16],
      textAlign: 'center',
    },
  })
);

// @Component
const AppHome = () => {
  const productCategories: ProductCategory[] = [
    {
      id: 1,
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    },
    {
      id: 2,
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    },
    {
      id: 3,
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    },
    {
      id: 4,
      title: 'mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    },
  ];

  const { inner, span } = useHomeStyles();

  return (
    <Fragment>
      {/* <AppHero /> */}
      <AppContainer fluid={false}>
        <div className={inner}>
          <h2>Top Categories</h2>
          <span className={span}>
            Nam liber tempor cum soluta nobis eleifend option congue nihil
            imperdiet doming id quod mazim placerat facer possim assum.
          </span>
          <AppDirectory productCategories={productCategories} />
        </div>
      </AppContainer>
    </Fragment>
  );
};

export default AppHome;
