import React from 'react';

import { Box } from '@mui/material';

import { styled } from '@mui/material/styles';

import outerCycle from 'assets/icons/outer-cycle.svg';
import innerCycle from 'assets/icons/inner-cycle.svg';

interface Props {
  isPin: boolean;
  onToggle: () => void;
}

const InnerCycleStyle = styled('img')(({ isPin }: { isPin: boolean }) => ({
  position: 'absolute',
  opacity: isPin ? 1 : 0,
  zIndex: '50',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}));

const PinCycle = ({ isPin, onToggle }: Props) => {
  return (
    <Box
      component={'span'}
      sx={theme => ({
        display: 'none',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        width: '20px',
        height: '20px',
        cursor: 'pointer',

        [theme.breakpoints.up('sm')]: {
          display: 'inline-flex',
        },
      })}
      onClick={onToggle}
    >
      <Box component={'img'} src={outerCycle} alt="Outer Cycle" />
      <InnerCycleStyle src={innerCycle} alt="Inner Cycle" isPin={isPin} />
    </Box>
  );
};

export default PinCycle;
