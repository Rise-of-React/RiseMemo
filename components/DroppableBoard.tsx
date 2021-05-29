import { Grid } from '@material-ui/core';
import React, { FC } from 'react';
import { DragDropContext, Droppable, DropResult, ResponderProvided } from 'react-beautiful-dnd';
import { DraggableList } from './DraggableList';

interface DroppableBoardProps {}

type BoardObject = {
  id: string;
  name: string;
};

const boardList: BoardObject[] = [
  { id: '1', name: 'To do' },
  { id: '1', name: 'Process' },
  { id: '1', name: 'Complete' },
];

const tempData = [
  { content: 'test', top: 20, left: 80 },
  { content: 'test2', top: 40, left: 80 },
  { content: 'tes3t', top: 60, left: 80 },
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
            {(provided, snapshop) => {
              return (
                <Grid item xs={4}>
                  <DraggableList provided={provided} snapshop={snapshop} data={tempData} />
                </Grid>
              );
            }}
          </Droppable>
        );
      })}
    </DragDropContext>
  );
};
