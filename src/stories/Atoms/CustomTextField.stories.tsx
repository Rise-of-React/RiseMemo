import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CustomTextField, CustomTextFieldProps } from '../../components/Atoms/CustomTextField';

export default {
  parameters: {
    backgrounds: {
      default: 'purple',
      values: [
        {
          name: 'purple',
          value: '#ede7f6',
        },
      ],
    },
  },
  title: 'Atoms/CustomTextField',
  component: CustomTextField,
  decorators: [(Story) => <Story />],
} as Meta;

const Template: Story<CustomTextFieldProps> = (args) => <CustomTextField {...args} />;

export const Default = Template.bind({});
