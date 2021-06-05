import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import logo from '../../images/icon.jpg';

const useStyle = makeStyles((theme) => ({
  root: {
    height: 75,
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

  return (
    <div className={classes.root}>
      <img src={logo} width={75} height={75} />
      <Typography variant={'h2'}>{title ?? defaultAppBar.title}</Typography>
    </div>
  );
};
