import { Card, Grid, makeStyles } from '@material-ui/core';

export interface GraphWidgetProps {
  width?: number;
  height: number;
}

const useStyle = makeStyles(() => ({
  graphArea: (props: GraphWidgetProps) => ({}),
}));

export const GraphWidget = (props: GraphWidgetProps) => {
  const classes = useStyle(props);

  return (
    <Card>
      <Grid container>
        <Grid item xs={10}></Grid>
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
