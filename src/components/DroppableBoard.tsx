import { Grid } from '@material-ui/core';
import React, { FC } from 'react';
import { DragDropContext, DragUpdate, Droppable, DropResult, ResponderProvided } from 'react-beautiful-dnd';
import { Board } from '../types/board/board';
import { MemoData } from '../types/memo/memo';
import { CustomBoard } from './CustomBoard';
import { DraggableList } from './DraggableList';
import { v4 as uuidv4 } from 'uuid';
interface DroppableBoardProps {
  board: Board;
}

export const DroppableBoard: FC<DroppableBoardProps> = (props) => {
  const [board, setBoard] = React.useState<Board>(props.board);

  const onDragUpdate = (initial: DragUpdate, provided: ResponderProvided) => {
    if (initial.destination?.droppableId === 'complete') {
      console.log(initial, provided);
    }

    if (initial.destination?.droppableId === 'progress') {
      console.log(initial, provided);
    }

    if (initial.destination?.droppableId === 'todo') {
      console.log(initial);
    }
  };

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

  const onAddMemo = React.useCallback(
    (title: string, memo: MemoData) => {
      const memoData = { ...memo, id: uuidv4() };
      console.log(board[title.toLowerCase()].data);
      const data = board[title.toLowerCase()].data.concat(memoData);
      setBoard({
        ...board,
        [title.toLowerCase()]: {
          ...board[title.toLowerCase()],
          data: data,
        },
      });
    },
    [board]
  );

  return (
    <DragDropContext onDragEnd={onDragEnd} onDragUpdate={onDragUpdate}>
      {Object.entries(board).map(([title, listData]) => {
        return (
          <Droppable key={title} droppableId={title}>
            {(provided, snapshot) => {
              return (
                <Grid item container xs={4} justify="center">
                  <CustomBoard
                    title={listData.name}
                    boardStyle={listData.boardStyle}
                    cardStyle={listData.cardStyle}
                    onAddMemo={(title, memo) => {
                      onAddMemo(title, memo);
                    }}
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
