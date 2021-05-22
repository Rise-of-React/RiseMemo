import { Grid, makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import { AppBar } from '../components/Atoms/AppBar';
import { CustomTypoGraphy } from '../components/Atoms/CustomTypography';
import { Board } from '../components/Board';
import { DragBoard } from '../components/DragBoard';

const tempData = {
  1: { content: 'test', top: 20, left: 80 },
  2: { content: 'test2', top: 40, left: 80 },
  3: { content: 'tes3t', top: 60, left: 80 },
};

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
        <Grid item xs={4}>
          <DragBoard key={1} data={tempData} height={800} title="To do" />
        </Grid>
        <Grid item xs={4}>
          <DragBoard key={2} data={tempData} height={800} title="In progress" />
        </Grid>
        <Grid item xs={4}>
          <DragBoard key={3} data={tempData} height={800} title="Done" />
        </Grid>
      </Grid>
    </>
  );
}
