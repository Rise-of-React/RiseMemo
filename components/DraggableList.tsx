import { List } from '@material-ui/core';
import React, { FC } from 'react';
import { Draggable, DroppableProvided, DroppableStateSnapshot } from 'react-beautiful-dnd';
import { DraggableListItem } from './DraggableListItem';
import { MemoData } from './DroppableBoard';

interface DraggableListProps {
  provided: DroppableProvided;
  snapshot: DroppableStateSnapshot;
  data: MemoData[];
}

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
});

export const DraggableList: FC<DraggableListProps> = ({ data, provided, snapshot }) => {
  return (
    <List {...provided.droppableProps} ref={provided.innerRef} style={getListStyle(snapshot)}>
      {data.map((el, index) => {
        return (
          <Draggable key={el.id} draggableId={el.id} index={index}>
            {(provided, snapshop) => {
              return <DraggableListItem provided={provided} snapshop={snapshop} item={el} key={el.id} />;
            }}
          </Draggable>
        );
      })}
      {provided.placeholder}
    </List>
  );
};
