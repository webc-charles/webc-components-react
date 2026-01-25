import type { Meta, StoryObj } from '@storybook/react'
import { Button } from 'form/Button'
import { Modals } from './Modals'
import { useModals } from './ModalsContext'

const sizes = ['sm', 'md', 'lg'] as const

const meta: Meta = {
  title: 'Modules/Modal',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Modals>
        <Story />
      </Modals>
    ),
  ],
  argTypes: {
    title: {
      control: 'text',
      description: 'Modal title',
    },
    size: {
      control: 'select',
      options: sizes,
      description: 'Modal size',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    closeLabel: {
      control: 'text',
      description: 'Close button aria-label',
    },
  },
  args: {
    title: 'Modal Title',
    size: 'md',
  },
}

export default meta
type Story = StoryObj

const ModalTrigger = ({
  title = 'Modal Title',
  size = 'md',
  children = <p>Modal content goes here.</p>,
}: {
  title?: string
  size?: 'sm' | 'md' | 'lg'
  children?: React.ReactNode
}) => {
  const { addModal } = useModals()
  return (
    <Button
      variant="primary"
      appearance="button"
      onClick={() => addModal({ title, size, children })}
    >
      Open Modal
    </Button>
  )
}

export const Playground: Story = {
  render: (args: { title?: string; size?: 'sm' | 'md' | 'lg' }) => (
    <ModalTrigger title={args.title} size={args.size}>
      <p>Click the button to open the modal.</p>
    </ModalTrigger>
  ),
  args: {
    title: 'Modal Title',
    size: 'md',
  },
}

export const Small: Story = {
  render: () => (
    <ModalTrigger title="Small Modal" size="sm">
      <p>Small modal content.</p>
    </ModalTrigger>
  ),
}

export const Medium: Story = {
  render: () => (
    <ModalTrigger title="Medium Modal" size="md">
      <p>Medium modal content.</p>
    </ModalTrigger>
  ),
}

export const Large: Story = {
  render: () => (
    <ModalTrigger title="Large Modal" size="lg">
      <p>Large modal content.</p>
    </ModalTrigger>
  ),
}
