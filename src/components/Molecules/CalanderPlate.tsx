import { Grid } from '@material-ui/core';
import React from 'react';
import {
  dateList,
  getBeforeMonthList,
  getCalanderDateList,
  getFirstDay,
  getLastDay,
  getNameOfDate,
} from '../../utils/date';
import { DatePlate } from '../Atoms/DatePlate';

const PLATE_ROW = 7;
const PLATE_COLUMNS = 6;
const TOTAL = 42;

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
                    <DatePlate key={rowIndex} dateName={dateList[PLATE_COLUMNS]} date={date} />
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
