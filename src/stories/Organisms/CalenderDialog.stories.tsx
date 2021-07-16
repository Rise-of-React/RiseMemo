import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CalenderDeleteDialog, CalenderDeleteDialogProps } from '../../components/Organisms/CalenderDeleteDialog';

export default {
  title: 'Organisms/CalenderDeleteDialog',
  component: CalenderDeleteDialog,
  decorators: [(Story) => <Story />],
} as Meta;

const Template: Story<CalenderDeleteDialogProps> = (args) => <CalenderDeleteDialog {...args} />;

export const Default = Template.bind({});

Default.args = {
  open: true,
  onClose: () => {},
};
