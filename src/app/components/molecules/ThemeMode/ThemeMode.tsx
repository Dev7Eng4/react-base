import { useState } from 'react';

import { Box, Icon, IconButton } from '@mui/material';

import { ReactComponent as Test } from 'assets/icons/date.svg';

const ThemeMode = () => {
  const [mode, setMode] = useState('light');

  const onToggleTheme = () => {
    setMode(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <Box component="span" onClick={onToggleTheme}>
      {mode === 'light' ? (
        <IconButton>
          <Test />
        </IconButton>
      ) : (
        'Dark'
      )}
    </Box>
  );
};

export default ThemeMode;
