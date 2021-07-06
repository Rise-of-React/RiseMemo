import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CalenderDateList } from '../../components/Molecules/CalenderDateList';

export default {
  title: 'Molecules/CalenderDateList',
  component: CalenderDateList,
  decorators: [(Story) => <Story />],
} as Meta;

const Template: Story = () => <CalenderDateList />;

export const Default = Template.bind({});
