import React from 'react';

import { Box, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

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
  return (
    <Stack direction="row">
      <Sidebar />
      {/* <Navbar /> */}

      <Stack flexGrow={1}>
        <Header />

        <MainContainer>{children}</MainContainer>
      </Stack>
    </Stack>
  );
};

export default Layout;
