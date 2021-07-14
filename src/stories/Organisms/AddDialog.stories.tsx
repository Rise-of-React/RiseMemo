import React from 'react';
import { Story, Meta } from '@storybook/react';
import { AddDialog, AddDialogProps } from '../../components/Organisms/AddDialog';

export default {
  title: 'Organisms/AddDialog',
  component: AddDialog,
  decorators: [(Story) => <Story />],
} as Meta;

const Template: Story<AddDialogProps> = (args) => <AddDialog {...args} />;

export const Default = Template.bind({});

Default.args = {
  open: true,
  onClose: () => {},
};
