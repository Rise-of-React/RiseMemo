import { List } from '@material-ui/core';
import React, { FC } from 'react';
import { Draggable, DroppableProvided, DroppableStateSnapshot } from 'react-beautiful-dnd';
import { DraggableListItem } from './DraggableListItem';
import { MemoData } from './MemoItem';

interface DraggableListProps {
  provided: DroppableProvided;
  snapshop: DroppableStateSnapshot;
  data: MemoData[];
}

export const DraggableList: FC<DraggableListProps> = ({ data, provided, snapshop }) => {
  return (
    <List {...provided.droppableProps} ref={provided.innerRef}>
      {data.map((el, index) => {
        return (
          <Draggable key={index} draggableId={index.toString()} index={index}>
            {(provided, snapshop) => {
              return <DraggableListItem provided={provided} snapshop={snapshop} item={el} key={index} />;
            }}
          </Draggable>
        );
      })}
    </List>
  );
};
