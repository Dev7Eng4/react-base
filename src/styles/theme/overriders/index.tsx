import { merge } from 'lodash';
import { deepmerge } from '@mui/utils';
import { Theme } from '@mui/material';

import Button from './Button';
import FormControlLabel from './FormControlLabel';
import TextField from './TextField';
import Select from './Select';
import Menu from './Menu';

const overrideComponents = (theme: Theme) => {
  return merge(
    TextField(theme),
    FormControlLabel(theme),
    Button(theme),
    Select(theme),
    Menu(theme),
  );
};

export default overrideComponents;
