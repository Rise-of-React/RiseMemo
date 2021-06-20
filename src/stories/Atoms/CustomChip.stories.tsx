import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CustomChip, CustomChipProps } from '../../components/Atoms/CustomChip';
import HomeIcon from '@material-ui/icons/Home';

export default {
  title: 'Atoms/CustomChip',
  component: CustomChip,
  decorators: [(Story) => <Story />],
} as Meta;

const Template: Story<CustomChipProps> = (args) => <CustomChip {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: 'Custom',
  icon: <HomeIcon />,
  onClick: () => {},
};
