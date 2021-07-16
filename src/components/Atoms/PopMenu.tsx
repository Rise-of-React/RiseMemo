import { makeStyles, Menu, MenuItem } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react';

export interface PopMenuProps {
  open: boolean;
  anchorEl: null | Element;
  isEdit?: boolean;
  isDelete?: boolean;
  onClose: () => void;
  onOpenDelete?: () => void;
}

const useStyles = makeStyles((theme) => ({
  deleteIcon: { color: theme.palette.primary.main },
  editIcon: { color: theme.palette.primary.main },
  menuItem: {
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
  },
}));

export const PopMenu = (props: PopMenuProps) => {
  const classes = useStyles();
  const { open, anchorEl, isEdit, isDelete, onClose, onOpenDelete } = props;

  return (
    <Menu open={open} onClose={onClose} anchorEl={anchorEl}>
      {isEdit && (
        <MenuItem className={classes.menuItem}>
          <EditIcon className={classes.editIcon} />
        </MenuItem>
      )}
      {isDelete && (
        <MenuItem className={classes.menuItem} onClick={onOpenDelete}>
          <DeleteIcon className={classes.deleteIcon} />
        </MenuItem>
      )}
    </Menu>
  );
};

PopMenu.defaultProps = {
  open: true,
  isEdit: true,
  isDelete: true,
  onClose: () => {},
  onOpenDelete: () => {},
};
