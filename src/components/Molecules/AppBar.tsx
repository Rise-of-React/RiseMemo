import { Grid, IconButton, makeStyles } from '@material-ui/core';
import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import ViewListIcon from '@material-ui/icons/ViewList';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { CustomDrawer } from '../CustomDrawer';
import { BarMenu } from './BarMenu';
import { CustomChip } from '../Atoms/CustomChip';
import { Link } from 'react-router-dom';

const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    direction: 'ltr',
  },
  icon: {
    color: theme.palette.text.primary,
  },
}));

// const routes = [
//   {
//     path: '/',
//     exact: true,
//     sidebar: () => <div>home!</div>,
//     main: () => <h2>Home</h2>,
//   },
//   {
//     path: '/menu',
//     sidebar: () => <div>bubblegum!</div>,
//     main: () => <h2>Bubblegum</h2>,
//   },
//   {
//     path: '/shoelaces',
//     sidebar: () => <div>shoelaces!</div>,
//     main: () => <h2>Shoelaces</h2>,
//   },
// ];

interface AppBarProps {
  title?: string;
}

export const AppBar = (props: AppBarProps) => {
  const { title } = props;
  const classes = useStyle();

  const [open, setOpen] = React.useState<boolean>(false);

  const onClose = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <React.Fragment>
      <Grid container direction="row" justify="space-between">
        <Grid item></Grid>
        <Grid item>
          <BarMenu>
            <Link to={'/'} style={{ textDecoration: 'none' }}>
              <CustomChip label={'Home'} icon={<HomeIcon className={classes.icon} />} onClick={() => {}} />
            </Link>
            <Link to={'/list'} style={{ textDecoration: 'none' }}>
              <CustomChip label={'List'} icon={<ViewListIcon className={classes.icon} />} onClick={() => {}} />
            </Link>
            <Link to={'/board'} style={{ textDecoration: 'none' }}>
              <CustomChip label={'Board'} icon={<DashboardIcon className={classes.icon} />} onClick={() => {}} />
            </Link>
          </BarMenu>
        </Grid>
        <Grid item>
          <IconButton onClick={() => setOpen(true)} size="medium">
            <MenuIcon />
          </IconButton>
        </Grid>
      </Grid>

      <CustomDrawer isOpen={open} onClose={onClose} />
    </React.Fragment>
  );
};
