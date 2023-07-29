import React, { useState } from 'react';

import {
  Box,
  Collapse,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  useTheme,
} from '@mui/material';
import { ExpandLess, ExpandMore, StarBorder, MoveToInbox } from '@mui/icons-material';

import PinCycle from 'app/components/atoms/PinCycle';
import Logo from 'app/components/atoms/Logo';
import Scroll from 'app/components/atoms/Scroll';

import { sidebarMenus } from './sidebar.data';
import SidebarMenu from './SidebarMenu';

const DRAWER_MAX_WIDTH = 300;
const DRAWER_MIN_WIDTH = 200;

const Sidebar = () => {
  const theme = useTheme();

  const [expandedMenu, setExpandedMenu] = useState('');
  const [pinMenu, setPinMenu] = useState(true);

  const handleMenuClick = (id: string) => () => {
    setExpandedMenu(prev => (prev === id ? '' : id));
  };

  const handleToggleMenu = () => {
    setPinMenu(prev => !prev);
  };

  //   <NavLink
  //   style={({ isActive, isPending }) => {
  //     return {
  //       color: isActive ? "red" : "inherit",
  //     };
  //   }}
  //   className={({ isActive, isPending }) => {
  //     return isActive ? "active" : isPending ? "pending" : "";
  //   }}
  // />

  //   window.addEventListener('scroll', () => {
  //   document.documentElement.style.setProperty('--scroll', ( window.pageYOffset - offsetStart ) / ( document.body.offsetHeight - offsetStart - offsetEnd - window.innerHeight ));
  // }, false);

  return (
    <Drawer
      // anchor="left"
      open
      variant="persistent"
      PaperProps={{
        sx: {
          width: pinMenu ? DRAWER_MAX_WIDTH : DRAWER_MIN_WIDTH,
          transition: 'all 0.5s',
          position: 'relative',

          '.MuiListItemText-root': {
            display: pinMenu ? 'block' : 'none',
          },

          '.MuiListItemButton-root': {
            '.MuiSvgIcon-root': {
              display: pinMenu ? 'block' : 'none',
            },
          },

          '.MuiCollapse-root': {
            display: pinMenu ? 'block' : 'hidden',
          },

          '&:hover': {
            width: DRAWER_MAX_WIDTH,

            '.MuiListItemText-root': {
              display: 'block',
            },

            '.MuiListItemButton-root': {
              '.MuiSvgIcon-root': {
                display: 'block',
              },
            },

            '.MuiCollapse-root': {
              display: 'block',
            },
          },
        },
      }}
    >
      <List
        component={'nav'}
        sx={{
          p: 0,
          height: '100vh',
          overflowY: 'auto',
          bgcolor: theme.palette.primary.main,
        }}
      >
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
          height={'50px'}
          sx={{
            px: '20px',
            borderBottom: '1px dotted red',
          }}
        >
          <Logo />

          <PinCycle isPin={pinMenu} onToggle={handleToggleMenu} />
        </Stack>

        <Scroll
          sx={{
            height: 'calc(100vh - 82px)',
            my: 2,
          }}
        >
          {sidebarMenus.map(menu => (
            <SidebarMenu
              key={menu.id}
              menu={menu}
              expandedMenu={expandedMenu}
              setExpandedMenu={setExpandedMenu}
              isPin={pinMenu}
            />
          ))}
        </Scroll>
      </List>
    </Drawer>
  );
};

export default Sidebar;
