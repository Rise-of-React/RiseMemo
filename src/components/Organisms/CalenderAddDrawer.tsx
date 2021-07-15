import { Drawer, Grid, makeStyles, Typography } from '@material-ui/core';
import { CalenderStepper } from '../Molecules/CalenderStepper';

export interface CalenderAddDrawerProps {
  open: boolean;
  onClose: () => void;
}

const useStyles = makeStyles((theme) => ({
  paperAnchorBottom: {
    margin: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: 867,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: theme.palette.primary.main,
  },
}));

export const CalenderAddDrawer = (props: CalenderAddDrawerProps) => {
  const classes = useStyles();
  const { open, onClose } = props;

  return (
    <Drawer anchor={'bottom'} open={open} onClose={onClose} classes={{ paperAnchorBottom: classes.paperAnchorBottom }}>
      <Grid container direction="column">
        <Grid item style={{ padding: 15 }}>
          <Typography variant="h4">Create</Typography>
        </Grid>
        <Grid item>
          <CalenderStepper onClose={onClose} />
        </Grid>
      </Grid>
    </Drawer>
  );
};

CalenderAddDrawer.defaultProps = {
  open: true,
  onClose: () => {},
};
