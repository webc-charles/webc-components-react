import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../Form/Button'
import { Toasts } from './Toasts'
import { useToasts } from './ToastsContext'

const variants = [
  'default',
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
] as const

const meta: Meta = {
  title: 'Components/Toast',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Toasts>
        <Story />
      </Toasts>
    ),
  ],
  argTypes: {
    title: {
      control: 'text',
      description: 'Toast title',
    },
    variant: {
      control: 'select',
      options: variants,
      description: 'Toast color variant',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
  },
  args: {
    title: 'Toast Title',
    variant: 'default',
  },
}

export default meta
type Story = StoryObj

const ToastTrigger = ({
  title = 'Toast Title',
  variant = 'default',
  children = <p>Toast message.</p>,
}: {
  title?: string
  variant?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
  children?: React.ReactNode
}) => {
  const { addToast } = useToasts()
  return (
    <Button
      variant="primary"
      appearance="button"
      onClick={() => addToast({ title, variant, children })}
    >
      Show Toast
    </Button>
  )
}

export const Playground: Story = {
  render: (args) => (
    <ToastTrigger title={args.title} variant={args.variant}>
      <p>Toast notification content.</p>
    </ToastTrigger>
  ),
  args: {
    title: 'Notification',
    variant: 'info',
  },
}

export const Success: Story = {
  render: () => (
    <ToastTrigger title="Success" variant="success">
      <p>Changes saved successfully!</p>
    </ToastTrigger>
  ),
}

export const Danger: Story = {
  render: () => (
    <ToastTrigger title="Error" variant="danger">
      <p>Something went wrong.</p>
    </ToastTrigger>
  ),
}

export const Warning: Story = {
  render: () => (
    <ToastTrigger title="Warning" variant="warning">
      <p>Please review your input.</p>
    </ToastTrigger>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      {variants.map((variant) => (
        <ToastTrigger key={variant} title={variant} variant={variant}>
          <p>This is a {variant} toast.</p>
        </ToastTrigger>
      ))}
    </div>
  ),
}
