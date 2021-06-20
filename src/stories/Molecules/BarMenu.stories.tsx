import React from 'react';
import { Story, Meta } from '@storybook/react';
import { BarMenu, BarMenuProps } from '../../components/Molecules/BarMenu';
import HomeIcon from '@material-ui/icons/Home';
import ViewListIcon from '@material-ui/icons/ViewList';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { CustomChip } from '../../components/Atoms/CustomChip';

export default {
  title: 'Molecules/BarMenu',
  component: BarMenu,
  decorators: [(Story) => <Story />],
} as Meta;

const Template: Story<BarMenuProps> = (args) => <BarMenu {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: (
    <React.Fragment>
      <CustomChip label={'Home'} icon={<HomeIcon />} onClick={() => {}} />
      <CustomChip label={'List'} icon={<ViewListIcon />} onClick={() => {}} />
      <CustomChip label={'Board'} icon={<DashboardIcon />} onClick={() => {}} />
    </React.Fragment>
  ),
};
