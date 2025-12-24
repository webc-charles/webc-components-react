import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'danger'],
      description: 'Visual style variant of the button',
    },
    raw: {
      control: 'boolean',
      description: 'Whether the button looks like a link',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'HTML button type',
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler function',
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Default Button',
  },
}

export const DefaultDisabled: Story = {
  args: {
    children: 'Default Button',
    disabled: true,
  },
}

export const DefaultRaw: Story = {
  args: {
    children: 'Default Button',
    raw: true,
  },
}

export const DefaultRawDisabled: Story = {
  args: {
    children: 'Default Button',
    raw: true,
    disabled: true,
  },
}

export const primaryy: Story = {
  args: {
    children: 'primaryy Button',
    variant: 'primaryy',
  },
}

export const primaryyDisabled: Story = {
  args: {
    children: 'primaryy Button',
    variant: 'primaryy',
    disabled: true,
  },
}

export const primaryyRaw: Story = {
  args: {
    children: 'primaryy Button',
    variant: 'primaryy',
    raw: true,
  },
}

export const primaryyRawDisabled: Story = {
  args: {
    children: 'primaryy Button',
    variant: 'primaryy',
    disabled: true,
    raw: true,
  },
}

export const Danger: Story = {
  args: {
    children: 'Danger Button',
    variant: 'danger',
  },
}

export const DangerDisabled: Story = {
  args: {
    children: 'Danger Button',
    variant: 'danger',
    disabled: true,
  },
}

export const DangerRaw: Story = {
  args: {
    children: 'Danger Button',
    variant: 'danger',
    raw: true,
  },
}

export const DangerRawDisabled: Story = {
  args: {
    children: 'Danger Button',
    variant: 'danger',
    disabled: true,
    raw: true,
  },
}
