import { useState } from 'react';

import { Box } from '@mui/material';

const ThemeMode = () => {
  const [mode, setMode] = useState('light');

  const onToggleTheme = () => {
    setMode(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <Box component="span" onClick={onToggleTheme}>
      {mode === 'light' ? 'Light' : 'Dark'}
    </Box>
  );
};

export default ThemeMode;
