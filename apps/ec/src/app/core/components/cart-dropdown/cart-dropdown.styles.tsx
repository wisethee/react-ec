import { createUseStyles } from 'react-jss';
import { Theme } from '../../types/theme.type';

export const useCartDropdownStyles = createUseStyles(
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
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: spacing[4],
      [`${screens['@sm']}`]: { marginRight: spacing[4] },
      [`${screens['@md']}`]: { marginRight: spacing[8] },
      [`${screens['@lg']}`]: { marginRight: spacing[12] },
      [`${screens['@xl']}`]: { marginRight: spacing[16] },
    },
    cartInner: {},
    cartDropdownFooter: {
      '& button': {
        marginTop: spacing[12],
        width: '100%',
      },
    },
  })
);
