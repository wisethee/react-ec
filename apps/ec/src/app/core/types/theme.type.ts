export type Breakpoints = {
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
};

export type Screens = {
  '@sm'?: string;
  '@md'?: string;
  '@lg'?: string;
  '@xl'?: string;
};

export type ColorPalette = {
  '50': string;
  '100': string;
  '200': string;
  '300': string;
  '400': string;
  '500': string;
  '600': string;
  '700': string;
  '800': string;
  '900': string;
};

export type Colors = {
  grey: ColorPalette;
  red: ColorPalette;
};

export type Spacing = {
  '0': string;
  '1': string;
  '2': string;
  '3': string;
  '4': string;
  '5': string;
  '6': string;
  '7': string;
  '8': string;
  '9': string;
  '10': string;
  '12': string;
  '14': string;
  '16': string;
  '20': string;
  '24': string;
  '28': string;
  '32': string;
  '36': string;
  '40': string;
  '48': string;
};

export type FontSize = {
  displayLarge: string;
  displayMedium: string;
  displaySmall: string;
  headlineLarge: string;
  headlineMedium: string;
  headlineSmall: string;
  titleLarge: string;
  titleMedium: string;
  titleSmall: string;
  bodyLarge: string;
  bodyMedium: string;
  bodySmall: string;
  labelLarge: string;
  labelMedium: string;
  labelSmall: string;
};

export type FontWeight = {
  normal: string;
  medium: string;
  semiboild: string;
};

export type Typography = {
  font: string;
  fontSize: FontSize;
  fontWeight: FontWeight;
};

export type Theme = {
  name: string;
  screens: Screens;
  colors: Colors;
  typography: Typography;
  spacing: Spacing;
};
