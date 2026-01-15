import type { Meta, StoryObj } from '@storybook/react'
import { Note, Title } from 'components'
import type { ColorVariant } from '../../types'

const variants: ColorVariant[] = [
  'default',
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
]

const meta: Meta<typeof Note> = {
  title: 'Components/Note',
  component: Note,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: variants,
      description: 'The color variant of the note',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    children: {
      control: 'text',
      description: 'Note content',
    },
  },
  args: {
    children: 'This is a note message.',
    variant: 'default',
  },
}

export default meta
type Story = StoryObj<typeof Note>

export const Playground: Story = {
  args: {
    children: 'This is a note message.',
    variant: 'info',
  },
}

export const WithHeader: Story = {
  render: () => (
    <Note variant="warning">
      <Title level="h4">Warning</Title>
      <p>This action cannot be undone. Please proceed with caution.</p>
    </Note>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {variants.map((v) => (
        <Note variant={v} key={v}>
          <Title level="h4">{v}</Title>
          <p>This is a {v} note with a header.</p>
        </Note>
      ))}
    </div>
  ),
}
