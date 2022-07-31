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
    grey: {
      '50': '#f8fafc',
      '100': '#f1f5f9',
      '200': '#e2e8f0',
      '300': '#cbd5e1',
      '400': '#94a3b8',
      '500': '#64748b',
      '600': '#475569',
      '700': '#334155',
      '800': '#1e293b',
      '900': '#0f172a',
    },
    red: {
      '50': '#fbe4ea',
      '100': '#f6bccb',
      '200': '#f091a8',
      '300': '#e96787',
      '400': '#e34b6e',
      '500': '#dd3658',
      '600': '#cd3155',
      '700': '#b82c51',
      '800': '#a3284d',
      '900': '#801e45',
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