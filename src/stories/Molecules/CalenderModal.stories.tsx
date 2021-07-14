import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CalenderDateList } from '../../components/Molecules/CalenderDateList';
import { CalenderModal } from '../../components/Molecules/CalenderModal';

export default {
  title: 'Molecules/CalenderModal',
  component: CalenderDateList,
  decorators: [(Story) => <Story />],
} as Meta;

const Template: Story = () => <CalenderModal />;

export const Default = Template.bind({});

Default.args = {
  open: true,
};
