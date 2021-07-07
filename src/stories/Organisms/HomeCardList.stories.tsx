import React from 'react';
import { Story, Meta } from '@storybook/react';
import { HomeCardList, HomeCardListProps } from '../../components/Organisms/HomeCardList';

export default {
  title: 'Organisms/HomeCardList',
  component: HomeCardList,
  decorators: [(Story) => <Story />],
} as Meta;

const Template: Story<HomeCardListProps> = (args) => <HomeCardList {...args} />;

export const Default = Template.bind({});
