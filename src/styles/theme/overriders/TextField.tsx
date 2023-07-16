import { Theme } from '@mui/material';

export default function TextField(theme: Theme) {
  return {
    MuiTextField: {
      styleOverrides: {
        root: {
          '.MuiFormLabel-root': {
            transform: 'translate(14px, 10px) scale(1)',

            '&.Mui-focused': {
              transform: 'translate(14px, -7px) scale(0.75)',
            },

            '&.MuiFormLabel-filled': {
              transform: 'translate(14px, -7px) scale(0.75)',
            },
          },

          '.MuiInputBase-root': {
            height: '40px',
            borderRadius: theme.shape.borderRadius,

            legend: {
              span: {
                paddingRight: 0,
              },
            },

            '&:hover': {
              borderColor: theme.palette.primary.main,

              '.MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.primary.main,
              },
            },

            '&.Mui-focused': {
              borderColor: theme.palette.primary.main,
            },

            '.MuiInputBase-input': {
              padding: '9.5px 14px 10.5px',

              '&::placeholder': {
                color: '#d1cfcf',
                opacity: 1,
                display: 'block',
                visibility: 'visible',
              },
            },

            '&.Mui-disabled': {
              // backgroundColor: theme.palette.neutral.lighter,

              '.MuiOutlinedInput-notchedOutline': {
                // borderColor: theme.palette.neutral.main,
              },
            },

            '&.Mui-error': {
              '.MuiOutlinedInput-notchedOutline': {
                // borderColor: theme.palette.neutral.main,
              },
            },
          },

          '.MuiInputBase-input': {
            padding: '12.5px 14px',
          },

          '.MuiButtonBase-root:hover': {
            backgroundColor: 'transparent',
          },
          '.MuiTouchRipple-root': {
            display: 'none',
          },
        },
      },
    },
  };
}
