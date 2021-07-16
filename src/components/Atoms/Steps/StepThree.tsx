import { Grid, makeStyles, Typography } from '@material-ui/core';
import { getFormattedDate } from '../../../utils/date';

const useStyle = makeStyles((theme) => ({
  title: {
    color: theme.palette.text.primary,
  },
  body: {
    color: theme.palette.text.primary,
  },
}));

export interface StepThreeProps {
  startDate: Date;
  endDate: Date;
  title: string;
}

export const StepThree = (props: StepThreeProps) => {
  const classes = useStyle();
  const { startDate, endDate, title } = props;

  return (
    <Grid style={{ height: 250 }}>
      <div style={{ paddingBottom: 30 }}>
        <Typography variant="subtitle2" className={classes.title}>
          Title
        </Typography>
        <Typography variant="body2" className={classes.body}>
          {title}
        </Typography>
      </div>
      <div>
        <Typography variant="subtitle2" className={classes.title}>
          Date Info
        </Typography>
        <Typography variant="body2" className={classes.body}>
          start date : {getFormattedDate(startDate)}
        </Typography>
        <Typography variant="body2" className={classes.body}>
          start date : {getFormattedDate(endDate)}
        </Typography>
      </div>
    </Grid>
  );
};

StepThree.defaultProps = {
  startDate: new Date(),
  endDate: new Date(),
  title: 'calender title name',
};
