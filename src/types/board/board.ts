import { MemoData } from '../memo/memo';

export type BoardObject = {
  id: string;
  name: string;
  data: MemoData[];
};

export type Board = {
  [todo: string]: BoardObject;
};
