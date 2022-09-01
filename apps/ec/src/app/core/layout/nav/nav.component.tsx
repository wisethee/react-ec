import { useContext } from 'react';
import { Link } from 'react-router-dom';

// Layout
import AppContainer from '../container/container.component';

// Jss
import { createUseStyles } from 'react-jss';
import { Theme } from '../../types/theme.type';

// Icons
import { ReactComponent as IconBars } from '../../../../assets/icons/icon-bars.svg';
import { ReactComponent as IconLogo } from '../../../../assets/icons/icon-logo.svg';
import { ReactComponent as IconUser } from '../../../../assets/icons/icon-user.svg';
import { ReactComponent as IconCart } from '../../../../assets/icons/icon-cart.svg';

// Firebase
import { signOutUser } from '../../utils/firebase/firebase.utils';

// Components
import AppCartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { AppCartContext } from '../../contexts/cart.context';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../store/reducers/user/user.reducer';
import { userSelector } from '../../store/reducers/user/user.selector';

// Component Styles
const useNavStyles = createUseStyles(
  ({ colors, typography, spacing, screens }: Theme) => ({
    nav: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      height: spacing[24],
      width: '100%',
    },
    navStart: {
      display: 'flex',
      marginRight: 'auto',
      minWidth: '90px',
      [`${screens['@lg']}`]: { minWidth: '320px' },
    },
    navCenter: {},
    navEnd: {
      display: 'flex',
      marginLeft: 'auto',
      minWidth: '90px',
      placeContent: 'end',
      [`${screens['@lg']}`]: { minWidth: '320px' },
    },
    iconMenu: {
      display: 'flex',
    },
    textMenu: {
      display: 'none',
      marginRight: spacing[24],
      [`${screens['@lg']}`]: { display: 'flex' },
    },
    link: {
      position: 'relative',
      display: 'inline-flex',
      cursor: 'pointer',
      textDecoration: 'none',
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
      '&:not(:last-child)': {
        marginRight: spacing[8],
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
    label: {
      position: 'absolute',
      fontSize: typography.fontSize.labelSmall,
      lineHeight: typography.leading.labelSmall,
      top: '0',
      right: '0',
      color: colors.white,
    },
    labelBg: {
      position: 'absolute',
      width: '16px',
      height: '16px',
      backgroundColor: colors.red[500],
      borderRadius: '100%',
      right: '-4.5px',
      top: '0',
    },
  })
);

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
  const {
    navEnd,
    link,
    textLink,
    badge,
    badgeBg,
    iconMenu,
    textMenu,
    label,
    labelBg,
  } = useNavStyles();
  const dispatch = useDispatch();
  const currentUser = useSelector(userSelector);

  const { isCartOpen, setIsCartOpen } = useContext(AppCartContext);
  const { cartCount } = useContext(AppCartContext);

  const toogleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  const signOut = () => {
    dispatch(userActions.setCurrentUser({}));
    signOutUser();
  };

  return (
    <div className={navEnd}>
      <div className={textMenu}>
        <Link to="/" className={textLink}>
          <span>HOME</span>
        </Link>
        <Link to="/shop" className={textLink}>
          <span>SHOP</span>
        </Link>
      </div>

      <div className={iconMenu}>
        {!currentUser && (
          <Link to="/auth" className={link}>
            <IconUser />
          </Link>
        )}
        {currentUser && (
          <span className={link} onClick={signOut}>
            <IconUser />
            <span className={badgeBg}></span>
            <span className={badge}></span>
          </span>
        )}
        <span className={link} onClick={toogleIsCartOpen}>
          <IconCart />
          <span className={labelBg}></span>
          <span className={label}>{cartCount}</span>
        </span>
      </div>
    </div>
  );
};

// @Component
const AppNav = () => {
  const { nav } = useNavStyles();
  const { isCartOpen } = useContext(AppCartContext);

  return (
    <nav className={nav}>
      <AppContainer align="center">
        <AppNavStart />
        <AppNavCenter />
        <AppNavEnd />
      </AppContainer>
      {isCartOpen && <AppCartDropdown />}
    </nav>
  );
};

export default AppNav;
