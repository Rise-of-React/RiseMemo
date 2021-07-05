import { Grid } from '@material-ui/core';
import React from 'react';
import { DatePlate } from '../Atoms/DatePlate';

const PLATE_ROW = 7;
const PLATE_COLUMNS = 6;

export const CalanderPlate = () => {
  return (
    <React.Fragment>
      <Grid container direction="column">
        {Array.from(Array(PLATE_COLUMNS)).map((_, index) => {
          return (
            <Grid item xs={12} container direction="row">
              {Array.from(Array(PLATE_ROW)).map((_, index) => {
                return (
                  <Grid item>
                    <DatePlate key={index} />
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
