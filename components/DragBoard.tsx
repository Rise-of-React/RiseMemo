import { Box, Divider, Grid, List, Paper } from '@material-ui/core';
import React from 'react';
import { CustomTypoGraphy } from './Atoms/CustomTypography';
import { MemoData, MemoItem } from './MemoItem';
import update from 'immutability-helper';
import { useDrop, XYCoord } from 'react-dnd';
import { DragListItem } from './DragListItem';

export interface DragBoardProps {
  data: MemoData;
  height?: number;
  title: string;
}

interface DragItem {
  left: number;
  top: number;
  id: string;
}

export const DragBoard = <T extends unknown>({ data, height, title }: DragBoardProps) => {
  const [memoList, setMemoList] = React.useState<MemoData>({
    1: { content: 'test', top: 20, left: 80 },
    2: { content: 'test2', top: 40, left: 80 },
    3: { content: 'tes3t', top: 60, left: 80 },
  });

  const moveList = React.useCallback(
    (id: string, left: number, top: number) => {
      setMemoList(
        update(memoList, {
          [id]: {
            $merge: { left, top },
          },
        })
      );
    },
    [memoList, setMemoList]
  );

  const [, drop] = useDrop(
    () => ({
      accept: 'ListItem',
      drop(item: DragItem, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset() as XYCoord;
        const left = Math.round(item.left + delta.x);
        const top = Math.round(item.top + delta.y);
        moveList(item.id, left, top);
        return undefined;
      },
    }),
    [moveList]
  );

  return (
    <Paper style={{ padding: 15 }}>
      <CustomTypoGraphy title={title} />
      <Paper elevation={3}>
        <Grid container alignItems={'stretch'} direction={'column'}>
          <Box width={1}>
            <List style={{ height: height }} ref={drop}>
              {Object.keys(data).map((key) => {
                console.log(memoList[key]);
                const { left, top, content } = memoList[key];
                return (
                  <DragListItem key={key} id={key} left={left} top={top}>
                    {content}
                  </DragListItem>
                );
              })}
            </List>
          </Box>
        </Grid>
      </Paper>
    </Paper>
  );
};
