import { Card, Divider, Grid, List, ListItem, makeStyles, Typography } from '@material-ui/core';
import { CanvasGraph } from '../Atoms/CanvasGraph';
import { GraphHeader } from '../Atoms/GraphHeader';

export interface GraphWidgetProps {
  width?: number;
  height: number;
}

const useStyle = makeStyles((theme) => ({
  card: {
    padding: 15,
  },
  divider: {
    background: theme.palette.grey[200],
    width: 2,
  },
  cardArea: (props: GraphWidgetProps) => ({
    width: props.width,
    height: props.height,
  }),
  title: {
    color: theme.palette.text.hint,
    fontWeight: 'bold',
  },
  value: {
    color: theme.palette.text.hint,
    fontWeight: 'bold',
  },
}));

const tempData = [
  { title: 'Todo', value: 449 },
  { title: 'Progress', value: 426 },
  { title: 'Complete', value: 33 },
  { title: 'Completed This Month', value: 8 },
  { title: 'Percentage to Complete', value: '94%' },
];

export const GraphWidget = (props: GraphWidgetProps) => {
  const classes = useStyle(props);

  return (
    <Card className={classes.cardArea}>
      <Grid container>
        <Grid item className={classes.card}>
          <GraphHeader />
          <CanvasGraph />
        </Grid>
        <Divider className={classes.divider} orientation={'vertical'} flexItem light />
        <Grid item>
          <List style={{ width: 325 }}>
            {tempData.map((list, index) => (
              <div key={index}>
                <ListItem style={{ height: 106 }}>
                  <Grid container direction="column" justify="center" alignItems="center">
                    <Grid item style={{ paddingBottom: 15 }}>
                      <Typography className={classes.title} variant="h5">
                        {list.title}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography className={classes.value} variant="h6">
                        {list.value}
                      </Typography>
                    </Grid>
                  </Grid>
                </ListItem>
                <Divider />
              </div>
            ))}
          </List>
        </Grid>
      </Grid>
    </Card>
  );
};

GraphWidget.defaultProps = {
  width: 1700,
  height: 546,
};
