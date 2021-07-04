import { Grid, IconButton } from '@material-ui/core';
import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { CustomDrawer } from '../CustomDrawer';
import { Menu } from '../Molecules/Menu';

export interface HeaderProps {}

export const Header = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  const onClose = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <React.Fragment>
      <Grid container direction="row" justify="space-between">
        <Grid item></Grid>
        <Grid item>
          <Menu />
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
