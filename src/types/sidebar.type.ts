import React from 'react';

import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

interface IMenuCommon {
  id: string;
  label: string;
  path: string;
}

export type IMenuItem = Required<IMenuCommon> & {
  icon?: string;
};

export interface IMenu extends IMenuCommon {
  icon?: string;
  items?: IMenu[];
}
