import type { Meta, StoryObj } from '@storybook/react'
import { Title } from './Title'

const meta: Meta<typeof Title> = {
  title: 'Components/Title',
  component: Title,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Title>

export const H1: Story = {
  args: { level: 'h1', children: 'Heading 1' },
}

export const H2: Story = {
  args: { level: 'h2', children: 'Heading 2' },
}

export const H3: Story = {
  args: { level: 'h3', children: 'Heading 3' },
}

export const H4: Story = {
  args: { level: 'h4', children: 'Heading 4' },
}
