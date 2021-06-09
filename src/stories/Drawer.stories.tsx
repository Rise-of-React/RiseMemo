import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CustomDrawer, CustomDrawerProps } from '../components/Drawer';

export default {
  title: 'Drawer/Drawer',
  component: CustomDrawer,
  decorators: [
    (Story) => (
        <Story />
    ),
  ],
} as Meta;

const Template: Story<CustomDrawerProps> = (args) => <CustomDrawer {...args} />;

export const Default = Template.bind({});

Default.args = {
  isOpen: true,
};
