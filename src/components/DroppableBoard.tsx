import { Grid } from '@material-ui/core';
import React, { FC } from 'react';
import { DragDropContext, Droppable, DropResult, ResponderProvided } from 'react-beautiful-dnd';
import { Board } from '../types/board/board';
import { CustomBoard } from './CustomBoard';
import { DraggableList } from './DraggableList';

interface DroppableBoardProps {}

const boardData: Board = {
  todo: {
    id: '1',
    name: 'To do',
    boardStyle: {
      width: '452',
      height: '865',
      backgroundColor: '#E1C3F0',
    },
    cardStyle: { width: '392', height: '112', backgroundColor: '#CE97E8' },
    data: [
      { id: '001', title: 'Study React', subTitle: 'VirtualDom', content: 'test' },
      { id: '002', title: 'Move To Seoul', subTitle: 'buy Bus Ticket', content: 'test2' },
      { id: '003', title: 'Buy Food', subTitle: 'Buy Some Eggs', content: 'test3' },
    ],
  },
  progress: {
    id: '2',
    name: 'Process',
    boardStyle: {
      width: '452',
      height: '865',
      backgroundColor: '#B671DA',
    },
    cardStyle: { width: '392', height: '112', backgroundColor: '#A024DA' },
    data: [{ id: '004', title: 'Take a Shower', subTitle: '', content: 'test3' }],
  },
  complete: {
    id: '3',
    name: 'Complete',
    boardStyle: {
      width: '452',
      height: '865',
      backgroundColor: '#613678',
    },
    cardStyle: { width: '392', height: '112', backgroundColor: '#7E4F94' },
    data: [],
  },
};

export const DroppableBoard: FC<DroppableBoardProps> = ({}) => {
  const [board, setBoard] = React.useState<Board>(boardData);

  const onDragEnd = (result: DropResult, provided: ResponderProvided) => {
    const { source, destination } = result;
    if (destination && source.droppableId !== destination.droppableId) {
      const sourceData = [...board[source.droppableId].data];
      const destinationData = [...board[destination.droppableId].data];

      const [moveData] = sourceData.splice(source.index, 1);
      destinationData.splice(destination.index, 0, moveData);

      setBoard({
        ...board,
        [source.droppableId]: {
          ...board[source.droppableId],
          data: sourceData,
        },
        [destination.droppableId]: {
          ...board[destination.droppableId],
          data: destinationData,
        },
      });
    } else if (destination) {
      const destinationData = [...board[source.droppableId].data];
      const [moveData] = destinationData.splice(source.index, 1);
      destinationData.splice(destination.index, 0, moveData);
      setBoard({
        ...board,
        [source.droppableId]: {
          ...board[source.droppableId],
          data: destinationData,
        },
      });
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {Object.entries(board).map(([title, listData]) => {
        return (
          <Droppable key={title} droppableId={title}>
            {(provided, snapshot) => {
              return (
                <Grid item xs={4}>
                  <CustomBoard
                    style={listData.boardStyle}
                    children={
                      <DraggableList
                        provided={provided}
                        snapshot={snapshot}
                        data={listData.data}
                        cardStyle={listData.cardStyle}
                        boardStyle={listData.boardStyle}
                      />
                    }
                  />
                </Grid>
              );
            }}
          </Droppable>
        );
      })}
    </DragDropContext>
  );
};
