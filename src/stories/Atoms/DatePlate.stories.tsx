import React from 'react';
import { Story, Meta } from '@storybook/react';
import { DatePlate, DatePlateProps } from '../../components/Atoms/DatePlate';

export default {
  title: 'Atoms/DatePlate',
  component: DatePlate,
  decorators: [(Story) => <Story />],
} as Meta;

const Template: Story<DatePlateProps> = (args) => <DatePlate {...args} />;

export const Default = Template.bind({});
