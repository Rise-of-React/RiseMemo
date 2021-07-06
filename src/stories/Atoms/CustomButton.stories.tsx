import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CustomButton, CustomButtonProps } from '../../components/Atoms/CustomButton';

export default {
  title: 'Atoms/CustomButton',
  component: CustomButton,
  decorators: [(Story) => <Story />],
} as Meta;

const Template: Story<CustomButtonProps> = (args) => <CustomButton {...args} />;

export const Default = Template.bind({});
