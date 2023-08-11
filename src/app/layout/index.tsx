import React, { useState } from 'react';

import { Box, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { SIDEBAR_DRAWER_MAX_WIDTH, SIDEBAR_DRAWER_MIN_WIDTH } from 'constant';

import Header from './Header';
import Navbar from './Navbar';
import Sidebar from './Sidebar/Sidebar';

interface Props {
  children: React.ReactNode;
}

const MainContainer = styled('main')({
  padding: '15px',
});

const Layout = ({ children }: Props) => {
  const [pinSidebar, setPinSidebar] = useState(true);

  const handleTogglePin = () => {
    setPinSidebar(prev => !prev);
  };

  return (
    <Stack direction="row">
      <Sidebar isPin={pinSidebar} togglePin={handleTogglePin} />
      {/* <Navbar /> */}

      <Stack
        flexGrow={1}
        sx={{
          width: `calc(100vw - ${
            pinSidebar ? SIDEBAR_DRAWER_MAX_WIDTH : SIDEBAR_DRAWER_MIN_WIDTH
          }px)`,
          marginLeft: `${pinSidebar ? SIDEBAR_DRAWER_MAX_WIDTH : SIDEBAR_DRAWER_MIN_WIDTH}px`,
          transition: 'all 0.3s',
        }}
      >
        <Header />

        <MainContainer>{children}</MainContainer>
      </Stack>
    </Stack>
  );
};

export default Layout;
