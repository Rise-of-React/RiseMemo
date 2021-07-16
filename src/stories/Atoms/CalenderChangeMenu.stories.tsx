import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CalenderChangeMenu } from '../../components/Atoms/CalenderChangeMenu';

export default {
  title: 'Atoms/CalenderChangeMenu',
  component: CalenderChangeMenu,
  decorators: [(Story) => <Story />],
} as Meta;

const Template: Story = (args) => <CalenderChangeMenu {...args} />;

export const Default = Template.bind({});
