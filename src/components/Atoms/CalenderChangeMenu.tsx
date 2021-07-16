import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import React from 'react';
import { makeStyles } from '@material-ui/core';

export interface CalenderChangeMenuProps {}

const useStyle = makeStyles((theme) => ({
  button: (props: CalenderChangeMenuProps) => ({
    color: theme.palette.primary.main,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    borderColor: theme.palette.primary.main,
    '& .MuiOutlinedInput-root': {
      color: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
    },
    '& .MuiInputBase-root': {
      '& fieldset': {
        borderColor: theme.palette.primary.main,
      },
      '&:hover fieldset': {
        borderColor: theme.palette.primary.dark,
      },
    },
  }),
}));

export const CalenderChangeMenu = (props: CalenderChangeMenuProps) => {
  const classes = useStyle(props);
  const [date, setDate] = React.useState<Date | null>(new Date());

  const handleChange = React.useCallback(
    (date: Date | null) => {
      setDate(date);
    },
    [setDate]
  );

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        autoOk
        variant="inline"
        inputVariant="outlined"
        format="MM/dd/yyyy"
        InputAdornmentProps={{ position: 'start' }}
        value={date}
        onChange={handleChange}
        className={classes.button}
      />
    </MuiPickersUtilsProvider>
  );
};
