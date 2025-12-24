import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../Button'
import { Modals } from './Modals'
import { useModals } from './ModalsContext'

const meta: Meta = {
  title: 'Components/Modal',
  tags: ['autodocs'],
  decorators: [(Story) => <Modals><Story /></Modals>],
}

export default meta
type Story = StoryObj

const ModalTrigger = ({ title, size, children }: any) => {
  const { addModal } = useModals()
  return (
    <Button onClick={() => addModal({ title, size, children })}>
      Open Modal
    </Button>
  )
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
