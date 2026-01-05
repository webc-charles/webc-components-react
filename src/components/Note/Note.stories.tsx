import type { Meta, StoryObj } from '@storybook/react'
import { ColorVariant } from '../../types'
import { Note, NoteHeader } from './Note'

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
    contrast: {
      control: 'boolean',
      description: 'Enable contrast mode for dark backgrounds',
      table: {
        defaultValue: { summary: 'false' },
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
    contrast: false,
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
      <NoteHeader>Warning</NoteHeader>
      <p>This action cannot be undone. Please proceed with caution.</p>
    </Note>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {variants.map((v) => (
        <Note variant={v} key={v}>
          <NoteHeader>{v}</NoteHeader>
          <p>This is a {v} note with a header.</p>
        </Note>
      ))}
    </div>
  ),
}

export const Contrast: Story = {
  render: () => (
    <div style={{ background: '#1a1a1a', padding: '2rem', borderRadius: '0.5rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {variants.map((v) => (
          <Note variant={v} contrast key={v}>
            <NoteHeader>{v}</NoteHeader>
            <p>This is a {v} note in contrast mode for dark backgrounds.</p>
          </Note>
        ))}
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use the `contrast` prop to adapt notes for dark backgrounds.',
      },
    },
  },
}
