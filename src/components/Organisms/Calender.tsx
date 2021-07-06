import { Grid } from '@material-ui/core';
import { CalenderMonth } from '../Atoms/CalenderMonth';
import { CalenderDateList } from '../Molecules/CalenderDateList';
import { CalenderPlate } from '../Molecules/CalenderPlate';

export const Calender = () => {
  return (
    <Grid container style={{ width: 1293 }}>
      <CalenderMonth month={7} year={2021} />
      <CalenderDateList />
      <CalenderPlate month={7} year={2021} />
    </Grid>
  );
};
