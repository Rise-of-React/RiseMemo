import React from 'react';
import { Story, Meta } from '@storybook/react';
import { PopMenu, PopMenuProps } from '../../components/Atoms/PopMenu';

export default {
  title: 'Atoms/PopMenu',
  component: PopMenu,
  decorators: [(Story) => <Story />],
} as Meta;

const Template: Story<PopMenuProps> = (args) => <PopMenu {...args} />;

export const Default = Template.bind({});
