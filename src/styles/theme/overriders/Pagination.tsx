import { Components, Theme } from '@mui/material';

export default function Pagination(theme: Theme): Components {
  return {
    MuiPagination: {
      defaultProps: {},
      styleOverrides: {
        root: {},
      },
    },
  };
}
