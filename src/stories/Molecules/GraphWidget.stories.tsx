import React from 'react';
import { Story, Meta } from '@storybook/react';
import { GraphWidget, GraphWidgetProps } from '../../components/Molecules/GraphWidget';
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
  title: 'Molecules/GraphWidget',
  component: GraphWidget,
  decorators: [(Story) => <Story />],
} as Meta;

const Template: Story<GraphWidgetProps> = (args) => <GraphWidget {...args} />;

export const Default = Template.bind({});
