import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CalenderAddDrawer } from '../../components/Organisms/CalenderAddDrawer';

export default {
  title: 'Organisms/CalenderAddDrawer',
  component: CalenderAddDrawer,
  decorators: [(Story) => <Story />],
} as Meta;

const Template: Story = (args) => <CalenderAddDrawer {...args} />;

export const Default = Template.bind({});
