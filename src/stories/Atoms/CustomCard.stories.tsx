import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Widget, WidgetProps } from '../../components/Molecules/Widget';
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
  title: 'Molecules/Widget',
  component: Widget,
  decorators: [(Story) => <Story />],
} as Meta;

const Template: Story<WidgetProps> = (args) => <Widget {...args} />;

export const Default = Template.bind({});
