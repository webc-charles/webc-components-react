import type { Meta, StoryObj } from '@storybook/react'
import { ColorVariant } from '../../types'
import { Button } from '../Form/Button'
import { ToastBody, ToastHeader } from './Toast'
import { Toasts } from './Toasts'
import { useToasts } from './ToastsContext'

const variants: ColorVariant[] = [
  'default',
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
]

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
    contrast: {
      control: 'boolean',
      description: 'Enable contrast mode for dark backgrounds',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
  args: {
    title: 'Toast Title',
    variant: 'default',
    contrast: false,
  },
}

export default meta
type Story = StoryObj

const ToastTrigger = ({
  title = 'Toast Title',
  variant = 'default' as ColorVariant,
  contrast = false,
  body = 'Toast message.',
}: {
  title?: string
  variant?: ColorVariant
  contrast?: boolean
  body?: string
}) => {
  const { addToast } = useToasts()
  return (
    <Button
      variant="primary"
      appearance="button"
      onClick={() =>
        addToast({
          variant,
          contrast,
          children: (
            <>
              <ToastHeader>{title}</ToastHeader>
              <ToastBody>{body}</ToastBody>
            </>
          ),
        })
      }
    >
      Show Toast
    </Button>
  )
}

export const Playground: Story = {
  render: (args) => (
    <ToastTrigger
      title={args.title}
      variant={args.variant}
      contrast={args.contrast}
      body="Toast notification content."
    />
  ),
  args: {
    title: 'Notification',
    variant: 'info',
  },
}

export const Success: Story = {
  render: () => (
    <ToastTrigger
      title="Success"
      variant="success"
      body="Changes saved successfully!"
    />
  ),
}

export const Danger: Story = {
  render: () => (
    <ToastTrigger title="Error" variant="danger" body="Something went wrong." />
  ),
}

export const Warning: Story = {
  render: () => (
    <ToastTrigger
      title="Warning"
      variant="warning"
      body="Please review your input."
    />
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      {variants.map((variant) => (
        <ToastTrigger
          key={variant}
          title={variant}
          variant={variant}
          body={`This is a ${variant} toast.`}
        />
      ))}
    </div>
  ),
}

export const Contrast: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      {variants.map((variant) => (
        <ToastTrigger
          key={variant}
          title={variant}
          variant={variant}
          contrast
          body={`This is a ${variant} toast in contrast mode.`}
        />
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use the `contrast` prop to adapt toasts for dark backgrounds. Works with all variants.',
      },
    },
  },
}
