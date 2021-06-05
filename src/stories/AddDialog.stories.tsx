import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CustomCardProps, CustomCard } from '../components/CustomCard';
import { Paper } from '@material-ui/core';
import { AddDialog, AddDialogProps } from '../components/AddDialog';

export default {
  title: 'Dialog/AddDialog',
  component: AddDialog,
  decorators: [(Story) => <Story />],
} as Meta;

const Template: Story<AddDialogProps> = (args) => <AddDialog {...args} />;

export const Default = Template.bind({});

Default.args = {
  open: true,
  onClose: () => {},
};
