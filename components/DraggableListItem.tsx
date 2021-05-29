import { ListItem } from '@material-ui/core';
import React, { FC } from 'react';
import { DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';
import { MemoData } from './MemoItem';

interface DraggableListItemProps {
  item: MemoData;
  provided: DraggableProvided;
  snapshop: DraggableStateSnapshot;
}

export const DraggableListItem: FC<DraggableListItemProps> = ({ item, provided, snapshop }) => {
  return (
    <ListItem ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
      {item.content}
    </ListItem>
  );
};
