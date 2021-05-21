import { Grid, makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import { AppBar } from '../components/Atoms/AppBar';
import { CustomTypoGraphy } from '../components/Atoms/CustomTypography';
import { Board } from '../components/Board';

const tempData = [{ content: 'test' }, { content: 'test' }, { content: 'test' }];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <AppBar />
      <Grid container spacing={2} className={classes.root}>
        <Grid item xs={4}>
          <CustomTypoGraphy title="ToDo" />
          <Board data={tempData} />
        </Grid>
        <Grid item xs={4}>
          <CustomTypoGraphy title="In progress" />
          <Board data={tempData} />
        </Grid>
        <Grid item xs={4}>
          <CustomTypoGraphy title="Done" />
          <Board data={tempData} />
        </Grid>
      </Grid>
    </>
  );
}
