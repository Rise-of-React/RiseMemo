import { Grid } from '@material-ui/core';
import { CalenderMonth } from '../Atoms/CalenderMonth';
import { CalenderDateList } from '../Molecules/CalenderDateList';
import { CalenderPlate } from '../Molecules/CalenderPlate';

export const Calender = () => {
  return (
    <Grid container direction="column" justify="center" alignContent="center">
      <Grid item>
        <CalenderMonth month={7} year={2021} />
      </Grid>
      <Grid item>
        <CalenderDateList />
      </Grid>
      <Grid item>
        <CalenderPlate month={7} year={2021} />
      </Grid>
    </Grid>
  );
};
