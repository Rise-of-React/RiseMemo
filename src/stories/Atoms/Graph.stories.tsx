import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CanvasGraph, GraphData, CanvasGraphProps } from '../../components/Atoms/CanvasGraph';

export default {
  title: 'Atoms/CanvasGraph',
  component: CanvasGraph,
  decorators: [(Story) => <Story />],
} as Meta;

const Template: Story<CanvasGraphProps> = (args) => <CanvasGraph {...args} />;

export const Default = Template.bind({});
