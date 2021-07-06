import { Grid } from '@material-ui/core';
import React from 'react';
import { dateList, getCalanderDateList } from '../../utils/date';
import { DatePlate } from '../Atoms/DatePlate';

export interface CalanderPlateProps {
  month: number;
  year: number;
}

export const CalanderPlate = (props: CalanderPlateProps) => {
  const [calanderDateList, setCalanderDateList] = React.useState<(Date | undefined)[][]>(
    getCalanderDateList(props.month, props.year)
  );

  return (
    <React.Fragment>
      <Grid container direction="column">
        {calanderDateList.map((rowDateList) => {
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
