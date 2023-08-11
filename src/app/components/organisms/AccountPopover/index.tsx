import React, { useRef, useState } from 'react';

import { Avatar, Divider, MenuItem, Popover, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const MenuItemStyle = styled(MenuItem)(({ theme }) => ({
  margin: '5px',
  padding: '6px 8px',

  ':hover': {
    borderRadius: '4px',
  },
}));

const user = {
  name: 'Name',
  avatar: 'https://i.pinimg.com/236x/2a/94/4e/2a944e3ae3c301e49a20b803956f271f.jpg',
};

const AccountPopover = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const onPopoverOpen = (e: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const onPopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Avatar
        onClick={onPopoverOpen}
        // onMouseEnter={onPopoverOpen}
        // onMouseLeave={onPopoverClose}
        alt="Avatar"
        src={user.avatar}
        sx={{
          cursor: 'pointer',
          zIndex: '10000',
        }}
      ></Avatar>

      <Popover
        ref={popoverRef}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        disableRestoreFocus
        onClose={onPopoverClose}
        PaperProps={{
          ref: popoverRef,
          sx: {
            top: '65px !important',
            // boxShadow: 'none',
            width: 200,
            boxShadow:
              '0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
          },
        }}
      >
        <MenuItemStyle>
          <Avatar
            alt="Small Avatar"
            src={user.avatar}
            sx={{
              width: 30,
              height: 30,
              mr: 1,
            }}
          />
          <Typography>{user.name}</Typography>
        </MenuItemStyle>

        <Divider />

        <MenuItemStyle>Settings</MenuItemStyle>
        <MenuItemStyle>Logout</MenuItemStyle>
      </Popover>
    </>
  );
};

export default AccountPopover;
