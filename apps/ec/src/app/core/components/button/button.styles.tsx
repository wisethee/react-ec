import { createUseStyles } from 'react-jss';
import { Theme } from '../../types/theme.type';

export const useButtonStyles = createUseStyles(
  ({ colors, spacing, typography }: Theme) => ({
    button: {
      boxSizing: 'border-box',
      position: 'relative',
      userSelect: 'none',
      cursor: 'pointer',
      outline: 'none',
      border: 'none',
      display: 'inline-block',
      whiteSpace: 'nowrap',
      textDecoration: 'none',
      verticalAlign: 'baseline',
      textAlign: 'center',
      margin: spacing[0],
      minWidth: spacing[16],
      lineHeight: spacing[9],
      padding: [spacing[0], spacing[4]],
      overflow: 'visible',
      fontWeight: typography.fontWeight.semiboild,
      backgroundColor: colors.grey[700],
      color: colors.white,
      '&:hover': {
        backgroundColor: colors.grey[500],
      },
    },
    primary: {
      backgroundColor: colors.red[500],
      color: colors.white,
      '&:hover': {
        backgroundColor: colors.red[700],
      },
    },
    inverted: {
      backgroundColor: 'transparent',
      color: colors.white,
      border: `2px solid ${colors.white}`,
      '&:hover': {
        backgroundColor: colors.grey[50],
        color: colors.grey[700],
        border: `2px solid ${colors.grey[700]}`,
      },
    },
  })
);
