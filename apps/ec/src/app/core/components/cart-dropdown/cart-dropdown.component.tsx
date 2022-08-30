// JSS
import { createUseStyles } from 'react-jss';
import { Theme } from '../../types/theme.type';
import AppButton from '../button/button.component';

// Component Styles
const useCartDropdownStyles = createUseStyles(
  ({ screens, spacing, colors }: Theme) => ({
    cartDropdown: {
      position: 'absolute',
      right: '0',
      top: '100%',
      minWidth: '420px',
      height: 'auto',
      backgroundColor: colors.white,
      boxShadow: '0px 6px 24px 9px rgba(0,0,0,0.09)',
      zIndex: '1',
      marginRight: spacing[2],
      [`${screens['@sm']}`]: { marginRight: spacing[4] },
      [`${screens['@md']}`]: { marginRight: spacing[8] },
      [`${screens['@lg']}`]: { marginRight: spacing[12] },
      [`${screens['@xl']}`]: { marginRight: spacing[16] },
    },
    cartInner: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '100%',
      height: '100%',
      padding: spacing[4],
    },
    cartButton: {
      marginTop: spacing[16],
      width: '100%',
    },
  })
);

// @Component
const AppCartDropdown = () => {
  const { cartDropdown, cartInner, cartButton } = useCartDropdownStyles();
  return (
    <div className={cartDropdown}>
      <div className={cartInner}>
        <span>cart items</span>
        <AppButton modifier={cartButton}>Go To Cart</AppButton>
      </div>
    </div>
  );
};

export default AppCartDropdown;
