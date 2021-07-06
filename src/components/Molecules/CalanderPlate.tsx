import { Grid } from '@material-ui/core';
import React from 'react';
import { dateList, getCalanderDateList } from '../../utils/date';
import { DatePlate } from '../Atoms/DatePlate';

export const CalanderPlate = () => {
  const [calanderDateList, setCalanderDateList] = React.useState<(Date | undefined)[][]>(getCalanderDateList(7, 2021));

  return (
    <React.Fragment>
      <Grid container direction="column">
        {calanderDateList.map((rowDateList, ColumnIndex) => {
          return (
            <Grid item xs={12} container direction="row" key={ColumnIndex}>
              {rowDateList.map((date, rowIndex) => {
                return (
                  <Grid item>
                    <DatePlate key={rowIndex} dateName={dateList[rowIndex]} date={date} />
                  </Grid>
                );
              })}
            </Grid>
          );
        })}
      </Grid>
    </React.Fragment>
  );
};
