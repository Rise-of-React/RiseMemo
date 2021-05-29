import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { AppBar } from '../components/Atoms/AppBar';
import { Board } from '../components/Board';
import { DroppableBoard } from '../components/DroppableBoard';

const tempData = [
  { content: 'test', top: 20, left: 80 },
  { content: 'test2', top: 40, left: 80 },
  { content: 'tes3t', top: 60, left: 80 },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  board: {
    height: 800,
  },
}));

export default function Home() {
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
