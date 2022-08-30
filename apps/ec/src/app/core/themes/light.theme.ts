import { Breakpoints, Theme } from '../types/theme.type';

// Breakpoints
const breakpoints: Breakpoints = {
  sm: '600px',
  md: '905px',
  lg: '1240px',
  xl: '1440px',
};

// Sans Font Family
const fontFamily = 'Rubik, sans-serif';

export const lightTheme: Theme = {
  name: 'light',
  screens: {
    '@sm': `@media (min-width: ${breakpoints.sm})`,
    '@md': `@media (min-width: ${breakpoints.md})`,
    '@lg': `@media (min-width: ${breakpoints.lg})`,
    '@xl': `@media (min-width: ${breakpoints.xl})`,
  },
  colors: {
    white: '#ffffff',
    grey: {
      '50': '#FAFAFA',
      '100': '#F4F4F5',
      '300': '#D1D5DB',
      '500': '#6B7280',
      '700': '#374151',
    },
    red: {
      '50': '#FCEDF1',
      '100': '#F6CBD6',
      '300': '#F0A8BA',
      '500': '#E34B6F',
      '700': '#DE2B55',
    },
  },
  typography: {
    font: fontFamily,
    fontSize: {
      displayLarge: '52px',
      displayMedium: '44px',
      displaySmall: '36px',
      headlineLarge: '32px',
      headlineMedium: '28px',
      headlineSmall: '24px',
      titleLarge: '22px',
      titleMedium: '18px',
      titleSmall: '14px',
      bodyLarge: '16px',
      bodyMedium: '14px',
      bodySmall: '12px',
      labelLarge: '14px',
      labelMedium: '12px',
      labelSmall: '10px',
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semiboild: '600',
    },
    leading: {
      displayLarge: '60px',
      displayMedium: '52px',
      displaySmall: '44px',
      headlineLarge: '40px',
      headlineMedium: '36px',
      headlineSmall: '32px',
      titleLarge: '28px',
      titleMedium: '24px',
      titleSmall: '20px',
      bodyLarge: '24px',
      bodyMedium: '20px',
      bodySmall: '16px',
      labelLarge: '20px',
      labelMedium: '16px',
      labelSmall: '16px',
    },
  },
  spacing: {
    '0': '0px',
    '1': '4px',
    '2': '8px',
    '3': '12px',
    '4': '16px',
    '5': '20px',
    '6': '24px',
    '7': '28px',
    '8': '32px',
    '9': '36px',
    '10': '40px',
    '12': '48px',
    '14': '56px',
    '16': '64px',
    '20': '80px',
    '24': '96px',
    '28': '112px',
    '32': '128px',
    '36': '144px',
    '40': '160px',
    '48': '192px',
  },
};
