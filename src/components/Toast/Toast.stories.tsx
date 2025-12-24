import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../Button'
import { Toasts } from './Toasts'
import { useToasts } from './ToastsContext'

const meta: Meta = {
  title: 'Components/Toast',
  tags: ['autodocs'],
  decorators: [(Story) => <Toasts><Story /></Toasts>],
}

export default meta
type Story = StoryObj

const ToastTrigger = ({ title, variant, children }: any) => {
  const { addToast } = useToasts()
  return (
    <Button onClick={() => addToast({ title, variant, children })}>
      Show Toast
    </Button>
  )
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
