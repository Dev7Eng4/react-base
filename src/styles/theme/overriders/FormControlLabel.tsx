import { Theme } from '@mui/material';

export default function FormControlLabel(theme: Theme) {
  return {
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          margin: 0,
          alignItems: 'flex-start',

          '.MuiFormHelperText-root': {
            marginLeft: '0',
            marginRight: '0',
            color: theme.palette.error.main,
            fontSize: '14px',
          },

          '.MuiFormControlLabel-label': {
            marginBottom: '5px',
          },

          fieldset: {
            borderWidth: '1px !important',
          },
        },
      },
    },
  };
}
