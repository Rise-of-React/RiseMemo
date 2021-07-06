import { Grid } from '@material-ui/core';
import { CalanderMonth } from '../Atoms/CalanderMonth';
import { CalanderDateList } from '../Molecules/CalanderDateList';
import { CalanderPlate } from '../Molecules/CalanderPlate';

export const Calander = () => {
  return (
    <Grid container style={{ width: 1293 }}>
      <CalanderMonth month={7} year={2021} />
      <CalanderDateList />
      <CalanderPlate month={7} year={2021} />
    </Grid>
  );
};
