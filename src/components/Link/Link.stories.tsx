import type { Meta, StoryObj } from '@storybook/react'
import { Link } from './Link'

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Link>

export const Default: Story = {
  args: { children: 'Default Link', href: '#' },
}

export const Primary: Story = {
  args: { children: 'Primary Link', href: '#', variant: 'primary' },
}

export const Danger: Story = {
  args: { children: 'Danger Link', href: '#', variant: 'danger' },
}

export const Disabled: Story = {
  args: { children: 'Disabled Link', href: '#', disabled: true },
}
