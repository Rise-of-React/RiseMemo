import { Grid } from '@material-ui/core';
import React from 'react';
import { Calender } from '../../types/calender/calender';
import { dateList, getCalenderDateList } from '../../utils/date';
import { DatePlate } from '../Atoms/DatePlate';

export interface CalenderPlateProps {
  month: number;
  year: number;
}

export const CalenderPlate = (props: CalenderPlateProps) => {
  const [CalenderDateList, setCalenderDateList] = React.useState<(Calender | undefined)[][]>(
    getCalenderDateList(props.month, props.year)
  );

  return (
    <React.Fragment>
      <Grid container direction="column">
        {CalenderDateList.map((rowDateList) => {
          return (
            <Grid item xs={12} container direction="row">
              {rowDateList.map((dData, rowIndex) => {
                return (
                  dData && (
                    <Grid item>
                      <DatePlate
                        key={dData.date ? dData.date.getTime() : rowIndex}
                        dateName={dateList[rowIndex]}
                        date={dData.date}
                        isCurrent={dData.isCurrent}
                      />
                    </Grid>
                  )
                );
              })}
            </Grid>
          );
        })}
      </Grid>
    </React.Fragment>
  );
};
