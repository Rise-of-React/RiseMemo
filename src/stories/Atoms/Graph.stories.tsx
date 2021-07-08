import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Graph, GraphData, GraphProps } from '../../components/Atoms/Graph';

export default {
  title: 'Atoms/Graph',
  component: Graph,
  decorators: [(Story) => <Story />],
} as Meta;

const Template: Story<GraphProps> = (args) => <Graph {...args} />;

export const Default = Template.bind({});
