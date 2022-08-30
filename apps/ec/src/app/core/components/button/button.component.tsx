import React from 'react';

// JSS
import { createUseStyles } from 'react-jss';
import { Theme } from '../../types/theme.type';
import classNames from '../../utils/class-names/class-names.utils';

// Component Types
type AppButtonProps<C extends React.ElementType> = {
  children: React.ReactNode;
  color?: 'primary' | undefined;
  modifier?: string;
} & React.ComponentPropsWithoutRef<C>;

// Component Styles
const useButtonStyles = createUseStyles(
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
      borderRadius: spacing[1],
      overflow: 'visible',
      color: colors.grey[700],
      fontWeight: typography.fontWeight.semiboild,
    },
    primary: {
      backgroundColor: colors.red[500],
      color: colors.white,
      marginLeft: spacing[4],
      '&:hover': {
        backgroundColor: colors.red[500],
      },
    },
  })
);

// @Component
const AppButton = <C extends React.ElementType>({
  children,
  color,
  modifier,
  ...props
}: AppButtonProps<C>) => {
  const { button, primary } = useButtonStyles();

  return (
    <button
      className={classNames(button, color === 'primary' && primary, modifier)}
      {...props}
    >
      {children}
    </button>
  );
};

export default AppButton;
