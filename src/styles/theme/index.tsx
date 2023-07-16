import React, { useMemo, useState } from 'react';

import { CssBaseline, PaletteMode, ThemeOptions } from '@mui/material';
import { StyledEngineProvider, ThemeProvider, createTheme } from '@mui/material/styles';

import breakpoints from './breakpoint';
import GlobalStyles from './globalStyles';
import overrideComponents from './overriders';
import getDesignTokens from './palette';
import { createCustomShadow, createShadow } from './shadows';
import shape from './shape';
import typography from './typography';

interface ThemeConfigProps {
  children: React.ReactNode;
}

const ThemeConfig = (props: ThemeConfigProps) => {
  const { children } = props;
  const [mode, setMode] = useState<PaletteMode>('light');

  const themeOptions = useMemo(
    () => ({
      shadows: createShadow(mode),
      customShadows: createCustomShadow(getDesignTokens(mode)),
      palette: getDesignTokens(mode),
      typography,
      breakpoints,
      shape,
    }),
    [mode],
  );

  const theme = createTheme(themeOptions);
  theme.components = overrideComponents(theme);

  return (
    <StyledEngineProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeConfig;
