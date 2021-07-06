import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Calender } from '../../components/Organisms/Calender';

export default {
  title: 'Organisms/Calender',
  component: Calender,
  decorators: [(Story) => <Story />],
} as Meta;

const Template: Story = () => <Calender />;

export const Default = Template.bind({});
