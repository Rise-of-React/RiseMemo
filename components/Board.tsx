import { Box, Divider, Grid, List, Paper } from '@material-ui/core';
import React from 'react';
import { CustomTypoGraphy } from './Atoms/CustomTypography';
import { MemoData, MemoItem } from './MemoItem';

export interface BoardProps {
  data: MemoData[];
  height?: number;
  title: string;
}

const defaultProps = {
  Heigth: 800,
};

export const Board = <T extends unknown>({ data, height, title }: BoardProps) => {
  return (
    <Paper style={{ padding: 15 }}>
      <CustomTypoGraphy title={title} />
      <Paper elevation={3}>
        <Grid container alignItems={'stretch'} direction={'column'}>
          <Box width={1}>
            <div style={{ height: height }}>
              {data.map((memo, index) => {
                return (
                  <div key={index}>
                    <MemoItem key={index} memoData={memo} />
                    <Divider />
                  </div>
                );
              })}
            </div>
          </Box>
        </Grid>
      </Paper>
    </Paper>
  );
};
