import { PaletteMode } from '@mui/material';
import { green, grey, red } from '@mui/material/colors';
import { Palette, PaletteColor, alpha } from '@mui/material/styles';

function createGradient(color1: string, color2: string) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

const convertArrToObjColor = (val: string[]) => {
  const result = {} as PaletteColor;
  const keys = ['lighter', 'light', 'main', 'dark', 'darker', 'contrastText'] as const;

  val.forEach((col, idx) => {
    result[keys[idx]] = col;
  });

  return result;
};

const getDesignTokens = (mode: PaletteMode) => ({
  mode,
  common: {
    black: '#000',
    white: '#fff',
    hyperlink: '#0151FC',
    favorite: '#FF3366',
  },
  // text: { primary: grey[800], secondary: grey[600], disabled: grey[500] },
  // background: {
  //   paper: '#fff',
  //   default: '#fff',
  // },

  // action: {
  //   active: grey[600],
  //   hover: grey[500_8],
  //   selected: grey[500_16],
  //   disabled: grey[500_80],
  //   disabledBackground: grey[500_24],
  //   focus: grey[500_24],
  //   hoverOpacity: 0.08,
  //   disabledOpacity: 0.48,
  // },
  ...(mode === 'light'
    ? {
        primary: convertArrToObjColor([
          '#91DDF2',
          '#57CAF0',
          '#1C9AD6',
          '#006ca4',
          '#004275',
          '#1D2326',
        ]),
        secondary: convertArrToObjColor([
          '#D6E4FF',
          '#84A9FF',
          '#3366FF',
          '#005A9E',
          '#091A7A',
          '#fff',
        ]),
        info: convertArrToObjColor(['#D0F2FF', '#74CAFF', '#1890FF', '#0C53B7', '#04297A', '#fff']),
        success: convertArrToObjColor([
          '#E4F9E2',
          '#AAF27F',
          '#54D62C',
          '#129961',
          '#08660D',
          grey[800],
        ]),
        warning: convertArrToObjColor([
          '#FFF3E2',
          '#FFE16A',
          '#FFC107',
          '#DD7D00',
          '#7A4F01',
          grey[800],
        ]),
        error: convertArrToObjColor([
          '#FBEDEE',
          '#FFA48D',
          '#FF4842',
          '#CF202F',
          '#7A0C2E',
          '#fff',
        ]),
      }
    : {
        primary: convertArrToObjColor([
          '#91DDF2',
          '#57CAF0',
          '#1C9AD6',
          '#006ca4',
          '#004275',
          '#1D2326',
        ]),
        secondary: convertArrToObjColor([
          '#D6E4FF',
          '#84A9FF',
          '#3366FF',
          '#005A9E',
          '#091A7A',
          '#fff',
        ]),
        info: convertArrToObjColor(['#D0F2FF', '#74CAFF', '#1890FF', '#0C53B7', '#04297A', '#fff']),
        success: convertArrToObjColor([
          '#E4F9E2',
          '#AAF27F',
          '#54D62C',
          '#129961',
          '#08660D',
          grey[800],
        ]),
        warning: convertArrToObjColor([
          '#FFF3E2',
          '#FFE16A',
          '#FFC107',
          '#DD7D00',
          '#7A4F01',
          grey[800],
        ]),
        error: convertArrToObjColor([
          '#FBEDEE',
          '#FFA48D',
          '#FF4842',
          '#CF202F',
          '#7A0C2E',
          '#fff',
        ]),
      }),
});

// const GRADIENTS = {
//   primary: createGradient(PRIMARY.light, PRIMARY.main),
//   info: createGradient(INFO.light, INFO.main),
//   success: createGradient(SUCCESS.light, SUCCESS.main),
//   warning: createGradient(WARNING.light, WARNING.main),
//   error: createGradient(ERROR.light, ERROR.main),
// };

// const palette = {
//   neutral: { ...NEUTRAL },
//   gradients: GRADIENTS,

// };

export default getDesignTokens;
