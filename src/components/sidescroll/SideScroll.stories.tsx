import type { Meta, StoryObj } from '@storybook/react';
import SideScroll from './SideScroll';
import Card from '../card/Card';

const meta: Meta<typeof SideScroll> = {
  title: 'Components/SideScroll',
  component: SideScroll,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SideScroll>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'SideScroll Block',
    action: { variant: 'plain', label: 'Action' },
    maxWidth: 390,
    children: [
      <Card label="SideScroll Element 1" />,
      <Card label="SideScroll Element 2" />,
      <Card label="SideScroll Element 3" />,
      <Card label="SideScroll Element 4" description="Test description" />,
    ],
  },
};
