import { Grid } from '@material-ui/core';
import { CalanderDateList } from '../Molecules/CalanderDateList';
import { CalanderPlate } from '../Molecules/CalanderPlate';

export const Calander = () => {
  return (
    <Grid container style={{ width: 1293 }}>
      <CalanderDateList />
      <CalanderPlate />
    </Grid>
  );
};
