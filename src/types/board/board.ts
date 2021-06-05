import { CardStyleProps } from '../card/card';
import { MemoData } from '../memo/memo';

export type BoardObject = {
  id: string;
  name: string;
  data: MemoData[];
  cardStyle: CardStyleProps;
  boardStyle: BoardStyleProps;
};

export type Board = {
  [todo: string]: BoardObject;
};

export type BoardStyleProps = {
  backgroundColor?: string;
  width?: string;
  height?: string;
};
