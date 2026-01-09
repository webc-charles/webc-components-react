import type { Meta, StoryObj } from '@storybook/react'
import { Button, Title, Toasts, useToasts } from 'components'

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

function PlaygroundStory() {
  const { addToast } = useToasts()
  return (
    <Button
      variant="primary"
      appearance="button"
      onClick={() =>
        addToast({
          children: (
            <>
              <Title level="h3">Toast title</Title>
              <p>This is a toast notification.</p>
            </>
          ),
        })
      }
    >
      Show Toast
    </Button>
  )
}

function LongContentStory() {
  const { addToast } = useToasts()
  return (
    <Button
      variant="primary"
      appearance="button"
      onClick={() =>
        addToast({
          children: (
            <p>
              This is a longer toast message that contains more detailed
              information about what happened in your application.
            </p>
          ),
        })
      }
    >
      Show Toast
    </Button>
  )
}

export const Playground: Story = {
  render: () => <PlaygroundStory />,
}

export const Default: Story = {
  render: () => <PlaygroundStory />,
}

export const LongContent: Story = {
  render: () => <LongContentStory />,
}
