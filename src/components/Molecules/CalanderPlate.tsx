import { Grid } from '@material-ui/core';
import React from 'react';
import { DatePlate } from '../Atoms/DatePlate';

const PLATE_ROW = 7;
const PLATE_COLUMNS = 6;

export const CalanderPlate = () => {
  return (
    <React.Fragment>
      <Grid container>
        {Array.from(Array(PLATE_COLUMNS)).map((_, index) => {
          return Array.from(Array(PLATE_ROW)).map((_, index) => {
            return <DatePlate key={index} />;
          });
        })}
      </Grid>
    </React.Fragment>
  );
};
