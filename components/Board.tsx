import { Box, Divider, Grid, List, Paper } from '@material-ui/core';
import React from 'react';
import { MemoData, MemoItem } from './MemoItem';

export interface BoardProps {
  data: MemoData[];
}

export const Board = <T extends unknown>({ data }: BoardProps) => {
  return (
    <Paper elevation={3}>
      <Grid container alignItems={'flex-start'} direction={'column'}>
        <Box width={1}>
          <List>
            {data.map((memo, index) => {
              return (
                <>
                  <MemoItem key={index} memoData={memo} />
                  <Divider />
                </>
              );
            })}
          </List>
        </Box>
      </Grid>
    </Paper>
  );
};
