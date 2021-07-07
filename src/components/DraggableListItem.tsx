import { ListItem, Grid } from '@material-ui/core';
import React, { FC } from 'react';
import { DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';
import { CardStyleProps } from '../types/card/card';
import { MemoData } from '../types/memo/memo';
import { CustomCard } from './CustomCard';

export interface DraggableListItemProps {
  item: MemoData;
  provided: DraggableProvided;
  snapshop: DraggableStateSnapshot;
  cardStyle: CardStyleProps;
}

export const DraggableListItem: FC<DraggableListItemProps> = ({ item, cardStyle, provided, snapshop }) => {
  return (
    <ListItem
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      style={{
        ...provided.draggableProps.style,
      }}
    >
      <Grid container justify="center">
        <CustomCard title={item.title} subTitle={item.subTitle} style={cardStyle} />
      </Grid>
    </ListItem>
  );
};
