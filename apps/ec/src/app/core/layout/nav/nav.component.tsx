import { Link } from 'react-router-dom';

// Layout
import AppContainer from '../container/container.component';

// Jss
import { createUseStyles } from 'react-jss';
import { Theme } from '../../types/theme.type';

// Assets -> Icons
import { ReactComponent as IconBars } from '../../../../assets/icons/icon-bars.svg';
import { ReactComponent as IconLogo } from '../../../../assets/icons/icon-logo.svg';
import { ReactComponent as IconUser } from '../../../../assets/icons/icon-user.svg';
import { ReactComponent as IconCart } from '../../../../assets/icons/icon-cart.svg';

// Component Styles
const useNavStyles = createUseStyles(({ colors, spacing }: Theme) => ({
  nav: {
    display: 'flex',
    alignItems: 'center',
    height: spacing[24],
    width: '100%',
  },
  navStart: {
    display: 'flex',
    marginRight: 'auto',
  },
  navCenter: {
    display: 'flex',
  },
  navEnd: {
    display: 'flex',
    marginLeft: 'auto',
  },
  link: {
    display: 'inline-flex',
    '&:not(:only-child):last-child': {
      marginLeft: spacing[6],
    },
    '& svg': {
      fill: colors.grey[700],
    },
  },
}));

// @Component
const AppNavStart = () => {
  const { navStart, link } = useNavStyles();
  return (
    <div className={navStart}>
      <Link to="/menu" className={link}>
        <IconBars />
      </Link>
    </div>
  );
};

// @Component
const AppNavCenter = () => {
  const { navCenter, link } = useNavStyles();
  return (
    <div className={navCenter}>
      <Link to="/" className={link}>
        <IconLogo />
      </Link>
    </div>
  );
};

// @Component
const AppNavEnd = () => {
  const { navEnd, link } = useNavStyles();
  return (
    <div className={navEnd}>
      <Link to="/auth" className={link}>
        <IconUser />
      </Link>
      <Link to="/cart" className={link}>
        <IconCart />
      </Link>
    </div>
  );
};

// @Component
const AppNav = () => {
  const { nav } = useNavStyles();
  return (
    <nav className={nav}>
      <AppContainer align="center">
        <AppNavStart />
        <AppNavCenter />
        <AppNavEnd />
      </AppContainer>
    </nav>
  );
};

export default AppNav;
