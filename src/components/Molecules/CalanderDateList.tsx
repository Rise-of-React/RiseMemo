import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

export interface CalanderDateListProps {
  width: number;
  height: number;
}

const dateList = {
  Sunday: 'Sun',
  Monday: 'Mon',
  Tuesday: 'Tue',
  Wednesday: 'Wed',
  Thursday: 'Thu',
  Friday: 'Fri',
  Saturday: 'Sat',
};

const useStyle = makeStyles((theme) => ({
  dateTitle: (props: CalanderDateListProps) => ({
    width: props.width,
    height: props.height,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: theme.palette.grey[500],
  }),
}));

export const CalanderDateList = (props: CalanderDateListProps) => {
  const classes = useStyle(props);
  return (
    <Grid container direction="row" justify="center">
      {Object.values(dateList).map((date) => (
        <Grid item className={classes.dateTitle}>
          <Typography>{date}</Typography>
        </Grid>
      ))}
    </Grid>
  );
};

CalanderDateList.defaultProps = {
  width: 150,
  height: 35,
};
