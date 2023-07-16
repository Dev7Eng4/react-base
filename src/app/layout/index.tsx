import React from 'react';

import { Box, Stack } from '@mui/material';

import Header from './Header';
import Navbar from './Navbar';
import Sidebar from './Sidebar/Sidebar';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Stack direction="row">
      <Sidebar />
      {/* <Navbar /> */}

      <Stack flexGrow={1}>
        <Header />

        <main>{children}</main>
      </Stack>
    </Stack>
  );
};

export default Layout;
