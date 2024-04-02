import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Power',
    description:
      'That alone is in our power, which is our own work; and in this class are our opinions, impulses, desires, and aversions. On the contrary, what is not in our power, are our bodies, possessions, glory, and power. Any delusion on this point leads to the greatest errors, misfortunes, and troubles, and to the slavery of the soul.',
    action: { label: 'Agree' },
    tag: { type: 'important', label: 'Important', size: 'small' },
    image: 'https://placehold.co/600x400',
  },
};
