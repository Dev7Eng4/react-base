import { PaletteColor as MuiPaletteColor, ThemeOptions } from '@mui/material/styles';
import {
  PaletteAugmentColorOptions,
  PaletteTonalOffset,
  TypeAction,
  PaletteMode,
  TypeBackground,
  TypeDivider,
  TypeText,
} from '@mui/material/styles/createPalette';

// declare module '@mui/material/styles' {
//   interface ThemeOptions {
//     status: {
//       danger: React.CSSProperties;
//     };
//   }
// }

export interface CustomShadowProps {
  z1: string;
  z8: string;
  z12: string;
  z16: string;
  z20: string;
  z24: string;
  primary: string;
  secondary: string;
  info: string;
  success: string;
  warning: string;
  error: string;
}

declare module '@mui/material' {
  interface Shape {
    borderRadiusSm: number;
    borderRadius: number;
    borderRadiusMd: number;
    borderCycle: number;
  }

  interface ShapeOptions {
    borderRadiusSm: number;
    borderRadius: number;
    borderRadiusMd: number;
    borderCycle: number;
  }
  // interface Color {
  //   0: string;
  //   450: string;
  //   500_8: string;
  //   500_12: string;
  //   500_16: string;
  //   500_24: string;
  //   500_32: string;
  //   500_48: string;
  //   500_56: string;
  //   500_80: string;
  //   550: string;
  //   650: string;
  //   750: string;
  //   850: string;
  // }
  // interface CommonColors {
  //   hyperlink: string;
  //   favorite: string;
  // }
  // interface PaletteColor extends MuiPaletteColor {
  //   darker: string;
  //   lighter: string;
  // }
  // interface ChartColor {
  //   skyBlue: string;
  //   blue: string;
  //   grey: string;
  //   yellow: string;
  //   purple: string;
  //   red: string;
  //   green: string;
  //   greenish: string;
  // }
  // interface Palette {
  //   neutral: PaletteColor;
  //   danger: PaletteColor;
  //   common: CommonColors;
  //   mode: PaletteMode;
  //   contrastThreshold: number;
  //   tonalOffset: PaletteTonalOffset;
  //   primary: PaletteColor;
  //   secondary: PaletteColor;
  //   error: PaletteColor;
  //   warning: PaletteColor;
  //   info: PaletteColor;
  //   success: PaletteColor;
  //   grey: Color;
  //   text: TypeText;
  //   divider: TypeDivider;
  //   action: TypeAction;
  //   chart: ChartColor;
  //   background: TypeBackground;
  //   getContrastText: (background: string) => string;
  //   augmentColor: (options: PaletteAugmentColorOptions) => PaletteColor;
  // }
}

declare module '@mui/material/styles' {
  interface Theme {
    customShadows: CustomShadowProps;
    shape: Shape;
  }

  interface ThemeOptions {
    customShadows: CustomShadowProps;
  }

  interface Shape {
    borderRadius: number;
    borderRadiusMd: number;
    borderCycle: number;
  }

  // interface ShapeOptions {
  //   borderRadius: number;
  //   borderRadiusMd: number;
  //   borderCycle: number;
  // }

  interface PaletteColor {
    darker: string;
    lighter: string;
  }
}
