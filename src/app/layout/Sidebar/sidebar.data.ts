import { MENUS, ROLES } from 'constant/enums';
import dateIcon from 'assets/icons/date.svg';

export const roles = [
  {
    label: 'systemAdmin',
    value: ROLES.SystemAdmin,
  },
  {
    label: 'admin',
    value: ROLES.Admin,
  },
  {
    label: 'manager',
    value: ROLES.Manager,
  },
  {
    label: 'staff',
    value: ROLES.Staff,
  },
];

export const sidebarMenus = [
  {
    id: MENUS.Pages,
    label: 'Code with me',
    icon: dateIcon,
    path: '/codewithme',
    items: [
      {
        id: MENUS.Home,
        label: 'Home',
        path: '/home',
      },
      {
        id: MENUS.Notification,
        label: 'Notification',
        path: '/notification',
      },
    ],
  },
  {
    id: MENUS.Components,
    label: 'Components',
    icon: dateIcon,
    path: '/components',
    items: [
      {
        id: MENUS.Button,
        label: 'Button',
        path: '/components/button',
      },
      {
        id: MENUS.TextField,
        label: 'TextField',
        path: '/components/text-field',
      },
    ],
  },
];

export const sidebarAccessRoles = [
  {
    id: MENUS.Home,
    roles: [ROLES.SystemAdmin, ROLES.Admin, ROLES.Manager, ROLES.Staff],
  },

  {
    id: MENUS.Notification,
    roles: [ROLES.SystemAdmin, ROLES.Admin, ROLES.Manager],
  },
  {
    id: MENUS.Button,
    roles: [ROLES.SystemAdmin, ROLES.Admin],
  },
  {
    id: MENUS.TextField,
    roles: [ROLES.SystemAdmin, ROLES.Admin],
  },
  {
    id: MENUS.Home,
    roles: [ROLES.SystemAdmin, ROLES.Admin, ROLES.Manager, ROLES.Staff],
  },
];
