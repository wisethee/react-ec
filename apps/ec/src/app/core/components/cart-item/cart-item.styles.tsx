import { createUseStyles } from 'react-jss';
import { Theme } from '../../types/theme.type';

export const useCartItemStyles = createUseStyles(
  ({ spacing, typography, colors }: Theme) => ({
    cartItemContainer: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: spacing[4],
    },
    cartItemInner: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
    },
    cartItemImage: {
      width: '72px',
      height: 'auto',
      marginRight: spacing[4],
    },
    cartItemName: {
      fontSize: typography.fontSize.titleLarge,
      fontWeight: typography.fontWeight.medium,
      color: colors.grey[700],
    },
    cartItemText: {
      fontSize: typography.fontSize.bodyLarge,
      color: colors.grey[500],
    },
  })
);
