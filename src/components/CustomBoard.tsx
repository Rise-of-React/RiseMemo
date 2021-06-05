import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  Theme,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { BoardStyleProps } from '../types/board/board';
import { CardStyleProps } from '../types/card/card';
export interface CustomBoardProps {
  style?: BoardStyleProps;
  children?: React.ReactNode;
}

const useStyles = makeStyles<Theme, BoardStyleProps>((theme: Theme) => ({
  board: (props) => ({
    backgroundColor: props.backgroundColor,
    width: Number(props.width),
    height: Number(props.height),
  }),
}));

export const CustomBoard = (props: CustomBoardProps) => {
  const classes = useStyles(props.style ?? {});

  return <Paper className={classes.board}>{props.children}</Paper>;
};

CustomBoard.defaultProps = {
  style: {
    width: '452',
    height: '865',
    backgroundColor: '#E1C3F0',
  },
};
