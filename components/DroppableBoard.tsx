import { Grid } from '@material-ui/core';
import React, { FC } from 'react';
import { DragDropContext, Droppable, DropResult, ResponderProvided } from 'react-beautiful-dnd';
import { DraggableList } from './DraggableList';

interface DroppableBoardProps {}

type BoardObject = {
  id: string;
  name: string;
  data: MemoData[];
};

export type MemoData = {
  id: string;
  content: string;
};

const boardList: BoardObject[] = [
  {
    id: '1',
    name: 'To do',
    data: [
      { id: '001', content: 'tes1t' },
      { id: '002', content: 'test2' },
      { id: '003', content: 'tes3t' },
    ],
  },
  {
    id: '2',
    name: 'Process',
    data: [
      { id: '004', content: 'test' },
      { id: '005', content: 't2' },
      { id: '006', content: 'te3t' },
    ],
  },
  {
    id: '3',
    name: 'Complete',
    data: [
      { id: '007', content: 'tet' },
      { id: '008', content: 'tes' },
      { id: '009', content: 'ts3t' },
    ],
  },
];

const tempData = [
  { content: 'test', top: 20, left: 80 },
  { content: 'test2', top: 40, left: 80 },
  { content: 'test3', top: 60, left: 80 },
];

export const DroppableBoard: FC<DroppableBoardProps> = ({}) => {
  const onDragEnd = (result: DropResult, provided: ResponderProvided) => {
    console.log(result, provided);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {boardList.map((board) => {
        return (
          <Droppable key={board.id} droppableId={board.id}>
            {(provided, snapshot) => {
              return (
                <Grid item xs={4}>
                  <DraggableList provided={provided} snapshot={snapshot} data={board.data} />
                </Grid>
              );
            }}
          </Droppable>
        );
      })}
    </DragDropContext>
  );
};
