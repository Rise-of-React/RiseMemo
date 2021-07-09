import { Card, Grid, makeStyles } from '@material-ui/core';
import { CanvasGraph } from '../Atoms/CanvasGraph';
import { GraphHeader } from '../Atoms/GraphHeader';

export interface GraphWidgetProps {
  width?: number;
  height: number;
}

const useStyle = makeStyles(() => ({
  card: {
    padding: 15,
  },
  graphArea: (props: GraphWidgetProps) => ({}),
}));

export const GraphWidget = (props: GraphWidgetProps) => {
  const classes = useStyle(props);

  return (
    <Card className={classes.card}>
      <Grid container>
        <Grid item>
          <GraphHeader />
          <CanvasGraph />
        </Grid>
        <Grid item xs={2}>
          <Grid container direction="column">
            <Grid item></Grid>
            <Grid item></Grid>
            <Grid item></Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};
