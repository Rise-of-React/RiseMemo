import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CustomCardProps, CustomCard } from '../components/CustomCard';
import { Paper } from '@material-ui/core';

export default {
  title: 'Card/DefaultCard',
  component: CustomCard,
  decorators: [
    (Story) => (
      <Paper style={{ width: 396, height: 112 }}>
        <Story />
      </Paper>
    ),
  ],
} as Meta;

const Template: Story<CustomCardProps> = (args) => <CustomCard {...args} />;

export const Default = Template.bind({});

// Default.args = {
//   title: 'Study React',
//   subTitle: 'study virtual DOM',
//   style: {
//     width: '392',
//     height: '112',
//     backgroundColor: '#CE97E8',
//   },
// };
