import type { Meta, StoryObj } from '@storybook/react';
import Tabs from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    options: [
      { key: 'menu1', label: 'Menu 1' },
      { key: 'menu2', label: 'Menu 2', disabled: true },
      {
        key: 'menu3',
        label: 'Menu 3',
        tag: { label: 'New', type: 'important' },
      },
    ],
  },
};
