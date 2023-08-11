import { Components, Theme } from '@mui/material';

export default function Menu(theme: Theme): Components {
  return {
    MuiMenu: {
      styleOverrides: {
        list: {
          padding: 0,
          ':hover': {
            borderColor: 'red',
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          margin: '5px',
          borderRadius: theme.shape.borderRadius,

          '&.Mui-Selected': {
            color: '#fff',
          },
        },
      },
    },
  };
}
