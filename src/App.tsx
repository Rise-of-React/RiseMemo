import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { AppBar } from './components/Atoms/AppBar';
import { DroppableBoard } from './components/DroppableBoard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <>
      <AppBar />
      <Grid container className={classes.root}>
        <DroppableBoard />
      </Grid>
    </>
  );
}
