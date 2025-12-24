import type { Meta, StoryObj } from '@storybook/react'
import { Link } from './Link'

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'danger'],
      description: 'Visual style variant of the link',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the link is disabled',
    },
    fill: {
      control: 'boolean',
      description: 'Wether the link looks like a button',
    },
    href: {
      control: 'text',
      description: 'URL the link points to',
    },
  },
}

export default meta
type Story = StoryObj<typeof Link>

export const Default: Story = {
  args: {
    children: 'Default Link',
    href: '#',
  },
}

export const DefaultDisabled: Story = {
  args: {
    children: 'Basic Link',
    href: '#',
    disabled: true,
  },
}

export const DefaultFill: Story = {
  args: {
    children: 'Default Link',
    href: '#',
    fill: true,
  },
}

export const DefaultFillDisabled: Story = {
  args: {
    children: 'Default Link',
    href: '#',
    fill: true,
    disabled: true,
  },
}

export const primaryy: Story = {
  args: {
    children: 'primaryy Link',
    href: '#',
    variant: 'primaryy',
  },
}

export const primaryyDisabled: Story = {
  args: {
    children: 'primaryy Link',
    href: '#',
    variant: 'primaryy',
    disabled: true,
  },
}

export const primaryyFill: Story = {
  args: {
    children: 'primaryy Link',
    href: '#',
    fill: true,
    variant: 'primaryy',
  },
}

export const primaryyFillDisabled: Story = {
  args: {
    children: 'primaryy Link',
    href: '#',
    fill: true,
    disabled: true,
    variant: 'primaryy',
  },
}

export const Danger: Story = {
  args: {
    children: 'Danger Link',
    href: '#',
    variant: 'danger',
  },
}

export const DangerDisabled: Story = {
  args: {
    children: 'Disabled Link',
    href: '#',
    variant: 'danger',
    disabled: true,
  },
}

export const DangerFill: Story = {
  args: {
    children: 'Danger Link',
    href: '#',
    fill: true,
    variant: 'danger',
  },
}

export const DangerFillDisabled: Story = {
  args: {
    children: 'Danger Link',
    href: '#',
    fill: true,
    disabled: true,
    variant: 'danger',
  },
}
