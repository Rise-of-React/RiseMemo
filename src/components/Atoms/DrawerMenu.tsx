import React from 'react';
import { IconButton, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

export interface DrawerMenuProps {
  onClick: () => void;
}
const useStyle = makeStyles((theme) => ({
  menu: {
    width: 50,
    height: 50,
    position: 'fixed',
    right: 0,
  },
}));

export const DrawerMenu = ({ onClick }: DrawerMenuProps) => {
  const classes = useStyle();
  return (
    <IconButton className={classes.menu} onClick={onClick} size="medium">
      <MenuIcon fontSize={'large'} />
    </IconButton>
  );
};
