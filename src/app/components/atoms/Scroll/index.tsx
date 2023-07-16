import { Box } from '@mui/material';

import { IChildren } from 'types/common.type';

interface Props extends IChildren {
  sx?: object;
  [prop: string]: any;
}

const Scroll = ({ children, sx, ...rest }: Props) => {
  return (
    <Box
      component={'div'}
      sx={theme => ({
        flexGrow: 1,
        height: '100%',
        overflowY: 'auto',

        '::-webkit-scrollbar': {
          width: '6px',
        },

        '::-webkit-scrollbar-thumb': {
          backgroundColor: theme.palette.grey[400],
          borderRadius: theme.shape.borderRadius,
        },

        ...sx,
      })}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default Scroll;
