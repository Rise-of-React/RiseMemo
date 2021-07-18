import React from 'react';
import { Story, Meta } from '@storybook/react';
import { LoginBox } from '../../components/Organisms/LoginBox';
export default {
  title: 'Organisms/LoginBox',
  component: LoginBox,
  decorators: [(Story) => <Story />],
} as Meta;

const Template: Story = (args) => <LoginBox {...args} />;

export const Default = Template.bind({});

Default.args = {
  open: true,
  onClose: () => {},
};
