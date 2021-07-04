import React from 'react';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

export interface DrawerMenuProps {
  onClick: () => void;
}

export const DrawerMenu = ({ onClick }: DrawerMenuProps) => {
  return (
    <IconButton onClick={onClick} size="medium">
      <MenuIcon />
    </IconButton>
  );
};
