import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { AppBar } from './components/Atoms/AppBar';
import { DroppableBoard } from './components/DroppableBoard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  board: {
    height: 800,
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <>
      <AppBar />
      <Grid container spacing={2} className={classes.root}>
        <DroppableBoard></DroppableBoard>
      </Grid>
    </>
  );
}
