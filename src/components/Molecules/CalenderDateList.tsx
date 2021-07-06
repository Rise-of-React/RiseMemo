import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { dateList } from '../../utils/date';

export interface CalenderDateListProps {
  width: number;
  height: number;
}

const useStyle = makeStyles((theme) => ({
  dateTitle: (props: CalenderDateListProps) => ({
    width: props.width,
    height: props.height,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: theme.palette.grey[500],
  }),
}));

export const CalenderDateList = (props: CalenderDateListProps) => {
  const classes = useStyle(props);
  return (
    <Grid container direction="row">
      {Object.values(dateList).map((date) => (
        <Grid item className={classes.dateTitle} container alignItems="center" justify="center">
          <Typography>{date}</Typography>
        </Grid>
      ))}
    </Grid>
  );
};

CalenderDateList.defaultProps = {
  width: 184,
  height: 35,
};
