import React from 'react';

import { Box } from '@mui/material';

interface Props {}

const Space = (props: Props) => {
  return <Box flexGrow={1} {...props} />;
};

export default Space;
