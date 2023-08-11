import React from 'react';

import { Stack } from '@mui/material';

import AccountPopover from 'app/components/organisms/AccountPopover';
import Space from 'app/components/atoms/Space';
import LanguagePopover from 'app/components/organisms/LanguagePopover';
import ThemeMode from 'app/components/molecules/ThemeMode/ThemeMode';

const Header = () => {
  return (
    <Stack direction="row" p={2} gap={2}>
      <Space />
      <ThemeMode />
      {/* <LanguagePopover /> */}
      <AccountPopover />
    </Stack>
  );
};

export default Header;
