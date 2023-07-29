import React, { useRef } from 'react';

import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

const Home = () => {
  const containerScrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: any) => {
    console.log('eee', e);
    if (!containerScrollRef.current) return;
  };

  return (
    <Box
      ref={containerScrollRef}
      height={'400px'}
      sx={{
        position: 'relative',
        ml: '20px',
        width: '200px',
        background: 'red',
        overflow: 'auto',

        '::-webkit-scrollbar': {
          width: '6px',
        },

        '::-webkit-scrollbar-thumb': {
          backgroundColor: 'transparent',
        },

        '&:hover': {
          '& > div': {
            display: 'inline-block',
          },
        },
      }}
      onScroll={handleScroll}
    >
      <Box
        component={'div'}
        sx={{
          // display: 'none',
          width: '8px',
          background: 'yellow',
          position: 'absolute',
          top: '10px',
          right: '-10px',
          height: '20px',
          zIndex: '10000',
        }}
      />

      <Outlet />
      <p>AAAA</p>
    </Box>
  );
};

export default Home;
