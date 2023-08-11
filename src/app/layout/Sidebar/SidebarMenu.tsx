import React from 'react';

import { ExpandLess, ExpandMore, HorizontalRule } from '@mui/icons-material';
import {
  Box,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { IMenu, IMenuItem } from 'types/sidebar.type';

import dotIcon from 'assets/icons/dot.svg';

interface Props {
  menu: IMenu;
  isPin: boolean;
  expandedMenu: string;
  setExpandedMenu: React.Dispatch<React.SetStateAction<string>>;
}

const SidebarItem = ({ item }: { item: IMenu }) => {
  const { label, icon, path } = item;

  const theme = useTheme();

  return (
    <Box
      component={Link}
      to={path}
      sx={{
        display: 'flex',
        mr: '13px',
        ml: icon ? '13px' : '20px',
        borderRadius: theme.shape,
        color: theme.palette.grey[300],
        '&:hover': {
          color: '#fff',
        },
      }}
    >
      <ListItemButton
        sx={{
          py: '6px',
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: '20px',
          }}
        >
          {icon ? <>{icon}</> : <img src={dotIcon} alt="Dot SubMenu" />}
        </ListItemIcon>
        <ListItemText
          primary={label}
          sx={{
            whiteSpace: 'nowrap',
          }}
        />
      </ListItemButton>
    </Box>
  );
};

const SidebarMenu = ({ menu, isPin, expandedMenu, setExpandedMenu }: Props) => {
  const theme = useTheme();

  //  const match = useMatch("/messages");
  // return <li className={Boolean(match) ? "active" : ""} />;

  const isExpanded = expandedMenu === menu.id;

  const handleToggleMenu = (id: string) => () => {
    console.log('menu', menu.items);
    setExpandedMenu(prev => (prev === id ? '' : id));
  };

  return (
    <>
      {menu.items && menu.items?.length > 0 ? (
        <>
          <ListItemButton
            sx={{
              mx: '13px',
              height: '40px',
              borderRadius: theme.shape,
              color: theme.palette.grey[300],
              '&:hover': {
                color: '#fff',
              },
            }}
            onClick={handleToggleMenu(menu.id)}
          >
            {menu.icon && (
              <ListItemIcon
                sx={{
                  width: '20px',
                  height: '20px',
                  minWidth: '35px',
                }}
              >
                <img src={menu.icon} />
              </ListItemIcon>
            )}
            <ListItemText
              primary={menu.label}
              sx={{
                whiteSpace: 'nowrap',
              }}
            />
            {isExpanded ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          {menu.items && (
            <Collapse in={isExpanded} timeout={'auto'} unmountOnExit>
              <List component={'div'} sx={{ p: 0 }}>
                {menu.items.map(subMenu =>
                  subMenu.items ? (
                    <SidebarMenu
                      menu={subMenu}
                      expandedMenu={expandedMenu}
                      isPin={isPin}
                      setExpandedMenu={setExpandedMenu}
                    />
                  ) : (
                    <SidebarItem
                      item={{
                        ...subMenu,
                        path: `${menu.path}${subMenu.path}`,
                      }}
                    />
                  ),
                )}
              </List>
            </Collapse>
          )}
        </>
      ) : (
        <SidebarItem item={menu} />
      )}
    </>
  );
};

export default SidebarMenu;
