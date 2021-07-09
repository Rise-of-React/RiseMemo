import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import dateformat from 'dateformat';

export interface GraphHeaderProps {
  currentDate: Date;
}

const useStyle = makeStyles((theme) => ({
  headTitle: {
    fontWeight: 'bold',
    color: theme.palette.text.hint,
  },
  subTitle: {
    color: theme.palette.text.hint,
  },
  labelOne: {
    color: theme.palette.text.hint,
  },
  labelTwo: {
    color: theme.palette.text.hint,
  },
}));

const ColoredLine = ({ color }: any) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 3,
      border: 'none',
      width: 30,
    }}
  />
);

export const GraphHeader = (props: GraphHeaderProps) => {
  const classes = useStyle();

  return (
    <Box display="flex" justifyContent="space-between">
      <Grid item container direction="column">
        <Grid item>
          <Typography className={classes.headTitle} variant="h5">
            Today's trends
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.subTitle} variant="caption">
            as of {dateformat(props.currentDate, 'dddd, mmmm dS, yyyy, h:MM:ss TT')}
          </Typography>
        </Grid>
      </Grid>
      <Grid item container direction="row" alignItems="center" justify="center">
        <Grid item style={{ marginRight: 10 }}>
          <ColoredLine color="#d050f7" />
        </Grid>
        <Grid item style={{ marginRight: 10 }}>
          <Typography className={classes.labelOne} variant="caption">
            Today
          </Typography>
        </Grid>
        <Grid item style={{ marginRight: 10 }}>
          <ColoredLine color="#d050f7" />
        </Grid>
        <Grid item style={{ marginRight: 10 }}>
          <Typography className={classes.labelOne} variant="caption">
            Yesterday
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

GraphHeader.defaultProps = {
  currentDate: new Date(),
};
