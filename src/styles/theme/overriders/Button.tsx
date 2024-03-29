import { ButtonPropsVariantOverrides, Components, Theme } from '@mui/material';
import { OverridableStringUnion } from '@mui/types';

export default function Button(theme: Theme) {
  return {
    MuiButton: {
      defaultProps: {
        variant: 'contained' as OverridableStringUnion<
          'text' | 'outlined' | 'contained',
          ButtonPropsVariantOverrides
        >,
      },
      styleOverrides: {
        root: {
          borderRadius: theme.shape.borderRadius,
          color: '#fff',
        },

        sizeMedium: {
          height: '40px',
          minWidth: '70px',
        },
      },
    },
    MuiLoadingButton: {
      defaultProps: {
        variant: 'contained' as OverridableStringUnion<
          'text' | 'outlined' | 'contained',
          ButtonPropsVariantOverrides
        >,
      },
    },
  };
}
