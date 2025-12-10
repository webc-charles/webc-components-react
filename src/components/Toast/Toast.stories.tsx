import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { Button } from '../Button'
import { Toasts } from './Toasts'
import { useToasts } from './ToastsContext'

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
}

export default meta
type Story = StoryObj

// Helper component using the Toasts context
const ToastTrigger = ({ title, variant, duration, children }: any) => {
  const { addToast } = useToasts()

  return (
    <Button
      action={() =>
        addToast({
          title,
          variant,
          duration,
          children,
        })
      }
    >
      Show {title || variant || 'Toast'}
    </Button>
  )
}

export const Accent: Story = {
  render: () => (
    <ToastTrigger title="Accent Toast" variant="accent">
      <p>This is an accent toast notification.</p>
    </ToastTrigger>
  ),
}

export const Success: Story = {
  render: () => (
    <ToastTrigger title="Success" variant="success">
      <p>Your changes have been saved successfully!</p>
    </ToastTrigger>
  ),
}

export const Danger: Story = {
  render: () => (
    <ToastTrigger title="Error" variant="danger">
      <p>There was an error processing your request.</p>
    </ToastTrigger>
  ),
}

export const Warning: Story = {
  render: () => (
    <ToastTrigger title="Warning" variant="warning">
      <p>Please review your information before proceeding.</p>
    </ToastTrigger>
  ),
}

export const Info: Story = {
  render: () => (
    <ToastTrigger title="Information" variant="info">
      <p>Here is some helpful information for you.</p>
    </ToastTrigger>
  ),
}

export const WithoutTitle: Story = {
  render: () => (
    <ToastTrigger variant="success">
      <p>This toast has no title.</p>
    </ToastTrigger>
  ),
}

export const LongDuration: Story = {
  render: () => (
    <ToastTrigger title="Long Duration" variant="info" duration={30000}>
      <p>This toast will stay visible for 30 seconds.</p>
    </ToastTrigger>
  ),
}

export const ShortDuration: Story = {
  render: () => (
    <ToastTrigger title="Quick Toast" variant="accent" duration={3000}>
      <p>This toast disappears after 3 seconds.</p>
    </ToastTrigger>
  ),
}

export const MultipleToasts: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <ToastTrigger title="Success" variant="success">
        <p>Operation completed!</p>
      </ToastTrigger>
      <ToastTrigger title="Warning" variant="warning">
        <p>Please check your input.</p>
      </ToastTrigger>
      <ToastTrigger title="Error" variant="danger">
        <p>Something went wrong.</p>
      </ToastTrigger>
      <ToastTrigger title="Info" variant="info">
        <p>New update available.</p>
      </ToastTrigger>
    </div>
  ),
}
