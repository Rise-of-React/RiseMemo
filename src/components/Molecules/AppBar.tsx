import { Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { CustomDrawer } from '../CustomDrawer';
const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    direction: 'ltr',
  },
}));

interface AppBarProps {
  title?: string;
}

const defaultAppBar = {
  title: 'Rise of Memo',
};

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
        <Grid item>
          <Typography variant={'h2'}>{title ?? defaultAppBar.title}</Typography>
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
