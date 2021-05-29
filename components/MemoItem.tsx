import { Grid, ListItem } from '@material-ui/core';
import React from 'react';

interface MemoItemProps {
  memoData: MemoData;
}

export type MemoData = {
  top: number;
  left: number;
  content: string;
};

export const MemoItem = (props: MemoItemProps) => {
  const { memoData } = props;
  return <ListItem>{memoData.content}</ListItem>;
};
