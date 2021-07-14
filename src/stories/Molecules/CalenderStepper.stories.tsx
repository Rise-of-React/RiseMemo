import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CalenderStepper } from '../../components/Molecules/CalenderStepper';

export default {
  parameters: {
    backgrounds: {
      default: 'purple',
      values: [
        {
          name: 'purple',
          value: '#ede7f6',
        },
      ],
    },
  },
  title: 'Molecules/CalenderStepper',
  component: CalenderStepper,
  decorators: [(Story) => <Story />],
} as Meta;

const Template: Story = () => <CalenderStepper />;

export const Default = Template.bind({});
