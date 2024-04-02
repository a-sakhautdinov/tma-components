import type { Meta, StoryObj } from '@storybook/react';
import { ExampleScreen } from './Example';

const meta = {
  title: 'Example/Mobile',
  component: ExampleScreen,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ExampleScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    screenSize: [390, 844],
  },
};
