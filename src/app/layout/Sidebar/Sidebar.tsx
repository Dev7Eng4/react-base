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
import { SIDEBAR_DRAWER_MAX_WIDTH, SIDEBAR_DRAWER_MIN_WIDTH } from 'constant';
import { IFunc } from 'types/common.type';

import SidebarMenu from './SidebarMenu';
import { sidebarMenus } from './sidebar.data';

interface Props {
  isPin: boolean;
  // togglePin: React.Dispatch<React.SetStateAction<boolean>>;
  togglePin: IFunc;
}

const Sidebar = ({ isPin, togglePin }: Props) => {
  const theme = useTheme();

  const [expandedMenu, setExpandedMenu] = useState('');

  const handleMenuClick = (id: string) => () => {
    setExpandedMenu(prev => (prev === id ? '' : id));
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
          width: isPin ? SIDEBAR_DRAWER_MAX_WIDTH : SIDEBAR_DRAWER_MIN_WIDTH,
          transition: 'all 0.5s',
          position: 'fixed',

          '.MuiListItemText-root': {
            display: isPin ? 'block' : 'none',
          },

          '.MuiListItemButton-root': {
            '.MuiSvgIcon-root': {
              display: isPin ? 'block' : 'none',
            },
          },

          '.MuiCollapse-root': {
            display: isPin ? 'block' : 'none',
          },

          '&:hover': {
            width: SIDEBAR_DRAWER_MAX_WIDTH,

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
          overflowX: 'hidden',
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

          <PinCycle isPin={isPin} onToggle={togglePin} />
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
              isPin={isPin}
            />
          ))}
        </Scroll>
      </List>
    </Drawer>
  );
};

export default Sidebar;
