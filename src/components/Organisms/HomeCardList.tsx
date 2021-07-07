import { Grid, makeStyles } from '@material-ui/core';
import { defaultHomeCardObject, HomeCardObject } from '../../types/home/types';
import { Widget } from '../Molecules/Widget';

export interface HomeCardListProps {
  values?: HomeCardObject;
}

const useStyle = makeStyles((theme) => ({
  homeCard: {
    padding: 30,
  },
}));

export const HomeCardList = (props: HomeCardListProps) => {
  const classes = useStyle();
  const { values } = props;
  return (
    <Grid container>
      {Object.entries(values ? values : defaultHomeCardObject).map((value) => {
        return (
          <Grid item key={value[0]} className={classes.homeCard}>
            <Widget value={value[1]} title={value[0]} />
          </Grid>
        );
      })}
    </Grid>
  );
};
