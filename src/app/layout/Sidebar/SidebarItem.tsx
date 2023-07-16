import { HorizontalRule } from '@mui/icons-material';
import { ListItemIcon, ListItemText, ListItemButton } from '@mui/material';
import { Link } from 'react-router-dom';

interface Props {
  label: string;
  path: string;
}

const SidebarItem = ({ label, path }: Props) => {
  return (
    <Link to={path}>
      <ListItemButton>
        <ListItemIcon>
          <HorizontalRule />
        </ListItemIcon>
        <ListItemText primary={label} />
      </ListItemButton>
    </Link>
  );
};

export default SidebarItem;
