import { useState } from 'react';

import { Box, Drawer, Stack } from '@mui/material';
import PinCycle from 'app/components/atoms/PinCycle';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Drawer>
      <Box>
        <Stack>
          <Box component="img" src="" />

          <PinCycle isPin onToggle={() => {}} />
        </Stack>
      </Box>
    </Drawer>
  );
};

export default Navbar;
