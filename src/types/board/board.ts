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

export const tempData = {
  todo: {
    id: '1',
    name: 'Todo',
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
    name: 'Progress',
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
