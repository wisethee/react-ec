import { createUseStyles } from 'react-jss';
import { Theme } from '../types/theme.type';

const useGlobalStyles = createUseStyles(({ typography }: Theme) => ({
  '@global': {
    '*, *::before, *::after': {
      boxSizing: 'border-box',
    },
    '*': {
      margin: '0',
    },
    'html, body': {
      height: '100%',
    },
    body: {
      fontFamily: typography.font,
      fontSize: typography.fontSize.bodyLarge,
      fontWeight: typography.fontWeight.normal,
      lineHeight: '24px',
    },
  },
}));

const GlobalStyles = () => {
  useGlobalStyles();
  return null;
};

export default GlobalStyles;
