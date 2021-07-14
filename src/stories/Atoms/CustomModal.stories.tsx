import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CustomModal, CustomModalProps } from '../../components/Atoms/CustomModal';

export default {
  title: 'Atoms/CustomModal',
  component: CustomModal,
  decorators: [(Story) => <Story />],
} as Meta;

const Template: Story<CustomModalProps> = (args) => <CustomModal {...args} />;

export const Default = Template.bind({});
