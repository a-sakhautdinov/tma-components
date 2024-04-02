import type { Meta, StoryObj } from '@storybook/react';
import Island from './Island';

const meta: Meta<typeof Island> = {
  title: 'Components/Island',
  component: Island,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Island>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    withLabels: true,
    routes: [
      { key: 'menu1', label: 'Menu 1' },
      { key: 'menu2', label: 'Menu 2' },
      { key: 'menu3', label: 'Menu 3' },
    ],
  },
};
