import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { Button } from '../Button'
import { Modals } from './Modals'
import { useModals } from './ModalsContext'

const meta: Meta = {
  title: 'Components/Modal',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Modals>
        <Story />
      </Modals>
    ),
  ],
}

export default meta
type Story = StoryObj

// Helper component using the Modals context
const ModalTrigger = ({
  title,
  size,
  closeOnBackdrop,
  duration,
  children,
}: any) => {
  const { addModal } = useModals()

  return (
    <Button
      action={() =>
        addModal({
          title,
          size,
          closeOnBackdrop,
          duration,
          children,
        })
      }
    >
      Open {title}
    </Button>
  )
}

export const Small: Story = {
  render: () => (
    <ModalTrigger title="Small Modal" size="sm">
      <p>This is a small modal.</p>
    </ModalTrigger>
  ),
}

export const Medium: Story = {
  render: () => (
    <ModalTrigger title="Medium Modal" size="md">
      <p>This is a medium modal.</p>
    </ModalTrigger>
  ),
}

export const Large: Story = {
  render: () => (
    <ModalTrigger title="Large Modal" size="lg">
      <p>This is a large modal with more content space.</p>
    </ModalTrigger>
  ),
}

export const ExtraLarge: Story = {
  render: () => (
    <ModalTrigger title="Extra Large Modal" size="xl">
      <p>This is an extra large modal.</p>
    </ModalTrigger>
  ),
}

export const FullScreen: Story = {
  render: () => (
    <ModalTrigger title="Full Screen Modal" size="full">
      <p>This modal takes up almost the entire screen.</p>
    </ModalTrigger>
  ),
}

export const CloseOnBackdrop: Story = {
  render: () => (
    <ModalTrigger title="Click Backdrop to Close" size="md" closeOnBackdrop>
      <p>Click outside this modal to close it.</p>
    </ModalTrigger>
  ),
}

export const AutoClose: Story = {
  render: () => (
    <ModalTrigger title="Auto Close Modal" size="sm" duration={3000}>
      <p>This modal will automatically close after 3 seconds.</p>
      <Button action={() => {}}>test</Button>
    </ModalTrigger>
  ),
}

export const WithButton: Story = {
  render: () => (
    <ModalTrigger title="Auto Close Modal" size="sm">
      <p>This modal has a button</p>

      <Button variant="accent" action={() => {}}>
        test
      </Button>
    </ModalTrigger>
  ),
}

export const Largetext: Story = {
  render: () => (
    <ModalTrigger title="Long text Modal" size="md">
      {Array.from({ length: 200 }, () =>
        Math.random().toString(36).substring(2, 10)
      ).join(' ')}
    </ModalTrigger>
  ),
}

export const MultipleModals: Story = {
  render: () => (
    <>
      <ModalTrigger title="First Modal" size="sm">
        <p>This is the first modal.</p>
        <ModalTrigger title="Second Modal" size="md">
          <p>This is the second modal.</p>
          <ModalTrigger title="Third Modal" size="lg">
            <p>This is the third modal.</p>
          </ModalTrigger>
        </ModalTrigger>
      </ModalTrigger>
    </>
  ),
}
