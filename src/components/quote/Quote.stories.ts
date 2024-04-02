import type { Meta, StoryObj } from '@storybook/react';
import Quote from './Quote';

const meta: Meta<typeof Quote> = {
  title: 'Components/Quote',
  component: Quote,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Quote>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id erat vel sem lacinia tincidunt. Nullam iaculis porta tristique. Mauris quis congue tortor. Aenean libero odio, egestas tempor ante a, lacinia fermentum mi. Sed sit amet condimentum urna. Vivamus eget ante ex. Praesent vel est aliquam nisl commodo iaculis. Mauris sit amet finibus ex. Ut neque tortor, facilisis sed nibh ut, pretium consectetur elit. Aliquam massa erat, bibendum non ultricies eget, tincidunt sit amet ipsum. Nunc ullamcorper tincidunt dolor, non porttitor ipsum sagittis id. In hac habitasse platea dictumst.',
  },
};
