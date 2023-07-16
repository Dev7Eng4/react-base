import React from 'react';

import { Box, Stack, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';

import { ReactComponent as LogoComponent } from 'assets/logo/logo.svg';

const LogoStyle = styled(LogoComponent)(() => ({
  width: '130px',
  height: 'auto',
}));

const Logo = () => {
  const theme = useTheme();

  return (
    <Stack justifyContent={'center'} position={'relative'}>
      <LogoStyle />

      <Box
        sx={{
          position: 'absolute',
          top: '0',
          left: '40px',
          height: '100%',
          width: 'calc(100% - 40px)',
          bgcolor: theme.palette.primary.main,
          zIndex: 5,
        }}
      />
    </Stack>
  );
};

export default Logo;
