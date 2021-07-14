import React from 'react';
import { Story, Meta } from '@storybook/react';
import { HomeDrawer, HomeDrawerProps } from '../../components/Organisms/HomeDrawer';

export default {
  title: 'Organisms/Drawer',
  component: HomeDrawer,
  decorators: [(Story) => <Story />],
} as Meta;

const Template: Story<HomeDrawerProps> = (args) => <HomeDrawer {...args} />;

export const Default = Template.bind({});

Default.args = {
  isOpen: true,
};
