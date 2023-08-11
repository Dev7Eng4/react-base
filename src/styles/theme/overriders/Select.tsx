import { Components, Theme } from '@mui/material';
import { red } from '@mui/material/colors';

export default function Select(theme: Theme): Components {
  return {
    MuiInputBase: {
      styleOverrides: {
        root: {
          ':hover': {
            'fieldset.MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.primary.main,
            },
          },
        },
      },
    },
    MuiSelect: {
      defaultProps: {},
      styleOverrides: {
        outlined: {
          minWidth: '350px',
          height: '40px',
          padding: '10px',

          'MuiMenuItem-root': {
            backgroundColor: 'red',
          },
        },
      },
    },
  };
}
