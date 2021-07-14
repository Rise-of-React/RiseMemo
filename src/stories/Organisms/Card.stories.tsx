import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Paper } from '@material-ui/core';
import { CustomCard, CustomCardProps } from '../../components/Molecules/Board/CustomCard';

export default {
  title: 'Organisms/Card',
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
