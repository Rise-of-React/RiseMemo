import { Grid } from '@material-ui/core';
import { CalenderChangeMenu } from '../Atoms/CalenderChangeMenu';
import { CalenderMonth } from '../Atoms/CalenderMonth';
import { CalenderDateList } from '../Molecules/CalenderDateList';
import { CalenderPlate } from '../Molecules/CalenderPlate';

export const Calender = () => {
  return (
    <Grid container direction="column" alignContent="center">
      <Grid item style={{ paddingBottom: 50 }}>
        <CalenderChangeMenu />
      </Grid>
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
