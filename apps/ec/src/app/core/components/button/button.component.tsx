import React from 'react';
// Styles
import { useButtonStyles } from './button.styles';
import classNames from '../../utils/class-names/class-names.utils';

// Component Types
type ButtonProps<C extends React.ElementType> = {
  children: React.ReactNode;
  color?: 'primary' | 'inverted' | undefined;
  classModifier?: string;
} & React.ComponentPropsWithoutRef<C>;

// @Component
const AppButton = <C extends React.ElementType>({
  children,
  color,
  classModifier,
  ...props
}: ButtonProps<C>) => {
  const { button, primary, inverted } = useButtonStyles();

  return (
    <button
      className={classNames(
        button,
        color === 'primary' && primary,
        color === 'inverted' && inverted,
        classModifier
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default AppButton;
