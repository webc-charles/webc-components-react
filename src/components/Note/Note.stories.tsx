import type { Meta, StoryObj } from '@storybook/react'
import { Note } from './Note'

const meta: Meta<typeof Note> = {
  title: 'Components/Note',
  component: Note,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Note>

export const Default: Story = {
  args: { children: 'This is a default note.' },
}

export const Success: Story = {
  args: { children: 'Your changes have been saved.', variant: 'success' },
}

export const Danger: Story = {
  args: { children: 'An error occurred.', variant: 'danger' },
}

export const Warning: Story = {
  args: { children: 'Please review before proceeding.', variant: 'warning' },
}
