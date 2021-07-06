import { Box, Grid, makeStyles, Typography } from '@material-ui/core';

export interface DatePlateProps {
  date: Date;
  width: number;
  height: number;
  isBeforeMonth?: boolean;
  isAfterMonth?: boolean;
  dateName?: string;
  firstDay?: Date;
  lastDay?: Date;
  isCurrent?: boolean;
}

const useStyle = makeStyles((theme) => ({
  datePlate: (props: DatePlateProps) => ({
    width: props.width,
    height: props.height,
    color: theme.palette.text.primary,
    borderWidth: 1,
    borderColor: theme.palette.primary.light,
    borderStyle: 'solid',
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      cursor: 'pointer',
      borderWidth: 1,
      borderColor: theme.palette.primary.dark,
      borderStyle: 'solid',
      color: theme.palette.text.primary,
    },
  }),
  plate: {
    padding: 15,
  },
  font: (props: DatePlateProps) => ({
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: props.isCurrent ? 'bold' : 'normal',
    color: props.isCurrent ? theme.palette.text.secondary : theme.palette.grey[500],
  }),
}));

export const DatePlate = (props: DatePlateProps) => {
  const classes = useStyle(props);

  return (
    <Box
      className={classes.datePlate}
      onClick={() => {
        console.log(props.dateName);
      }}
    >
      <Grid container className={classes.plate}>
        <Typography className={classes.font}>{props.date.getDate()}</Typography>
      </Grid>
    </Box>
  );
};

DatePlate.defaultProps = {
  date: new Date(),
  width: 182,
  height: 114,
};
