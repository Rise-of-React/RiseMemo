import { Card, CardContent, Grid, makeStyles, Typography } from '@material-ui/core';

export interface WidgetProps {
  width: number;
  height: number;
  title?: string;
  value?: string;
}

const useStyle = makeStyles((theme) => ({
  card: (props: WidgetProps) => ({
    backgroundColor: theme.palette.background.paper,
    width: props.width,
    height: props.height,
    borderRadius: 15,
    color: theme.palette.text.hint,
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 'bold',
  }),
}));

export const Widget = (props: WidgetProps) => {
  const classes = useStyle(props);

  return (
    <Card className={classes.card}>
      <CardContent>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item style={{ paddingBottom: 15 }}>
            <Typography variant="h5">{props.title}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h3">{props.value}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

Widget.defaultProps = {
  width: 392,
  height: 142,
  title: 'Card',
  value: '0',
};
