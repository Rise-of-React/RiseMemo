import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Calander } from '../../components/Organisms/Calander';

export default {
  title: 'Organisms/Calander',
  component: Calander,
  decorators: [(Story) => <Story />],
} as Meta;

const Template: Story = () => <Calander />;

export const Default = Template.bind({});
