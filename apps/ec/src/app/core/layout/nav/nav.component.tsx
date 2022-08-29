import { Link } from 'react-router-dom';
import { useContext } from 'react';

// User Context
import { AppUserContext } from '../../contexts/user.context';

// Layout
import AppContainer from '../container/container.component';

// Jss
import { createUseStyles } from 'react-jss';
import { Theme } from '../../types/theme.type';

// Assets -> Icons
import { ReactComponent as IconLogo } from '../../../../assets/icons/icon-logo.svg';
import { ReactComponent as IconUser } from '../../../../assets/icons/icon-user.svg';
import { ReactComponent as IconCart } from '../../../../assets/icons/icon-cart.svg';

// Firebase
import { signOutUser } from '../../utils/firebase/firebase.utils';

// Component Styles
const useNavStyles = createUseStyles(
  ({ colors, typography, spacing }: Theme) => ({
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

    navEnd: {
      display: 'flex',
      marginLeft: 'auto',
    },
    link: {
      position: 'relative',
      display: 'inline-flex',
      cursor: 'pointer',
      '&:not(:only-child):last-child': {
        marginLeft: spacing[6],
      },
      '& svg': {
        fill: colors.grey[700],
      },
    },
    textLink: {
      textDecoration: 'none',
      fontSize: typography.fontSize.bodyMedium,
      color: colors.grey[700],
      marginRight: spacing[8],
      '&:nth-child(2)': {
        marginRight: spacing[24],
      },
    },
    badgeBg: {
      position: 'absolute',
      width: '8px',
      height: '8px',
      backgroundColor: colors.white,
      borderRadius: '100%',
      right: '2px',
    },
    badge: {
      position: 'absolute',
      width: '6px',
      height: '6px',
      backgroundColor: colors.red[500],
      borderRadius: '100%',
      right: '3px',
      top: '1px',
    },
  })
);

// @Component
const AppNavStart = () => {
  const { navStart, link } = useNavStyles();

  return (
    <div className={navStart}>
      <Link to="/" className={link}>
        <IconLogo />
      </Link>
    </div>
  );
};

// @Component
const AppNavEnd = () => {
  const { navEnd, link, textLink, badge, badgeBg } = useNavStyles();
  const { currentUser } = useContext(AppUserContext);

  return (
    <div className={navEnd}>
      <Link to="/" className={textLink}>
        <span>HOME</span>
      </Link>
      <Link to="/shop" className={textLink}>
        <span>SHOP</span>
      </Link>

      {!currentUser ? (
        <Link to="/auth" className={link}>
          <IconUser />
        </Link>
      ) : (
        <span className={link} onClick={signOutUser}>
          <IconUser />
          <span className={badgeBg}></span>
          <span className={badge}></span>
        </span>
      )}

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
        <AppNavEnd />
      </AppContainer>
    </nav>
  );
};

export default AppNav;
