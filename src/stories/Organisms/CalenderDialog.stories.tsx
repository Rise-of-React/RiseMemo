import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CalenderDialog, CalenderDialogProps } from '../../components/Organisms/CalenderDialog';

export default {
  title: 'Organisms/CalenderDialog',
  component: CalenderDialog,
  decorators: [(Story) => <Story />],
} as Meta;

const Template: Story<CalenderDialogProps> = (args) => <CalenderDialog {...args} />;

export const Default = Template.bind({});

Default.args = {
  open: true,
  onClose: () => {},
};
