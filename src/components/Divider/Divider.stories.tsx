import type { Meta, StoryObj } from '@storybook/react'

import { Divider } from './Divider'

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'dashed', 'dotted'],
      description: 'Line style',
    },
    spacing: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl'],
      description: 'Vertical spacing',
    },
  },
}

export default meta
type Story = StoryObj<typeof Divider>

export const Default: Story = {}

export const Solid: Story = {
  args: {
    variant: 'solid',
  },
}

export const Dashed: Story = {
  args: {
    variant: 'dashed',
  },
}

export const Dotted: Story = {
  args: {
    variant: 'dotted',
  },
}

export const SpacingNone: Story = {
  args: {
    spacing: 'none',
  },
  decorators: [
    (Story) => (
      <div>
        <p>Content above</p>
        <Story />
        <p>Content below</p>
      </div>
    ),
  ],
}

export const SpacingSmall: Story = {
  args: {
    spacing: 'sm',
  },
  decorators: [
    (Story) => (
      <div>
        <p>Content above</p>
        <Story />
        <p>Content below</p>
      </div>
    ),
  ],
}

export const SpacingMedium: Story = {
  args: {
    spacing: 'md',
  },
  decorators: [
    (Story) => (
      <div>
        <p>Content above</p>
        <Story />
        <p>Content below</p>
      </div>
    ),
  ],
}

export const SpacingLarge: Story = {
  args: {
    spacing: 'lg',
  },
  decorators: [
    (Story) => (
      <div>
        <p>Content above</p>
        <Story />
        <p>Content below</p>
      </div>
    ),
  ],
}
