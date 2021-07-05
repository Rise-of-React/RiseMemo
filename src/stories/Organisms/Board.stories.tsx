import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Paper } from '@material-ui/core';
import { CustomBoardProps, CustomBoard } from '../../components/CustomBoard';
import { CustomCard } from '../../components/CustomCard';

export default {
  title: 'Organisms/Board',
  component: CustomBoard,
  decorators: [
    (Story) => (
      <Paper style={{ width: 396, height: 112 }}>
        <Story />
      </Paper>
    ),
  ],
} as Meta;

const Template: Story<CustomBoardProps> = (args) => <CustomBoard {...args} />;

export const Default = Template.bind({});

const cardProps = {
  title: 'Study React',
  subTitle: 'study virtual DOM',
  style: {
    width: '392',
    height: '112',
    backgroundColor: '#CE97E8',
  },
};

Default.args = {
  title: 'Todo',
  boardStyle: {
    width: '452',
    height: '865',
    backgroundColor: '#E1C3F0',
  },
  cardStyle: { width: '392', height: '112', backgroundColor: '#CE97E8' },
  children: <CustomCard title={cardProps.title} subTitle={cardProps.subTitle} style={cardProps.style} />,
};
