import { List } from '@material-ui/core';
import React, { FC } from 'react';
import { Draggable, DroppableProvided, DroppableStateSnapshot } from 'react-beautiful-dnd';
import { BoardStyleProps } from '../types/board/board';
import { CardStyleProps } from '../types/card/card';
import { MemoData } from '../types/memo/memo';
import { DraggableListItem } from './DraggableListItem';

interface DraggableListProps {
  provided: DroppableProvided;
  snapshot: DroppableStateSnapshot;
  data: MemoData[];
  cardStyle: CardStyleProps;
  boardStyle: BoardStyleProps;
}

const getListStyle = (snapshop: DroppableStateSnapshot, boardStyle: BoardStyleProps) => ({
  // background: snapshop.isDraggingOver ? '#613678' : 'lightgrey',
});

export const DraggableList: FC<DraggableListProps> = ({ data, provided, snapshot, cardStyle, boardStyle }) => {
  return (
    <List {...provided.droppableProps} ref={provided.innerRef} style={getListStyle(snapshot, boardStyle)}>
      {data.map((el, index) => {
        return (
          <Draggable key={el.id} draggableId={el.id ?? '1'} index={index}>
            {(provided, snapshop) => {
              return (
                <DraggableListItem
                  provided={provided}
                  snapshop={snapshop}
                  item={el}
                  key={el.id}
                  cardStyle={cardStyle}
                />
              );
            }}
          </Draggable>
        );
      })}
      {provided.placeholder}
    </List>
  );
};
