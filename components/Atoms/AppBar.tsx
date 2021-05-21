import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyle = makeStyles(theme => ({
  root: {
    height:300,
    display:'flex',
  }
}))

interface AppBarProps {
  title? : string;
}

const defaultAppBar = {
  title: 'Rise of Memo'
}

export const AppBar = (props: AppBarProps) => {
  const {title} = props;
  const classes = useStyle();
  return <div className={classes.root}>
  <Typography variant={'h2'}>{title ?? defaultAppBar.title}</Typography>
  </div>
}