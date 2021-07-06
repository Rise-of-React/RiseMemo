import { Grid } from '@material-ui/core';
import React from 'react';
import { dateList, getCalenderDateList } from '../../utils/date';
import { DatePlate } from '../Atoms/DatePlate';

export interface CalenderPlateProps {
  month: number;
  year: number;
}

export const CalenderPlate = (props: CalenderPlateProps) => {
  const [CalenderDateList, setCalenderDateList] = React.useState<(Date | undefined)[][]>(
    getCalenderDateList(props.month, props.year)
  );

  return (
    <React.Fragment>
      <Grid container direction="column">
        {CalenderDateList.map((rowDateList) => {
          return (
            <Grid item xs={12} container direction="row">
              {rowDateList.map((date, rowIndex) => {
                return (
                  <Grid item>
                    <DatePlate key={date ? date.getTime() : rowIndex} dateName={dateList[rowIndex]} date={date} />
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
