import { Grid } from '@material-ui/core';
import React from 'react';
import { DrawerMenu } from '../Atoms/DrawerMenu';
import { HomeDrawer } from './HomeDrawer';
import { Menu } from '../Molecules/Menu';

export interface HeaderProps {}

export const Header = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  const onClose = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <React.Fragment>
      <Grid container justify="center">
        <Menu />
      </Grid>
      <DrawerMenu onClick={() => setOpen(true)} />
      <HomeDrawer isOpen={open} onClose={onClose} />
    </React.Fragment>
  );
};
