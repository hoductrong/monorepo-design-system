import React from 'react';
import { Button } from '@myorg/core/src';
import type { Story } from '@storybook/react/types-6-0';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      page: null,
      previewSource: 'storybook',
    },
  },
};

const Template: Story = args => <Button {...args}>Hello</Button>;

export const Default = Template.bind({});
