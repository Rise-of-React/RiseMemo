import { Box, Grid, makeStyles, Typography } from '@material-ui/core';

export interface DatePlateProps {
  date: Date;
  width: number;
  height: number;
}

const useStyle = makeStyles((theme) => ({
  datePlate: (props: DatePlateProps) => ({
    width: props.width,
    height: props.height,
    color: theme.palette.text.primary,
    borderWidth: 1,
    borderColor: theme.palette.grey[300],
    borderStyle: 'solid',
  }),
  plate: {
    padding: 15,
  },
  font: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: theme.palette.grey[500],
  },
}));

export const DatePlate = (props: DatePlateProps) => {
  const classes = useStyle(props);

  return (
    <Box className={classes.datePlate}>
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
