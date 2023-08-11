import { TypographyOptions } from '@mui/material/styles/createTypography';
import { responsiveFontSizes as res } from '@mui/material/styles';

function pxToRem(value: number) {
  return `${value / 16}rem`;
}

interface ResponsiveFontSizeProps {
  sm: number;
  md: number;
  lg: number;
}

function responsiveFontSizes({ sm, md, lg }: ResponsiveFontSizeProps) {
  return {
    '@media (min-width:600px)': {
      fontSize: pxToRem(sm),
    },
    '@media (min-width:900px)': {
      fontSize: pxToRem(md),
    },
    '@media (min-width:1200px)': {
      fontSize: pxToRem(lg),
    },
  };
}

const FONT_PRIMARY = "'Public Sans', Roboto, sans-serif";

const typography: TypographyOptions = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontWeight: 600,
    lineHeight: 80 / 64,
    fontSize: pxToRem(40),
    ...responsiveFontSizes({ sm: 52, md: 58, lg: 62 }),
  },
  h2: {
    fontWeight: 600,
    lineHeight: 64 / 48,
    fontSize: pxToRem(32),
    ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
  },
  h3: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ sm: 26, md: 30, lg: 40 }),
  },
  h4: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ sm: 20, md: 24, lg: 32 }),
  },
  h5: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
    ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
  },
  h6: {
    fontWeight: 600,
    lineHeight: 28 / 18,
    fontSize: pxToRem(17),
    ...responsiveFontSizes({ sm: 18, md: 18, lg: 16 }),
  },
  subtitle1: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
  },
  subtitle2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: pxToRem(16),
  },
  body1: {
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  body2: {
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  caption: {
    lineHeight: 1.5,
    fontSize: pxToRem(12),
  },
  overline: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    letterSpacing: 1.1,
    textTransform: 'uppercase',
  },
  button: {
    fontWeight: 500,
    // lineHeight: 'initial',
    fontSize: pxToRem(16),
    textTransform: 'capitalize',
  },
};

export default typography;
