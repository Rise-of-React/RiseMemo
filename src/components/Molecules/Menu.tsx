import { makeStyles } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import ViewListIcon from '@material-ui/icons/ViewList';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { CustomBreadcrumbs } from '../Atoms/CustomBreadcrumbs';
import { CustomChip } from '../Atoms/CustomChip';
import { Link } from 'react-router-dom';

const useStyle = makeStyles((theme) => ({
  icon: {
    color: theme.palette.text.primary,
  },
}));

interface MenuProps {}

export const Menu = (props: MenuProps) => {
  const classes = useStyle();

  return (
    <CustomBreadcrumbs>
      <Link to={'/'} style={{ textDecoration: 'none' }}>
        <CustomChip label={'Home'} icon={<HomeIcon className={classes.icon} />} onClick={() => {}} />
      </Link>
      <Link to={'/list'} style={{ textDecoration: 'none' }}>
        <CustomChip label={'List'} icon={<ViewListIcon className={classes.icon} />} onClick={() => {}} />
      </Link>
      <Link to={'/board'} style={{ textDecoration: 'none' }}>
        <CustomChip label={'Board'} icon={<DashboardIcon className={classes.icon} />} onClick={() => {}} />
      </Link>
    </CustomBreadcrumbs>
  );
};
