import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const useStyle = makeStyles((theme) => ({
  title: {
    color: theme.palette.text.primary,
  },
}));

export const StepTwo = () => {
  const classes = useStyle();
  const [startDate, setStartDate] = React.useState<Date | null>(new Date());
  const [endDate, setEndDate] = React.useState<Date | null>(new Date());

  const handleChange = React.useCallback(
    (date: Date | null, isStart: boolean) => {
      isStart ? setStartDate(date) : setEndDate(date);
    },
    [setStartDate, setEndDate]
  );

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid style={{ height: 250 }}>
        <Typography variant="subtitle2" className={classes.title}>
          Start Date
        </Typography>
        <KeyboardDatePicker
          margin="normal"
          format="MM/dd/yyyy"
          value={startDate}
          onChange={(date) => {
            handleChange(date, true);
          }}
        />

        <Typography variant="subtitle2" className={classes.title}>
          End Date
        </Typography>
        <KeyboardDatePicker
          margin="normal"
          format="MM/dd/yyyy"
          value={endDate}
          onChange={(date) => {
            handleChange(date, false);
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
};
