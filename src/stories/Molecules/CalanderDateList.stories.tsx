import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CalanderDateList } from '../../components/Molecules/CalanderDateList';

export default {
  title: 'Molecules/CalanderDateList',
  component: CalanderDateList,
  decorators: [(Story) => <Story />],
} as Meta;

const Template: Story = () => <CalanderDateList />;

export const Default = Template.bind({});
